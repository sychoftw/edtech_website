const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
    try {
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: 587, // Ensure correct port
            secure: false, // true for 465, false for 587
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            }
        });

        let info = await transporter.sendMail({
            from: `"CodeQuest" <${process.env.MAIL_USER}>`, // Properly format sender email
            to: email, // Ensure it's a valid email
            subject: title,
            html: body,
        });

        console.log("Email sent:", info);
        return info;
    } catch (error) {
        console.log("Error sending email:", error.message);
    }
};

module.exports = mailSender;