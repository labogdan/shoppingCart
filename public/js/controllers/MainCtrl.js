angular.module('MainCtrl', [])
	.controller('ShoppingCartController', ShoppingCartController);

ShoppingCartController.$inject = ['$http', 'ShoppingCart','$resource','$scope'];

function ShoppingCartController($http, ShoppingCart,$resource,$scope) {
	var vm = this;
	
	ShoppingCart.query(function(res) {
		console.log(res);
		vm.data = res;
		$scope.moreData = res[0];
		for (var x in vm.data) {
			
		}
		//console.log(vm.data[0].device.name);
		//console.log($scope.moreData.device.name);
	});
	
	
}