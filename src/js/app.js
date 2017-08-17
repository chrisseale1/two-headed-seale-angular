var twoHeadedSealApp = angular.module('twoHeadedSealApp', ['ngRoute']);

twoHeadedSealApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })
        .when("/home", {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutController'
        })
        .when('/services', {
            templateUrl: 'views/services.html',
            controller: 'ServicesController'
        })
        .when('/contact', {
            templateUrl: 'views/contact.hmtl',
            controller: 'ContactController'
        })
        .when('/portfolio', {
            templateUrl: 'views/portfolio.html',
            controller: 'PortfolioController'
        })
        .when('/tools', {
            templateUrl: 'views/tools.html',
            controller: 'ToolsController'
        })
        .otherwise({
            redirect: '/home'
        })
}]);