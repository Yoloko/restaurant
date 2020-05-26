const bodyParser = require('body-parser');

// express an npm module use to buid web application 
const express = require('express');

//tell node we are creating an express server 
const path = require('path');

const app = express();

const PORT = process.env.PORT || 8000;



// body perser allows to receive data back in js format 
app.use(bodyParser.urlencoded({ extended: true}));
 
// parse application/json
app.use(bodyParser.json());
 
app.use(express.static("public"));



// app is directed to apps
require('./app/routing/html-routes.js')(app);





app.listen(PORT, function(){
    console.log("listen on port:" + PORT);

});
