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
    })

    .controller('cntrl', function($scope){

    ///

    })

    .controller('cntrl_viewHome', function($scope){

      $( "#input" ).bind("keyup", function(event) {

        var val = event.target.value;

        if(event.target.value == "Trento"){

          $.getJSON('https://os.smartcommunitylab.it/core.mobility/bikesharing/trento', function(data) {
            $.each( data, function(i, val){
              console.log(val.name + " –– " + val.bikes + ":" + val.slots + "/" + val.totalSlots);
            });
          });

        } else if(event.target.value == "Rovereto"){

          $.getJSON('https://os.smartcommunitylab.it/core.mobility/bikesharing/rovereto', function(data) {
            $.each( data, function(i, val){
              console.log(val.name + " –– " + val.bikes + ":" + val.slots + "/" + val.totalSlots);
            });
          });

        } else if(event.target.value == "Pergine Valsugana"){

          $.getJSON('https://os.smartcommunitylab.it/core.mobility/bikesharing/pergine_valsugana', function(data) {
            $.each( data, function(i, val){
              console.log(val.name + " –– " + val.bikes + ":" + val.slots + "/" + val.totalSlots);
            });
          });

        };

      });

    });

    ///

}());
