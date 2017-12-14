<?php

$account = $_POST['account'];
$password = $_POST['password'];

if($account === '123456' && $password === '654321') {
    $res = ['status' => 200, 'info' => '登陆成功'];
}else {
    $res = ['status' => 401, 'info' => '账号或密码不正确'];
}

echo json_encode($res,JSON_UNESCAPED_UNICODE);