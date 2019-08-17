var express = require('express');
var router = express.Router();
var userinfosdb = require("../db/userinfosdb");

/* POST users listing. */
router.post('/', function (req, res, next) {
    //1、接收前端传来的数据
    let email = req.body.email;
    let password = req.body.password;

    //2、链接数据库（判断）
    userinfosdb.find({ "email": email, "password": password }, function (userinfos) {
        if (userinfos.length == 0) {
            res.send("<script>alert('用户名或者密码不正确');location.href='html/login.html'</script>");
            // res.send("<script>alert('用户名或者密码不正确')</script>");
        } else {
            //保存session
            req.session.email = email;
            console.log(req.session.email)
            //保存cookie
           
            res.cookie("email", email);
            console.log(res.cookie("email", email))

            //跳转到首页
            res.redirect("html/index.html");
        }
    });

});

module.exports = router;
