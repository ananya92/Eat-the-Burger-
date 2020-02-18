var connection = require("./connection.js");

var orm = {
  selectAll: function(tableName, cb) {
    var queryString = "SELECT * FROM " + tableName;
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function(tableName, colName, colVal, cb) {
    var queryString = `INSERT INTO  ${tableName} (${colName}) VALUES ("${colVal}")`;
    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function(tableName, setColName, setColVal, whrColName, whrColVal, cb) {
    var queryString = "UPDATE " + tableName + " SET " + setColName + " = " + setColVal + " WHERE " + whrColName + " = " + whrColVal;
    connection.query(queryString, function(err, result) {
        if (err) throw err;
        cb(result);
      }
    );
  }
};

module.exports = orm;
