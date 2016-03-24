// JavaScript Document
(function($){
		  .controller('PeopleCtrl', function($scope, $state, $http){
			$scope = genericController($scope, $state, $http, 'people', 'person');
		  })
		  
		  function genericController($scope, $state, $http, multiple, sngle){
			  $scope.id = ($state.params,id || '');
			  $scope.page = ($state.params.p || 1);
		  }
		  
		  .directive("getProp", ['$http', '$filter', function($http, $filter) {
    return {
      template: "{{property}}",
      scope: {
        prop: "=",
        url: "="
      },
		  
		  link: function(scope, element, attrs){
			  var swapiurl = "http://swapi.co/api/people/"+multiple+"/"+$scope.id+"?page="+$scope.page,
		  queryParams = {
			cache: true
		  };
	  
	  if (window.location.hostname.match('aerobaticapp')) {
      queryParams = {
        params: {
          url: swapiurl,
          cache: 1,
          ttl: 30000
        }
      }
      swapiurl = '/proxy';
})();