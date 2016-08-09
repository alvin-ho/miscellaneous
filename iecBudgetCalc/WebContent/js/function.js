function isEN(){
	var _href = document.location.href;
	if(( _href.indexOf(pEn) > 0) || ( _href.indexOf(lEn) > 0)){
		return true;
	}else{
		return false;
	}
}

function isTC(){
	var _href = document.location.href;
	if(( _href.indexOf(pTc) > 0) || ( _href.indexOf(lTc) > 0)) {
		return true;
	}else{
		return false;
	}
}

function isSC(){
	var _href = document.location.href;
	if( _href.indexOf(kanhanDomain) > 0){
		return true;
	}else{
		return false;
	}
}

function isEng(){
	var _href = document.location.href;
	if( _href.indexOf(pNotesEng) > 0){
		return true;
	}else{
		return false;
	}
}

function isChi(){
	var _href = document.location.href;
	if( _href.indexOf(pNotesChi) > 0){
		return true;
	}else{
		return false;
	}
}
function checkEmailFormat(emailStr) {
   if (emailStr.length == 0) {
	   return true;
   }
   var emailPat=/^(.+)@(.+)$/;
   var specialChars="\\(\\)<>@,;:\\\\\\\"\\.\\[\\]";
   var validChars="\[^\\s" + specialChars + "\]";
   var quotedUser="(\"[^\"]*\")";
   var ipDomainPat=/^(\d{1,3})[.](\d{1,3})[.](\d{1,3})[.](\d{1,3})$/;
   var atom=validChars + '+';
   var word="(" + atom + "|" + quotedUser + ")";
   var userPat=new RegExp("^" + word + "(\\." + word + ")*$");
   var domainPat=new RegExp("^" + atom + "(\\." + atom + ")*$");
   var matchArray=emailStr.match(emailPat);
   if (matchArray == null) {
	   return false;
   }
   var user=matchArray[1];
   var domain=matchArray[2];
   if (user.match(userPat) == null) {
	   return false;
   }
   var IPArray = domain.match(ipDomainPat);
   if (IPArray != null) {
	   for (var i = 1; i <= 4; i++) {
		  if (IPArray[i] > 255) {
			 return false;
		  }
	   }
	   return true;
   }
   var domainArray=domain.match(domainPat);
   if (domainArray == null) {
	   return false;
   }
   var atomPat=new RegExp(atom,"g");
   var domArr=domain.match(atomPat);
   var len=domArr.length;
   if ((domArr[domArr.length-1].length < 2) ||
	   (domArr[domArr.length-1].length > 3)) {
	   return false;
   }
   if (len < 2) {
	   return false;
   }
   return true;
}
// ended

$(document).ready(function(){

	// 2014.1.9 start
	// add en to the body class to fix top menu styling
	var loc = window.location.href;
	if(loc.search('/en/') !== -1 || loc.search('lang=en') !== -1 || loc.search('lang=EN') !== -1) {
		if(!$('body').hasClass('en')) {
			$('body').addClass('en');
		}
	}else {
		if(!$('body').hasClass('tc')) {
			$('body').addClass('tc');
		}
	}
	// ended

	headerSubmenu();
	leftMenu();
	contentContainerBg();
	btnTop();
	thirdmargin('.list-graphic li');
	InnerSameHeight('.list-video');
	thirdmargin('.list-video li');
	tab('.tab-content','.tab li a');
	contentExpand();
	mainPullDown();
	video();
	openBox('.btn-do-next','.do-next-innerwrapper');
	openBox('.btn-need-help','.need-help-innerwrapper .innerwrapper');
	showAddThisPage();
	getUrlId();
	sitemapFunction();
	if($('.btn-sc').length > 0) {
		$('.btn-sc').fancybox({
			'padding':0,
			'margin':0,
			'showCloseButton':true,
			'onComplete' : function(){
				$('.scrollplane').mCustomScrollbar({
					scrollInertia:250
				});
			}
		});
	};
	


	// updated 20140122 for the history back
	addHash();

	// 2013.12.10 start
	//Load cookie and add class to the #main div to store the option
	loadFontSize();
	// 2013.12.10 ended

	// 2013.12.13 start
	// FOR THE LISTING WITH CONTENTS CLICK THE LINK GO IN THE SAME PAGE
	// THE A TAG HREF MUST BE #01, #02 ,#03, SLT
	$('.content-listing a').click(function(){
		var $this = $(this),
			$thisHref = $this.attr('href'),
			$thisNumber = $thisHref.replace("#" , "" );
		if($thisHref.indexOf('.html') < 0){
			if(!$('.content-listing').children().eq($thisNumber-1).hasClass('open')){
				$('.content-listing').children().eq($thisNumber-1).find('.topic').click();
			} else {
				var tagTarget = $('.content-listing').children().eq($thisNumber-1),
					_inner = $('.inner'),
					_top = tagTarget.position().top,
					_innerTop = _inner.offset().top;
				$('body,html').stop(true,true).animate({
						scrollTop: _innerTop + _top-15
				}, 1500);
			}
		}
	});
	// 2013.12.13 end
		
});

