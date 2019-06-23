const moment = require('moment')

// 导入数据库操作模块
const conn = require('../db/index.js')

// 展示用户请求的是注册页面
const showRegisterPage = (req, res) => {
    // 相对于'./views'下
    res.render('./user/register.ejs', {})
}

// 展示登录页面
const showLoginPage = (req, res) => {
    res.render('./user/login.ejs', {})
}

// 注册新用户的请求处理函数
const showRegister = (req, res) => {
    // 获取表单中的数据
    const body = req.body

    if (body.username.trim().length <= 0 || body.password.trim().length <= 0 || body.nickname.trim().length <= 0) {
        return res.send({ msg: '请填写完整的表单数据后再注册用户', status: 501 })
    }
    // 查询用户名是否重复
    const sql1 = 'select count(*) as count from blog_users where username=?'
    conn.query(sql1, body.username, (err, result) => {
        if (err) return res.send({ msg: '用户名查重失败', status: 502 })
            // console.log(result)
        if (result[0].count !== 0) return res.send({ msg: '请更换其它用户名后重新注册', status: 503 })
    })

    // 执行注册的业务逻辑
    body.ctime = moment().format('YYYY-MM-DD HH:mm:ss')
    const sql2 = 'insert into blog_users set ?'
    conn.query(sql2, body, (err, result) => {
        if (err) return res.send({ msg: '注册新用户失败', status: 504 })
        if (result.affectedRows !== 1) return res.send({ msg: '注册新用户失败', status: 505 })
        res.send({ msg: 'ok', status: 200 })
    })
}

// 登录的请求处理函数
const showLogin = (req, res) => {
    // 获取表单中的数据
    const body = req.body

    // 执行sql语句,查询用户是否存在
    const sql1 = 'select *from blog_users where username=? and password=?'
    conn.query(sql1, [body.username, body.password], (err, result) => {
        if (err) return res.send({ msg: '用户登录失败', status: 501 })
        console.log(result)
        if (result.length !== 1) return res.send({ msg: '用户登录失败', status: 502 })
        res.send({ mag: 'ok', status: 200 })
    })
}

module.exports = {
    showRegisterPage,
    showLoginPage,
    showRegister,
    showLogin

}