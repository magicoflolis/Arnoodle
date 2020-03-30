// ==UserScript==
// @version      0.24
// @name         Magic PornHub
// @namespace    https://github.com/magicoflolis
// @author       Magic Of Lolis
// @description  AIO tweaks for PornHub and PornHub Premium
// @homepage	 https://twitter.com/for_lollipops
// @homepageURL  https://twitter.com/for_lollipops
// @updateURL  	 https://github.com/magicoflolis/Arnoodle/raw/master/MagicPH.user.js
// @downloadURL  https://github.com/magicoflolis/Arnoodle/raw/master/MagicPH.user.js
// @supportURL   https://github.com/magicoflolis/Magic-PH/issues
// @run-at 		 document-start
// @connect      www.pornhubpremium.com
// @include      *://*.pornhubpremium.com/*
// @include      *://*.pornhub.com/*
// @exclude      *://*.pornhubpremium.com/
// @exclude      *://*.pornhub.com/
// @require      https://code.jquery.com/jquery-latest.js
// @resource CSS1 https://github.com/magicoflolis/Arnoodle/raw/master/generated-header.css
// @resource CSS2 https://github.com/magicoflolis/Arnoodle/raw/master/header.css
// @grant GM_setValue
// @grant GM_getValue
// @grant GM_deleteValue
// @grant GM_getTab
// @grant GM_getResourceURL
// @grant GM_getResourceText
// @grant GM_xmlhttpRequest
// @grant GM_addStyle
// @grant unsafeWindow
// ==/UserScript==
setTimeout(function() {
	// GM_addStyle(GM_getResourceText('CSS1'));
	GM_addStyle(GM_getResourceText('CSS2'));
	GM_deleteValue('js-networkBar');
	console.clear();
	console.log('Magic PornHub AIO loaded...');
	var res = document.querySelectorAll(
		'ul.mhp1138_quality.mhp1138_optionsList > li'
	);
	var url = location.href;
	var host = location.hostname;
	var path = location.pathname;
	var rect = document.getElementById('main-container').getBoundingClientRect();
	var body = document.querySelector('body');
	var lout = document.querySelector('body.logged-out');
	var foot = document.querySelector('div.footerContentWrapper');
	var full = document.querySelector('mhp1138_front > mhp1138_cinema');
	var hdR = document.querySelector('#hd-rightColVideoPage');
	var hdL = document.querySelector('#hd-leftColVideoPage');
	var PDown = document.getElementById('js-shareData');
	var playlist = document.getElementById('under-player-playlists');
	var newParent = document.querySelector('div.wrapper.hd');
	var oldParent = document.querySelector('div.container');
	if (ad_player_id) {
		console.log('PORNHUB Downloader : Found video ID:' + ad_player_id);
		var v = window['flashvars_' + ad_player_id];
		console.log(
			"PORNHUB Downloader : Try to find variable named 'flashvars_" +
				ad_player_id +
				"'"
		);
		var a = Object.values(v);
		a.forEach(function(entry) {
			var box = document.querySelector('.tab-menu-wrapper-row');
			if (entry.length >= 20) {
				var c = entry.indexOf('.mp4');
				if (c != '-1') {
					var f = false;
					if (entry.indexOf('2160P') != '-1') f = '2160P';
					else if (entry.indexOf('1440P') != '-1') f = '1440P';
					else if (entry.indexOf('1080P') != '-1') f = '1080P';
					else if (entry.indexOf('720P') != '-1') f = '720P';
					else if (entry.indexOf('480P') != '-1') f = '480P';
					else if (entry.indexOf('240P') != '-1') f = '240P';
					else f = false;
					if (f !== false)
						box.innerHTML +=
							'<div class="tab-menu-wrapper-cell"><a class="tab-menu-item tooltipTrig" data-tab="download-tab" target="_blank" href="' +
							entry +
							'" data-title="Download at ' +
							f +
							'"><i class="main-sprite-dark-2"></i><span>In ' +
							f +
							'</span></a></div>';
				}
			}
		});
	}
	if (path == '/gif') {
		document.getElementsByClassName('toggleGifWebmButton').click();
	}
	if ((url = 'pornhub.com')) {
		if (path == '/view_video.php') {
			console.log('Cleaning Webpage');
			localStorage.setItem('player_quality', '{"quality":"1080"}');
			localStorage.setItem('player_adaptive', '{"hlsLevel":1}');
			// document.querySelector('div#js-networkBar.networkBar').setAttribute("style", "display: none;")
			// hdR.setAttribute("style", "display:none")
			// foot.setAttribute("style", "display:none")
			// document.querySelector('div#vpContentContainer').setAttribute('style', 'width:125.5%;')
			// hdL.setAttribute('style', 'width:134%;')
			// full.setAttribute('class', 'mhp1138_active')
			// quality[1].setAttribute("style", "display:none")
			// quality[2].setAttribute("style", "display:none")
			PDown.setAttribute('style', 'width:100%;');
			// document.getElementById("player").classList.add("wide")
			// localStorage.setItem('player_quality', '{"quality":"1080"}')
			localStorage.setItem('player_adaptive', '{"hlsLevel":1}');
			// localStorage.setItem("player_quality", '{"quality":"2160"}')
			// playlist.setAttribute("style", "display:none")
			if (body == lout) {
				// document.querySelector('span.headerBtnsWrapper').setAttribute("style", "display:none")
				// document.getElementById('topRightProfileMenu').setAttribute("style", "display:none")
				// document.querySelector('div#cmtWrapper > h2').setAttribute("style", "display:none")
				// document.querySelector('p.commentLogMessage').setAttribute("style", "display:none")
				// document.querySelector('div.userButtons').setAttribute("style", "display:none")
				// document.querySelector('span.subscribers-count').setAttribute("style", "display:none")
				// document.querySelector('div.votes-fav-wrap').setAttribute("style", "display:none")
				// document.querySelector('#headerSearchWrapperFree').setAttribute("style", "width:920px;")
				// document.querySelector('div.tab-menu-wrapper-cell')[2].setAttribute("style", "display:none")
				// document.querySelector('div.tab-menu-wrapper-cell')[3].setAttribute("style", "display:none")
			}
			window.scrollBy(rect.left, rect.top);
		}
	} else {
		if (path == '/view_video.php') {
			console.log('Switching To Premium');
			// document.getElementById("player").classList.add("wide")
			// document.getElementsByClassName("video-wrapper")[0].setAttribute("style", "width:max-content")
			// document.getElementById("under-player-comments").setAttribute("style", "width:1325px;")
			window.scrollBy(rect.left, rect.top);
		}
	}
	localStorage.removeItem('watchedVideoIds');
	localStorage.removeItem('watchedVideoStorage');
}, 1000);
