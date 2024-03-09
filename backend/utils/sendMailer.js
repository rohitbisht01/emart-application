const nodemailer = require("nodemailer");

const sendMail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    // secure: true, // Use `true` for port 465, `false` for all other ports
    // service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_MAIL, // sender address
    to: options.email, // list of receivers
    subject: options.subject, // Subject line
    text: options.message, // plain text body
  };

  const info = await transporter.sendMail(mailOptions);
  console.log("Message sent: %s", info.messageId); // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
};

module.exports = sendMail;