//WHEN THE WINDOW RESIZE
$(window).resize(function(){
	contentContainerBg();
	socialMedia();
});

// WHEN ALL CONTENTS ARE LOADED
$(window).load(function(){
	socialMedia();
	// 2014.4.17 start
	// take away the survey popup for all tools

	// // comment for the whole survey function 2014.07.17
	// if(!isTools()) {
	// 	survey();
	// }
	
	// 2014.4.17 ended
});

// WHEN THE WINDOW SCROLL
$(window).scroll(function(){
	socialMedia();
});

// 2014.4.17 start
// take away the survey popup for all tools
function isTools() {
	var loc = window.location.href;
	if(loc.search('/tools/') !== -1) {
		return true;
	}
	return false;
}
// 2014.4.17 ended

// 2013.12.10 start
//Load cookie and add class to the #main div to store the option
function loadFontSize() {
	var fontSize = readCookie('fontsize');
	changeFont(parseInt(fontSize));
}
// 2013.12.10 ended

//FIX THE LEFT MENU BACKGROUND WHEN THE WINDOW WIDTH IS SMALLER THAN 970 PX
function contentContainerBg(){
	var windowWidth = $(window).width();
	if(windowWidth<=970){
		$('.content').css('background-position-x','-476px');
	} else {
		$('.content').css('background-position-x','center');
	}
}

// BTN BACK TO TOP
function btnTop(){
	$('.btn-top').click(function(e){
		e.preventDefault();
		$('body,html').stop().animate({
				scrollTop: 0
		}, 800);
	});
}

//CHANGE LANGUAGES FUNCTION
var chLang=function(lang) {
	var currentPath=location.href.toString();
	var switchTc='/tc/';
	var switchEn='/en/';
	var switchSc='/sc/';
	lang = '/'+lang+'/';

	switch (lang){
		case '/en/':
			currentPath=currentPath.replace(switchTc, switchEn);
			currentPath=currentPath.replace(switchSc, switchEn);
			break;
		case '/tc/':
			currentPath=currentPath.replace(switchEn, switchTc);
			currentPath=currentPath.replace(switchSc, switchTc);
			break;
		case '/sc/':
			currentPath=currentPath.replace(switchEn, switchSc);
			currentPath=currentPath.replace(switchTc, switchSc);
			break;
		default:
	}

	document.location=currentPath;
}

//DETAIL PAGE EXPAND CONTENT
function contentExpand(){
	$('.inner .content-listing li .topic').click(function(){
		var _this = $(this);
		var _inner = $('.inner');
		
		var _top = _this.position().top;
		var _innerTop = _inner.offset().top;
		var wHeight = $(window).height();

		// updated 2014 03 05
		var _thisIndex = parseInt($(this).parent().index())+1;
		window.location.href = "#"+_thisIndex;	
		// updated 2014 03 05


		if(!_this.parent().hasClass('open')){
			_this.parent().toggleClass('open');
			$('body,html').stop(true,true).animate({
					scrollTop: _innerTop + _top-(wHeight/4)
			}, 1500);
		} else {
			_this.parent().toggleClass('open');
		}
	});
}

//CANCEL THE 3N RD 
function thirdmargin(target){
	$(target+':nth-child(3n)').css('margin-right','0');
}

