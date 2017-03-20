(function() {

  ///

  angular

    .module('cnt', ['ui.router'])

    .config(function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise('/');
      $stateProvider
        .state('home', {
          url: '/',
          template: '<main view-home></main>'
        })
        .state('trento', {
          url: '/Trento',
          template: '<main view-trento></main>'
        })
        .state('rovereto', {
          url: '/Rovereto',
          template: '<main view-rovereto></main>'
        })
        .state('pergine', {
          url: '/Pergine',
          template: '<main view-pergine></main>'
        })
    })

    .controller('cntrl', function($scope){

    ///

    })

    .controller('cntrl_viewHome', function($scope){

    ///

    })

    .controller('cntrl_viewTrento', function($scope){

      $.getJSON('https://os.smartcommunitylab.it/core.mobility/bikesharing/trento', function(data) {
        $.each( data, function(i, val){
          console.log(val.name + " –– " + val.bikes + ":" + val.slots + "/" + val.totalSlots);
        });
      });

    })

    .controller('cntrl_viewRovereto', function($scope){

      $.getJSON('https://os.smartcommunitylab.it/core.mobility/bikesharing/rovereto', function(data) {
        $.each( data, function(i, val){
          console.log(val.name + " –– " + val.bikes + ":" + val.slots + "/" + val.totalSlots);
        });
      });

    })

    .controller('cntrl_viewPergine', function($scope){

      $.getJSON('https://os.smartcommunitylab.it/core.mobility/bikesharing/pergine_valsugana', function(data) {
        $.each( data, function(i, val){
          console.log(val.name + " –– " + val.bikes + ":" + val.slots + "/" + val.totalSlots);
        });
      });

    })

    ;///

}());
