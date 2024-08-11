import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, contactNo, message, dateTime } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.RECIPIENT_EMAIL,
      subject: `Consultation Request from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Contact No: ${contactNo}
        Message: ${message}
        Preferred Date and Time: ${dateTime}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: "Method not allowed" });
  }
}