// HEADER MENU FUNCTION, SHOW SUB MENU
function headerSubmenu(){
	//MAIN MENU
	$('body').on('mouseenter','.menu>li',function(e){
		// e.preventDefault();
		$(this).has('.sub-menu-wrapper').addClass('show');
		if(!$(this).hasClass('last')){
			InnerSameHeight('.sub-menu-wrapper ul');	
		}
		
	}).on('mouseleave','.menu>li',function(e){
		// e.preventDefault();
		$(this).has('.sub-menu-wrapper').removeClass('show');
		if(!$(this).hasClass('last')){
			InnerSameHeight('.sub-menu-wrapper ul');
		}
		
	})


}

// MAIN PAGE
// BUTTON I WANT TO KNOW PULL DOWN
function mainPullDown(){
	$('body').on('click','.i-want-to-know-innerwrapper a.btn-pull-down',function(e){
		var _this = $(this);
		$('.i-want-to-know-innerwrapper ul li').addClass('show');
		// $('.i-want-to-know-innerwrapper ul li').removeClass('current');
	}).on('mouseleave','.i-want-to-know-innerwrapper',function(e){
		$('.i-want-to-know-innerwrapper ul li').removeClass('show');
	})
	$('.i-want-to-know-innerwrapper ul li a').click(function(event){
			event.preventDefault()
			var _this = $(this);
			var _href = _this.attr('href');
			$('.i-want-to-know-innerwrapper ul li').removeClass('show');
			$('.i-want-to-know-innerwrapper ul li').removeClass('current');
			_this.parent().addClass('show');
			_this.parent().addClass('current');
			$('.btn-more').attr('href',_href);
	});
}

//LEFT MENU FUNCTION, SHOW SUBMENU
function leftMenu(){
	//ADD INDICATOR
	var leftMenuIndicator = "<a href=\"javascript:;\" class=\"left-menu-indicator\"></a>";
	$('.left-menu li').has('.submenu').append(leftMenuIndicator);

	//ADD CURRENT'S SUB MENU CLASS "HIGHLIGHT"
	$('.left-menu li').has('.current').parents('li').addClass('highLight');
	$('.left-menu li').has('.current').parents('li').children('.left-menu-indicator').addClass('active');

	//CURRENT INDICATOR WHITE COLOR
	$('.current').parent().children('.left-menu-indicator').addClass('white');

	$('.left-menu-indicator').click(function(e){
		e.preventDefault();

		//CHECK THE INDICATOR ACTIVE OR NOT
		if($(this).hasClass('active')){
			$(this).removeClass('active');
		} else {
			$(this).addClass('active');	
		};
		
		// IF IE7, SINCE THERE ARE PROBLEMS OF SLIDETOGGLE AND ANIMTE HEIGHT TOGGLE IN IE7
		if($.browser.msie && parseInt($.browser.version, 10) == 7 || $.browser.msie && parseInt($.browser.version, 10) == 8) {
		    var hasClassOpened = $(this).parent().children('.submenu').hasClass("opened");				
			if(hasClassOpened == true){
				$(this).parent().children('.submenu').stop().hide();
				$(this).parent().children('.submenu').removeClass('opened');
			} else {
				$(this).parent().children('.submenu').stop().show();
				$(this).parent().children('.submenu').addClass('opened');
			}

		} else {
			

			
			
			$(this).parent().children('.submenu').stop().slideToggle(500);	
		}
		
		
	});
}

//SYNC THE HEIGHT INSIDE THE WRAPPER
function InnerSameHeight(wrapper){
	var max = -1;
	$(wrapper).children().each(function() {
	    var h = $(this).height(); 
	    max = h > max ? h : max;
	});
	$(wrapper).children().css('min-height',max);
}

// FUNCTION FOR THE SOCIAL MEDIA WRAPPER
function socialMedia(){
	var _header = $('.header'),
		_socialWrapper = $('.social-media-wrapper .innerwrapper'),
		windowSrollTop = $(window).scrollTop(),
		windowWidth = $(window).width(),
		headerHeight = _header.height();


	if(windowSrollTop > headerHeight){
		$('.social-media').css({'top':2});
	} else {
		$('.social-media').css({'top':headerHeight - windowSrollTop + 2});
	}

	if(windowWidth <=1024){
		_socialWrapper.css({'right':0});	
	} else {
		_socialWrapper.css({'right':-52});
	}
	
}

