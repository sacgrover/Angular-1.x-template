(function() {
	angular.module("ecommerce")
		.config(["$urlRouterProvider", "$stateProvider", function($urlRouterProvider, $stateProvider) {
			// we'll define states here
			$urlRouterProvider.otherwise("/product")
			$stateProvider
				.state("main.product", {    // Child state
					url: "/product",  // /product/list	
					views: {
						'': {
							templateUrl: "/product/_list.html",
							controller: "ProductsController as ctrl"		
						},
						'filter': {
							templateUrl: "/product/_filters.html",
							// controller: "ProductsController as ctrl"
						}
					}
					
					
				})
				.state("main.product.show", {
					url: "/show/:id",  // /product/show	
					templateUrl: "/product/show.html",
					controller: "ProductShowController as ctrl"
				})
			
	}])		
})()