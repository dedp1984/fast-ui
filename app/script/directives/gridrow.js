'use strict';

/**
 * @ngdoc directive
 * @name widgetApp.directive:gridrow
 * @description
 * # gridrow
 */
angular.module('fast.directive')
  .directive('gridrow', function () {
    return {
        require:'^grid',
        restrict:'E',
        replace:true,
        transclude:true,
        template:'<td ng-transclude></td>',
        compile:function(tEle,tAttr,trancludeFn){
            return {
                pre:function(scope,iEle,iAttr,gridCtrl){
                    gridCtrl.addHeader({title:iAttr.header});
                },
                post:function(scope,iEle,iAttr){
                    console.log('post link')
                }
            }
        }
    }
});
