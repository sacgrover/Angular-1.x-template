(function() {
	angular.module("ecommerce")
		.service("CartService", CartService)

	function CartService() {
		var items = []
		var service = {
			addItemToCart: function(item) {
				var existingItem = _.find(items, function(i) {
					return i.id === item.id
				})

				if(existingItem) {
					existingItem.qty += 1
				} else {
					item.qty = 1;
					items.push(item)
				}
 
				console.log("Adds item to cart")
			},
			getItems: function() {
				return items || [];
			}
		}

		return service;

		
	}	
})()