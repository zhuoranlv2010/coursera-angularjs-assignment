(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuCategoryController', MenuCategoryController);

MenuCategoryController.$inject = ['categories'];
function MenuCategoryController(categories) {
  var categoryList = this;
  categoryList.categories = categories;
}

})();
