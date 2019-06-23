const express = require('express')
const router = express.Router()

// // 创建数据库连接
// var mysql = require('mysql');
// var conn = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'mysql_001'
// });

// 导入自己的业务处理模块
const ctrl = require('../controller/user.js')

// 用户请求的是注册页面
router.get('/register', ctrl.showRegisterPage)

// 用户请求的是登录页面
router.get('/login', ctrl.showLoginPage)

// 注册新用户了
router.post('/register', ctrl.showRegister)

// 监听 登陆的请求
router.post('/login', ctrl.showLogin)

module.exports = router