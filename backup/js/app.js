(function(){
	'use strict';
	// angular.module('LunchCheck',['ngSanitize'])
	angular.module('LunchCheck',[])
	.controller('lunchCheckController',LunchController);
	LunchController.$inject=['$scope'];
	function LunchController($scope){
		$scope.message ="";
		$scope.inpt="";
		$scope.check = function(){
			splitter();
		};

function splitter(){
	var arr =$scope.inpt.split(',');
	var flag=0;
	for(let i=0;i<arr.length;++i){
			if(arr[i].length!=0)
				flag++;
		}
	if(flag===0){
		$scope.message="Please enter data first";
	}
	else if(flag<=3){
		$scope.message="Enjoy!";
	}
	else{
		$scope.message="Too much!";
	}
	}
}
})();

