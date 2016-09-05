
'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router','restangular','fast','ui.bootstrap','ngAnimate','mgcrea.ngStrap'
]).config(function(RestangularProvider){
  RestangularProvider.setBaseUrl("http://127.0.0.1:8080/carcredit");
})
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
          .state('/',{
            url:"/index",
            templateUrl:'index.html',
            controller:function($scope){

            }
          })
          .state('/grid',{
            url:"/grid",
            templateUrl:'view/grid.html',
            controller:function($scope,$uibModal,$modal,$alert){
               // $scope.params={name:'dengpan',passwd:'fdfs'};
                //$scope.url="/users";
              $scope.search=function(){
               // $scope.url="users";
                  $scope.params={name:'dengpan',passwd:'fdfs'};
                  $scope.gridData=[
                      {name:'dengpan',passwd:'fdfs'},
                      {name:'dengpan',passwd:'fdfs'},
                      {name:'dengpan',passwd:'fdfs'},
                      {name:'dengpan',passwd:'fdfs'},
                      {name:'dengpan',passwd:'fdfs'},
                      {name:'dengpan',passwd:'fdfs'},
                      {name:'dengpan',passwd:'fdfs'},
                      {name:'dengpan',passwd:'fdfs'},
                      {name:'dengpan',passwd:'fdfs'},
                      {name:'dengpan',passwd:'fdfs'},
                      {name:'dengpan',passwd:'fdfs'}
                  ];

              } ;
                $scope.setGridData=function(){
                    var myAlert = $alert({container:'#alerts-container',title: 'Holy guacamole!', content: 'Best check yo self, you\'re not looking too good.', placement: 'top-right', type: 'info', show: true});

                };
                $scope.name='dengpan';

                $scope.headers=[{title:'id'},{title:'姓名'},{title:'sex'}];
                var myModal = $modal({scope:$scope, animation:false, title: 'My Title',templateUrl:'view/modaldialog.html' , show: false});

                $scope.showModal = function() {
                    myModal.$promise.then(myModal.show);
                };
                $scope.alerts=[];
                $scope.$on('rowClicked',function(evt,args){
                    $scope.items = args;
                    $scope.showModal();

                    //myModal.show();
                    var myAlert = $alert({container:'#alerts-container',duration:20,title: 'Holy guacamole!', content: 'Best check yo self, you\'re not looking too good.', placement: 'top', type: 'info', show: true});
                    //myAlert.
                    /*
                    $scope.open = function (size) {
                        var modalInstance = $uibModal.open({
                            animation: true,
                            scope:$scope,
                            templateUrl: 'view/myModalContent.html',
                            controller: function($scope,$uibModalInstance){

                                $scope.ok = function () {
                                    $uibModalInstance.close($scope.items);
                                };

                                $scope.cancel = function () {
                                    $uibModalInstance.dismiss('cancel');
                                };
                            },
                            size: size
                        });

                        modalInstance.result.then(function(args){
                            $scope.modalRtn=args;
                        }, function () {
                            $log.info('Modal dismissed at: ' + new Date());
                        });
                    };

                    $scope.open('lg',$scope.testModalReturn);*/
                })
            }
          })
          .state('/tree',{
            url:'/tree',
            templateUrl:'view/tree.html',
            controller:function($scope){
                $scope.treeData={
                    id:'A',
                    title:'BranchA',
                    checked:true,
                    children:[
                        {
                            id:'B',
                            checked:true,
                            title:'BranchB',
                            children:[]
                        },
                        {
                            id:'B',
                            checked:true,
                            title:'BranchB',
                            children:[]
                        },
                        {
                            id:'B',
                            checked:true,
                            title:'BranchB',
                            children:[]
                        }
                    ]
                };
            }
          })
          .state("/modal",{
              url:'/modal',
              templateUrl:'view/modaldialog.html',
              controller:function($scope,$uibModal){

              }
          })
    });

