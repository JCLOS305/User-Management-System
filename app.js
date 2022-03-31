const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mysql = require('mysql');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//  Middleware
// Parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false })); // 

//  application/json Parsing

app.use(bodyParser.json());                                        

// Static-Files
app.use(express.static('public'));


// Handlebars-Template 
app.engine('hbs', exphbs.engine( {extname: '.hbs'}));
app.set('view engine', 'hbs');

// Connection Pool
const pool = mysql.createPool({
     connectionLimit : 100, 

     host            : process.env.DB_Host,
     user            : process.env.DB_USER,
     password        : process.env.DB_PASS,
     database        : process.env.DB_NAME

});

// connect to db
pool.getConnection((err, connection) => {
    if (err) throw err; // broken connection
    console.log('Connected as ID ' + connection.threadId);
});





// Routing

app.get('',(req,res) => {
    res.render('home');
});



app.listen(port, () => console.log('listening on port ${port}'));

