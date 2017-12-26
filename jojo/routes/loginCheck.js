var express = require('express');
var router = express.Router();
var userinfosdb = require("../db/userinfosdb");

/* POST users listing. */
router.post('/', function (req, res, next) {
    //1、接收前端传来的数据
    let username = req.body.username;
    let userpass = req.body.userpass;

    //2、链接数据库（判断）
    userinfosdb.find({ "username": username, "userpass": userpass }, function (userinfos) {
        if (userinfos.length == 0) {
            res.send("<script>alert('用户名或者密码不正确');location.href='login.html'</script>");
        } else {
            //保存session
            req.session.username = username;
            //保存cookie
            res.cookie("username", username);

            //跳转到首页
            res.redirect("index.html");
        }
    });

});

module.exports = router;
