angular.module("myApp",[])
	.directive('someDirective', function() {
  return {
  	 replace: true, // 修饰过
    template: '<div>some stuff here</div>'
  }
})
	.directive('helloWorld', function() {
  return {
    scope: {},      //隔离作用域
    restrict: 'AE',
    replace: true,
    template: '<p style="background-color:{{color}}">Hello World</p>',
    link: function(scope, elem, attrs) {
      elem.bind('click', function() {
        elem.css('background-color','white');
        scope.$apply(function() {
          scope.color = "white";
        });
      });
      elem.bind('mouseover', function() {
        elem.css('cursor', 'pointer');
      });
    }
  };
});