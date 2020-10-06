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
//	var output =document.getElementById('output');
	var flag=0;
	console.log(output);
	for(let i=0;i<arr.length;++i){
			if(arr[i].length!=0)
				flag++;
		}
	if(flag===0){
		$scope.message="Please enter data first";
		// output.style.color="red";
	}
	else if(flag<=3){
		$scope.message="Enjoy!";
		// output.style.color="green";
	}
	else{
		$scope.message="Too much!";
		// output.style.color="green";
	}
	}
}
})();

