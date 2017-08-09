# [jQuery.menuUI](https://github.com/salvadorcs/jQuery.menuUI)

## Quick start

* Clone the repo: `git clone https://github.com/salvadorcs/jQuery.menuUI.git`.

### What's included

```
jQuery.menuUI/
├── css/
│   ├── bootstrap.min.css
│   ├── font-awesome.css
│   └── jQuery.menuUI.css
├── fonts/
│   ├── fonts\fontawesome-webfont.eot
│   ├── fonts\fontawesome-webfont.svg
│   ├── fonts\fontawesome-webfont.ttf
│   ├── fonts\fontawesome-webfont.woff
│   ├── fonts\fontawesome-webfont.woff2
│   ├── fonts\FontAwesome.otf
│   ├── fonts\glyphicons-halflings-regular.eot
│   ├── fonts\glyphicons-halflings-regular.svg
│   ├── fonts\glyphicons-halflings-regular.ttf
│   ├── fonts\glyphicons-halflings-regular.woff
│   └── fonts\glyphicons-halflings-regular.woff2
├── js/
│   ├── bootstrap.min.js
│   ├── jquery.min.js
│   └── jQuery.menuUI.js
└── jQuery.menuUI.html
```

## Min Requirements

* Bootstrap 3.0.0
* jQuery 1.9.1

## Usage
* Import `jQuery.menuUI.js` and `jQuery.menuUI.css` in your `index.html`.
* Add `<nav id="menuUI"></nav>` in `index.html` and initiate the menuUI call with `$( "#menuUI" ).menuUI(json, callBack);`
* `callBack` is the fuction to be called when the action is performed on the menu items.
* Sample JSON 
	{brand : 'Menu UI',
		menu: [
			{
				id: 'home',
				value: 'Home',
				icon: 'fa fa-home'
			},{
				id: 'profile',
				value: 'Profile',
				icon: 'glyphicon glyphicon-user'
			},{
				id: 'message',
				value: 'Message',
				icon: 'glyphicon glyphicon-envelope'
			},{
				id: 'setting',
				value: 'Setting',
				icon: 'glyphicon glyphicon-cog',
				submenu: [
					{ id: 'preference', value: 'Preference' },
					{ id: 'theme', value: 'Theme' },
					{ id: 'help', value: 'Help' }
				]
			}
		]
	}

## Creators

**Sathish C**

* <https://github.com/salvadorcs>


## Copyright and license

Copyright (c) 2017 Sathish CS

Licensed under [the MIT License][license].

[license]: https://github.com/salvadorcs/jQuery.menuUI/blob/master/LICENSE
