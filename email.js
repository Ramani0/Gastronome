 const express = require('express');
const nodemailer = require('nodemailer');
const { randomBytes } = require('crypto');

const app = express();

// Function to generate password
function generatePassword(length = 10) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}
 
// Function to send email
function sendEmail(password) {
    const senderEmail = 'ravichadiranramani@gmail.com';
    const appPassword = 'thpy dawc dgio fcwd';
    const receiverEmail = 'ravichadiranramani@gmail.com';
    const subject = 'Subject of the Email';
    const body = `Your username: admin.Password: ${password}`;

    // Create transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: senderEmail,
            pass: appPassword
        }
    });

    // Compose email
    const mailOptions = {
        from: senderEmail,
        to: receiverEmail,
        subject: subject,
        text: body
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(`Failed to send email. Error: ${error}`);
        } else {
            console.log('Email sent successfully!');
        }
    });
}

app.get('/sendEmail', (req, res) => {
    const newPassword = generatePassword();
    sendEmail(newPassword);
    res.send('Email sending process initiated.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


/* 
const nodemailer = require('nodemailer');

function sendEmail(password) {
    const senderEmail = 'ravichadiranramani@gmail.com';
    const appPassword = 'thpy dawc dgio fcwd'; // Replace this with your app password
    const receiverEmail = 'ravichandiranramani@gmail.com'; // Replace this with the recipient's email address
    const subject = 'Subject of the Email';
    const body = `Your username: admin. Password: ${password}`; // Added space after admin.

    // Create transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: senderEmail,
            pass: appPassword
        }
    });

    // Compose email
    const mailOptions = {
        from: senderEmail,
        to: receiverEmail,
        subject: subject,
        text: body
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(`Failed to send email. Error: ${error}`);
        } else {
            console.log('Email sent successfully!');
        }
    });
}

// Generate a password and send email
const newPassword = generatePassword(); // Assuming you have a generatePassword function defined
sendEmail(newPassword);
 */