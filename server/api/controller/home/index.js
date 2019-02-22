const db = require("../../model/db.js");
const sql = require("../../model/sql.js");
// 引入redis
var dbs = require("../../redis/redis.js");

exports.indexShow = (req, res, next) => {
  res.set('Content-Type', 'application/json;charset=UTF-8');
  db.query(sql.index, function(err, rows, fields) {
    if (err) {
      throw err;
    }
    res.get('Content-Type');
    console.log(res.get('Content-Type'));
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

let test = (req, res, next) => {
  res.json({
    error:0,
    success: 1
  })
}

module.exports = {
  test
}