(function() {
	angular.module("ecommerce")
		.directive("productCard", function() {
			return {
				restrict: "EAC",
				templateUrl: "/product/_card.html",
				scope: {
					product: "="
				},
				controller: ["CartService", function(CartService) {
					var vm = this;

					vm.addToCart = function(item) {
						CartService.addItemToCart(item)
					}	
				}],
				controllerAs: "cart",
				transclude: true
			}
			
		})
})()