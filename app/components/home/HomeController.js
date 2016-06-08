define(function () {
	var HomeController = function ($scope, $window) {
		$scope.name = "vijay";

		$scope.submitForm = function(){
			$window.alert(JSON.stringify($scope.user));
		};
	};
	return ["$scope", "$window", HomeController];
});