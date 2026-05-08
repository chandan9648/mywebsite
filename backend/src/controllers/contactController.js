const nodemailer = require('nodemailer');
require('dotenv').config();
const ContactMessage = require('../models/ContactMessage');

// Validation helper
function required(field, value) {
  if (!value || String(value).trim() === '') {
    throw new Error(`${field} is required`);
  }
}

// Send email using Gmail SMTP
async function sendEmail({ name, email, subject, service, message }) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_TO } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !MAIL_TO) {
    console.warn('Missing email configuration in environment variables.');
    return { skipped: true };
  }

  const port = parseInt(SMTP_PORT);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: port,
    secure: port === 465, // true for 465, false for 587
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  const mailOptions = {
    from: SMTP_USER,
    to: MAIL_TO,
    subject: `[New Inquiry] ${subject} - ${service}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br/>')}</p>
      </div>
    `,
  };

  const info = await transporter.sendMail(mailOptions);
  return { messageId: info.messageId };
}

// Main create controller
const create = async (req, res) => {
  try {
    const { name, email, subject, service, message } = req.body || {};

    // Validate input
    required('name', name);
    required('email', email);
    required('subject', subject);
    required('service', service);
    required('message', message);

    // Save to database
    const doc = await ContactMessage.create({ name, email, subject, service, message });

    // Send email notification
    try {
      const mail = await sendEmail({ name, email, subject, service, message });
      res.status(201).json({ ok: true, id: doc._id, mail });
    } catch (mailErr) {
      console.error('Failed to send email:', mailErr);
      res.status(201).json({ ok: true, id: doc._id, mail: { error: 'send-failed' } });
    }
  } catch (err) {
    console.error('Contact form error:', err);
    res.status(400).json({ ok: false, error: err.message || 'Invalid payload' });
  }
};

module.exports = { create };

