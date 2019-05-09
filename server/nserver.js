//1. Import
var express = require('express');
var path = require('path');
var routes = require('./routes/route.js');
var fs = require('fs'); // to clean up the file

//2. Initiate
var app = express();
var http = require('http').Server(app);


//3. Configure
app.use(express.static(path.join(__dirname, '../client/public')));
app.use(express.json())  // for POST body parser
app.set('views', path.join(__dirname, '../client/views'));
app.set("view engine","ejs");

//4. Setup Routing
app.get("/",routes.home);

//5. Listen
var port = process.env.PORT || 8080;
var server = http.listen(port,
    function(request,response)
    {
        console.log(`Node Server started. Running at http://localhost:${port}/`);
    }
);
