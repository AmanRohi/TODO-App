const mongoose = require('mongoose');

const toDoSchema = mongoose.Schema({
    Status:{
        type:String,
        required:true
    },
    Task_Name:{
        type:String,
        required:true
    },
    Due_Date:{
        type:String,
        required:true
    },
    Category:{
        type:String,
        required:true
    }
});
const ToDoTask   =  mongoose.model('ToDoTask',toDoSchema);
module.exports = ToDoTask;