(function () {
'use strict'
  x='hello';
angular.module('myFirstApp',[])
.controller('myFirstController', function(){
console.log(x);
});

})();
