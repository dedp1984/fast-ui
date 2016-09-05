'use strict';

/**
 * @ngdoc directive
 * @name widgetApp.directive:innerTransclude
 * @description
 * # innerTransclude
 */
angular.module('fast.directive')
  .directive('innerTransclude', function () {
    return function(scope, iEle, $attrs, ctrl, transclude){
                transclude(scope, function(clone){
            iEle.append(clone);
        });
    }
});
