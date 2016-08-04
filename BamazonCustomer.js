var mysql = require('mysql');
var prompt = require('prompt');
var inquirer = require('inquirer');
var colors = require('colors');

//connect to the Bamazon Database
var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'magicman86',
	database: 'bamazon'
});

//connects to the datbase y error handling
connection.connect(function(err) {
	if(err) {
		console.log('Unable to Connect:' + err.stack);
		return;
	};
		console.log('');
		console.log('Bienvenido a Bamazon')
		console.log('You better Follow the Instructions below,Fool:');
})

//This will display the bamazon catalog,
connection.query("SELECT ItemId, Price ,ProductName FROM products GROUP BY price WHERE stockquantity > 0",
 function(err,res){
		if(err) {
			console.log(err);
			return;
		}
		console.log(res);//not sure what this does?
		})

//now lets prompt the user 
var prompt = {
	properties: {
		productID: {
			description: "Enter the ID# for the item you would like to purchase.",
			type: 'int'
		},
		Quantity: {
			description: "How many are you trying to get?",
			type: 'int'
		}
	}
};



//user has answered both questions

function promptUser(answer){
	connection.query('SELECT id, stockquantity, price FROM products WHERE id =' + answer.productID,
		function(err,res) {
			if(err) {
				console.log('Ahh shit, you broke it:' + err.stack);
				return('Damn Bro');
			};
		});
}
