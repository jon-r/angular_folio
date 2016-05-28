var site = '/jonR_folio';

var app = angular.module('app', ['ngRoute']);

//-- routes --------------------------------------------------------------------

app.config(function ($routeProvider, $locationProvider) {
 // $locationProvider.html5Mode(true);

  $routeProvider
    .when('/', {
      templateUrl: 'templates/intro.html',
      controller: 'Intro'
    })
    .when('/work', {
      templateUrl: 'templates/worklist.html',
      controller: 'Work'
    })
    .when('/experiments', {
      templateUrl: 'templates/worklist.html',
      controller: 'Play'
    })
    .when('/about', {
      templateUrl: 'templates/about.html',
      controller: 'About'
    })
    .when('/work/:slug', {
      templateUrl: 'templates/demoframe.html',
      controller: 'Demos'
    })
    .otherwise({
      redirectTo: '/'
    });

})

//-- controls ------------------------------------------------------------------

.controller('mainCtrl', function($scope, getMe) {

    $scope.setPage = function(name) {
      $scope.activePage = name;
    };



  getMe.posts().then(function(posts) {
    $scope.posts = posts;
    $scope.count = posts.length;
  })
})

.controller('Intro', function ($scope) {

  $scope.setPage('home');
})

.controller('Work', function ($scope) {


  $scope.category = {cat : 'work' }
  $scope.setPage('work');

})

.controller('Play', function ($scope) {

  $scope.category = {cat : 'exp' }
  $scope.setPage('exp');

})

.controller('Demos', function ($scope, filterFilter, $routeParams) {

  var posts = $scope.posts,
    lastPost = posts.length - 1,
    ref = $routeParams.slug,
    classes = "sub-active " + ref,
    filtered = filterFilter(posts, ref)[0],
    index = posts.indexOf(filtered);

  $scope.prev = index != 0 ? posts[index - 1] : posts[lastPost];
  $scope.next = index < lastPost ? posts[index + 1] : posts[0];



  $scope.setPage(classes);


})

.controller('About', function($scope) {

  $scope.setPage('about');

})

//-- services ------------------------------------------------------------------

.service('getMe', function ($http) {

  return {
    posts : function () {
      return $http.get('lib/data/links.json').then(function(result) {

        return result.data;
      },function(err) {
        console.log(err);
      })
    },
    single : function (ref) {

    }
  }

 });
