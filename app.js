var app = angular.module('searchApp', []);	// set the app with view configuration
app.controller('searchCtrl', function($scope, $http) {
    $http.get('http://www.scpr.org/api/v3/articles')	//get data for the app to route to controller
    .then(function(response) {
        $scope.results = response.data.articles; 
    }).catch(error=>console.log(error));
});