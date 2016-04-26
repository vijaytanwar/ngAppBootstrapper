var dependencies = [
  'bower_components/angular-mocks/angular-mocks',
];

define( dependencies, function(mock) {
    var mockServiceModule = angular.module('mockServiceModule', ['ngMockE2E']);
	mockServiceModule.run(['$httpBackend', function($httpBackend) {
	    //white list all the templates
		$httpBackend.whenGET(/app\//).passThrough();

	}]);
});