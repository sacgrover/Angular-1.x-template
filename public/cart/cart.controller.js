(function() {
	angular.module("ecommerce")
		.controller("CartController", ["CartService","$rootScope", CartController])

	function CartController(CartService,$rootScope) {
		console.log("running cart controller")
		var vm = this;
		vm.items = CartService.getItems();
        $rootScope.items =CartService.getItems();
        $rootScope.$watch("items",function(){
			return function(){console.log("item changed")};
		})
	}
})()