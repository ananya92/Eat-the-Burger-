// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burgers = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  create: function(tableName, colVal, cb) {
    orm.insertOne("burgers", tableName, colVal, function(res) {
      cb(res);
    });
  },
  update: function(tableName, setColName, setColVal, whrColName, whrColVal, cb) {
    orm.updateOne("burgers", tableName, setColName, setColVal, whrColName, whrColVal, function(res) {
      cb(res);
    });
  }
};

// Export the database functions
module.exports = burgers;
