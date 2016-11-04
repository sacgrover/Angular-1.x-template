(function() {
	angular.module("ecommerce")
		.filter("mycurrency", ["$filter", function($filter) {
			return function(input, currencyPrefix, multiplier) {
				input = input * multiplier
				currencyPrefix = currencyPrefix || "INR"
				return currencyPrefix + " " + $filter("number")(input)
			}
		}])
})()