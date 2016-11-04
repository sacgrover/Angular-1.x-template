(function() {
	angular.module("ecommerce")
		.directive("cartItem", function() {
			return {
				restrict: "EAC",
				scope: {
					cartItem: "=item"
				},
				template: '{{cartItem.name}} <span class="badge pull-right">{{cartItem.qty}}</span>',
				link: function(scope, element, attrs) {
					
					console.log("Scope", scope)
					console.log("Element", element)
					console.log("Attrs", attrs)

				}
			}
		})
})()