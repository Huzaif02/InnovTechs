import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message, budget, timeframe } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can use another email service
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.RECIPIENT_EMAIL, // Your email address
      subject: `New contact form submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nBudget: ${budget}\nTimeframe: ${timeframe}\nMessage: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}
