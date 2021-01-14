let express = require('express');
let app = express();
let reloadMagic = require('./reload-magic.js');

let multer = require('multer');
let upload = multer({ dest: __dirname + '/uploads/' });
let cookieParser = require('cookie-parser');
app.use(cookieParser());
let hash = require('object-hash');
reloadMagic(app);
app.use('/', express.static('build')); // Needed for the HTML and JS files
app.use('/uploads', express.static('uploads'));
app.use('/', express.static('public')); // Needed for local assets
app.use('/img', express.static('public/images'));

let port = process.env.PORT;
if (port == null || port == '') {
  port = 4000;
}

let generateSessionId = () => {
  return '' + Math.floor(Math.random() * 1000000000000);
};


// Endpoints go after this line


// Your endpoints go before this line
app.get('/public/images');

app.all('/*', (req, res, next) => {
  // needed for react router
  res.sendFile(__dirname + '/build/index.html');
});

app.listen(port, '0.0.0.0', () => {
  console.log('Server running on port 4000 http://localhost:4000');
});
