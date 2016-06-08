define([
        'app/app.routes',
        'app/shared/constants/constants',
        'app/components/home/HomeController'
    ],function (
        Routes, 
        Constants,  
        HomeController
    ) {

        var moduleDepedency = ['ngMaterial', 'ngAnimate', 'ngRoute'];

        if ( typeof DEBUG_ENVIROMENT === "undefined" ) {
            moduleDepedency.push('templates-main');
        }else {
            moduleDepedency.push('mockServiceModule');
        }       
        angular.module('ngAppBootsrapper', moduleDepedency)
            .config(Routes)
            .constant("Constant", Constants)
            .controller("HomeController", HomeController);

        angular.bootstrap(angular.element(document.querySelector('#ngApp')), ['ngAppBootsrapper']);
});