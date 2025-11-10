const nodemailer = require("nodemailer");
require("dotenv").config();

async function SendEmail(to, subject, text) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        text
    };//2
    await transporter.sendMail(mailOptions);//1
}

module.exports = SendEmail;
// sample ku use pandrathe
 //const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// await transporter.sendMail({
//   from: process.env.EMAIL_USER,
//   to,
//   subject,
//   text
// });