// TAB FUNCTION
function tab(target, conntroller){
	var _target = $(target),
		_tab = $(conntroller);

	_tab.click(function(){
		var _this = $(this);
		_tab.removeClass('active');		
		_target.removeClass('active');
		var _thisIndex = _this.parent().index();
		_target.eq(_thisIndex).addClass('active');
		_this.addClass('active');
	});
}

//CHANGE VIDEO
function video(){
        
        $('.list-video li a').click(function(e){
               var _this = $(this),
                       videoHref = _this.attr('href'),
                       h2Target = $('.ifame-video').prev(),
                       _title = _this.children().html();
 
               if(_this.hasClass('external-link') == true){
                       
               } else {
                       e.preventDefault();
                       h2Target.html(_title);
                       $('.ifame-video').attr('src',videoHref);      
               }
               
        });
 
        if (location.href.toString().indexOf('money-smart-video-programme.html') > 0 ) {
               var urlWithoutHash = document.location.hash.replace("#" , "" );
               if(urlWithoutHash){
                       $('.list-video li').eq(parseInt(urlWithoutHash)-1).children().click();
                       $('.list-video li a').click(function(){
                               if(!$(this).hasClass('external-link')) {
                                      $('.list-video li a').click(function(){
                                              document.location.hash = '0'+parseInt($(this).parent().index()+1)
                                      });
                               }
                       });
               }       
        }
 
        
}


function fb_share(_langIdx){
	var lang = ['English', 'Traditional Chinese', 'Simplified Chinese'];
	_gaq.push(['_trackEvent', 'Shortcut Bar', 'Facebook', lang[_langIdx] ]);
	var dd = location.href.toString();	
	window.open('http://www.facebook.com/share.php?u='+dd, 'newwindow', 'width=700, height=410, top=0, left=0, toolbar=no, menubar=no, scrollbars=yes, resizable=yes,location=no, status=no');
}

// NEED HELP WRAPPER
function openBox(self, target){
	$(self).click(function(){
		// IF IE7, SINCE THERE ARE PROBLEMS OF SLIDETOGGLE AND ANIMTE HEIGHT TOGGLE IN IE7
		if($.browser.msie && parseInt($.browser.version, 10) == 7 || $.browser.msie && parseInt($.browser.version, 10) == 8) {
		    // $(this).parent().find(target).stop().show();
		    var hasClassOpened = $(this).parent().find(target).hasClass("opened");				
			if(hasClassOpened == true){
				$(this).parent().find(target).stop().hide();
				$(this).parent().find(target).removeClass('opened');
			} else {
				$(this).parent().find(target).stop().show();
				$(this).parent().find(target).addClass('opened');
			}
		} else {
			$(this).parent().find(target).stop().slideToggle(500);	
		}
	});
}

function showAddThisPage(){
	var oNav=document.getElementById("topsbfavourite");
	if(oNav !== null) {
	//FOR THE SOCIAL MEDIA ADD THIS PAGE BTN
	var oul = oNav.getElementsByTagName("ul")[0];
	showFav(oul);
	}

	$('.btn-myfav').click(function(){
		$('.myfav-wrapper').show();
	});
	$('body').on('mouseleave','.myfav-wrapper',function(e){
		$('.myfav-wrapper').hide();
	})
}


function showFav(container){
	var oldHtml = container.innerHTML;
	var index = oldHtml.toLowerCase().lastIndexOf("<li");
	oldHtml = oldHtml.substr(index, oldHtml.length - index);
	//var favStr = decodeURI(getCookie("favUrl"));
	var favStr = decodeURI(getCookie("favUrl").indexOf("erverPOOL") > -1 ? "" : getCookie("favUrl"));
	var arr = favStr.split(",");
	var newHtml = "";
	if(favStr != ""){
		for(var i=0;i<arr.length;i++){
			var x = arr[i].indexOf("_");
			var title = arr[i].substr(0, x);
			var url = arr[i].substr(x+1, arr[i].length - x);
			newHtml = newHtml + "<li class='pane'><a href='" + decodeURIComponent(url) + "' >" + decodeURIComponent(title) + "</a><a href='javascript:void(0);' class='btn-del' onclick='delFav(" + i + ")'></a></li>";
		}

		container.innerHTML = newHtml;
	}
	else
	{
		container.innerHTML = "";
	}
}

