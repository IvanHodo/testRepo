'use strict';

angular.module('gitHubTestApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('forgot', {
        url: '/forgot',
        templateUrl: 'app/forgot/forgot.html',
        controller: 'ForgotCtrl'
      });
  });
