angular.module('MainCtrl', [])
	.controller('ShoppingCartController', ShoppingCartController)
	.controller('formController', formController);

ShoppingCartController.$inject = ['$http', 'ShoppingCart','$resource','$scope'];
formController.$inject = ['$scope'];

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

function formController ($scope) {
    
    // we will store all of our form data in this object
    $scope.formData = {};
    
    // function to process the form
    $scope.processForm = function() {
        alert('awesome!');
    };
    
};