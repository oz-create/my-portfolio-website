import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method not allowed" });

  const { name, email, message } = req.body;
  if (!name || !email || !message)
    return res.status(400).json({ message: "Eksik bilgi" });

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail", // veya "outlook", "yahoo"
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_TO, // senin adresin
      subject: `Yeni mesaj: ${name}`,
      text: message,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Mail gönderilemedi." });
  }
}
