// ==UserScript==
// @run-at	 	 document-start
// @version      1.01
// @name         DuckDuckGo Menu Test
// @author       Magic Of Lolis <magicoflolis@gmail.com> https://magicoflolis.github.io/Arnoodle
// @description  Removes meaningless things https://r-q.name/
// @homepage	 https://magicoflolis.github.io/Arnoodle
// @homepageURL  https://magicoflolis.github.io/Arnoodle
// @downloadURL  https://github.com/magicoflolis/Arnoodle/raw/master/DuckDuckGoMTR.user.js
// @updateURL  	 https://github.com/magicoflolis/Arnoodle/raw/master/DuckDuckGoMTR.user.js
// @supportURL   https://github.com/magicoflolis/Arnoodle/issues
// @match       *://*.duckduckgo.com/*
// @match       duckduckgo.com
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

// NOTES
// .js-acp-footer.acp-footer //BANG FOOTER
// https://r-q.name/
//
!function () {}
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
	var hideMenu1 = 0; // [NOT RECOMMENDED] "Settings" [Default: '0'].
	var hideMenu2 = 1; // "Privacy Essentials" [Default: '0'].
	var hideMenu3 = 1; // "Why Privacy" [Default: '0'].
	var hideMenu4 = 1; // "Who We Are" [Default: '0'].
	var hideMenu5 = 1; // "Keep in Touch" [Default: '0'].
	var debloatSettings = 0; //
	// -----END USERSCRIPT SETTINGS PAGE-------
	var h = 'hide';
	var s = 'show';
	var ls = window.localStorage;
	var s1 = $(
		'<nav><li style="width: 10vw; height: 50vh;"><a class="MTRMenu">Script Settings<span class="arrow">&#9650</span></a><ul class="sub-menu" id="assetNameMenu" style=""></ul></li></nav>'
	);
	var a = $('.arrow');
	var aUp = '▲';
	var aDo = '▼';
	var sMTR = ls.setItem('MTR_Core', 'Default');
	var slURL = ls.setItem('LogoURL', logoURL);
	var slTXT = ls.setItem('LogoTXT', logoTXT);
	var saH = ls.setItem('Apps_Hidden', hideApps);
	var sbfH = ls.setItem('BFoot_Hidden', hideBFoot);
	var sfH = ls.setItem('Footer_Hidden', hideFooter);
	var stH = ls.setItem('Txt_Hidden', hideTxt);
	var ssH = ls.setItem('Settings_Hidden', hideMenu1);
	var speH = ls.setItem('Privacy_Essentials_Hidden', hideMenu2);
	var swpH = ls.setItem('Why_Privacy_Hidden', hideMenu3);
	var swwH = ls.setItem('Who_We_Are_Hidden', hideMenu4);
	var sktH = ls.setItem('Keep_in_Touch_Hidden', hideMenu5);
	// page break
	var gMTR = ls.getItem('MTR_Core', 'Default');
	var glURL = ls.getItem('LogoURL', logoURL);
	var glTXT = ls.getItem('LogoTXT', logoTXT);
	var gaH = ls.getItem('Apps_Hidden', hideApps);
	var gbfH = ls.getItem('BFoot_Hidden', hideBFoot);
	var gfH = ls.getItem('Footer_Hidden', hideFooter);
	var gtH = ls.getItem('Txt_Hidden', hideTxt);
	var gsH = ls.getItem('Settings_Hidden', hideMenu1);
	var gpeH = ls.getItem('Privacy_Essentials_Hidden', hideMenu2);
	var gwpH = ls.getItem('Why_Privacy_Hidden', hideMenu3);
	var gwwH = ls.getItem('Who_We_Are_Hidden', hideMenu4);
	var gktH = ls.getItem('Keep_in_Touch_Hidden', hideMenu5);
	// page break
	console.clear();
	console.log('[DDGMTR] Loading...');
	$('.content-wrap--home').append(s1);
	$.fn.extend({
		toggleText: function (a, b) {
			var that = this;
			if (that.text() != a && that.text() != b) {
				that.text(a);
			} else if (that.text() == a) {
				that.text(b);
			} else if (that.text() == b) {
				that.text(a);
			}
			return this;
		},
	});
	if (typeof Storage !== 'undefined') {
		//ls.clear();
		console.log('[DDGMTR] First Time Setup...');
		ls.debloatSettings = debloatSettings;
		ls.LogoURL = logoURL;
		ls.LogoTXT = logoTXT;
		ls.Apps_Hidden = hideApps;
		ls.BFoot_Hidden = hideBFoot;
		ls.Footer_Hidden = hideFooter;
		ls.Txt_Hidden = hideTxt;
		ls.Settings_Hidden = hideMenu1;
		ls.Privacy_Essentials_Hidden = hideMenu2;
		ls.Why_Privacy_Hidden = hideMenu3;
		ls.Who_We_Are_Hidden = hideMenu4;
		ls.Keep_in_Touch_Hidden = hideMenu5;
	}
	// 	var arr = new Array();
	// Appery("mobilecheckboxgroup").find(":checked").each(function(){
	// arr.push($(this).val());
	// });
	var SettingsList = ['United States', 'Canada', 'Argentina', 'Armenia'];
	var assetList = $('#assetNameMenu');
	$.each(SettingsList, function (i) {
		var li = $('<li/>')
			.addClass('ui-menu-item')
			.attr('role', 'menuitem')
			.appendTo(assetList);
		var aaa = $('<a>').addClass('ui-all').appendTo(li);
		var input = $('<input/>')
			.addClass('ui-all')
			.attr('type', 'checkbox')
			.appendTo(aaa);
		var aaaa = $('<span>').text(SettingsList[i]).appendTo(aaa);
	});
	$('.sub-menu').toggle();
	$('li.ui-menu-item:nth-of-type(1) > .ui-all > .ui-all').on('click', function () {
		var re = $('.tag-home');
		if (this.checked) {
			buttons()
		} else {
			re.toggle();
			ls.Txt_Hidden = '0'
		}
	});
	$('li.ui-menu-item:nth-of-type(2) > .ui-all > .ui-all').on('click', function () {
		var re = $('.nav-menu__list > ul:nth-child(3)');
		if (this.checked) {
			buttons()
		} else {
			re.toggle();
			ls.hideMenu2 = '0'
		}
	});
	$('li.ui-menu-item:nth-of-type(3) > .ui-all > .ui-all').on('click', function () {
		var re = $('.nav-menu__list > ul:nth-child(4)');
		if (this.checked) {
			buttons()
		} else {
			re.toggle();
			ls.hideMenu3 = '0'
		}
	});
	$('li.ui-menu-item:nth-of-type(4) > .ui-all > .ui-all').on('click', function () {
		var re = $('.nav-menu__list > ul:nth-child(5)');
		if (this.checked) {
			buttons()
		} else {
			re.toggle();
			ls.hideMenu4 = '0'
		}
	});
	$('.MTRMenu').click(function () {
		$('.sub-menu').toggle();
		$(this).find('span').toggleText(aDo, aUp);
	});
	function buttons() {
		var tagH = $('.tag-home');
		var se3 = $('.nav-menu__list > ul:nth-child(3)');
		var se4 = $('.nav-menu__list > ul:nth-child(4)');
		var se5 = $('.nav-menu__list > ul:nth-child(5)');
		var se6 = $('.nav-menu__list > ul:nth-child(6)');
		if (gtH == 1) {
			ls.Txt_Hidden = '1'
			tagH.hide();
		}
		if (gpeH == 1) {
			ls.hideMenu2 = '1'
			se3.hide();
		}
		if (gwpH == 1) {
			ls.hideMenu3 = '1'
			se4.hide();
		}
		if (gwwH == 1) {
			ls.hideMenu4 = '1'
			se5.hide();
		}
		if (gktH == 1) {
			ls.hideMenu5 = '1'
			se6.hide();
		}
	}
	if (glURL != '/about') {
		$('.logo-wrap--home > a[href^="/about"]').attr('href', logoURL);
	}
	if (glTXT != 'Learn more') {
		$('span.logo_homepage__tt').text(logoTXT);
	}
	if (gfH == 1) {
		var re = $('#footer_homepage');
		var ree = $('.onboarding-ed');
		re.hide();
		ree.hide();
	} else {
		re.show();
		ree.show();
	}
	if (gaH == 1) {
		var re = $('.js-side-menu-open');
		var ree = $('.js-header-aside');
		var reee = $('.js-header-wrap');
		re.prependTo(reee);
		ree.hide();
	} else {
		ree.show();
	}
	if (gbfH == 1) {
		var re = $('.js-acp-footer.acp-footer');
		re.hide();
	} else {
		re.show();
	}
	if (gsH == 1) {
		var re = $('.nav-menu--theme');
		re.hide();
	} else {
		re.show();
	}
	// if (gpeH == 1) {
	// 	var re = $('.nav-menu__list > ul:nth-child(3)');
	// 	re.hide();
	// } else {
	// 	re.show();
	// }
	// if (gwpH == 1) {
	// 	var re = $('.nav-menu__list > ul:nth-child(4)');
	// 	re.hide();
	// } else {
	// 	re.show();
	// }
	// if (gwwH == 1) {
	// 	var re = $('.nav-menu__list > ul:nth-child(5)');
	// 	re.hide();
	// } else {
	// 	re.show();
	// }
	// if (gktH == 1) {
	// 	var re = $('.nav-menu__list > ul:nth-child(6)');
	// 	re.hide();
	// } else {
	// 	re.show();
	// }
	console.log('[DDGMTR] Loading Complete!');
});
