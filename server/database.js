const mysql = require('mysql');

const database = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"devilmaycry26",
    database:"wardrobe",
});


module.exports = database;