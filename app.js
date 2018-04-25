

(function () {
'use strict';

angular.module('MsgApp', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
  $scope.input_string = "";
  $scope.status ="";
  $scope.status_color_code = "color:black;";
  $scope.ip_border_color_code = "border-color:black;";

$scope.checkInputString = function () {
     var input_string_arr = [];
        if( $scope.input_string.length == 0)
          {
            $scope.status = "Please enter data first";
            $scope.status_color_code ="color:red;";
            $scope.ip_border_color_code = "border-color:red;";
          }
        else if ($scope.input_string.length > 0) {
            input_string_arr = $scope.input_string.split(",");
            if(input_string_arr.length <= 3)
            {
              $scope.status = "Enjoy!";
              $scope.status_color_code = "color:green;";
              $scope.ip_border_color_code = "border-color:green;";
            }
            else if (input_string_arr.length > 3) {
                $scope.status = "Too Much!";
                $scope.status_color_code = "color:green;";
                $scope.ip_border_color_code = "border-color:green;";
            }
        }

  };
}

})();
