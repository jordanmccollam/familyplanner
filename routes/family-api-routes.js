var db = require("../models");

module.exports = function(app) {


    app.post("/api/families", function(req, res) {
        // console.log(req.body);
        db.Family.create(req.body).then(function(data) {
            res.json(data);
        });
    });

}