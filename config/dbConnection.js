const mysql = require('mysql2')
const { HOST, USUARIO, PASSWORD, DATABASE} = require('./config')

module.exports = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'games'
    })
}
