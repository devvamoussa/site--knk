//const nodemailer = require('nodemailer');

//const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vvamoussa@gmail.com',
    pass: 'Doum12345'
  }
//});


//module.exports.sendConfirmationEmail = (email, activationCode) =>{
    //transport 
        //.sendMail({
            from:"vvamoussa@gmail.com",
            to: email,
            subject: "confirmer votre compte",
            html: `<h1>Email de confirmation</h1>
            <h2>Bonjour</h2>
            <p>pour activer votre compte, veuillez cliquer sur ce lien </p>
            <a href=http://localhost:3000/confirm/${activationCode}> cliquer ici ! </a>`
        //})
        //.catch((err)=> console.log(err));
//};





///var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
//};

//transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
//});