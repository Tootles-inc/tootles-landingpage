var express = require('express');
var path =  require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var tasks = require('./routes/tasks');
var signups = require('./routes/signups')

var port = 3000;

var app = express();

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view enginer', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static Folder
app.use(express.static(path.join(__dirname, "client")));

// Body Pareset MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', [tasks, signups]);
// app.use('/api', signups);

app.listen(port, function(){
    console.log('Server started on port '+port)
});