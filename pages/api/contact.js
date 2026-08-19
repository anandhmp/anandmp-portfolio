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

  const user = getEnvVar('MAIL_USER') || 'anandmpmtd@gmail.com';
  const rawPass = getEnvVar('MAIL_PASS') || 'zquo wbjg ukwp xuon';
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
        <div style="font-family: 'Roboto', Arial, sans-serif; padding: 32px 16px; background-color: #ffffff; color: #000000; font-weight: 500;">
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
          <div style="max-width: 600px; margin: 0 auto; background-color: #754abc; padding: 36px; border: none; border-radius: 0px; color: #ffffff; font-weight: 500;">
            <h2 style="color: #ffffff; margin-top: 0; margin-bottom: 24px; font-size: 22px; font-weight: 600; letter-spacing: 0.5px;">New Lead Received (Anand Portfolio)</h2>
            <div style="margin-bottom: 24px; padding: 18px; background-color: rgba(255, 255, 255, 0.1); border: none; border-radius: 0px; color: #ffffff; font-weight: 500;">
              <p style="margin: 0 0 10px 0; font-size: 15px; color: #ffffff; font-weight: 500;"><strong style="color: #ffffff; font-weight: 700;">Sender Name:</strong> ${name}</p>
              <p style="margin: 0; font-size: 15px; color: #ffffff; font-weight: 500;"><strong style="color: #ffffff; font-weight: 700;">Sender Email:</strong> <a href="mailto:${email}" style="color: #ffffff; text-decoration: underline; font-weight: 500;">${email}</a></p>
            </div>
            <div style="margin-top: 24px;">
              <h3 style="font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; color: #ffffff; margin-bottom: 12px; font-weight: 700;">Message Content</h3>
              <div style="background-color: rgba(255, 255, 255, 0.12); padding: 20px; border: none; border-radius: 0px; font-size: 15px; line-height: 1.6; color: #ffffff; font-weight: 500; white-space: pre-wrap;">${message}</div>
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
