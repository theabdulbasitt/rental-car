import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { userEmail, name, phone, comments, distance, extras, tip, lateNight, grandTotal } = req.body;

  if (!userEmail || !name || !phone || !distance || !grandTotal) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const developerEmail = process.env.EMAIL_USER;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: [userEmail, developerEmail],
    subject: 'Booking Confirmation',
    text: `Thank you for your booking!\n\nDetails:\nName: ${name}\nEmail: ${userEmail}\nPhone: ${phone}\nDistance: ${distance} km\nExtras: ${JSON.stringify(extras)}\nTip: $${tip}\nLate Night: ${lateNight ? 'Yes' : 'No'}\nGrand Total: $${grandTotal}\nComments: ${comments || 'None'}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error: any) {
    res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
} 