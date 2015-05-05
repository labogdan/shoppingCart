
angular.module("MainCtrl")
	.filter("dollars", function() {
		return function (text) {
			return ('$' +  text);
		};
	})
	.filter("addX", function () {
		return function (text) {
			return ('x' + text);
		};
	});
