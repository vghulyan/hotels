'use strict';

app.controller('hotelCtrl', ['$scope', '$filter', '$modal', 'hotelService', function($scope, $filter, $modal, hotelService) {
	$scope.msgtxt = '';
	$scope.orderByField = ['Distance', 'Stars', 'MinCost', 'UserRating'];
  	$scope.reverseSort = true;
    $scope.headerOrderByClicked = false;


    // PAGINATION
    $scope.pageSizes = [5,10,25,50];
    $scope.maxSize = 5;
    $scope.currentPage = 1;
    $scope.numPerPage = 10;


    $scope.ratingStatus = {
        isopen: false
    };
    $scope.establishments = [];
    $scope.establismentsCopy = [];

 	$scope.refresh = function() {
 		hotelService.refresh().then(function(msg) {
 			$scope.establishments = msg.data.Establishments;
            $scope.establismentsCopy = angular.copy($scope.establishments);
            paginate();
			$scope.msgtxt = 'Loaded Sucessfuly';
		});
	};
	$scope.sortOrderBy = function(orderName) {
		$scope.orderByField = [orderName];
  		$scope.reverseSort = !$scope.reverseSort;
        $scope.headerOrderByClicked = true;
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

    function paginate() {
        var begin = (($scope.currentPage - 1) * $scope.numPerPage);
        var end = begin + $scope.numPerPage;
        
        $scope.establishments = $scope.establismentsCopy.slice(begin, end);
        if(!$scope.establishments) {
            $scope.currentPage = 1;
        }
    }

    $scope.$watch('currentPage + numPerPage', function() {
        paginate();    
    });

    $scope.perPage = function() {
        //console.log('per page ' );
    }


    $scope.refresh();

}]);

app.controller('modalController', ['$scope', function($scope) {
    console.log('scope in modalController ');
}]);
