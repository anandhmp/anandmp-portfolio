export default async function handler(req, res) {
    const { username = 'anandhmp' } = req.query;

    try {
        const response = await fetch(`https://github.com/users/${username}/contributions`, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept': 'text/html',
            },
        });

        if (!response.ok) {
            return res.status(500).json({ error: 'Failed to fetch GitHub contributions' });
        }

        const html = await response.text();

        // Extract total contribution count
        const totalMatch = html.match(/([\d,]+)\s+contributions/i);
        const totalContributions = totalMatch ? totalMatch[1] : '3,592';

        const days = [];

        // 1. Try standard GitHub <td class="ContributionCalendar-day" ...> parsing
        const tdRegex = /<td[^>]*class="[^"]*ContributionCalendar-day[^"]*"[^>]*>/gi;
        let match;

        while ((match = tdRegex.exec(html)) !== null) {
            const tagStr = match[0];
            const dateMatch = tagStr.match(/data-date="([^"]+)"/i);
            const levelMatch = tagStr.match(/data-level="(\d+)"/i);

            if (dateMatch && levelMatch) {
                days.push({
                    date: dateMatch[1],
                    level: parseInt(levelMatch[1], 10),
                });
            }
        }

        // 2. If td parsing didn't find items, try title attribute parsing: title="X contributions on YYYY-MM-DD"
        if (days.length === 0) {
            const titleRegex = /title="(\d+)\s+contributions?\s+on\s+([\d-]+)"/gi;
            while ((match = titleRegex.exec(html)) !== null) {
                const count = parseInt(match[1], 10);
                let level = 0;
                if (count > 0 && count <= 3) level = 1;
                else if (count > 3 && count <= 8) level = 2;
                else if (count > 8 && count <= 15) level = 3;
                else if (count > 15) level = 4;

                days.push({
                    date: match[2],
                    level,
                    count,
                });
            }
        }

        // Group into weeks (7 days per week)
        const weeks = [];
        for (let i = 0; i < days.length; i += 7) {
            weeks.push(days.slice(i, i + 7));
        }

        res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
        res.status(200).json({
            username,
            totalContributions,
            weeks,
        });
    } catch (err) {
        console.error('GitHub API error:', err);
        res.status(500).json({ error: err.message });
    }
}
