define(function () {
    var routes = function ($routeProvider, $locationProvider) {

    $routeProvider.
      when('/home', {
        templateUrl: "app/components/home/Home.htm",
        controller: "HomeController"
      }).
      otherwise({
        redirectTo: '/home'
      });

      $locationProvider.html5Mode(false);
  };
  return ['$routeProvider', '$locationProvider', routes];
});