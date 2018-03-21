var path = require('path');
var cupoftea = require("../app/data/cupoftea.js")


module.exports = function(app){

  app.get('/api/cupoftea', function(req,res){
    res.json(cupoftea);
  });

  app.post('/api/cupoftea', function(req,res){
    
     var lowestDiff = 50;
        var mycupoftea;
        cupoftea.forEach(function (teascores) {
            var diff = 0;
            for (i = 0; i < teascores.scores.length; i++) {
                diff += Math.abs(teascores.scores[i] - req.body.scores[i]);
            } 
            if (difference < lowestDiff) {
                lowestDiff = diff;
                mycupoftea = teascores;
            }
 
    
   });

    res.json(mycupoftea);
  	cupoftea.push(req.body);
 };