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

});







// Routing

app.get('',(req,res) => {
    res.render('home');
});



app.listen(port, () => console.log('listening on port ${port}'));

