var db = require("../models");

module.exports = function(app) {
    app.get("/api/families", function(req, res) {
        db.Family.findAll().then(function(data) {
            res.json(data);
        })
    });

    app.post("/api/families", function(req, res) {
        db.Family.create(req.body).then(function(data) {
            res.json(data);
        });
    });

}