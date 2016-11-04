(function () {
    angular.module("ecommerce", ['ui.router', 'ngResource'])
        .run(["$rootScope","Auth","$state", function ($rootScope,Auth,$state) {
            $rootScope.$on('$stateChangeStart',
                function (e, toState, toParams, fromState, fromParams, options) {
                    console.log("State change "+toState.name+" "+fromState.name);
                    var user = Auth.getCurrentUser();
                    var shouldBeLoggedIn = toState.shouldBeLoggedIn;
                    if(typeof shouldBeLoggedIn==="undefined"){
                        shouldBeLoggedIn=true;
                    }
                    if(shouldBeLoggedIn && typeof user==="undefined"){
                        e.preventDefault();
                    $state.go("login");
                    }
                })
            $rootScope.$on("event-login",function(e,data){
                console.log("Event "+ e.name);
                console.log("Data "+ data);
            })
        }])
})();