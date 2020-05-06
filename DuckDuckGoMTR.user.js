// ==UserScript==
// @run-at	 	 document-start
// @version      1.01
// @name         DuckDuckGo Meaningless Things
// @author       Magic Of Lolis <magicoflolis@gmail.com> https://magicoflolis.github.io/Arnoodle
// @description  Removes meaningless things https://r-q.name/
// @homepage	 https://magicoflolis.github.io/Arnoodle
// @homepageURL  https://magicoflolis.github.io/Arnoodle
// @downloadURL  https://github.com/magicoflolis/Arnoodle/raw/master/DuckDuckGoMTR.user.js
// @updateURL  	 https://github.com/magicoflolis/Arnoodle/raw/master/DuckDuckGoMTR.user.js
// @supportURL   https://github.com/magicoflolis/Arnoodle/issues
// @match       *://*.duckduckgo.com/*
// @match       duckduckgo.com
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @grant        none
// ==/UserScript==

//$('').remove();
//$('').hide();
//$('').show();
//if (VAR.length) {CODE}
//$('a[href^="/"]').attr('href', URL1);

// NOTES
// .js-acp-footer.acp-footer //BANG FOOTER
// https://r-q.name/
// 

$(function () {
	// -----START USERSCRIPT SETTINGS PAGE-----
	// Set 0 to disable tweak, 1 to enable.
	// Urls/Txt can be anything within site.
	var logoURL = '/bangs'; // Changes logo URL [Default: '/about'].
	var logoTXT = '!Bang Search Shortcuts'; // Changes logo TEXT [Default: 'Learn more'].
	var hideApps = 1; // Hides "Privacy, simplified." [Default: '0'].
	var hideBFoot = 1; // !Bang Footer [Default: '0'].
	var hideFooter = 1; // DuckDuckGo Footer [Default: '0'].
	var hideTxt = 1; // Hides text under searchbar [Default: '0'].
	// -Settings List-
	var hideMenu1 = 0; // [NOT RECOMMENDED CHANGING] "Settings" [Default: '0'].
	var hideMenu2 = 1; // "Privacy Essentials" [Default: '0'].
	var hideMenu3 = 1; // "Why Privacy" [Default: '0'].
	var hideMenu4 = 1; // "Who We Are" [Default: '0'].
	var hideMenu5 = 1; // "Keep in Touch" [Default: '0'].
	var debloatSettings = 0; // 
	// -----END USERSCRIPT SETTINGS PAGE-------
	var url = window.location.href
	var host = window.location.hostname;
	var path = window.location.pathname;
	var lS = localStorage;
	console.clear()
	console.log('[DDGMTR] Loading...')
	if (logoURL != '/about') {
		$('.logo-wrap--home > a[href^="/about"]').attr('href', logoURL);
	}
	if (logoTXT != 'Learn more') {
		$('span.logo_homepage__tt').text(logoTXT);
	}
	if (hideFooter == 1) {
		$('#footer_homepage').hide();
		$('.onboarding-ed').hide();
	}
	if (hideApps == 1) {
		$('.js-side-menu-open').prependTo('.js-header-wrap');
		$('.js-header-aside').hide();
	}
	if (hideTxt == 1) {
		$('.tag-home').hide();
	}
	if (hideBFoot == 1) {
		$('.js-acp-footer.acp-footer').hide();
	}
	if (hideMenu1 == 1) {
		$('.nav-menu--theme').hide();
	}
	if (hideMenu2 == 1) {
		$('.nav-menu__list > ul:nth-child(3)').hide();
	}
	if (hideMenu3 == 1) {
		$('.nav-menu__list > ul:nth-child(4)').hide();
	}
	if (hideMenu4 == 1) {
		$('.nav-menu__list > ul:nth-child(5)').hide();
	}
	if (hideMenu5 == 1) {
		$('.nav-menu__list > ul:nth-child(6)').hide();
	}
	console.log('[DDGMTR] Loading Complete!')
});