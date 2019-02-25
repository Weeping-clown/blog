const db = require("../../model/db.js");
const sql = require("../../model/sql.js");
// 引入redis
var dbs = require("../../redis/redis.js");
var resHandle = require("../response.js");

exports.indexShow = (req, res, next) => {
  console.log(req.params);
  db.query(sql.index, function(err, rows, fields) {
    if (err) {
      throw err;
    }

    let data = resHandle.setCode("OK", rows)
    console.log(data);
    res.json(data);
  });
};