function addFav(){
	var favStr = decodeURI(getCookie("favUrl").indexOf("erverPOOL") > -1 ? "" : getCookie("favUrl"));	var fav = document.title + "_" + window.location.href;
	var newHtml = "";
	if(favStr != ""){
		var len = favStr.split(",").length;
		if(len < 5){
			favStr = fav + "," + favStr;
		}else{
			favStr = fav + "," + favStr.substr(0, favStr.lastIndexOf(","));
		}
	}else{
		favStr = fav;
	}
	setCookie("favUrl", escape(favStr));
	var oNav = document.getElementById("topsbfavourite");
	var oul = oNav.getElementsByTagName("ul")[0];
	showFav(oul);
}

function getCookie(key){
	var strCookie = document.cookie;
	var arrCookie = strCookie.split(";");
	var value = "";
	for(var i=0;i<arrCookie.length;i++){
		var endIndex = arrCookie[i].indexOf("=");
		var tempKey = arrCookie[i].substr(0, endIndex);
		if(tempKey.charAt(0)==" "){
			tempKey = tempKey.substr(1, tempKey.length - 1);
		}
		if(tempKey == key) {
			var len = arrCookie[i].length;
			value = arrCookie[i].substr(endIndex + 1, len - endIndex);
		}
	}
	return value;
}

function setCookie(key, value){
	var date=new Date();
	var expiresDays=30;
	date.setTime(date.getTime()+expiresDays*24*3600*1000); 
	document.cookie=key+"="+value+";path=/;expires="+date.toGMTString();
}

function delFav(index){
	var favStr = decodeURI(getCookie("favUrl").indexOf("erverPOOL") > -1 ? "" : getCookie("favUrl"));
	var arr = favStr.split(",");
	var newStr = "";
	for(var i=0;i<arr.length;i++){
		if(i != index){
			newStr = newStr + arr[i] + ",";
		}
	}
	if(newStr != ""){
		newStr = newStr.substr(0, newStr.length - 1);
	}
	setCookie("favUrl", escape(newStr));
	var oNav = document.getElementById("topsbfavourite");
	var oul = oNav.getElementsByTagName("ul")[0];
	showFav(oul);
}

function getUrlId(){
	var urlWithoutHash = document.location.hash.replace("#" , "" );
	var idNumber = parseInt(urlWithoutHash);
	// var _top = $('.content-listing').children().eq(idNumber-1).position().top;
	$('.content-listing').children().eq(idNumber-1).find('.topic').click();

}

// updated 20140122 for the history back
function addHash(){
	$('.content-listing .detail a').click(function(){
		var thisIndex = parseInt($(this).parents('.open').index())+1;
		window.location.href = "#"+thisIndex;	
	});

	
}

function caseSection(){
	var urlWithoutHash = document.location.hash.replace("#" , "" );
	$('.'+urlWithoutHash).click();
}

