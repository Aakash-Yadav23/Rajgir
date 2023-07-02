import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, email, phoneNumber, message } = req.body;

        // Create a Nodemailer transporter using SMTP
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com', // Replace with your SMTP host
            port: 587, // Replace with your SMTP port
            secure: false, // Set to true if your SMTP server requires a secure connection
            auth: {
                user: 'yfilmyzillla@gmail.com', // Replace with your email address
                pass: 'epghxfiuwexsjylm', // Replace with your email password
            },
        });

        // Compose the email data
        const emailData = {
            from: email,
            to: 'Aakashdev24@gmail.com',
            subject: 'Contact Form Rajgir Site',
            html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone Number: ${phoneNumber}</p>
        <p>Message: ${message}</p>
      `,
        };

        try {
            // Send the email
            await transporter.sendMail(emailData);
            console.log('Email sent successfully');
            // Optional: Show a success message to the user
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            // Optional: Show an error message to the user
            res.status(500).json({ message: 'Error sending email' });
        }
    } else {
        res.status(405).end(); // Method Not Allowed
    }
}
