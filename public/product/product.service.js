(function() {
	angular.module("ecommerce")
		.service("ProductService", ["$q", ProductService])

	function ProductService($q) {
		var service = {
			list: list,
			get: get
		}

		return service;

		function list() {
			var deferred = $q.defer();

			Product.list(function(products) {
				deferred.resolve(products)
			})

			return deferred.promise	
		}

		function get(id) {
			var deferred = $q.defer();
			Product.get({id: id}, function(product) {
				deferred.resolve(product)
			}, function(err) {
				deferred.reject("Error!")
			})
			return deferred.promise;
		}
	}
})()