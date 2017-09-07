angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.newCode = "";
	$scope.newName = "";
	$scope.newAddress = "";

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
     $scope.addListing = function() {
		if($scope.newCode != "" && $scope.newName != ""){
			$scope.listings.push({code: $scope.newCode, name: $scope.newName, address: $scope.newAddress});
		}
		
		$scope.newCode = "";
		$scope.newName = "";
		$scope.newAddress = "";
	};
    $scope.deleteListing = function(listing) {
		var index = $scope.listings.indexOf(listing);
		$scope.listings.splice(index, 1);
	};
    $scope.showDetails = function(listing) {
		var index = $scope.listings.indexOf(listing);
		$scope.detailedInfo = Listings[index];
	};
  }
]);
