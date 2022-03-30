const express = require ('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mysql = require('mysql');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;







app.listen(port, () => console.log('listening on port ${port}'));

