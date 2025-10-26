const nodemailer = require('nodemailer');
const ContactMessage = require('../models/ContactMessage');

function required(field, value) {
  if (!value || String(value).trim() === '') {
    throw new Error(`${field} is required`);
  }
}

async function sendEmail({ name, email, subject, service, message }) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_TO } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !MAIL_TO) {
    console.warn('Email not sent: SMTP environment variables missing.');
    return { skipped: true };
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 587, // true for 465, false for others
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const info = await transporter.sendMail({
    from: `Portfolio Contact <${SMTP_USER}>`,
    to: MAIL_TO,
    subject: `[New Inquiry] ${subject} - ${service}`,
    text: `Name: ${name}\nEmail: ${email}\nService: ${service}\n\n${message}`,
    html: `
      <div style="font-family: Arial, sans-serif;">
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
      </div>
    `,
  });

  return { messageId: info.messageId };
}

exports.create = async (req, res) => {
  try {
    const { name, email, subject, service, message } = req.body || {};

    required('name', name);
    required('email', email);
    required('subject', subject);
    required('service', service);
    required('message', message);

    // Save to DB
    const doc = await ContactMessage.create({ name, email, subject, service, message });

    // Send email
    try {
      const mail = await sendEmail({ name, email, subject, service, message });
      res.status(201).json({ ok: true, id: doc._id, mail });
    } catch (mailErr) {
      console.error('Failed to send email:', mailErr);
      res.status(201).json({ ok: true, id: doc._id, mail: { error: 'send-failed' } });
    }
  } catch (err) {
    res.status(400).json({ ok: false, error: err.message || 'Invalid payload' });
  }
};
