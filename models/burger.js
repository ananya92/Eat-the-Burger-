// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  create: function(colName, colVal, cb) {
    orm.insertOne("burgers", colName, colVal, function(res) {
      cb(res);
    });
  },
  update: function(setColName, setColVal, whrColName, whrColVal, cb) {
    orm.updateOne("burgers", setColName, setColVal, whrColName, whrColVal, function(res) {
      cb(res);
    });
  }
};

// Export the database functions
module.exports = burger;
