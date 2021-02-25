(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('BasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    restrict: "E",
    templateUrl: 'foundItems.html',
    scope: {
      items: '<foundItems',
      onRemove: '&'
    }
  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;

  menu.humanInput = "";

  menu.narrowItDown = function (humanInput) {
    if (humanInput.trim().length !== 0) {
      var promise = MenuSearchService.getMatchedMenuItems(humanInput);

      promise.then(function (result) {
        menu.found = result;
      });
    } else {
      menu.found = [];
    }
  };

  menu.removeItem = function (itemIndex) {
    menu.found.splice(itemIndex, 1);
  };

}



MenuSearchService.$inject = ['$http', 'BasePath'];
function MenuSearchService($http, BasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    // retrieve the list of all the menu items
    return $http({
      method: "GET",
      url: (BasePath + "/menu_items.json")
      // params: {
      //   category: "A"
      // }
    }).then(function (result) {
    // process result and only keep items that match
    var foundItems = [];
    var searchKeyword = searchTerm.toLowerCase().trim();

    for (var i = 0; i < result.data.menu_items.length; i++) {
      var description = result.data.menu_items[i].description;
      if (description.toLowerCase().indexOf(searchKeyword) !== -1) {
        foundItems.push(result.data.menu_items[i]);
      }
    };

    // return processed items
    return foundItems;
    });
  };

}


})();
