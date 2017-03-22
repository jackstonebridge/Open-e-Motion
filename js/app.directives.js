(function() {


  angular
    .module('cnt')

    /// viewHome

    .directive('viewHome', function(){
      return{
        restrict: 'AE',
        scope: {
          key: '='
        },
        replace: false,
        controller: 'cntrl_viewHome',
        templateUrl: '../html/view.home.html'
      };
    })

    /// viewHome

    .directive('viewTrento', function(){
      return{
        restrict: 'AE',
        scope: {
          key: '='
        },
        replace: false,
        controller: 'cntrl_viewTrento',
        templateUrl: '../html/view.trento.html'
      };
    })

    /// viewHome

    .directive('viewRovereto', function(){
      return{
        restrict: 'AE',
        scope: {
          key: '='
        },
        replace: false,
        controller: 'cntrl_viewRovereto',
        templateUrl: '../html/view.rovereto.html'
      };
    })

    /// viewHome

    .directive('viewPergine', function(){
      return{
        restrict: 'AE',
        scope: {
          key: '='
        },
        replace: false,
        controller: 'cntrl_viewPergine',
        templateUrl: '../html/view.pergine.html'
      };
    })

    ;///

}());
