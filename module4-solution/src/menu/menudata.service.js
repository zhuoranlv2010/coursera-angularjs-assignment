(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('BasePath', "https://davids-restaurant.herokuapp.com");

MenuDataService.$inject = ['$http', 'BasePath'];
function MenuDataService($http, BasePath) {
  var service = this;

  service.getAllCategories = function () {
    return $http({
      method: 'GET',
      url: (BasePath + '/categories.json')
    }).then(function (result) {
      var categories = [];
      categories = result.data;

      return categories;
    });
  };

  service.getItemsForCategory = function (categoryShortName) {
    return $http({
      method: 'GET',
      url: (BasePath + '/menu_items.json'),
      params: {
        category: categoryShortName
      }
    }).then(function (result) {
      var items = [];
      var categoryName = "";
      items = result.data.menu_items;
      categoryName = result.data.category.name;

      return [items, categoryName];
    });
  };


}

})();
