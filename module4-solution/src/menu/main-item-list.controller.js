(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuItemController', MenuItemController);

MenuItemController.$inject = ['items'];
function MenuItemController(items) {
  var itemList = this;
  itemList.items = items[0];
  itemList.categoryName = items[1];
}

})();
