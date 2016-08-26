var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	username: String,
	password: String,
	fundsAmount: Number,
	transactions: [{
		type: Schema.Types.ObjectId, 
		ref: 'Transaction'
	}]
});

module.exports = mongoose.model('User', UserSchema);
