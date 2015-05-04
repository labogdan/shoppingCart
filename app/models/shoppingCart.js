var mongoose = require('mongoose');

/*
module.exports = mongoose.model('ShoppingCart', {
	plan : {id: String, name : String, price: Number, quantity : Number},
	device : {id: String, name : String, price: Number, quantity : Number}
});
*/

module.exports = mongoose.model('ShoppingCart', {
	id: String,
	name : String,
	price: Number,
	quantity : Number
});