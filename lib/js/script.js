var site = '/jonR_folio';

var app = angular.module('app', ['ngRoute']);


app.config(function ($routeProvider, $locationProvider) {
 // $locationProvider.html5Mode(true);

  $routeProvider
    .when('/', {
      templateUrl: 'templates/intro.html',
      controller: 'Main'
    })
    .when('/folio', {
      templateUrl: 'templates/work.html',
      controller: 'Work'
    })
    .when('/experiments', {
      templateUrl: 'templates/work.html',
      controller: 'Play'
    })
    .when('/work/:slug', {
      templateUrl: 'templates/demoframe.html'
    })
    .otherwise({
      redirectTo: '/'
    });

})

.controller('Main', function ($scope, $http, $routeParams) {

})

.controller('Content', function ($scope, $http, $routeParams) {

})

.controller('Work', ['$scope','getPosts', function ($scope, getPosts) {


  getPosts('portfolio').then(function(posts) {
    $scope.posts = posts
  })
  //out = getPosts('portfolio');

}])

.controller('Play', ['$scope','getPosts', function ($scope, getPosts) {

  getPosts('experiments').then(function(posts) {
    $scope.posts = posts
  })

}])





.service('getPosts', function ($http) {

  return function (category) {
    return $http.get('lib/data/links.json').then(function(result) {

      return result.data[category];
    },function(err) {
      console.log(err);
    })
  }

 });



//  getMe.cities().then(function(result) {
//    $scope.cities = result;
//  }, function(err) {
//    console.log(err);
//  })
//.service('getMe', function($http) {
//  return {
//    weather : function() {
//      return $http.get('data/weather.json').then(function(success) {
//
//        return success.data.vals;
//
//      }, function(err) {
//        console.log(err);
//      })
//    },
//    cities : function() {
//      return $http.get('data/cities.json').then(function(success) {
//
//        return success.data;
//
//      }, function(err) {
//        console.log(err);
//      })
//    },
//    met : function(ID) {
//      var url = (ID == 'typical') ?
//          'data/typical.json' : 'http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/'+ID;
//      return $http({
//        method: 'GET',
//        url: url,
//        params: {
//          res: 'daily',
//          key: '1557995e-17dd-41ff-9ed9-2803b0328aa0',
//        }
//      }).then(function(success) {
//
//        return success.data;
//
//      }, function(err) {
//        console.log(err);
//      })
//    }
//  };
//})
