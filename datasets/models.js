var mongoose = require('mongoose');

var User = mongoose.model('User', {
	name: String,
	email: String,
	phoneno: String,
	password: String
})