// ==UserScript==
// @run-at 		 document-end
// @version      2
// @updateURL  	 https://github.com/magicoflolis/Arnoodle/raw/master/Arnoodle.user.js
// @name         W2G Test
// @author       Magic Of Lolis <magicoflolis@gmail.com> https://github.com/magicoflolis
// @description  AIO tweaks for PornHub and PornHub Premium
// @homepage	 https://twitter.com/for_lollipops
// @homepageURL  https://twitter.com/for_lollipops
// @supportURL   https://github.com/magicoflolis/Magic-PH/issues
// @match        https://www.watch2gether.com/rooms/*
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// ==/UserScript==

$(document).ready(function() {
	setTimeout(function() {
		 console.clear()
		 console.log('[W2G] Loading...')
		 var rI = window.localStorage
		 var tBOP = document.querySelector('.w2g-topbar-wrapper');
		 var tBNP = document.querySelector('.w2g-player-container');
		 //.button.icon.ui
		 //$(".ui.icon.button").attr("class","ui icon button loading");
		 $('.plus').remove();
		 $('div.cancel:nth-child(2)').remove();
		 $('a.w2g-search-hide').remove();
		 $('.w2g-top-message-small').remove();
		 $('#browser-message').remove();
		 $('#yt_a_message').remove();
		 $('#unconfirmed-message').remove();
		 $('.w2g-square-ad').remove();
		 $('.w2g-center-ad').remove();
		 $('.w2g-search-nomore').remove();
		 $('.record').remove();
		 $('.w2g-legal').remove();
		 $('.w2g-themes').remove();
		 $('.w2g-change-language').remove();
		 $('.inline:nth-child(7)').remove();
		 $('.w2g-enablecam-button').remove();
		 $('.w2g-hide-userbar').remove();
		 $('.w2g-topbar-logo').remove();
		 $('.w2g-search-hide.w2g-main-right').remove();
		 $('.plus-click').remove();
		 $('.w2g-player-search').attr("style","min-width: 99.5vw !important; max-width: 100vw !important; min-height: 100vh !important;");
		 $('#search-bar-form').attr("style","min-width: 50vw !important; max-width: 50vw !important; margin-left: 3px !important;");
		 $('#main-invite-url').attr("style","min-width: 20vw; !important;");
		 //$('.invite-button').attr("style","margin-right: 300px !important;");
		 $('#main-invite-url').appendTo('#site-settings-modal > div:nth-child(3)');
		 $('.invite-button').prependTo('#site-settings-modal > div:nth-child(3)');
		 //$('.item:nth-child(8)').prependTo('#sidebar-room-form');
		 $('.mod-only.item').prependTo('#sidebar-room-form');
		 $('.forum.ui').appendTo('#sidebar-room-form');
		 $('.w2g-topbar-roominfo').appendTo('div.w2g-topbar-menu:nth-child(1)');
		 while (tBOP.childNodes.length > 0) {
			  tBNP.appendChild(tBOP.childNodes[0]);
		 }
		 $('.w2g-topbar-wrapper').remove();
		 $('.mod-col > div:nth-child(6)').remove();
		 //$('#userbar').remove();
		 $('.ui.cancel.button').click();
		 rI.removeItem('y04ukq1tjcawl6j71o_history');
		 rI.removeItem('pnxm6l31s50pjruo25_history');
	}, 2000);
	setTimeout(function() { // remove this to disable auto reload page every 6 hours
		 //location.reload();
	}, 6*60*60*1000);
	//$("button.ui:nth-child(4)").attr("class","ui icon button loading");
	$("button.ui:nth-child(4)").click();
});