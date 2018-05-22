var express = require('express');
var router = express.Router();
var path = require('path');
var nodemailer = require('nodemailer');
var csrf = require('csurf');
var csrfProtection = csrf({cookie:true});

require('dotenv').config();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.use(csrfProtection);

var cookieParser = require('cookie-parser');
router.use(cookieParser());

/* GET home page. */
router.get('/',csrfProtection, function (req, res, next) {
  res.render('index',{csrfToken: req.csrfToken()});
});

router.post('/post',csrfProtection, function (req, res) {
  console.log(req.body);
  
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.gmailUser,
      pass: process.env.gmailPass
    }
  })
  var mailOptions = {
    from: `"從六角西餐廳網頁轉寄"<sendmailforlumax@gmail.com>`,
    to: 'jojomudamudada@gmail.com',
    subject:'eamil:'+ req.body.mail + '   姓名:' + req.body.person + '寄了一封信',
    text:'eamil:'+ req.body.mail + '   姓名:' + req.body.person +'   電話:'+req.body.phone+'   人數:'+req.body.NumberOfpeople + '   是否需要素食:'+req.body.Vegetarian
  }
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return console.log(error);

    }
    res.redirect('/')
  })

})



module.exports = router;