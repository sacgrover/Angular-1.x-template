(function() {
	angular.module("ecommerce")
		.service("Auth", ["$rootScope",function($rootScope) {
			var currentUser   // holds current user info
			var service = {
				login: function(username, password) {
					if(username && password) {
						currentUser = {
							username: username,							
						}
						$rootScope.$emit("event-login",{
							user:{
								username:username,
								id:1
							}
						})
					}
				},

				logout: function() {
					currentUser = undefined;
				},

				getCurrentUser: function() {
					return currentUser
				}
			}

			return service
		}])
})()