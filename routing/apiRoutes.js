var path = require('path');
var cupoftea = require("../data/cupoftea.js")


module.exports = function(app){

  app.get('/api/cupoftea', function(req,res){
    res.json(cupofteaList);
  });

  app.post('/api/cupoftea', function(req,res){
    
 

    cupofteaList.push(req.body);
   });
 };