angular.module("CloudPcr", ['ui.router', 'ui.utils', 'ngTouch', 'ui.bootstrap', 'ngSanitize', 'oc.lazyLoad'])
.config(function ($compileProvider, $stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode({
        enabled:false,
        requireBase:false
    });

    $stateProvider.state('login', {
        url: '/login',
        templateUrl: "/html/Views/Login.html",
        controller: 'loginController'
    })
    .state('home', {
        url: '/home',
        templateUrl: "/html/Views/Home.html",
        controller: 'homeController'
    })
    .state('PcrForm', {
        url: '/PcrForm?pcrid',
        templateUrl: "/html/Views/PcrForm.html",
        controller: 'pcrFormController'
    });

    $urlRouterProvider.when('', '/PcrForm');
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/); // Fix for cordova builds
});