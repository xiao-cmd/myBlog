const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// 注册中间件
app.use(bodyParser.urlencoded({ extended: false }))

// 设置 默认采用的模板引擎名称
app.set('view engine', 'ejs')

// 设置模板页面的存放路径
app.set('views', './views')

// 将node_modules文件进行静态资源托管
app.use('/node_modules', express.static('node_modules'))

// 用户请求的项目首页
app.get('/', (req, res) => {
    res.render('index', {})
})

// 用户请求的是注册页面
app.get('/register', (req, res) => {
    // 相对于'./views'下
    res.render('./user/register.ejs', {})
})

// 用户请求的是注册页面
app.get('/login', (req, res) => {
    res.render('./user/login.ejs', {})
})

// 注册新用户了
app.post('/register', (req, res) => {
    console.log(req.body)
    res.send({ msg: 'ok', status: 200 })
})

app.listen(3000, () => {
    console.log("服务器运行成功……")
})