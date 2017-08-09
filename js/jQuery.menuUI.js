 (function( $ ) {
	'use strict';
	$.fn.menuUI = function(data, callBack, options) {
		console.time("menuUI");
		var menuUI = {
			json: {brand : 'Brand', menu: [{
				id: 'home',
				value: 'Home',
				icon: 'glyphicon glyphicon-home'
			}]},
			defaults : {
				navBarHorizontal: true,
				theme: {nav: 'navbar navbar-default navbar-fixed-top'},
				action: 'click',
				show: true,
				disable: false,
				debug: false
			},
			template: {
				navbarHor : '<nav class="navbar navbar-default navbar-fixed-top" role="navigation"> <div class="container-fluid"> <div class="navbar-header navbar-header-top"> <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-sidebar-navbar-collapse-1"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a class="navbar-brand">$brand</a> </div> </div> </nav>',
				navbarVer : '<div class="container-fluid"> <div class="navbar-header"> <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-sidebar-navbar-collapse-1"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a class="navbar-brand">$brand</a> </div> <div class="collapse navbar-collapse" id="bs-sidebar-navbar-collapse-1"> <ul class="nav navbar-nav"> $menuUI </ul> </div> </div>',
				menuItem : '<li><a id="$id">$value<span class="pull-right hidden-xs showopacity $icon"></span></a></li>',
				subMenu: '<li class="dropdown"> <a id="$id" class="dropdown-toggle" data-toggle="dropdown">$value <span class="caret"></span><span  class="pull-right hidden-xs showopacity $icon"></span></a> <ul class="dropdown-menu forAnimate" role="menu"> $submenu </ul> </li>',
				subMenuItem : '<li><a id="$id">$value</a></li>'
			}
		};
		var option = $.extend({}, menuUI.defaults, options);
		var jsonData = $.extend({}, menuUI.json, data);
		var debug = function (i, str){option.debug ? console.log("debug : "+ str || '' +" : ", i) : doNothing()};
		//debug(option);
		//debug(jsonData);
		var doNothing = function(){};
		var setDisplay = function(item){
			typeof item.show == 'undefined' ? item.show=option.show : doNothing() ;
			//item.show ? debug(item.show, 'true') : debug(item.show, 'false') ;
			return item;
		};
		var setDisabled = function(item){
			typeof item.disable == 'undefined' ? item.disable = option.disable : doNothing();
			return item;
		};
		var setSubMenu = function(subMenuData){
			var subMenuItems = '';
			var subMenu = menuUI.template.subMenu.replace('$id', subMenuData.id || '').replace('$value', subMenuData.value || '').replace('$icon', subMenuData.icon || '');
			for (var liData of subMenuData.submenu) {
				var subMenuItem = '';
				liData = setDisplay(liData);
				liData = setDisabled(liData);
				subMenuItem = menuUI.template.subMenuItem.replace('$id', liData.id || '').replace('$value', liData.value || '');
				liData.disable ? (subMenuItem = subMenuItem.replace('<a', '<a style="disabled" disabled="disabled" ')):("");
				liData.show ? (subMenuItems +=subMenuItem) : "";
			}
			return subMenu.replace('$submenu', subMenuItems || '');
		};
		var $self = $(this);
		var navbarHor = menuUI.template.navbarHor, navbarVer = menuUI.template.navbarVer, menuItems = '';
		navbarHor = navbarHor.replace("$brand", jsonData.brand || '');
		for (var liData of jsonData.menu) {
			var menuItem = '';
			liData = setDisplay(liData);
			liData = setDisabled(liData);
			(liData.submenu && liData.submenu.length >0) ? (menuItem = setSubMenu(liData)) :
				(menuItem = menuUI.template.menuItem.replace('$id', liData.id || '').replace('$value', liData.value || '').replace('$icon', liData.icon || ''));
			liData.disable ? (menuItem = menuItem.replace('<a', '<a style="disabled" disabled="disabled" ')):"";
			liData.show ? (menuItems += menuItem) : "";
		}
		navbarVer = navbarVer.replace("$menuUI", menuItems || '').replace("$brand", jsonData.brand || '');
		//debug(navbarVer, 'menu items');
		/*
		ADDING EVENT LISTENERS TO li > a
		*/
		$self.on( option.action, "li > a", function() {
			debug(this, 'on click');
			callBack(this.id);
		});
		/*
		ADDING GENERATED ELEMS TO $self
		*/
		option.navBarHorizontal ? $self.before(navbarHor) : "";
		$self.addClass('navbar navbar-default sidebar').attr('role', 'navigation');
		$self.append(navbarVer);
		debug($self, "final element");
		console.timeEnd("menuUI");
		/*
		KEEPING THE MENU EXTENDED TO FULL PAGE ON EXPANDED AND COLLAPSED VIEW
		*/
		function htmlbodyHeightUpdate() {
			var height3 = $(window).height();
			var height1 = $(".nav").height() + 50;
			var height2 = $(".main").height() || $(".main")[0].scrollHeight;
			if (height2 > height3) {
				$("html").height(Math.max(height1, height3, height2) + 10);
				$("body").height(Math.max(height1, height3, height2) + 10);
			} else {
				$("html").height(Math.max(height1, height3, height2));
				$("body").height(Math.max(height1, height3, height2));
			}
		}
		htmlbodyHeightUpdate();
		$(window).resize(function() {
			htmlbodyHeightUpdate();
		});
		$(window).scroll(function() {
			var height2 = $(".main").height();
			htmlbodyHeightUpdate();
		});

		return this;
	};

})(jQuery );
