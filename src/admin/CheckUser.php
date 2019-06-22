<?php
header("Content-type:text/html;Charse=utf-8");
include("../lib/MMySQL.php");

// 数据库的基本设置
$config_arr = [
	"host"=>"127.0.0.1",
	"port"=>"3306",
	"user"=>"root",
	"passwd"=>"",
	"dbname"=>"stu_04"
];
$conn = new MMysql($config_arr);


// 存在两重搜索 1. 用户名 2. 邮箱

// 接收数据 
$username = $_POST['username'];
$password = $_POST['password'];
$email = $_POST['email'];

// 检查用户名
$sql = "select * from user where username='" . $username ."';";
$result = $conn->doSql($sql);
if(!$result) { // 如果没有查询到数据,那么表示用户名可用

	// 检测邮箱
	$sql = "select * from user where email='" . $email ."';";
	$result = $conn->doSql($sql);
	if(!$result) {
		$message = ["state"=>1,"error_msg"=>""];
	}else {
		$message = ["state"=>0,"error_msg"=>"邮箱已被注册，请更换邮箱"];
	}

}else {
	$message = ["state"=>0,"error_msg"=>"用户名已被注册，请更换用户名"];
}

echo json_encode($message);