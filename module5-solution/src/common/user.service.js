(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);

UserService.$inject = ['MenuService'];
function UserService(MenuService) {
  var service = this;

  service.addNewUser = function (firstName, lastName, email, phone, favoriteItemDetail) {
    var newUser = {
      'firstName': firstName,
      'lastName': lastName,
      'email': email,
      'phone': phone,
      'favoriteItemDetail': favoriteItemDetail
    };

    service.user = {};
    service.user = newUser;
  };

  service.getRegistedUser = function () {
    return service.user;
  };

}

})();
