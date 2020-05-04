// ==UserScript==
// @run-at	 document-end
// @version      2.123
// @name         Magic PH
// @author       Magic Of Lolis <magicoflolis@gmail.com> https://magicoflolis.github.io/Arnoodle
// @description  AIO tweaks for PornHub and PornHub Premium
// @homepage	 https://magicoflolis.github.io/Arnoodle
// @homepageURL  https://magicoflolis.github.io/Arnoodle
// @downloadURL  https://github.com/magicoflolis/Arnoodle/raw/master/MagicPH.user.js
// @updateURL  	 https://github.com/magicoflolis/Arnoodle/raw/master/MagicPH.user.js
// @supportURL   https://github.com/magicoflolis/Arnoodle/issues
// @include      *://*.pornhubpremium.com/*
// @include      *://*.pornhub.com/*
// @include		 file://*
// @include		 about:blank
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @grant        none
// ==/UserScript==

//$('').remove();
// https://www.pornhub.com/view_video.php?viewkey=ph5e7ebbda1db25
// https://www.pornhubpremium.com/view_video.php?viewkey=ph5e7ebbda1db25

setTimeout(function() {
	console.clear()
	console.log('[Magic PH] Loading...')
	// var url = window.location.href
	var host = window.location.hostname
	var path = window.location.pathname
	var lS = window.localStorage
	var PHP = document.querySelector('.premiumUser');
	var bodyI = document.querySelector('body');
	var bodyO = document.querySelector('body.logged-out');
	var rect = document.querySelector('.container  ').getBoundingClientRect()
	// Header Menu
	$('.networkBar').remove();
	$('#pornportal-wrapper').remove();
	$('#welcome').remove();
	$('.modalWrapper').remove();
	$('.livesex').remove();
	$('.realsex').remove();
	$('.trendingWrapper').remove();
	$('.popularFilterPornstar').remove();
	$('.popularSearches').remove();
	$('.popularSearchIcon').remove();
	//$('.popularFilters').remove();
	//$('.optionalHeaderSubMenu:nth-child(5)').remove();
	//$('.leftPanel > p').remove();
	$('ul.headerSubMenu > li.omega').prependTo('ul.headerSubMenu');
	$('#menuItem2 > a[href^="/video"]').attr('href','/video?o=tr&t=t&hd=1');
	$('#menuItem3 > a[href="/categories"]').attr('href','/categories?o=al');
	$('#menuItem5 > a[href^="/pornstars"]').attr('href','/pornstars?performerType=pornstar');
	$('#menuItem7 > a[href^="/community"]').attr('href','/user/discover/popular_verified_members');
	$('#menuItem8 > a[href^="/albums"]').attr('href','/gifs');
	// /albums /albums/female-straight-uncategorized?o=tr&t=t
	// Body
	$('a[href*="javascript:signinbox"]').remove();
	$('button.tooltipTrig.open-playlist-link.playlist-trigger').remove();
	$('.footerContentWrapper').remove();
	// Default PH 
	if( $('#headerSearchWrapperFree').length ) {
		 console.log('[Magic PH] Found Pornhub.')
		 $('a[data-entrycode="DiscoverPremium"]').remove();
		 $('.headerBtnsWrapper').remove();
		 $('.communityMenuTop').remove();
		 $('.feedSideBar > section:nth-child(1)').remove();
		 // PH Video Page
		 if (path == '/view_video.php') {
			  console.log('Detected Video Page')
			  $('.tab-menu-wrapper-row > .tab-menu-wrapper-cell:nth-child(2)').remove();
			  $('.alpha.videoBox.videoblock.js-pop.pcVideoListItem').remove();
			  $('#p2vVideosVPage').remove();
			  $('.favorites-message').remove();
			  $('.mhp1138_upsell').remove();
			  $('#under-player-playlists').remove();
			  $('.streamatesModelsContainer').remove();
			  $('.js-commentReplacement').remove();
			  $('.active.fanclub-info-pop').remove();
			  $('.show-more-btn').prependTo('.userButtons');
			  $('#vpContentContainer').attr('style','display: unset !important;');
			  $('#hd-leftColVideoPage').attr('style','width: 80vw !important;  position: unset !important; margin-left: -250px !important;');
			  $('.video-wrapper').attr('style','width: 80vw !important;  position: unset !important;');
			  $('#player').attr('style','width: 95vw !important;');
			  $('.video-wrapper.js-relatedRecommended').attr('class','video-info-row showLess');
			  $('#relatedVideosVPage').appendTo('#hd-leftColVideoPage > div:nth-child(2)');
			  $('#hd-leftColVideoPage > div:nth-child(2)').attr('style','display: none;');
			  if( $('.logged-out').length ) {
				   $('.loggedOut.inline-block.subscribeButton > .buttonBase').remove();
				   $('.loggedOut.smallButton.inline-block.subscribeButton > .buttonBase').remove();
				   $('.votes-fav-wrap').remove();
				   $('span.subscribers-count').remove();
				   $('#votes-fav-wrap').remove();
				   $('.js-paidDownload').remove();
				   $('.tab-menu-wrapper-row > .tab-menu-wrapper-cell:nth-child(2)').remove();
				   $('.tab-menu-wrapper-row > .tab-menu-wrapper-cell:nth-child(2)').remove();
				   // $('.tab-menu-wrapper-row > .tab-menu-wrapper-cell:nth-child(3)').remove();
				   // $('.tab-menu-wrapper-row > .tab-menu-wrapper-cell:nth-child(4)').remove();
				   // $('[data-tab="download-tab"]').remove();
				   // $('[data-tab="share-tab"]').remove();
				   // $('[data-tab="add-to-tab"]').remove();
			  }
			  lS.setItem('player_quality', '{"quality":"720"}')
			  lS.setItem('player_quality', '{"quality":"1080"}')
		 }
		 if (path == '/') {
			  $('.sectionWrapper:nth-child(3)').prependTo('.frontListingWrapper');
			  $('#mostRecentVideosSection').remove();
			  $('.sectionWrapper:nth-child(5) > .sectionTitle').remove();
		 }
		 if (path == '/video') {
			  $('.buttonClass.light.greyButton').remove();
			  $('#categoriesStraight').prependTo('.nf-categories-sidebar');
			  $('.active.sidebarIndent').remove();
			  //$('.sidebar_wrapper:nth-of-type(5)').remove();
			  $('.section_bar_sidebar:nth-of-type(6)').remove();
			  $('.section_bar_sidebar:nth-of-type(8)').remove();
			  $('.section_bar_sidebar:nth-of-type(7)').prependTo('.nf-categories-sidebar');
			  $('div.sidebar_wrapper:nth-of-type(7)').remove();
		 }
		 if (path == '/categories') {
			  $('h1').remove();
			  $('.buttonClass.light.greyButton').remove();
		 }
	} else {
		 // Premium PH
		 if( $('.premiumUser').length ) {
			  console.log('Switching To Premium!')
			  $('#giftingEntry').remove();
			  $('[data-tab="download-tab"]').remove();
			  $('[data-tab="share-tab"]').remove();
			  $('.tab-menu-wrapper-cell:nth-child(2)').remove();
			  $('.tab-menu-wrapper-cell:nth-child(2)').remove();
			  // Premium PH Home
			  if (path == '/') {
				   //alert("Text: " + $("a[href^=","]").text());
				   var t1 = $('.feed_title > a').first().text();
				   var t2 = t1.replace(/\s+/g, '');
				   var sub = 'subscriptions';
				   $.trim(t2);
				   $('a[href^="/users/"]').attr('href','/users/'+t2+'/videos/favorites');
				   $('.sectionWrapperPremium.feed_wrapper').prependTo('.container');
				   $('.sectionWrapperPremium:nth-of-type(5)').hide();
				   $('.sectionWrapperPremium:nth-of-type(6)').hide();
				   $('.sectionWrapperPremium:nth-of-type(7)').hide();
				   $('.sectionWrapperPremium:nth-of-type(8)').hide();
				   $('.sectionWrapperPremium:nth-of-type(10)').hide();
				   $('.sectionWrapperPremium:nth-of-type(11)').hide();
				   $('.sectionWrapperPremium:nth-of-type(12)').hide();
				   $('.featuredNetwork > .sectionWrapperPremium').hide();
				   $('.featuredChannel').hide();
				   $('.sectionCarousel.sectionWrapper').remove();
			  }
			  // Premium PH Video Page
			  if (path == '/view_video.php') {
				   console.log('Cleaning Webpage')
				   $('#cmtWrapper').remove();
				   $('.tab-menu-wrapper-cell:nth-child(2)').remove();
				   lS.setItem('player_quality', '{"quality":"1080"}')
				   lS.setItem('player_quality', '{"quality":"1440"}')
				   lS.setItem('player_quality', '{"quality":"2160"}')
				   //lS.removeItem('watchedVideoIds')
				   //lS.removeItem('watchedVideoStorage')
			  }
		 }
	}
	if (path == '/gif') {
		 $('toggleGifWebmButton').click();
	}
	window.scrollBy(rect.left, rect.top)
	console.log('[Magic PH] Loading Complete!')
}, 1000)
