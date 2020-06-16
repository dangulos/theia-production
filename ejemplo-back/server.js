var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var cors = require('cors');
var port = process.env.PORT || 4242;

var app = express();

var whitelist = [
  'http://dashboard.itrmachines.com',
  'http://localhost:8100',
  'http://localhost:8105',
  'http://localhost:8101',
  'http://localhost:8000',
  'http://localhost:8001',
  'http://localhost:8101',
  'http://localhost:8110',
  'http://localhost:8200',
  'http://192.168.1.3:2000',
  'http://190.93.151.98:2000'
];

var corsOptions = {
  origin: function (origin, callback) {
    if (!origin || true || whitelist.indexOf(origin) !== -1) callback(null, true);
    else callback(new Error('Not allowed by CORS, try again <br/> \n'+JSON.stringify(origin,null,2)), false);
  }
}
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({limit: '100mb', extended: true}));

app.use(passport.initialize());
var passportMiddleware = require('./middleware/passport');
passport.use(passportMiddleware);

app.get('/', function(req, res){
    return res.send('Hello, are you looking for something');
})

var routes = require('./routes.js');
app.use('/api', routes);

app.listen(port);
console.log('Hello! Api service running on port '+port);