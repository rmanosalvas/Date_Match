module.exports = function (msg, recipient) {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = require('twilio')(accountSid, authToken);
    client.messages
    .create({
        body: msg,
        from: process.env.TWILIO_NUMBER,
        to: recipient
    })
    .then(message => console.log(message.sid));
}