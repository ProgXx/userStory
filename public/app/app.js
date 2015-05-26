angular.module('MyApp',['appRoutes','mainCtrl','authService','userService','userCtrl','storyCtrl','storyService','reverseDirections'])

.config(function($httpProvider){
	$httpProvider.interceptors.push('AuthInterceptor');
})