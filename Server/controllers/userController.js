const mysql = require('mysql');



// Connection Pool
const pool = mysql.createPool({
    connectionLimit : 100,  
    host            : process.env.DB_HOST,
    user            : process.env.DB_USER,
    password        : process.env.DB_PASS,
    database        : process.env.DB_NAME
});




// view users
exports.view = (req,res) => {

// connect to db
pool.getConnection((err, connection) => {
   if (err) throw err; // broken connection
   console.log('Connected as ID ' + connection.threadId);

    // user the connection
    connection.query('SELECT * FROM user', (err, rows) => {
     // when done with the connection , release it
     connection.release();

     if(!err) {
         res.render('home', { rows });
        } else {
            console.log(broken);
        }


        console.log('The data from user table: \n, rows');


    });
});

}