const express = require('express')
const app = express()
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs')

const port = 5000
const config = {
    host: 'nodedb',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const mysql = require('mysql')
const connection = mysql.createConnection(config)

app.get('/', (req,res) => {
    const sql = `SELECT * FROM people`
    connection.query(sql, function (err, result, fields) {
        if (err) {
            res.render('profile', { data: '' })
        } else {
            res.render('profile', { data: result })
        }
    });
    
})

app.listen(port, ()=>{
    console.log('Rodando na porta  '+ port)
})