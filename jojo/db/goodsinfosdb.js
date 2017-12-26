/**
 * Created by Administrator on 2017/12/26.
 */
//专门针对goodsinfos集合的操作
const mongoose = require("mongoose");
const dbconn = require("./dbconn")();

//创建模板（跟数据库中集合的结构要一致）
let goodsinfosSchema = new mongoose.Schema({
   goodsId    :String,
   goodsname  :String,
   goodsprice :Number,
   goodsnum   :Number,
    goodsimg  :String
});

//创建模型（把模板和数据库中集合对应链接起来）
let goodsinfosModel = dbconn.model("goodsinfos",goodsinfosSchema);


module.exports = {
    //完成添加数据的功能
    "add":function(data,callback){
        //创建实体（要插入到数据库中数据）
        let goodsinfosEntity = new goodsinfosModel(data);
        goodsinfosEntity.save((err,data)=>{
                if(err){
                console.log(err);
                callback(false);
            }else{
                callback(true);
            }
        });
    },
    //查询goodsinfos集合中的数据
    "find":function(condition,callback){
        goodsinfosModel.find(condition,(err,data)=>{
            if(err){
                console.log(err);
                callback([]);
            }else{
                callback(data);
            }
        });
    },
};