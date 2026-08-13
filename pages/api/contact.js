import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

function getEnvVar(key) {
  if (process.env[key]) return process.env[key];
  try {
    const envPath = path.join(process.cwd(), '.env.local');
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, 'utf8');
      const lines = content.split('\n');
      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith('#') && trimmed.includes('=')) {
          const [k, ...v] = trimmed.split('=');
          if (k.trim() === key) {
            return v.join('=').trim();
          }
        }
      }
    }
  } catch (e) {
    console.error('Error reading .env.local fallback:', e);
  }
  return '';
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch (e) {
      body = {};
    }
  }

  const { name, email, message } = body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  const user = getEnvVar('MAIL_USER') || 'getwebstrike@gmail.com';
  const rawPass = getEnvVar('MAIL_PASS') || 'grnq iekd aufo amsi';
  const pass = rawPass.replace(/\s+/g, '');
  const to = getEnvVar('MAIL_TO') || user;

  if (!user || !pass) {
    return res.status(500).json({ error: 'Mail server configuration is missing.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user,
        pass,
      },
    });

    const mailOptions = {
      from: `"${name}" <${user}>`,
      replyTo: email,
      to: to,
      subject: `New Lead from Portfolio: ${name}`,
      text: `New Lead / Contact Form Submission\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 24px; background-color: #f4f6f8; color: #1e293b;">
          <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; padding: 32px; border: 1px solid #e2e8f0;">
            <h2 style="color: #2563eb; margin-top: 0; font-size: 22px; font-weight: 700;">🚀 New Lead Received</h2>
            <div style="margin-bottom: 20px; padding: 16px; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid #2563eb;">
              <p style="margin: 0 0 8px 0; font-size: 14px; color: #64748b;"><strong>Sender Name:</strong> <span style="color: #0f172a; font-size: 16px; font-weight: 600;">${name}</span></p>
              <p style="margin: 0; font-size: 14px; color: #64748b;"><strong>Sender Email:</strong> <a href="mailto:${email}" style="color: #2563eb; text-decoration: none; font-weight: 600;">${email}</a></p>
            </div>
            <div style="margin-top: 24px;">
              <h3 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; margin-bottom: 10px;">Message Content</h3>
              <div style="background-color: #f1f5f9; padding: 18px; border-radius: 8px; font-size: 15px; line-height: 1.6; color: #334155; white-space: pre-wrap;">${message}</div>
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Lead sent successfully!' });
  } catch (err) {
    console.error('Nodemailer error in API route:', err);
    return res.status(500).json({ error: err.message || 'Failed to send email' });
  }
}
