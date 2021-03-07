(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

  .state('categoryList', {
    url: '/category-list',
    templateUrl: 'src/templates/main-category-list.template.html',
    controller: 'MenuCategoryController as categoryList',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('itemList', {
    url: '/category-detail/{categoryId}',
    templateUrl: 'src/templates/main-item-list.template.html',
    controller: 'MenuItemController as itemList',
    resolve: {
      items: ['$stateParams', 'MenuDataService',
             function ($stateParams, MenuDataService) {
               return MenuDataService.getItemsForCategory($stateParams.categoryId);
      }]
    }
  });


};

})();
