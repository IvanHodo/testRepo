'use strict';

angular.module('gitHubTestApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('reset', {
        url: '/reset?sptoken',
        templateUrl: 'app/reset/reset.html',
        controller: 'ResetCtrl'
      });
  });
