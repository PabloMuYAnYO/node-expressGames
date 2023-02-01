const mysql2 = require('mysql2');
const { HOST, USUARIO, PASSWORD, DATABASE} = require('./config');

module.exports = () => {
    return mysql2.createConnection({
        host: 'HOST',
        user: 'USUARIO',
        password: 'PASSWORD',
        database: 'DATABASE'
    })
}
