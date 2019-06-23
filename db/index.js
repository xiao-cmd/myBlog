   // 创建数据库连接
   var mysql = require('mysql');
   var conn = mysql.createConnection({
       host: 'localhost',
       user: 'root',
       password: 'root',
       database: 'mysql_001'
   });

   module.exports = conn