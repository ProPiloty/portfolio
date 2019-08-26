require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const { SERVER_PORT, TOEMAIL, FROMEMAIL, PASSWORD } = process.env;
const app = express();
app.use(express.json());
app.use(express.static(`${__dirname}/../build`));
app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port: ${SERVER_PORT}`);
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  const body = `
    <h1>New form submission!</h1>
    <h2>Name: ${name}</h2>
    <h2>Email: ${email}</h2>
    <h2>Message: ${message}</h2>
  `;

  let transporter = nodemailer.createTransport({
    host: "smtp.mail.yahoo.com",
    port: 465,
    secure: true,
    pool: true,
    auth: {
      user: FROMEMAIL,
      pass: PASSWORD
    }
  });

  let info = await transporter.sendMail({
    from: FROMEMAIL, // sender email
    to: TOEMAIL, // receiver email
    subject: "Contact Form Submission!", // Subject
    text:
      "There has been a new submission from the contact form on your portfolio!", // plain text body
    html: body // html body
  });

  res.status(200).send(info);
});
