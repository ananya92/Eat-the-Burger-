var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var cat = require("../models/burger.js");

// Create all routes
router.get("/", function(req, res) {
  burger.all(function(data) {
    var burgers = {
      burgers: data
    };
    res.render("index", burgers);
  });
});

router.post("/api/burgers", function(req, res) {
    burger.create("burger_name", req.body.burger_name, function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.update("devoured", req.body.devoured, "id", req.params.id, function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

// Export routes for server.js to use.
module.exports = router;
