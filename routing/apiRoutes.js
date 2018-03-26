var path = require('path');
var cupoftea = require("../app/data/cupoftea.js")


module.exports = function (app) {

    app.get('/api/cupoftea', function (req, res) {
        res.json(cupoftea);
    });

    app.post('/api/cupoftea', function (req, res) {
        console.log(req.body);
        var lowestDiff = 50;
        var match;
        cupoftea.forEach(function (teascores) {

            // console.log(teascores);

            var diff = 0;

            for (var i = 0; i < 10; i++) {
                diff += Math.abs(teascores.herbMatch[i] - req.body.scores[i]);
            }
            console.log(diff);

            if (diff < lowestDiff) {

                lowestDiff = diff;
                match = teascores;

            }

        });
        console.log(match);
        cupoftea.push(req.body);
        res.json(match);

    });
}
