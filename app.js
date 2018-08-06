var app = angular.module('searchApp', []);	// set the app with view configuration
app.controller('searchCtrl', function($scope, $http) {
    $scope.search = function(searchTerm) {
	    $http.get('http://www.scpr.org/api/v3/articles?query=' + searchTerm)	//get data for the app to route to controller
	    .then(function(response) {
	        $scope.results = response.data.articles; 
	    }).catch(error=>console.log(error));
		    $scope.reset = function() {
	        $scope.results = '';
	    };
	}
});