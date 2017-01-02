var path = require('path');
var Expense = require('../models/Expense.js');

module.exports = function(app){
	
	app.get('/expenses', function(req, res){
		Expense.find({}).exec(function(err, expenses){
			res.send(expenses)
		});
	});

	app.post('/expense', function(req, res){
		var expense = new Expense(req.body.expense);

		expense.save(function(){
			res.sendStatus(200);
		});
	});
}