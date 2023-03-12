const express = require("express");
const exphbs=require("express-handlebars");

const bodyParser=require("body-Parser");

const mysql=require("mysql");

require('dotenv').config();
const data=express();
const port =process.env.PORT || 5000;

data.use(bodyParser.urlencoded(
    {extended:false}));
data.use(bodyParser.json());
//static
data.use(express.static("public"));

//template engine
const handlebars=exphbs.create({extname:".hbs"});
data.engine('hbs',handlebars.engine);
data.set("view engine","hbs");
/*
//mysql
const con=mysql.createPool({
    connectionLimit:10,
    host     :process.env.DB_HOST,
    user     :process.env.DB_USER,
    password :process.env.DB_PASS,
    database :process.env.DB_NAME
});
 
//Check connection
//const connection=require("./.env");
//data.use('/',connection);
con.getConnection((err,connection)=>{
    if(err) throw err
    console.log("connection success");
});
*/
/*
//router
data.get('/',(req,res)=>{
res.render('home');
});*/
//listen port
const routes=require("./server/routes/student");
data.use('/',routes)
data.listen(port,()=>{
    console.log("listenig port:"+port);
});

