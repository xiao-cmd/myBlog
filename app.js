const express = require('express')
const app = express()
const moment = require('moment')
const path = require('path')
const fs = require('fs')

// 注册中间件
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))


// 设置 默认采用的模板引擎名称
app.set('view engine', 'ejs')

// 设置模板页面的存放路径
app.set('views', './views')

// 将node_modules文件进行静态资源托管
app.use('/node_modules', express.static('node_modules'))


// 导入首页相关的路由模块
// const index = require('./router/index.js')
// app.use(index)
// 导入用户相关的路由模块
// const user = require('./router/user.js')
// app.use(user)


//使用循环的方式进行路由的自动注册
fs.readdir(path.join(__dirname, './router'), (err, filenames) => {
    if (err) return console.log('读取 router 目录中的路由失败')

    // 循环router目录下的每一个文件名
    filenames.forEach(fname => {
        const router = require(path.join(__dirname, './router', fname))
        app.use(router)
    });
})

app.listen(3000, () => {
    console.log("服务器运行成功……")
})