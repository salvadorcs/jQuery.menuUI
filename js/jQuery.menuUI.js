(function( $ ) {
	'use strict';
	$.fn.menuUI = function(option) {
		var defaults = {
			background:'blue'
		};
		var debug = function (info){
			return console.log("debug : ", info);
		};
		var option = $.extend({}, defaults, option);
		var $self = $(this);
		$self.css("background", option.background);
		debug(option);
		debug($self);
		
		
		
		
		
		
		
		
		return this;

	};
	
})(jQuery );