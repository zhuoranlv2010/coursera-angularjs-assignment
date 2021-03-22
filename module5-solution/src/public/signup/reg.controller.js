(function () {
"use strict";

angular.module('public')
.controller('RegController', RegController);

RegController.$inject = ['UserService','MenuService'];
function RegController(UserService, MenuService) {
  var reg = this;
  reg.saved = false;

  reg.submit = function () {

    var promise = MenuService.getMenuItem(reg.user.favoriteItemShortName);

    promise.then(function (result) {

      reg.user.itemDetail = result;
      UserService.addNewUser(reg.user.firstName,
                             reg.user.lastName,
                             reg.user.email,
                             reg.user.phone,
                             reg.user.itemDetail);
      reg.noSuchItem = false;
      reg.saved = true;
    },
                 function(result) {
                   reg.noSuchItem = true;
                   reg.saved = true;
                   UserService.addNewUser(reg.user.firstName,
                                          reg.user.lastName,
                                          reg.user.email,
                                          reg.user.phone,
                                          reg.user.itemDetail);
    });

  };



}

})();
