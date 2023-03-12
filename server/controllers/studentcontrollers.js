/*const mysql=require("mysql2");
const con=mysql.createPool({
    connectionLimit:10,
    host     :process.env.DB_HOST,
    user     :process.env.DB_USER,
    password :process.env.DB_PASS,
    database :process.env.DB_NAME
});

exports.view=(req,res)=>{
    con.getConnection((err,connection)=>{
        if(err) throw err
         connection.query("select*from firstproject",(err,rows)=>{
            connection.release();
            if(!err){
                
                 res.render("home",{rows});
            }else{
                console.log("Error ",+err);
           }
        });
    });
    res.render('home');
};*/
const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

exports.view = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;

    connection.query("SELECT * FROM persons", (err, rows) => {
      connection.release();

      if (!err) {
        
        res.render("home", { rows });
      } else {
        console.log("Error", err);
        res.render("home");
      }
    });
  });
};
exports.adduser=(req,res)=>{
 res.render("adduser");
}
/*exports.save=(req,res)=>{
    pool.getConnection((err, connection) => {
        if (err) throw err;
        const {idpersons,name,email}=req.body;
    connection.query("insert into persons (Id,Name,Email) values (?,?,?)",
    [idpersons,name,email],
     (err, rows) => {
        connection.release();
  
        if (!err) {
          
          res.render("adduser",{rows});
        } else {
          console.log("Error", err);
          //res.render("adduser");
        }
      });
    });*/
    exports.save = (req, res) => {
        pool.getConnection((err, connection) => {
          if (err) throw err;
      
          const { idpersons, name, email } = req.body; 
      
          connection.query(
            "INSERT INTO firstproject.persons (idpersons, name, email) VALUES (?, ?, ?)",
            [idpersons, name, email], // Close the array with a square bracket
            (err, rows) => { // Add an arrow function
              connection.release();
              if (err) {
                console.log("Error", err);
                res.render("adduser");
              } else {
                res.render("adduser", { msg:"user detail added successfully" });
              }
            }
          );
        });
      };
      exports.updateuser=(req,res)=>{
        pool.getConnection((err, connection) => {
            if (err) throw err;
            let {idpersons}=req.body;
            connection.query("SELECT * FROM firstproject.persons where idpersons=?",[idpersons],
             (err, rows) => {
              connection.release();

        
              if (!err) {
                
                res.render("updateuser", { rows });
              } else {
                console.log("Error", err);
            
              }
            });
          });
        };

    
    


