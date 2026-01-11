const nodemailer = require("nodemailer");

const sendMail = async (to, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD
      }
    });

    await transporter.sendMail({
      from: `"RID Bharat" <${process.env.SMTP_FROM_EMAIL}>`,
      to,
      subject,
      text
    });

    console.log("✅ Email Sent to:", to);
  } catch (error) {
    console.log("❌ Email Send Error:", error);
  }
};

module.exports = sendMail;
