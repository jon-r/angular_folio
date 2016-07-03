var site = '/jonR_folio';

var app = angular.module('app', ['ngRoute', 'ngAnimate']);

app.config(['$compileProvider', function ($compileProvider) {
  $compileProvider.debugInfoEnabled(false);
}]);

//-- routes --------------------------------------------------------------------

app.config(function ($routeProvider, $locationProvider) {
 // $locationProvider.html5Mode(true);

  $routeProvider
    .when('/', {
      templateUrl: 'templates/intro.html',
      controller: 'Intro'
    })
    .when('/projects', {
      templateUrl: 'templates/worklist.html',
      controller: 'Work'
    })
    .when('/exp', {
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

.controller('mainCtrl', function($scope, getMe, navList) {

  $scope.setPage = function(name) {

    var homeClass = name == 'home' ? name : name + ' not-home';

    $scope.pgBody = homeClass;
    $scope.pgRef = name;
    $scope.postList = [];

  };

  getMe.posts().then(function(posts) {
    $scope.posts = posts;
    $scope.count = posts.length;
    $scope.navList = angular.copy(navList);
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

  $scope.$on('$viewContentLoaded', function(e) {
    $scope.loaded = true;
    console.log(e);
  });
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

// -- contsants -----------------------------------------------------------------

.constant('navList', [
  {ref: "projects", name: "Web Projects"},
  {ref: "exp", name: "Experiments"},
  {ref: "about", name: "About Me"},
]);

/*
.service('setList', function(filterFilter) {



});*/
