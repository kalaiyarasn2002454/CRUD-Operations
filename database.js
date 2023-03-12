var mysql=require("mysql");
var connection=mysql.createConnection({
    host  :'localhost',
    database:'firstproject',
    user:'root',
    password:'Kalai@2002'
});
module.exports = connection;