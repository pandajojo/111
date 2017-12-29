var express = require('express');
var router = express.Router();
var commentsdb = require("../db/commentsdb");

router.post('/', function (req, res, next) {
  //1、接收前端传来数据
  let goodsid = req.body.goodsid;
  let comment = req.body.comment;
  let username = req.session.username;
  let email = req.session.email;
  let d = new Date();

  //2、保存到数据库中。
  commentsdb.add({
    goodsid: goodsid,
    username: username,
    email:email,
    comment: comment,
    commenttime: d
  }, function (isSuccess) {
    if (isSuccess) {
      console.log("成功！");
      res.redirect("goodsdetail?goodsid=" + goodsid);
    } else {
      console.log("失败！");
    }
  });
});

module.exports = router;