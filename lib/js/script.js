var site = '/jonR_folio';

var app = angular.module('app', ['ngRoute', 'ngAnimate']);

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
      controller: 'Exp'
    })
    .when('/about', {
      templateUrl: 'templates/about.html',
      controller: 'About'
    })
    .when('/demo/:slug', {
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
      $scope.pgRef = name;
       $scope.postList = [];
    };




  getMe.posts().then(function(posts) {
    $scope.posts = posts;
    $scope.count = posts.length;
  });


})

.controller('Intro', function ($scope) {

  $scope.setPage('home');
})

.controller('Work', function ($scope) {

  $scope.pgTitle = 'Work Projects';

  $scope.setPage('projects');


})

.controller('Exp', function ($scope) {




  $scope.pgTitle = 'Experiments';

  $scope.setPage('exp');


})

.controller('Demos', function ($scope, filterFilter, $routeParams) {

  var posts = $scope.posts,
    lastPost = posts.length - 1,
    ref = $routeParams.slug,
    post = filterFilter(posts, ref)[0],
    index = posts.indexOf(post);

  $scope.prev = index != 0 ? posts[index - 1] : posts[lastPost];
  $scope.next = index < lastPost ? posts[index + 1] : posts[0];


  $scope.post = post;

  $scope.setPage(post.cat);


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

 })
/*
.service('setList', function(filterFilter) {



});*/