//2014.2.4 start
/*
js function to check whether survey 
has ever shown to user or not.
*/
function survey(){
	if(navigator.cookieEnabled) {
		if(getCookie('hkiec_survey') === 'NA') {
			// 'no' is chosen by user
		}else {
			var survey = getCookieByName('hkiec_survey');
			var counter = 1;
			var counting = 0;
			var countTime = 1000;
			var now = 0;
			var doNotDisturb = false;
			// user is new on this browser
			if(survey === '') {
				setCookie('hkiec_survey', '1');
			}else {
				survey = parseInt(survey);

				now = new Date().getTime();
				if(survey > now) {
					//countTime = survey - now;
					doNotDisturb = true;
				}

			}
			if(!doNotDisturb) {
				var intervalCounting = setInterval(function() {
					/*
					if(countTime > 1000) {
						clearInterval(intervalCounting);
						surveyPopup();
					}else {
					*/
					counting += counter;
					if(counting > 120) {
						clearInterval(intervalCounting);
						surveyPopup();
					}else {
						setCookie('hkiec_survey', counting);


					}
					/*
					}
					*/
				}, countTime);
			}

		}
	}
}
function getCookieByName(c_name) {
	if(document.cookie.length > 0) {
		c_start = document.cookie.indexOf(c_name + "=");
		if(c_start != -1) {
			c_start = c_start + c_name.length + 1;
			c_end = document.cookie.indexOf(";", c_start);
			if(c_end == -1) {
				c_end=document.cookie.length;
			}
			return unescape(document.cookie.substring(c_start,c_end));
		}
	}
	return "";
} 
function goSurvey(_lang) {
	setCookie('hkiec_survey', 'NA');
	if(_lang === 0) {
		window.location.href = '/web/en/others/activities-and-events/survey2014.html';
	}else if(_lang === 1) {
		window.location.href = '/web/tc/others/activities-and-events/survey2014.html';
	}else if(_lang === 2) {
		window.location.href = '/web/sc/others/activities-and-events/survey2014.html';
	}
}
function clearSurvey() {
	setCookie('hkiec_survey', 'NA');
	$('a#fancybox-close').click();
}
function resetSurvey() {
	$('a#fancybox-close').click();
}
function popupYoutube(_langIdx) {
	var link = 'http://www.youtube.com/user/iecentre'; // all language
	var lang = ['English', 'Traditional Chinese', 'Simplified Chinese'];
	_gaq.push(['_trackEvent', 'Shortcut Bar', 'Youtube', lang[_langIdx] ]);
	window.open(link, '_blank', '', false);
}
//2014.2.4 ended

//2014.1.30 start
function printPage(_langIdx) {
	var lang = ['English', 'Traditional Chinese', 'Simplified Chinese'];
	_gaq.push(['_trackEvent', 'Shortcut Bar', 'Print', lang[_langIdx] ]);	
	window.print();
}
//2014.1.30 ended

// FOR THE SITE MAP FUNCTION
function sitemapFunction(){
	$('.talbe-sitemap').find('.lv4').each(function(){
		var _this = $(this);
		if(_this.has('.lv5')){
			_this.parent().append('<a href=\"javascript\:\;\" class=\"indicator\" />');
		}
	});
	$('.talbe-sitemap').find('.indicator').click(function(e){
		var _this = $(this);
		e.preventDefault();
		if(!_this.hasClass('active')){
			_this.parent().find('.lv5').css('display','inline-block');
			_this.addClass('active');	
		} else {
			_this.parent().find('.lv5').css('display','none');
			_this.removeClass('active');	
		}
		
	});

	
}

$(document).ready(function(){
	calculatorTab();
	calculatorExpand();
	closeAllTab();
});

function calculatorTab(){
	$('.calculator .calculator-wrapper ul.tab li a').click(function(){
		var _this = $(this),
			formWrapper = $('.form-wrapper'),
			thisIndex = _this.parent().index();
		$('.calculator .calculator-wrapper ul.tab li a').removeClass('active');
		_this.addClass('active');
		formWrapper.children().removeClass('active');
		formWrapper.children().eq(thisIndex).addClass('active');
		
		
		if($('div.summary_panel').length > 0) {
			$('div.summary_panel').remove();
			$('div.panel_wrapper').css('display', 'block');
			$('div.chart_wrapper').css('display', 'none');
		}
		
	});
}

function calculatorExpand(){
	$('ul.expand-list li>a').click(function(){
		var _this = $(this);
		if(!_this.parents('ul').hasClass('expandAll')) { // 2013.9.10
			// _this.parents('ul').children().removeClass('open');
			// _this.parent().addClass('open');
			_this.parent().toggleClass('open');
		}
	});
}

