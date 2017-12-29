/**
 * Created by Administrator on 2017/12/26.
 */
//专门针对goodsinfos集合的操作
const mongoose = require("mongoose");
const dbconn = require("./dbconn")();

//创建模板（跟数据库中集合的结构要一致）
let commentsSchema = new mongoose.Schema({
  goodsid: String,
  username: String,
  email: String,
  comment: String,
  commenttime: Date
});

//创建模型（把模板和数据库中集合对应链接起来）
let commentsModel = dbconn.model("comments", commentsSchema);


module.exports = {
  //完成添加数据的功能
  "add": function (data, callback) {
    //创建实体（要插入到数据库中数据）
    let commentsEntity = new commentsModel(data);
    commentsEntity.save((err, data) => {
      if (err) {
        console.log(err);
        callback(false);
      } else {
        callback(true);
      }
    });
  },
  //根据商品编号查询对应的评论列表
  //pageindex是页码：2 跳过10条；3 跳过20条
  //每页10条。
  findByGoodsId: function (goodsid, pageindex, callback) {
    //查询该商品对应所有评论的条数
    commentsModel.find({
      "goodsid": goodsid
    }).count(function (err, count) {
      //查询该商品当前页码（pageindex）的评论 skip((pageindex-1)*10).limit(10)；
      commentsModel.find({
        "goodsid": goodsid
      }, function (err, data) {
        if (err) {
          console.log(err);
          callback(null);
        } else {
          //maxpagecount:最大页码，也叫总页数
          //comments:查询出来的评论（当前页（pageindex）的评论）
          console.log(data)
          callback({
            maxpagecount: Math.ceil(count / 10),
            comments: data
          });
        }
      }).sort({
        "commenttime": -1
      }).skip((pageindex - 1) * 10).limit(10);
    });
  }
};


/*
 *
 * */