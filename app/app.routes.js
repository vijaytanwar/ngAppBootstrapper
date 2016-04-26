define(function () {
    var routes = function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/Home');
    
    $stateProvider.state('Home', {
        url: '/Home',
        templateUrl: "app/components/home/Home.htm",
        controller: "homeController",
        data: {
          requireLogin: true
        }
      });
  };
  return ['$stateProvider', '$urlRouterProvider',routes];
});