require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const { SERVER_PORT, EMAIL, TOEMAIL, PASSWORD } = process.env;
const app = express();
app.use(express.static(`${__dirname}/../build`));
app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port: ${SERVER_PORT}`);
});

app.post("/api/contact", async (req, res) => {
  // const { name, email, message } = req.body;
  // let transporter = nodemailer.createTransport({
  //   host: "smtp.mail.yahoo.com",
  //   port: 465,
  //   secure: true,
  //   pool: true,
  //   auth: {
  //     user: EMAIL,
  //     pass: PASSWORD
  //   }
  // });
  // let info = await transporter.sendMail({
  //   from: EMAIL, // sender email
  //   to: TOEMAIL, // receiver email
  //   subject: "Contact Form Submission!", // Subject
  //   text:
  //     "There has been a new submission from the contact form on your portfolio!", // plain text body
  //   emailBody // html body
  // });
  // res.status(200).send(info);
  res.sendStatus(200);
});
