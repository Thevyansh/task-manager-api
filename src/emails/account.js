const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// sgMail.send({
//     to: 'divyanshaacharya1998@gmail.com',
//     from: 'thevyansh@gmail.com',
//     subject: 'This is a test sendgrid mail',
//     text: 'Hope you get this!'
// });

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'divyanshaacharya1998@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get alone with the app`,
    });
};

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'divyanshaacharya1998@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    })
};

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
};