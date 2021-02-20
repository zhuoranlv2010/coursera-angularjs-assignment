(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyChecker = this;

  toBuyChecker.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.removeToBuyItem(itemIndex);
  }

  toBuyChecker.items = ShoppingListCheckOffService.getToBuyItems();

  toBuyChecker.isEmpty = function () {
    var listIsEmpty = ShoppingListCheckOffService.getToBuyItems().length === 0;
    return listIsEmpty;
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var showBought = this;

  showBought.items = ShoppingListCheckOffService.getBoughtItems();

  showBought.isEmpty = function () {
    var listIsEmpty = ShoppingListCheckOffService.getBoughtItems().length === 0;
    return listIsEmpty;
  }
}

function ShoppingListCheckOffService() {
  var service = this;

  // Initial To Buy List
  var toBuyList = [
    { name: "cookies",
      quantity: 10
    },
    { name: "eggs",
      quantity: 12
    },
    { name: "blueberry",
      quantity: 3
    },
    { name: "apples",
      quantity: 4
    },
    { name: "lemons",
      quantity: 2
    },
    { name: "coconuts",
      quantity: 8
    }
  ];

  // Initial Bought List
  var boughtList = [];

  service.removeToBuyItem = function (itemIndex) {
    var item = toBuyList[itemIndex];
    toBuyList.splice(itemIndex, 1);
    boughtList.push(item);
  };

  service.getBoughtItems = function () {
    return boughtList;
  };

  service.getToBuyItems = function () {
    return toBuyList;
  };

}

})();
