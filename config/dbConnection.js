const mysql = require('mysql2')
const { HOST, USUARIO, PASSWORD, DATABASE} = require('./config')

module.exports = () => {
    return mysql.createConnection({
        host: HOST,
        user: USUARIO,
        password: PASSWORD,
        database: DATABASE
    })
}
