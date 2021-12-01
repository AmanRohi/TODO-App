// setting up the express 
const express = require('express');
const port = 8000;
const app = express();

// making connection with the database monogDB
const db = require('./config/mongoose');
const ToDoTask = require('./models/toDoList');

// Setting up the middlewares 

// using the urlencoder to change the format of req;
app.use(express.urlencoded());

// Setting up the router
app.use('/',require('./routes'));


// setting up the static files like css and javascript 
app.use(express.static('Assets'));

// setting up the view engine EJS
app.set('view engine' , 'ejs');
app.set('views', './views');



app.listen(port,function(err){
    if(err) { console.log('Error in connecting with the server !! '); } 
    else { console.log('Successfully connected with the server on port : ',port);}
});