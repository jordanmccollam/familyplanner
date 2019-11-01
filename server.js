var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// Parse config
app.use(express.urlencoded({extended: true}));
app.use(express.json());


// Listener
app.llisten(PORT, function() {
    console.log("Listening on port " + PORT);
});