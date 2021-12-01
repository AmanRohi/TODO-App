const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/to_do_app');

const db = mongoose.connection;
db.on('err',console.error.bind(console,'Error in connecting with the Database MongoDB'));
db.once('open',function(){
    console.log('SuccessFully connected with the database Mongo :) ');
})