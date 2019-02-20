const db = require("../../model/db.js");
const sql = require("../../model/sql.js");
// 引入redis
var dbs = require("../../redis/redis.js");

exports.indexShow = (req, res, next) => {
  db.query(sql.index, function(err, rows, fields) {
    if (err) {
      throw err;
    }
    // console.log("成功", results);
    var allparentinfo = [];
    var indexClass = [];
    // 循环查找数据
    for (var i = 0; i < rows.length; i++) {
      var classObj = {};
      classObj.username = rows[i].username;
      classObj.nickname = rows[i].nickname;
      classObj.id = rows[i].id;
      indexClass.push(classObj);
    }
    // 专成json格式
    var data = { allparentinfo: allparentinfo, indexClass: indexClass };
    console.log(data);
    res.json(data);
  });
};
