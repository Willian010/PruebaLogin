const mysql = require('mysql');

module.exports = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'julianvega',
        password: 'Alfa1010$',
        database: 'SRMIPqa',
        //port: '3306',
    });



}