const ToDoTask = require('../models/toDoList');

module.exports.delete = function(req,res){
    let id = req.query.id;
    ToDoTask.findByIdAndDelete(id,function(err){
        if(err){
            console.log("Error in deleting the data from the database ",err);
            return;
        } 
        console.log('Successfully deleted the task');
        res.redirect('/');
    })
}