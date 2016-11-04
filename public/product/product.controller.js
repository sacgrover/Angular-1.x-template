(function () {
	angular.module("ecommerce")
		.controller("ProductsController", ["ProductService", "CartService", "Product",  ProductsController])
		.controller("ProductShowController", ["ProductService", "$stateParams", "$state", "Product", ProductShowController])


	function ProductsController(ProductService, CartService, Product) {
		var vm = this;
		vm.products = [];

		vm.products = Product.query()

		vm.addToCart = function(product) {
			CartService.addItemToCart(product)
		}
	}	

	function ProductShowController(ProductService, $stateParams, $state, Product) {
		var vm = this;
		// get the id from location and send api call to get product info
		vm.product = {}
		var id = $stateParams.id;
		Product.get({id: id}, function(product) {
			vm.product = product
		})
	}	
})()