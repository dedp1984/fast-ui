angular.module('ngadmin').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/templates/gridtemplate.html',
    "<div><table class=\"table\"><thead><tr><td ng-repeat=\"row in rows\">{{row.headerText}}</td></tr></thead><tbody><tr ng-repeat=\"data in gridPageData\" ng-click=\"$rowClicked(data)\" inner-transclude></tr></tbody></table><div><ul class=\"pagination\"><li ng-class=\"enablePrev\" ng-click=\"prevPage()\"><a href=\"#\" aria-label=\"Previous\"><span aria-hidden=\"true\">&laquo;</span></a></li><li ng-repeat=\"page in pageSelector\" class=\"{{page.class}}\"><a href=\"\" ng-click=\"goPage(page.pageno)\">{{page.pageno}}</a></li><li ng-class=\"enableNext\" ng-click=\"nextPage()\"><a href=\"#\" aria-label=\"Next\"><span aria-hidden=\"true\">&raquo;</span></a></li></ul></div></div>"
  );


  $templateCache.put('app/templates/treenode.html',
    "<i ng-class=\"$getItemIcon(treeData)\" ng-click=\"$itemExpand(treeData)\"></i> <span ng-click=\"$itemClicked(treeData)\"><input type=\"checkbox\" ng-if=\"canChecked\" ng-model=\"treeData.checked\" ng-change=\"$itemChecked(treeData)\"> {{treeData[nameField]}}</span><ul ng-show=\"treeData.$$expanded\"><li ng-repeat=\"child in treeData.children\"><tree tree-data=\"child\" can-checked=\"canChecked\" name-field=\"{{nameField}}\"></tree></li></ul>"
  );

}]);
