import swal from 'sweetalert';

/* eslint-disable max-len */
const app = angular.module('bankController', []);
// inject the Todo service factory into our controller
app.controller('mainController', ['$scope', '$http', 'Accounts', ($scope, $http, Accounts) => {
  $scope.formData = {};
  // 定义了点击登录按钮的动作
  $scope.login = () => {
    if ($scope.user.account != undefined && $scope.user.passwd != undefined) {
      // 不知道为什么alert没用, console.log也没用
      swal('成功', '注册账号成功', 'success');
      console.log($scope.user.account);
      console.log($scope.user.passwd);
      $scope.loading = true;
      Accounts.create($scope.user)
          .success((data) => {
            $scope.loading = false;
          // $scope.formData = {};
          });
    }
  };
  // 定义了点击注册按钮的动作
  $scope.register = function() {
    if ($scope.user.account != undefined && $scope.user.passwd != undefined && $scope.user.name != undefined) {
      $scope.loading = true;
      Accounts.create($scope.user)
          .success((data) => {
            $scope.loading = false;
          // $scope.user = {};
          });
    }
  };
  //
  $scope.withdraw=function(){

  }
}]);
