//Model
var Update = require('../model/update.model');
var extend = require('util')._extend;

// Adding Employees
exports.CreateUser = function (req, res) {
    let user = new Update();
    user.player1Name = req.body.player1Name;
    user.player1Score = req.body.player1Score;
    user.player1Sets = req.body.player1Sets;
    user.player2Name = req.body.player2Name;
    user.player2Score = req.body.player2Score;
    user.player2Sets = req.body.player2Sets;
    user.commentry = req.body.commentry;
    
    
    return Update.create(req.body).then(function (userRes) {
        if (!userRes) {
            res.json({"STATUS": false, "MESSAGE": "Fatal Error: "+ err.message});
        } else {
            var jsonObj=JSON.parse(JSON.stringify(userRes));
            var o=Object.assign({}, jsonObj);
            var retVal = Object.assign(o, {"STATUS": true, "MESSAGE": "Done saving record"});
            res.json(retVal);
        }
    })
    .catch(function (err) {
        if (err) {
            res.json({"STATUS": false, "MESSAGE": "Fatal Error: "+ err});
        }
    });
}
