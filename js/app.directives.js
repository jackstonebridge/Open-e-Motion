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

    ;///

}());
