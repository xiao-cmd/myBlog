const express = require('express')
const router = express.Router()

// 创建数据库连接
var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mysql_001'
});

// 导入自己的业务处理模块
const ctrl = require('../controller/index.js')

// 用户请求的项目首页
router.get('/', ctrl.showIndexPage)


// 把路由模块暴露出去
module.exports = router