function calculatorProcess(target){
	// 2013.9.11 control taken over by cal.ctrl.js
	if(target == 3){
		$('.calculator .calculator-wrapper ul.tab li').hide();
		$('.tab-report').show();
	} else {
		$('.calculator .calculator-wrapper ul.tab li').show();	
		$('.tab-report').hide();
		var jqPlotDiv = ['div#chart1div', 'div#chart2div', 'div#chart3div', 'div#chart4div'];
		for(var i = 0; i < jqPlotDiv.length; i++) {
			$(jqPlotDiv[i]).html('');
			$(jqPlotDiv[i]).attr('class', '');
			$(jqPlotDiv[i]).unbind('jqplotDataClick');
		}
	}
	$('.calculator .calculator-wrapper ul.tab li a').removeClass('active');
	$('.calculator .calculator-wrapper ul.tab li').eq(target).children().addClass('active');
	$('.calculator .calculator-wrapper .form-wrapper .form-innerwrapper').removeClass('active');
	$('.calculator .calculator-wrapper .form-wrapper .form-innerwrapper').eq(target).addClass('active');
}

// new appended 2013.10.24 *****
// LET THE PAGE MOVE BACK TO TOP
function calTop(){
	$('body,html').stop().animate({
			scrollTop: 0
	}, 800);
};

// UPDATED FOR THE CLOSE TAB FUNCTION
function closeAllTab(){
	$('.close-all').click(function(){
		var _this = $(this);
		_this.next().children().removeClass('open');
	});
}

// Break line when 50 letters
function BreakLines( str, len )
{
    var len = len || 50, i, j, lines, count, lineBreak = '<br/>', out = [];

    out[0] = "";

    if ( str.length < len )
        return str;

    lines = str.split(/\s+/);

    for ( i=0, j=0, count=lines.length; i<count; i++ )
    {
        if ( ( out[j] + lines[i] ).length > len )
            j++, out.push("");

        if(out[j] != "")
        {
        	out[j] += " ";
        }
        out[j] += lines[i];
    }

    return out.join(lineBreak);
}

function mailTo(_lang) {
	var aHref = '';
	var subject = '';
	var content = '';
	subject = 'IEC Education Centre';
	content = '';
	aHref = 'mailto:info@thechinfamily.hk' + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(content);				
	window.location = aHref;	
}

