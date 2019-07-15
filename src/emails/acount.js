const sgMail = require('@sendgrid/mail')

// const sendgridAPIKey = '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'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'raunaq.kapoor@gmail.com',
        subject: 'Thanks for signing up!',
        text: `Welcome to the app, ${name}. Let me know wassup!`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'raunaq.kapoor@gmail.com',
        subject: 'Thanks for all the fish!',
        text: `Bye, ${name}. Hope you had a nice ride!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}