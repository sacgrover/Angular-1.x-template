(function() {
	angular.module("ecommerce")
		.config(["$urlRouterProvider", "$stateProvider", function($urlRouterProvider, $stateProvider) {
			$urlRouterProvider.otherwise("/login")

			$stateProvider
				.state("login", {
					url: "/login",
					templateUrl: "/auth/_login.html",
					controller: ["$state", "Auth", function($state, Auth) {
						var vm = this;
						vm.user = {}

						vm.login = function(form) {
							if(form.$valid) {
								Auth.login(vm.user.email, vm.user.password)
								$state.go("main.product")
							}					
						}

						// Do not show login page if current user info is available
						if(Auth.getCurrentUser()) {
							$state.go("main.product")
							return;
						}

					}],
					shouldBeLoggedIn: false,
					controllerAs: "ctrl"
				})
		}])
})()
