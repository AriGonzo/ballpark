var path = require('path');
var Expense = require('../models/Expense.js');

module.exports = function(app){
	
	app.get('/expenses', function(req, res){
		
	});

	app.post('/expense', function(req, res){
		console.log(req.body.expense)
		var expense = new Expense();

		expense.title = req.body.expense.title;
		expense.save(function(){
			res.sendStatus(200);
		});
	});
}