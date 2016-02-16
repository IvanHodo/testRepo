'use strict';

angular.module('gitHubTestApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('verify', {
        url: '/verify?sptoken',
        templateUrl: 'app/verify/verify.html',
        controller: 'VerifyCtrl'
      });
  });
