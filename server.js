// server.js (backend)
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const randomize = require('randomatic');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/generate-otp', (req, res) => {
    const { name, email, username, password } = req.body;

    // Generate a random 6-digit OTP
    const otp = randomize('0', 6);

    // Dummy implementation for demonstration purposes
    console.log('Generated OTP:', otp);

    // Send the OTP via email (replace with actual email sending code)
    sendEmail(email, otp);

    res.json({ success: true });
});

function sendEmail(email, otp) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'curvecloud1@gmail.com',
            pass: 'thundercloud11',
        },
    });

    const mailOptions = {
        from: 'curvecloud1@gmail.com', // Update with the correct sender email address
        to: email, // Update with the correct recipient email address
        subject: 'OTP for Registration',
        text: `Your OTP for registration is: ${otp}`,
    };
    

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
