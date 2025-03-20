import nodemailer from "nodemailer"
import 'dotenv/config'

const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false,
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASSWORD,
    },
});

export const sendEmail = async (to, subject, text) => {
    const send = await transporter.sendMail({
        from: process.env.USER_EMAIL,
        to: to,
        subject: 'Welcome to my Platform',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome Email</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            background-color: #4CAF50;
            padding: 10px;
            color: #ffffff;
            text-align: center;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }
        .header h1 {
            margin: 0;
        }
        .content {
            padding: 20px;
            text-align: center;
        }
        .content h2 {
            color: #333333;
        }
        .content p {
            color: #666666;
            line-height: 1.6;
        }
        .cta-button {
            display: inline-block;
            background-color: #4CAF50;
            color: #ffffff;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 20px;
        }
        .footer {
            text-align: center;
            padding: 20px;
            font-size: 12px;
            color: #888888;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>Welcome to Our Platform!</h1>
        </div>
        <div class="content">
            <h2>Hello, Ibrahim!</h2>
            <p>Thank you for joining our platform. We are excited to have you with us. Start exploring and make the most out of our services.</p>
            <p>If you have any questions or need assistance, feel free to reach out to us.</p>
            <a href="https://yourwebsite.com/login" class="cta-button">Get Started</a>
        </div>
        <div class="footer">
            <p>You're receiving this email because you signed up for our services.</p>
            <p>If you no longer want to receive emails from us, <a href="#">unsubscribe here</a>.</p>
        </div>
    </div>
</body>
</html>
`
    });

    console.log('email sent')
}


