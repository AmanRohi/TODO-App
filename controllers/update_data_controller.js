const ToDoTask = require('../models/toDoList');

module.exports.status = function(req,res){
    let id = req.query.id;
    let prevStatus = req.query.prevS;
    let curStatus = (prevStatus=="Uncompleted") ? "Completed":"Uncompleted" ;
    ToDoTask.findByIdAndUpdate(id,{
        Status:curStatus
    },function(err){
        if(err){
            console.log('Error in updating the status of the task',err);
            return;
        }
        console.log('Successfully updated the task Status ');
        res.redirect('/');
    })
}