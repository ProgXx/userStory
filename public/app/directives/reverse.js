angular.module('reverseDirections',[])

.filter('reverse',function(){
	return function(items){
		return items.slice().reverse();
	};
});