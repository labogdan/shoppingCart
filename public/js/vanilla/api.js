
function bindData() {
}
bindData.prototype.get = function (response) {
	console.log(response);
	
	for (var key in response) {
		this[key] = response[key];
	}
};
bindData.prototype.bind = function () {
	$("#first").html(this.firstName);
	$("#last").html(this.lastName);
};


var testAjax = function (callback) {
	$.ajax({
		url : 'http://url.to.mock.com',
		success : function (response) {
			var binding = new bindData();
			binding.get(response);
			binding.bind();
			if (typeof callback === 'function' ) { setTimeout(callback, 1000); }
		},
		failure : function () {
		}
	});
};

var ajax2 = function () {
	$.ajax({
		url : 'url.to.mock.com'
	}).done(function (response) {
		var binding = new bindData();
		binding.get(response);
		binding.bind();
	});
};

var binding = new bindData();
var ajax3 = function () {
	$.ajax({
		url : 'url.to.mock.com'
	}).then(function (response) {
		binding.get(response);
		binding.bind();
	});
};