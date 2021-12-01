const ToDoTask = require('../models/toDoList');

module.exports.perform = function(req,res){
    console.log(req.body);
    ToDoTask.create({
        Status:'Uncompleted',
        Task_Name: req.body.Task_Name,
        Category: req.body.Category,
        Due_Date: req.body.Due_Date
    },function(err,newTask){
        if(err){
            console.log('Error in creating the new Task ',err);
            return;
        }
        console.log('Succesfully created the new task',newTask);
        res.redirect('/');
    })

}