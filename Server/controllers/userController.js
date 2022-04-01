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
    connection.query('SELECT * FROM user WHERE status = "active"', (err, rows) => {
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


// Find User by Searchbar
exports.find = (req, res) => {

    pool.getConnection((err, connection) => {
        if (err) throw err; // broken connection
        console.log('Connected as ID ' + connection.threadId);
        let searchTerm = req.body.search;
         // user the connection
         connection.query('SELECT * FROM user WHERE first_name LIKE ? OR last_name LIKE ?', ['%' + searchTerm + '%','%' + searchTerm + '%'], (err, rows) => {
          // when done with the connection , release it
          connection.release();
          if(!err) {
              res.render('home', { rows });
             } else {
                 console.log(err);
             }
        console.log('The data from user table: \n', rows);
         });
       });
}

exports.form = (req, res) => {
    res.render('add-user');
    }
// add new user 
exports.create = (req, res) => {

    const {first_name, last_name, email, phone, comments } = req.body;
    // res.render('add-user');
    pool.getConnection((err, connection) => {
        if (err) throw err; // broken connection
        console.log('Connected as ID ' + connection.threadId);
        let searchTerm = req.body.search;
         
         // user the connection
         connection.query('INSERT INTO user SET first_name = ?, last_name = ?, email = ?, phone = ?, comments = ?',[first_name,last_name, email, phone, comments],(err, rows) => {
          // when done with the connection , release it
          connection.release();
          if(!err) {
              res.render('add-user', { alert:'User added successfully.'});
             } else {
                 console.log(err);
             }
        console.log('The data from user table: \n', rows);
         });
       });
    }
