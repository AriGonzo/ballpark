var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TransactionSchema = new Schema({
	date: Date,
	amount: Number,
	fundsBefore: Number,
	fundsAfter: Number,
	expenseId: {
		type: Schema.Types.ObjectId, 
		ref: 'Expense'
	}
	});

module.exports = mongoose.model('Transaction', TransactionSchema);