const app1 = angular.module('app1', []);
app1.controller('HelloController', function ($scope) {
  $scope.message = "hello1";
});

const app2 = angular.module('app2', []);
app2.controller('HelloController', function ($scope) {
  $scope.message = "hello2";
});

angular.bootstrap(document.getElementById("app1"), ['app1']);
angular.bootstrap(document.getElementById("app2"), ['app2']);
