var express = require('express');
var router = express.Router();
var userinfosdb = require("../db/userinfosdb");

/* POST users listing. */
router.post('/', function (req, res, next) {
    // res.redirect("html/login.html");
    //1、接收前端传来的数据
    let email = req.body.email;
    let password = req.body.password;
    //console.log(req.body.username);
    //console.log(req.body.userpass);

    //2、链接数据库（判断，保存）
    userinfosdb.reg({ "email": email, "password": password }, function (isSuccess) {
        if (isSuccess) {
            //3、给前端响应
            //res.send("注册成功！");
            // res.redirect("html/login.html");
            res.send("html/login.html");
        } else {
            res.send("<script>alert('亲，该邮箱已经存在，请重新选择！');location.href='register.html';</script>");
        }
    });
});

module.exports = router;
