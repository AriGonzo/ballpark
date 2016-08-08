var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	username: String,
	password: String,
	funds: {
		amount: Number,
		income: [{
			amount: Number,
			frequency: String
		}]
	}
});

module.exports = mongoose.model('User', UserSchema);
