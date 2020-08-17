const mysql = require('mysql')

// 创建链接对象
const  con = mysql.createConnection ({
    host: 'localhost',
    user:'root',
    password:'LIUhuan1994',
    port:'3306',
    database:'myblog'
})

// 开始连接
con.connect();

// 执行sql语句
const sql = `update users set realname='李四2' where username='lisi';`
con.query(sql, (err,result) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(result)
})

//关闭连接
con.end();