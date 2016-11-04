(function() {
	angular.module("ecommerce")
		.factory("Product", ["$resource", Product])

	function Product($resource) {
		return $resource("/api/product/:action/:productId", {
			productId: "@id"
		})
	}	
})()



