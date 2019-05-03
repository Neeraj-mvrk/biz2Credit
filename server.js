'use Strict'
const express = require('express');
const http = require('http');
const app = express();
const fs = require('fs');
//sphere-knn is a Node.JS module that provides fast nearest-neighbor lookups on a sphere
const spherKnn = require("sphere-knn");

app.set('view engine', 'ejs');
app.get('/', function(req, res){ 
	res.render('index',{users:points});
});

/**
 * Read file from location and get the required data
 */
let rawdata = fs.readFileSync('./views/Customers _Assignment_Coding Challenge (Upto 6 Years) (2).txt');  
rawdata=rawdata.toString();
let customer = JSON.parse('[' + rawdata.replace(/}\s*{/g, '},{') + ']');
let lookup = spherKnn(customer);
let points = lookup(53.339428,-6.257664,100,100000)  
//points.sort(function(a,b) {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);} );
points.sort(function(a, b) {
    return parseFloat(a.user_id) - parseFloat(b.user_id);
});
console.log(points);

const port = process.env.PORT || '8000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
