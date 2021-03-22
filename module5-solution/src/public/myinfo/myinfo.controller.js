(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['myInfo'];
function MyInfoController(myInfo) {
  var $ctrl = this;

  if (myInfo) {
    $ctrl.myInfo = myInfo;
    $ctrl.registed = true;
    if (myInfo.favoriteItemDetail) {
      $ctrl.noSuchItem = false;
    } else {
      $ctrl.noSuchItem = true;
    }
  } else {
    $ctrl.registed = false;
  }

}

})();
