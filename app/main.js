
var APP = {
    Configuration: {
        API_URL: API_URL
    }
};

require.config({
    baseUrl: '.',
    paths: {
            //support cdn urls. 'empty specified that these files will not be bundled;'
            'jquery': 'empty:',
            'angular': 'empty:',
            'angular-route': 'empty:',
            'angular-cookies': 'empty:',
            'angular-messages': 'empty:',
            'angular-animate': 'empty:',
            'angular-aria': 'empty:',
            'angular-material': 'empty:',
            'hammerjs': "empty:",

            //loaded from local urls
            'angular-mocks':'bower_components/angular-mocks/angular-mocks',
            'lodash': 'node_modules/httpbackend/node_modules/lodash/lodash',
            'mockServiceModule':'app/mock_services/mockServiceModule'
    },
    shim:{
            'angular-route': ['angular'],
            'angular-animate': ['angular'],
            'angular-aria': ['angular'],
            'angular-material': ['angular','hammerjs'],
            'angular-mocks': ['angular'],
            'mockServiceModule': ['angular-mocks']
    }
});

var rpath = requirejs.s.contexts._.config.paths;
var debug = (typeof DEBUG_ENVIROMENT !== "undefined" );
var coreModules = debug ? mockModule = ['mockServiceModule'] : [];

//This section will run for local build, and i there is not need for internet connectivity for local development.
rpath['hammerjs'] = 'node_modules/hammerjs/hammer.min';
rpath['jquery'] =  debug ? 'node_modules/jquery/dist/jquery.min' : ['https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-rc1/jquery.min','node_modules/jquery/dist/jquery.min']
rpath['angular'] = debug ? 'bower_components/angular/angular.min' : ['https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.6/angular.min', 'bower_components/angular/angular.min'];
rpath['angular-route'] = debug ? 'node_modules/angular-route/angular-route' : [ 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.6/angular-route.min', 'node_modules/angular-route/angular-route.min'];
rpath['angular-cookies'] = debug ? 'bower_components/angular-cookies/angular-cookies' : [ 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.6/angular-cookies.min', 'bower_components/angular-cookies/angular-cookies.min'];
rpath['angular-messages'] = debug ? 'bower_components/angular-messages/angular-messages' : [ 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.6/angular-messages.min', 'bower_components/angular-messages/angular-messages.min'];
rpath['angular-animate'] = debug ? 'bower_components/angular-animate/angular-animate' : [ 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.6/angular-animate.min', 'bower_components/angular-animate/angular-animate.min'];
rpath['angular-aria'] = debug ? 'bower_components/angular-aria/angular-aria' : [ 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.6/angular-aria.min', 'bower_components/angular-aria/angular-aria.min'];
rpath['angular-material'] = debug ? 'bower_components/angular-material/angular-material.min' : ['https://cdnjs.cloudflare.com/ajax/libs/angular-material/1.0.9/angular-material.min','bower_components/angular-material/angular-material.min']

var dependencies = coreModules.concat(['jquery','angular', 'angular-route', 'angular-animate','angular-aria','angular-material']);

require(dependencies,function(){
    require(['app/app.module']);
});