function surveyPopup(){
	var surveyContent = '';
	var currentLink=location.href.toString();
	if(currentLink.search('/en/') !== -1 || currentLink.search('lang=en') !== -1 || currentLink.search('lang=EN') !== -1) {
		surveyContent = '<div class=\"en popup\">'+
		'<img src=\"/web/images/common/mail/bg-mail-to-t.png\" alt=\"\" width=\"640\" height=\"20\" />'+
		'<img src=\"/web/images/common/mail/bg-mail-to-t.png\" alt=\"\" width=\"640\" height=\"20\" class=\"bg-popup-top-2\" />'+
		'<div class=\"popup-wrapper tac\">'+
		'<h1>Welcome!</h1>'+
		'<p>Your opinion is important to us. <br> We are continuously looking for ways to improve our service to you. Please share your thoughts about this website.</p><br>'+
		'<p>Thank you for your help!</p><br><br>'+
		'<p class=\"tac\">'+
		'<a href=\"javascript:goSurvey(0);\" class=\"btn\">Take the survey</a>&nbsp;'+
		'<a href=\"javascript:clearSurvey();\" class=\"btn\">No, do not show me again</a>&nbsp;'+
		'<a href=\"javascript:resetSurvey();\" class=\"btn\">Remind me later</a>'+
		'</p>'+
		'</div>'+
		'<img src=\"/web/images/common/mail/bg-mail-to-b.png\" alt=\"\" width=\"640\" height=\"20\" />'+
		'<img src=\"/web/images/common/mail/bg-mail-to-b.png\" alt=\"\" width=\"640\" height=\"20\" class=\"bg-popup-btm-2\" />'+
		'</div>'
	} else if(currentLink.search('/tc/') !== -1 || currentLink.search('lang=tc') !== -1 || currentLink.search('lang=TC') !== -1) {
		surveyContent = '<div class=\"tc popup\">'+
		'<img src=\"/web/images/common/mail/bg-mail-to-t.png\" alt=\"\" width=\"640\" height=\"20\" />'+
		'<img src=\"/web/images/common/mail/bg-mail-to-t.png\" alt=\"\" width=\"640\" height=\"20\" class=\"bg-popup-top-2\" />'+
		'<div class=\"popup-wrapper tac\">'+
		'<h1>�����蕭��梹蕭</h1>'+


		'<p>嚙踐𧞄��𧞄嚙踝蕭謜韮�橒蕭謘鳴蕭��𩤃�瞾秧�𧢝�抬蕭嚙踝�橒蕭�愇�襍嚙賡�硺漱嚙踝蕭�𪊽嚙踝蕭謕橒蕭嚙賣葡�㵪蕭�𥋘嚙賡𤜯蹎𩤃蕭嚙蝓��愇蹓嗽�嚙�</p><br><br>'+
		'<p class=\"tac\">'+
		'<a href=\"javascript:goSurvey(1);\" class=\"btn\">�𥟇�删�痹蕭�躼�埯</a>&nbsp;'+
		'<a href=\"javascript:clearSurvey();\" class=\"btn\">��嘅�矋��嚙踝�賂蕭</a>&nbsp;'+
		'<a href=\"javascript:resetSurvey();\" class=\"btn\">��嘅�墧暑嚙踐�𡜐蕭</a>'+
		'</p>'+
		'</div>'+
		'<img src=\"/web/images/common/mail/bg-mail-to-b.png\" alt=\"\" width=\"640\" height=\"20\" />'+
		'<img src=\"/web/images/common/mail/bg-mail-to-b.png\" alt=\"\" width=\"640\" height=\"20\" class=\"bg-popup-btm-2\" />'+
		'</div>'
	} else if(currentLink.search('/sc/') !== -1 || currentLink.search('lang=sc') !== -1 || currentLink.search('lang=SC') !== -1) {
		surveyContent = '<div class=\"sc popup\">'+
		'<img src=\"/web/images/common/mail/bg-mail-to-t.png\" alt=\"\" width=\"640\" height=\"20\" />'+
		'<img src=\"/web/images/common/mail/bg-mail-to-t.png\" alt=\"\" width=\"640\" height=\"20\" class=\"bg-popup-top-2\" />'+
		'<div class=\"popup-wrapper tac\">'+
		'<h1>���撩嚙賢�梹蕭</h1>'+


		'<p>嚙踐𧞅鞈烐侢�鉟嚙踝蕭��㵪蕭�𤜯蹎䂿�嚙賜�㚁蕭�辺謕𤏪蕭嚙踐鐦嚙賢�梹𣵛隤𡢅蕭��𠬍蕭嚙踝�梹鐤嚙踝�謆頣蕭鞈ｇ蕭嚙踝�嚙踝蕭�吔蕭�愇蹓嗽�嚙�</p><br><br>'+
		'<p class=\"tac\">'+
		'<a href=\"javascript:goSurvey(2);\" class=\"btn\">�𥟇�𩤃蕭嚙賣��埯</a>&nbsp;'+
		'<a href=\"javascript:clearSurvey();\" class=\"btn\">��嘅�矋��嚙踐�梹蕭</a>&nbsp;'+
		'<a href=\"javascript:resetSurvey();\" class=\"btn\">��嘅�墧暑嚙踐�𡜐蕭</a>'+
		'</p>'+
		'</div>'+
		'<img src=\"/web/images/common/mail/bg-mail-to-b.png\" alt=\"\" width=\"640\" height=\"20\" />'+
		'<img src=\"/web/images/common/mail/bg-mail-to-b.png\" alt=\"\" width=\"640\" height=\"20\" class=\"bg-popup-btm-2\" />'+
		'</div>'
	} 
	if($('#fancybox-content').html() === '') {
		$.fancybox({
			'content':surveyContent,
			'padding':0,
			'margin':0,
			'onClosed':function() {
				var s = getCookieByName('hkiec_survey');
				if(s !== 'NA') {
					// 2014.2.4 start
					// change 'Remind me later' to count the survey popup tomorrow (NOT 24 hr)
					setCookie('hkiec_survey', new Date().setDate(new Date().getDate() + 1) );
					survey();
					// 2014.2.4 ended
				}
			}


		});
	}else {
		setCookie('hkiec_survey', '');
	}
}