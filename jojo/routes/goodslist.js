var express = require('express');
var router = express.Router();
var goodsinfosdb = require("../db/goodsinfosdb");

router.get('/', function (req, res, next) {
  //1、从数据库中查询所有的商品
  goodsinfosdb.find({}, function (goodsinfos) {
    //2、把商品渲染到goodslist.ejs
    res.render("goodslist", { "title": "商品列表页", data: goodsinfos });
  });
});

module.exports = router;