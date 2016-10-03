'use strict';
angular.module('calculator').directive('calculate',['$timeout', function ($timeout) {
   return{
       restrict:'A',
       scope: {
           value:'@'
       },
       link: function (scope,elm,attr,ctrl) {
           elm.bind("keydown keypress click", function (event) {
               if(event.type == 'click' || event.which === 13){
                   if(!scope.value) return;
                   event.preventDefault();
                   scope.$parent.calculatedResult(scope.value);
               }
           })
       }
   }
}]).directive('evaluatePattern',[function () {
    return{
        restrict:'A',
        scope: {
            ngModel:'='
        },
        link: function (scope,elm,attr,ctrl) {
            elm.bind("keydown", function (event) {
                if (   (event.keyCode >= 48 && event.keyCode <= 57)
                    || (event.keyCode >= 96 && event.keyCode <= 105) // 0-9
                    || (event.shiftKey && (event.keyCode == 187 || event.keyCode == 56)) // shift key + *
                    || (event.keyCode >= 189 && event.keyCode <= 191)//- , / , . operator

                ) {
                    scope.$parent.calculatedResult(event.key);
                }else if( event.keyCode == 13){
                    scope.$parent.onShowResult();
                }else {
                    event.stopPropagation();
                    event.preventDefault();
                    return false;
                }
            });
        }
    }
}]);