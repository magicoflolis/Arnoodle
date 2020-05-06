// ==UserScript==
// @run-at	 	 document-start
// @version      1.01
// @name         Magic Default Layout
// @author       Magic Of Lolis <magicoflolis@gmail.com> https://magicoflolis.github.io/Arnoodle
// @description  Template
// @homepage	 https://magicoflolis.github.io/Arnoodle
// @homepageURL  https://magicoflolis.github.io/Arnoodle
// @downloadURL  https://github.com/magicoflolis/Arnoodle/raw/master/MagicTmp.user.js
// @updateURL  	 https://github.com/magicoflolis/Arnoodle/raw/master/MagicTmp.user.js
// @supportURL   https://github.com/magicoflolis/Arnoodle/issues
// @include      https://*.site.com
// @include		 file://*
// @include		 about:blank
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @grant        none
// ==/UserScript==

//$('').remove();
//$('').hide();
//$('').show();
//if (VAR.length) {CODE}
//$('a[href^="/"]').attr('href', URL1);

$(function () {
	// -----START USERSCRIPT SETTINGS PAGE-----
	var set1 = 0; // set 1
	var set2 = 0; // set 2
	var set3 = 0; // set 3
	var URL1 = '/'; // URL1
	var URL2 = '/'; // URL2
	var URL3 = '/'; // URL3
	// -----END USERSCRIPT SETTINGS PAGE-------
	var url = window.location.href
	var host = window.location.hostname;
	var path = window.location.pathname;
	var lS = localStorage;
	console.clear()
	console.log('[Magic Script] Loading...')
	// Code goes here
	console.log('[Magic Script] Loading Complete!')
});