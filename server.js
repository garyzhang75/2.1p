// server.js
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post('/signup', async (req, res) => {
    const email = req.body.email;
    const msg = {
        to: email,
        from: "linggg300@gmail.com",
        subject: "Welcome!",
        text: "Thank you for signing up!"
    };
    try {
        await sgMail.send(msg);
        console.log("Message sent successfully!");
        res.send("Signup successful, email sent!");
    } catch (error) {
        console.error(error);
        if (error.response) {
            console.error(error.response.body);
        }
        res.send("There was an error. Please try again.");
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
