require("dotenv").config();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = async (msg) => {
    try {
        await sgMail.send(msg);
        console.log("Message sent successfully!");
    } catch (error) {
        console.error(error);
        if (error.response) {
            console.error(error.response.body);
        }
    }
};

sendMail({
    to: "gerryzhangshuai@gmail.com",
    from: "linggg300@gmail.com",
    subject: "nodeJS says ",
    text: "this is a nice day",
});
