var app = angular.module('WhatsApp', ['ionic', 'ionic.cloud', 'firebase']);


app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


//CLOUD IONIC
app.config(function($stateProvider, $urlRouterProvider, $ionicCloudProvider){

  $ionicCloudProvider.init({
    "core": {
      "app_id": "58cf5e4c"
    }
  })
})
//fim do cloud


//ROTAS
app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state('usuario-lista', {
    url: '/usuario-lista',
    templateUrl: 'templates/usuario-lista.html',
    controller: 'UsuarioListaCtrl'
  });

  $stateProvider.state('usuario-create', {
    url: '/usuario-create',
    templateUrl: 'templates/usuario-create.html',
    controller: 'UsuarioCreateCtrl'
  });

  $stateProvider.state('usuario-update', {
    url: '/usuario-update/:id',
    templateUrl: 'templates/usuario-update.html',
    controller: 'UsuarioUpdateCtrl'
  });

  $stateProvider.state('registro', {
    url: '/registro',
    templateUrl: 'templates/registro.html',
    controller: 'RegistroCtrl'
  });


  $stateProvider.state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  });

  $stateProvider.state('tabs', {
    abstract: true,
    url: '/tabs',
    templateUrl: 'templates/tabs.html',
    controller: 'TabsCtrl'
  });



  $stateProvider.state('tabs.perfil', {
    url: '/perfil',
    views: {
      "tab-perfil" : {
        templateUrl: 'templates/perfil.html',
        controller: 'PerfilCtrl'
      }
    }
  });

  $stateProvider.state('tabs.mensagens', {
    url: '/mensagens',
    views: {
      "tab-mensagens" : {
        templateUrl: 'templates/mensagens.html',
      }
    }
  });

  $stateProvider.state('tabs.usuarios', {
    url: '/usuarios',
    views: {
      "tab-usuarios" : {
        templateUrl: 'templates/usuarios.html',
        controller: 'UsuariosCtrl'
      }
    }
  });


  //$urlRouterProvider.otherwise('/login')
  $urlRouterProvider.otherwise('/login')

});

