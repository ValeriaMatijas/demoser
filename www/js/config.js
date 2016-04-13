angular.module('ser').config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl',
    controllerAs: 'ctrl'
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'ctrl'        
      }
    }
  })

  .state('app.eventos', {
      url: '/eventos',
      views: {
        'menuContent': {
          templateUrl: 'templates/events.html',
          controller: 'EventsCtrl',
          controllerAs: 'ctrl'
        }
      }
    })
  .state('app.eventos-cat', {
      url: '/eventos-cat/:idEventCat',
      views: {
        'menuContent': {
          templateUrl: 'templates/events-cat.html',
          controller: 'EventsCatCtrl',
          controllerAs: 'ctrl'
        }
      }
    })
  .state('app.evento', {
      url: '/evento/:idEvent',
      views: {
        'menuContent': {
          templateUrl: 'templates/event.html',
          controller: 'EventCtrl',
          controllerAs: 'ctrl'
        }
      }
    })


  .state('app.noticias', {
      url: '/noticias',
      views: {
        'menuContent': {
          templateUrl: 'templates/news.html',
          controller: 'NewsCtrl',
          controllerAs: 'ctrl'
        }
      }
    })

  .state('app.noticia', {
    url: '/noticia/:idNew',
    views: {
      'menuContent': {
        templateUrl: 'templates/new.html',
        controller: 'NewCtrl',
        controllerAs: 'ctrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
