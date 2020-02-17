var connection = require("./connection.js");

var orm = {
  selectAll: function(tableName, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableName], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function(tableName, colName, colVal, cb) {
    var queryString = "INSERT INTO ??(??) VALUES (??)";
    console.log(queryString);
    connection.query(queryString, [tableName, colName, colVal], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function(tableName, setColName, setColVal, whrColName, whrColVal, cb) {
    var queryString =
      "UPDATE TABLE ?? SET ?? = ?? WHERE ?? = ??";

    connection.query(
      queryString,
      [tableName, setColName, setColVal, whrColName, whrColVal],
      function(err, result) {
        if (err) throw err;
        cb(result);
      }
    );
  }
};

module.exports = orm;
