var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ExpenseSchema = new Schema({
	title: String,
	type: {
		type: String,
		enum: ['Expense', 'Income']
	},
	amount: Number,
	date: Number,
	paid: Boolean
});

module.exports = mongoose.model('Expense', ExpenseSchema);
