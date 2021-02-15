(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ["$scope"];
function LunchCheckController($scope) {
  $scope.humanInput = "";
  $scope.message = "";
  $scope.messageColor = "";

  $scope.sayMessage = function () {
    var correctMessage = "";
    var correctColor = "";
    var totalItemCount = calculateItemCount($scope.humanInput);

    if (totalItemCount > 3) {
      correctMessage = "Too much!";
      correctColor = "green";
    } else if (totalItemCount > 0 && totalItemCount <= 3) {
      correctMessage = "Enjoy!";
      correctColor = "green";
    } else {
      correctMessage = "Please enter data first";
      correctColor = "red";
    }

    $scope.message = correctMessage;
    $scope.messageColor = correctColor;
    console.log($scope.messageColor);
  };

  function calculateItemCount(string) {
    var totalItemCount = 0;
    var parsedInput = string.split(',');

    for (var i = 0; i < parsedInput.length; i++) {
      if (parsedInput[i].trim().length != 0) {
        totalItemCount += 1;
      }
    }

    return totalItemCount;
  }
};




})();
