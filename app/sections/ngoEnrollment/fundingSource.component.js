(function() {
	angular
	.module('app')

	.directive('fundingSource', fundingSourceDirective)
	
	
	function fundingSourceDirective() {
		return {
			scope : {
				fundingSourceList : "=list"
			},
			restrict : "E",
			templateUrl : 'fundingSourceTemplate.tpl.html',
			controller : fundingSourceController
		}

	}
	
	function fundingSourceController($scope) {
				
		var fundingSourceObj ={};
		//$scope.fundingSourceList =[];
		$scope.show = false;
		
		$scope.addNewChoice = function(){
			fundingSourceObj = {};
			if($scope.source!= null ) {
				fundingSourceObj.source = $scope.source;
				fundingSourceObj.amount = $scope.amount;
				$scope.fundingSourceList.push(fundingSourceObj);
				$scope.show = true;
				$scope.source = null;
				$scope.amount = null;
				}
			else{
				alert("please fill the fields");
			}
		}
		
		$scope.deleteRow = function(idx) {
			$scope.fundingSourceList.splice(idx,1);
			if($scope.fundingSourceList.length == 0){
				$scope.show = false;
			}
		}
	}
	
	
})();