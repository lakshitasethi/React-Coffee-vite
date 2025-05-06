const twilio = require('twilio');

// Replace these with your actual credentials from Twilio console
const accountSid = 'ACa3743d021988a795a1053c6774400770';
const authToken = '0b90ffd43639de7955f9b782dbcac35b';

const client = new twilio(accountSid, authToken);

client.messages
  .create({
    body: 'Hello from Twilio WhatsApp Sandbox! 🎉',
    from: 'whatsapp:+14155238886',  // Twilio sandbox number
    to: 'whatsapp:+919116336220'    // Your WhatsApp number
  })
  .then(message => console.log('Message SID:', message.sid))
  .catch(error => console.error('Error sending message:', error));
