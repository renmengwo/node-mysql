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
const sql = `insert into blogs (title,content,createtime, author) values ('标题c','内容c','1500000001','liuhuan')`
con.query(sql, (err,result) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(result)
})

//关闭连接
con.end();