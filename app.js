var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'test@gmail.com',
    pass: '***********************************'
  },
  tls: {
      rejectUnauthorized: false
  }
});

var mailOptions = {
  from: 'test',
  to: 'test',
  subject: 'test',
  text: 'That was test!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
