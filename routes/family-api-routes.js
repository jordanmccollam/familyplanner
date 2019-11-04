var db = require("../models");

module.exports = function(app) {

    app.post("/api/families", function(req, res) {
        db.Family.create(req.body).then(function(data) {
            res.json(data);
        });
    });

    app.get("/api/families/:name", function(req, res) {

        db.Family.findOne({
            where: {
                name: req.params.name
            }
        }).then(function(data) {
            res.json(data);
        })
    })

}