'use strict';

app.controller('hotelCtrl', ['$scope', '$filter', '$modal', 'hotelService', function($scope, $filter, $modal, hotelService) {
	$scope.msgtxt = '';
	$scope.orderByField = 'Distance';
	$scope.orderByField = 'Stars';
	$scope.orderByField = 'MinCost';
	$scope.orderByField = 'UserRating';
  	$scope.reverseSort = true;

  	$scope.modalShown = false;
  
 	$scope.readData = function() {
 		hotelService.readData().then(function(msg) {
 			$scope.establishments = msg.data.Establishments;
			
			$scope.msgtxt = 'Loaded Sucessfuly';
		});
	};
	$scope.sortOrderBy = function(orderName, _reverseSort) {
		$scope.orderByField = orderName;
  		$scope.reverseSort = _reverseSort;
	}


$scope.currentImageURL = "";
$scope.loadImage = function (establishment) {
        $scope.currentImageURL = establishment.ImageUrl;
        $scope.imageName = establishment.Name;
        $modal.open({
            templateUrl: 'template/modalContent.html',
            controller: 'modalController',
            scope: $scope
        })
        .result.then(function() {
            // closed
        }, function() {
            // canceled
        });
    };





}]);
app.controller('modalController', ['$scope', function($scope) {
    console.log('scope in modalController ');
}]);
