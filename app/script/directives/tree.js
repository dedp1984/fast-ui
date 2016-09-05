'use strict';

/**
 * @ngdoc directive
 * @name widgetApp.directive:tree
 * @description
 * # tree
 */
angular.module('fast.directive')
  .directive('tree', function ($compile) {
        return {
            restrict: "E",
            scope: {
                treeData: '=',
                canChecked:'=',
                nameField:'@'
            },
            controller:function($scope){
              $scope.$itemClicked=function(item) {
                  $scope.$emit('nodeClicked');
              };
                $scope.$on('childNodeChecked',function(event){
                    if(event.targetScope!=event.currentScope){
                        event.currentScope.treeData.checked=false;
                        angular.forEach(event.currentScope.treeData.children,function(object){
                            if(object.checked==true){
                                event.currentScope.treeData.checked=true;
                            }
                        })
                        console.log(event.currentScope.treeData+" receive childNodeChecked Event")
                    }
                });
                $scope.$on('parentNodeChecked',function(event){
                    if(event.targetScope!=event.currentScope) {
                        event.currentScope.treeData.checked=event.targetScope.treeData.checked;
                        console.log(event.currentScope.treeData + " receive parentNodeChecked Event")
                    }
                });
                $scope.$isLeaf=function(item){
                    return item.children.length==0||!item.children;
                };
                $scope.$itemChecked=function(item){
                    $scope.$emit('childNodeChecked');
                    $scope.$broadcast('parentNodeChecked');
                };
                $scope.$getItemIcon=function(item){
                    if($scope.$isLeaf(item)){
                        return "glyphicon glyphicon-file";
                    };
                    return item.$$expanded==true?"glyphicon glyphicon-minus":"glyphicon glyphicon-plus";
                };
                $scope.$itemExpand=function(item){
                    item.$$expanded=!item.$$expanded;
                };

            },
            templateUrl:'templates/treenode.html',
            compile: function(tElement, tAttr) {
                var contents = tElement.contents().remove();
                var compiledContents;
                return function(scope, iElement, iAttr) {
                    if(!compiledContents) {
                        compiledContents = $compile(contents);
                    }
                    compiledContents(scope, function(clone, scope) {
                        iElement.append(clone);
                    });

                };
            }
        };
    });
