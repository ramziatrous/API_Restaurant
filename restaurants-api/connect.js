const {createPool} = require('mysql');
const pool =createPool({
    host : "database-1.cydkq0t59nei.eu-central-1.rds.amazonaws.com" ,
    user : "devopsUser",
    password : "couscous7out",
    database : "Restaurant",
    connectionLimit :10

})


module.exports = pool;