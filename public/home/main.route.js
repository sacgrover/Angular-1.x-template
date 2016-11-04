(function() {
	angular.module("ecommerce")
		.config(["$urlRouterProvider", "$stateProvider", function($urlRouterProvider, $stateProvider) {

			$stateProvider
				.state("main", {
						abstract: true,
						views: {
						'': {
							template: "<div ui-view='filter'></div>" + 
									  "<div ui-view=''></div>"
						}, 
						'header': {
							templateUrl: "/home/_header.html"
						},

						'cart': {
							templateUrl: "/cart/cart.html",
							controller: "CartController as cart"					
						}
					}
				})
				
		}])
})()