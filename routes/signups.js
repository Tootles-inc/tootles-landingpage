var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://tyler:tyler@ds159988.mlab.com:59988/tootles_web', ['signups']);

// Get All Signups
router.get('/signups', function(req, res, next){
    db.tasks.find(function(err, signups){
        if(err){
            res.send(err);
        }
        res.json(signups);
    });
});


// Get Single Signup
router.get('/signup/:id', function(req, res, next){
    db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(signup);
    });
});

// Save Signup
router.post('/signup', function(req, res, next){
    var task = req.body;
    if(!signup.title || !(signup.isDone + "")){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.signups.save(signup, function(err, signup){
            if(err){
            res.send(err);
            }
            res.json(signup);
        });
    }
});

// Delete Signup

// router.delete('/task/:id', function(req, res, next){
//     db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
//         if(err){
//             res.send(err);
//         }
//         res.json(task);
//     })
// });

// Update Task

// router.put('/task/:id', function(req, res, next){
//     var task = req.body;
//     var updTask = {};

//     if(task.isDone){
//         updTask.isDone = task.isDone;

//     }
//     if(task.title){
//         updTask.title = task.title;
//     }
//     if(!updTask){
//         res.status(400);
//         res.json({
//             "error":"Bad Data"
//         });
//     } else {
//         db.tasks.update({_id: mongojs.ObjectId(req.params.id)}, updTask, {}, function(err, task){
//             if(err){
//                 res.send(err);
//             }
//             res.json(task);
//         });
//         }
// });
module.exports = router;