define([
        'app/app.routes',
        'app/shared/constants/constants',
        'app/components/home/HomeController'
    ],function (
        routes, 
        constants,  
        homeController
    ) {

        var moduleDepedency = ['ui.router', 'ngAnimate'];

        if ( typeof DEBUG_ENVIROMENT === "undefined" ) {
            moduleDepedency.push('templates-main');
        }else {
            moduleDepedency.push('mockServiceModule');
        }       
        angular.module('ngAppBootsrapper', moduleDepedency)
            .config(routes)
            .constant("CONSTANTS", constants)
            .controller("homeController", homeController);

        angular.bootstrap(angular.element(document.querySelector('#ngApp')), ['ngAppBootsrapper']);
});