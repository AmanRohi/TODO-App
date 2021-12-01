const ToDoTask = require('../models/toDoList');

module.exports.main = function(req,res){

    ToDoTask.find({},function(err,tododata){
        if(err){
            console.log('Error in loading the data from the data base ',err);
            return;
        }
        return res.render('todoapp',{
            title:"To Do App | Rohi ",
            todolist:tododata
        });
    })
}