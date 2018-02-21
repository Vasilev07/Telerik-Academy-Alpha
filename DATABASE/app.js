const mysql = require('mysql');
const config = require('./db-config.json');
const connection = mysql.createConnection(config);

connection.connect();

const suppliersFullName = `SELECT CONCAT(first_name, ' ', last_name)
 as full_name FROM suppliers`;

connection.query(suppliersFullName, (error, results) => {

    results.forEach((element) => {
        console.log(`${element.full_name}`);
    });
});

const productByCost = `SELECT product_name, standart_cost 
FROM products ORDER BY standart_cost 
DESC`;

connection.query(productByCost, (error, results) => {
    results.map((row) => `${row.product_name} : ${row.stand}`);
});

connection.end();