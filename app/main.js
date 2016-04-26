
var APP = {
    Configuration: {
        API_URL: API_URL
    }
};

require.config({
    baseUrl: '.',
    shim: {
        'ui-bootstrap': ['jquery', 'angular']
    },
    paths: {
        'jquery': 'node_modules/jquery/dist/jquery.min.js',
        'angular': 'bower_components/angular/angular.js',
        'lodash': 'node_modules/httpbackend/node_modules/lodash/lodash'
    },
});

var mockModule = [];

if ( typeof DEBUG_ENVIROMENT !== "undefined" ) {
  mockModule = ['app/mock_services/mockServiceModule'];
}

require(mockModule);

require(['app/app.module']);
