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
    .when('/projects', {
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

.controller('mainCtrl', function($scope, get) {
  $scope.p = {};

  get.posts().then(function(posts) {

    $scope.posts = posts;
    $scope.count = posts.length;
  })
})

.controller('Intro', function ($scope) {

  $scope.$parent.p = {
    title : 'Jon Richards',
    subtitle : 'Full Stack Web Developer',
    navClass : 'intro-nav',
  };


})

.controller('Work', function ($scope) {


  $scope.$parent.p = {
    title: 'Projects',
    subtitle : 'Building Web Experiences',
    navClass : '',
  }

//  $scope.mainStyle = {'background':'#388E3C'};

  $scope.category = {cat : 'work' }


})

.controller('Play', function ($scope) {

  $scope.$parent.p = {
    title: 'Experiments',
    subtitle : 'Creative Coding & Learning',
    navClass : '',
  }

//  $scope.mainStyle = {'background': '#F44336'};

  $scope.category = {cat : 'exp' }

})

.controller('Demos', function ($scope, filterFilter, $routeParams) {

  var posts = $scope.posts,
    lastPost = posts.length - 1,
    ref = $routeParams.slug,
    filtered = filterFilter(posts, ref)[0],
    index = posts.indexOf(filtered);

  $scope.prev = index != 0 ? posts[index - 1] : posts[lastPost];
  $scope.next = index < lastPost ? posts[index + 1] : posts[0];

  $scope.$parent.p = {
    title: filtered.name,
    subtitle : filtered.intro,
    navClass : '',
  }



})

.controller('About', function($scope) {

  $scope.$parent.p = {
    title: 'About Me',
    subtitle : 'Developing My Online Presence',
    navClass : '',
  }

})

//-- services ------------------------------------------------------------------

.service('get', function ($http) {

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
