const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cookieParser());

app.get('/set-cookie', (req, res) => {
  res.cookie('myCookie', 'Hello, World!', { maxAge: 900000, httpOnly: true });
  res.send('Cookie set successfully!');
});

app.get('/use-cookie', (req, res) => {
  const myCookie = req.cookies.myCookie;
  res.send(`Value of myCookie: ${myCookie}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
