var express = require('express');
var router = express.Router();
var goodsinfosdb = require("../db/goodsinfosdb");
var commentsdb = require("../db/commentsdb");

router.get('/', function (req, res, next) {
  //1、接收goodsid
  let goodsid = req.query.goodsid;
  console.log('这是goodsdatil'+goodsid)
  //接收评论的页码(跟评论列表有关的)
  let pageindex = req.query.pageindex;
  if (!pageindex) {
    pageindex = 1;
  }
  //2、从数据库中查询goodsid对应的商品和该商品的评论列表
  goodsinfosdb.find({ "goodsid": goodsid }, function (goodsinfos) {
    console.log('这是1' + goodsinfos);
    //从评论集合（表）里取出该商品(goodsid)对应的评论
    //传入的参数：商品编号（goodsid），页码（pageindex）
    
    commentsdb.findByGoodsId(goodsid, pageindex, function (obj) {
      console.log('这是2' +obj)
      //3、把商品渲染到goodsdetail.ejs
      if (obj != null) {
        //
        res.render("goodsdetail", {
          "title": "商品详情页",
          "goodsinfo": goodsinfos[0], //当前商品详情
          "comments": obj.comments,//当前页码的评论
          "pageindex": pageindex,//当前页码号
          "maxpagecount": obj.maxpagecount//总页码
        }
        );
      }
    });

  });
});

module.exports = router;