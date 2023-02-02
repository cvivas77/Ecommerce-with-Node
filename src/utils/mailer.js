//import nodemailer
const nodemailer = require('nodemailer')
require('dotenv').config()

//create a transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: '465',
  secure: true,
  auth: {
    user: 'clvivas77@gmail.com',
    pass: process.env.GOOGLE_KEY,
  },
})

module.exports = transporter