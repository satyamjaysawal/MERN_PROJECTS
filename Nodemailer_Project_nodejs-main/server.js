const nodemailer = require('nodemailer');

const mail = async () => {
  try {
    let testAccount = await nodemailer.createTestAccount();
    const config = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: "Use Gmail ID", // self mail 
        pass: "Use Gmail App Password", // Use the App password generated from Google Account "security >> App Password"
      },
    });
    const sendmailnow = await config.sendMail({
      from: 'Gmail ID',
      to: 'To Gmail ID',
      subject: 'test',
      text: 'Hello, this is a test Satyam mail',
      html: '<h1>This is an HTML mail demo this is a test Satyam mail</h1>',
    });
    console.log('Message sent: %s', sendmailnow.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

mail().catch((e) => console.log(e));
