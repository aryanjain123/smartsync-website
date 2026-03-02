const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic health check route for Railway
app.get('/', (req, res) => {
    res.send('SmartSync Services API is running');
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, inquiryType, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ success: false, message: 'Please provide all required fields.' });
        }

        // In a production environment, you would use Nodemailer here to send the email
        // For example:
        /*
        const nodemailer = require('nodemailer');
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });
        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_RECEIVER || 'info@smartsyncservices.com',
            subject: `New Inquiry from ${name}: ${inquiryType}`,
            text: `Name: ${name}\nEmail: ${email}\nInquiry Type: ${inquiryType}\n\nMessage:\n${message}`,
        });
        */

        console.log(`Received contact form submission from ${name} (${email})`);

        // Simulating success
        res.status(200).json({ success: true, message: 'Your inquiry has been sent successfully!' });
    } catch (error) {
        console.error('Error processing contact form:', error);
        res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
