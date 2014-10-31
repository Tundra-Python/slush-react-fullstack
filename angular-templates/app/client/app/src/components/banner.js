'use strict';

angular.module('appNav', ['react'])

.value('navComponent', React.createClass({
  render: function(){
    return (
      <div className="container-fluid banner">
        <img src="http://s28.postimg.org/uiq4zy3j1/slush_react_fullstack.png"/>
      </div>
    )
  }
}))

.directive('navNg', function(reactDirective){
  return reactDirective('navComponent');
});