var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ExpenseSchema = new Schema({
	title: String,
	user: {
		type: Schema.Types.ObjectId, 
		ref: 'User'
	},
	amount: Number,
	active: Boolean,
	dueDate: Date,
	startDate: Date,
	endDate: Date,
	term: {
		type: String,
		enum: ['One Time', 'Short-Term', 'Monthly'], 
		default: 'One Time'
	},
	isFluctuating: Boolean,
	fluctuatingObj: {
		high: {
			amount: Number,
			month: Date
		},
		low: {
			amount: Number,
			month: Date
		}
	},
	isBallparked: Boolean
});

module.exports = mongoose.model('Expense', ExpenseSchema);
