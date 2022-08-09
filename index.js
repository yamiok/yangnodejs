const cool = require('cool-ascii-faces');
const express = require('express');
const path = require('path');
const os = require('os');
const PORT = process.env.PORT || 5000;


const user = os.userInfo();
console.log(user,os.type());

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('', (req, res) => res.send('hello world'))
  .get('/list', (req, res) => res.render('list'))
  .get('/cool', (req, res) => res.send(cool()))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));