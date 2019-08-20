require('dotenv').config();
const express = require('express');
const app = express();
const {
    SERVER_PORT
} = process.env;
app.use(express.static(`${__dirname}/../build`))
app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port: ${SERVER_PORT}`);
})

app.post('/api/contact', () => {})