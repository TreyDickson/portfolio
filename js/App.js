'use strict';

var App = angular.module('Portfolio', ['ngSanitize']);

App.controller("MainController", ['$scope', '$http', function($scope, $http) {
	$scope.nojs = false;

	$scope.loadJson = function() {
		$http.get("content/content.json").success(function(content) {
			$scope.content = content;
		});
	};

	$scope.loadJson();
}]);