//GA tracking 2015.2.4
var _gaq = _gaq || []; 
	if(/(www.thechinfamily.hk)/i.test(window.location.href)){
	  _gaq.push(['_setAccount', 'UA-34416257-1']);		//live ga code
	  _gaq.push(['_setDomainName', 'www.thechinfamily.hk']); 	//live domain
	}else if(/(thechinfamily.intra.hksfc.org.hk)/i.test(window.location.href)){
	  _gaq.push(['_setAccount', 'UA-36354635-1']);		//uat ga code
	  _gaq.push(['_setDomainName', 'thechinfamily.intra.hksfc.org.hk']);  	//uat domain
	}
	_gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
 
function unbindRatingClick(tab){
	$("#tab" + tab +"_rating1").unbind( "click" );
	$("#tab" + tab +"_rating2").unbind( "click" );
	$("#tab" + tab +"_rating3").unbind( "click" );
	$("#tab" + tab +"_rating4").unbind( "click" );
	$("#tab" + tab +"_rating5").unbind( "click" );
}

function bindResultPageHandler()
{
	// GA Tracking (2015.2.4)
	//Tab1
	$("#tab1_rating1").unbind().click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'rating 1', (lang == 0 ? 'English' : 'Traditional Chinese')]);
		unbindRatingClick(1);
	});
	$("#tab1_rating2").unbind().click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'rating 2', (lang == 0 ? 'English' : 'Traditional Chinese')]);
		unbindRatingClick(1);
	});
	$("#tab1_rating3").unbind().click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'rating 3', (lang == 0 ? 'English' : 'Traditional Chinese')]);
		unbindRatingClick(1);
	});
	$("#tab1_rating4").unbind().click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'rating 4', (lang == 0 ? 'English' : 'Traditional Chinese')]);
		unbindRatingClick(1);
	});
	$("#tab1_rating5").unbind().click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'rating 5', (lang == 0 ? 'English' : 'Traditional Chinese')]);
		unbindRatingClick(1);
	});
	$("#tab1_feedback").unbind().click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'email feedback', (lang == 0 ? 'English' : 'Traditional Chinese')]);
	});
	
	//Tab2
	$("#tab2_rating1").unbind().click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'rating 1', (lang == 0 ? 'English' : 'Traditional Chinese')]);
		unbindRatingClick(2);
	});
	$("#tab2_rating2").unbind().click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'rating 2', (lang == 0 ? 'English' : 'Traditional Chinese')]);
		unbindRatingClick(2);
	});
	$("#tab2_rating3").unbind().click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'rating 3', (lang == 0 ? 'English' : 'Traditional Chinese')]);
		unbindRatingClick(2);
	});
	$("#tab2_rating4").unbind().click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'rating 4', (lang == 0 ? 'English' : 'Traditional Chinese')]);
		unbindRatingClick(2);
	});
	$("#tab2_rating5").unbind().click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'rating 5', (lang == 0 ? 'English' : 'Traditional Chinese')]);
		unbindRatingClick(2);
	});
	$("#tab2_feedback").unbind().click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'email feedback', (lang == 0 ? 'English' : 'Traditional Chinese')]);
	});
	
	//Tab3
	$("#tab3_rating1").unbind().click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'rating 1', (lang == 0 ? 'English' : 'Traditional Chinese')]);
		unbindRatingClick(3);
	});
	$("#tab3_rating2").unbind().click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'rating 2', (lang == 0 ? 'English' : 'Traditional Chinese')]);
		unbindRatingClick(3);
	});
	$("#tab3_rating3").unbind().click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'rating 3', (lang == 0 ? 'English' : 'Traditional Chinese')]);
		unbindRatingClick(3);
	});
	$("#tab3_rating4").unbind().click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'rating 4', (lang == 0 ? 'English' : 'Traditional Chinese')]);
		unbindRatingClick(3);
	});
	$("#tab3_rating5").unbind().click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'rating 5', (lang == 0 ? 'English' : 'Traditional Chinese')]);
		unbindRatingClick(3);
	});
	$("#tab3_feedback").unbind().click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'email feedback', (lang == 0 ? 'English' : 'Traditional Chinese')]);
	});
	
}
//

var ONLOADED = window.onload || function() {};

$(document).ready(function(){

	// set lang before anything, no conflict with the lang in html.
	var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1; // en & tc

	// bind listener to all element respectively
	//SavingCalculator.bindEventListeners(lang);
		
		
	//GA tracking 2015.2.4
	$(".tab-assumption a.btn-assumption").click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'Disclaimer', (lang == 0 ? 'English' : 'Traditional Chinese')]);
		
	});
	$('.calculator .calculator-wrapper ul.tab li a').eq(0).click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'How much you need to save', (lang == 0 ? 'English' : 'Traditional Chinese')]);
	});
	$('.calculator .calculator-wrapper ul.tab li a').eq(1).click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'How much you will have', (lang == 0 ? 'English' : 'Traditional Chinese')]);
	});
	$('.calculator .calculator-wrapper ul.tab li a').eq(2).click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'How long will it take', (lang == 0 ? 'English' : 'Traditional Chinese')]);
	});
	//How much you need to save
	$('#month_rdo1').click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'How much you need to save - Education', (lang == 0 ? 'English' : 'Traditional Chinese')]);
	});
	$('#month_rdo2').click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'How much you need to save - Starting a business', (lang == 0 ? 'English' : 'Traditional Chinese')]);
	});
	$('#month_rdo3').click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'How much you need to save - Saving for a rainy day', (lang == 0 ? 'English' : 'Traditional Chinese')]);
	});
	$('#month_rdo4').click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'How much you need to save - Wedding', (lang == 0 ? 'English' : 'Traditional Chinese')]);
	});
	$('#month_rdo5').click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'How much you need to save - Setting up home', (lang == 0 ? 'English' : 'Traditional Chinese')]);
	});
	$('#month_rdo6').click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'How much you need to save - Buying a car', (lang == 0 ? 'English' : 'Traditional Chinese')]);
	});
	$('#month_rdo7').click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'How much you need to save - Having a baby', (lang == 0 ? 'English' : 'Traditional Chinese')]);
	});
	$('#month_rdo9').click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'How much you need to save - Holiday', (lang == 0 ? 'English' : 'Traditional Chinese')]);
	});
	$('#month_rdo_last').click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'How much you need to save - Others', (lang == 0 ? 'English' : 'Traditional Chinese')]);
	});
	//How much you will have
	$('#final_rdo1').click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'How much you will have - Education', (lang == 0 ? 'English' : 'Traditional Chinese')]);
	});
	$('#final_rdo2').click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'How much you will have - Starting a business', (lang == 0 ? 'English' : 'Traditional Chinese')]);
	});
	$('#final_rdo3').click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'How much you will have - Saving for a rainy day', (lang == 0 ? 'English' : 'Traditional Chinese')]);
	});
	$('#final_rdo4').click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'How much you will have - Wedding', (lang == 0 ? 'English' : 'Traditional Chinese')]);
	});
	$('#final_rdo5').click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'How much you will have - Setting up home', (lang == 0 ? 'English' : 'Traditional Chinese')]);
	});
	$('#final_rdo6').click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'How much you will have - Buying a car', (lang == 0 ? 'English' : 'Traditional Chinese')]);
	});
	$('#final_rdo7').click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'How much you will have - Having a baby', (lang == 0 ? 'English' : 'Traditional Chinese')]);
	});
	$('#final_rdo9').click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'How much you will have - Holiday', (lang == 0 ? 'English' : 'Traditional Chinese')]);
	});
	$('#final_rdo_last').click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'How much you will have - Others', (lang == 0 ? 'English' : 'Traditional Chinese')]);
	});
	//How long will it take
	$('#long_rdo1').click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'How long will it take - Education', (lang == 0 ? 'English' : 'Traditional Chinese')]);
	});
	$('#long_rdo2').click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'How long will it take - Starting a business', (lang == 0 ? 'English' : 'Traditional Chinese')]);
	});
	$('#long_rdo3').click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'How long will it take - Saving for a rainy day', (lang == 0 ? 'English' : 'Traditional Chinese')]);
	});
	$('#long_rdo4').click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'How long will it take - Wedding', (lang == 0 ? 'English' : 'Traditional Chinese')]);
	});
	$('#long_rdo5').click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'How long will it take - Setting up home', (lang == 0 ? 'English' : 'Traditional Chinese')]);
	});
	$('#long_rdo6').click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'How long will it take - Buying a car', (lang == 0 ? 'English' : 'Traditional Chinese')]);
	});
	$('#long_rdo7').click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'How long will it take - Having a baby', (lang == 0 ? 'English' : 'Traditional Chinese')]);
	});
	$('#long_rdo9').click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'How long will it take - Holiday', (lang == 0 ? 'English' : 'Traditional Chinese')]);
	});
	$('#long_rdo_last').click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'How long will it take - Others', (lang == 0 ? 'English' : 'Traditional Chinese')]);
	});
	//
	/*
	$('.tab-assumption .share-wrapper a.btn_shareFB').click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'Facebook share button', (lang == 0 ? 'English' : 'Traditional Chinese')]);
	});
	$('.tab-assumption .share-wrapper a.btn_print').click(function(e) {
		_gaq.push(['_trackEvent', 'Saving Tools', 'Email share button', (lang == 0 ? 'English' : 'Traditional Chinese')]);
	});
	*/
	
});


//2014.1.30 start
//GA event tracking code
function downloadExcelTracking(_langIdx) {
	var file = ['../excel/saving_en.xls', '../excel/saving_tc.xls'];
	var lang = ['English', 'Traditional Chinese'];
	_gaq.push(['_trackEvent', 'Saving Tools', 'Download Excel', lang[_langIdx] ]);
	setTimeout(function() { // to allow time for the hit request to process before taking the user by _self
		window.open( file[_langIdx], '_self');
	}, 500);

}
function downloadPDFTracking(_langIdx) {
	var lang = ['English', 'Traditional Chinese'];
	_gaq.push(['_trackEvent', 'Saving Tools', 'Download PDF', lang[_langIdx] ]);	
}
function printPDFTracking(_langIdx) {
	var lang = ['English', 'Traditional Chinese'];
	_gaq.push(['_trackEvent', 'Saving Tools', 'Print PDF', lang[_langIdx] ]);
}
//2014.1.30 ended

//2014.2.6 start
//tracking for mailto & share by facebook
function mailToTracking(_langIdx) {
	var lang = ['English', 'Traditional Chinese'];
	_gaq.push(['_trackEvent', 'Saving Tools', 'Mail To', lang[_langIdx] ]);	
	setTimeout(function() { // to allow time for the hit request to process before taking the user by _self	
		var aHref = '';
		var subject = '';
		var content = '';
		
			var currentURL = window.location.href;

		if (currentURL.search('/en/') !== -1) {
			subject = 'Savings Goal Calculator';
		content = 'Do you have a savings goal in mind? Use our calculator to work out how much you need to save or how long it will take to reach your target savings.\n' + window.location.href;
		aHref = 'mailto:info@thechinfamily.hk' + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(content);				
		window.location = aHref;	
		} else if (currentURL.search('/tc/') !== -1) {
			subject = '儲蓄目標計算機';
			content = '你有儲蓄目標嗎? 儲蓄目標計算機可助你計算須定時地儲蓄多少，或計算要達到你指定儲蓄目標的所需時間。\n' + window.location.href;
			aHref = 'mailto:info@thechinfamily.hk' + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(content);
			window.location = aHref;
		};
		
	 
		
	}, 500);
}
function shareToFBTracking(_langIdx) {
	var lang = ['English', 'Traditional Chinese'];
	_gaq.push(['_trackEvent', 'Saving Tools', 'Share By Facebook', lang[_langIdx] ]);	
	setTimeout(function() { // to allow time for the hit request to process before taking the user by _self	
		var fbLink = '';
		var currentURL = window.location.href;
		if(currentURL.search('/en/') !== -1) {
			fbLink = FB_LINK.saving_en;
		}else if(currentURL.search('/tc/') !== -1) {
			fbLink = FB_LINK.saving_tc;
		}
		var page = window.location.href;
		window.open(FB_LINK.fb + '?u=' + encodeURIComponent(fbLink), 'newwindow', 'width=700, height=410, top=0, left=0, toolbar=no, menubar=no, scrollbars=yes, resizable=yes,location=no, status=no');
	}, 500);
}
//2014.2.6 ended

//window.onload = function() {
$(document).ready(function() {
	
	// set lang before anything, no conflict with the lang in html.
	var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1; // en & tc

	// bind listener to all element respectively
	SavingCalculator.bindEventListeners(lang);
	

		
	$('input.field5').each(function() { /* // 2013.10.2 for interest rate $(this).attr('maxlength', ''); */ });
	
	$('div.result_wrapper').css('display', 'none');
	
	$('a.btn_cal').click(function() {
		var prefix = $(this).attr('class');
		var field = [];
		
		if(prefix.search('month') !== -1) {
			prefix = 0;
		}else if(prefix.search('final') !== -1) {
			prefix = 1;
		}else if(prefix.search('long') !== -1) {
			prefix = 2;
		}
		var data;
		if(prefix === 0) {
			if(SavingCalculator.isValidatedMth(prefix)) {
				try {
					data = SavingCalculator.calResultMth(prefix);
				}catch(e) {
					$('a.btn_back').click();
					alert(e);
				}
			}
		}else if(prefix === 1) {
			if(SavingCalculator.isValidatedCon(prefix)) {
				try {
					data = SavingCalculator.calResultCon(prefix);
				}catch(e) {
					$('a.btn_back').click();
					alert(e);
				}
			}
		}else if(prefix === 2) {
			if(SavingCalculator.isValidatedLon(prefix)) {
				try {
					data = SavingCalculator.calResultLon(prefix);
				}catch(e) {
					$('a.btn_back').click();
					alert(e);
				}
			}
		}		
	});
	
	$('a.btn_reset').click(function() {
		if($(this).hasClass('month_form')) {
		
			$('form#month_form')[0].reset();
		
		}else if($(this).hasClass('final_form')) {
		
			$('form#final_form')[0].reset();
		
		}else if($(this).hasClass('long_form')) {
		
			$('form#long_form')[0].reset();
		
		}
		$('div.summary_panel').remove();
	});
});

var SavingCalculator = {
	DEBUG : false,
	LENGTH : 2,
	DOLLARPREFIX : ['HKD ', '港元 '],
	DATEFORMAT : [
		['weeks', 'months', 'years'],
		['周', '月', '年']
	],
	PERCENTAGE : [
		' % p.a.', ' %年利率'
	],
	MODE : ['monthly', 'final', 'long'],
	PREFIX : ['month_', 'final_', 'long_'],
	CLASS : ['field1', 'field2', 'field3', 'field4', 'field5', 'field6', 'field7'],
	COMPOUNDVALUE : [
		['Weekly', 'Monthly', 'Yearly'],
		['每周', '每月', '每年']
	],
	TIMEITEM : [
	    ['Week(s)', 'Month(s)', 'Year(s)'],
	    ['周', '月', '年']
	],
	COMPOUNDNAME : 'rdo_g5',
	COMPOUNDID : ['rdo_g5_a', 'rdo_g5_b', 'rdo_g5_c'],
	RADIONAME : ['month_rdo', 'final_rdo', 'long_rdo'],
	ALERTMESSAGE : [
        [
		'Compounding frequency refers to the number of compounding periods in a year. For example, monthly compounding has a compounding frequency of 12 while weekly compounding has a compounding frequency of 52.',
		'Interest will be compounded according to the regular savings period you choose.',
		'It is important to consider inflation when setting long-term financial goals as it affects the actual value of money over time. <a target="_blank" href="' + EXTERNAL_LINK.en + '">More about statistics on inflation rate.</a>',
		'Expected rate of return may include the return from your savings / time deposits, or any investments you make to grow your capital. <a target="_blank" href="' + EXTERNAL_LINK.en + '">More about statistics on savings deposit rate.</a>',
		],
        [
		'複利息次數是指年度複利息期數。例如，每月計算複利息，年度複利息期數為12；每周計算的話，年度複利息期數則為52。',
		'複利息將按你所選擇的儲蓄周期計算。',
		'考慮通脹因素是在制定長遠的財務目標時的重要一環，時間會影響實際的財富價值。<a target="_blank" href="' + EXTERNAL_LINK.tc + '">查看更多關於通脹率的統計數字。</a>',
		'預期回報率可包括從你在儲蓄戶口／定期存款的回報，或你在任何投資上的資本增長。<a target="_blank" href="' + EXTERNAL_LINK.tc + '">查看更多關於儲蓄存款利率的統計數字。</a>'
		]
	],
	ERRORMESSAGE : [
		[
		'Please fill in the details of \"Others\".',
		'Please enter \"Your savings goal\".',
		'Please enter \"Amount you have already\"',
		'Incorrect format in \"Your savings goal\".',
		'Incorrect format in \"Amount you have already\"',
		'Please enter \"Expected rate of return\"',
		'Incorrect format in \"Expected rate of return\".',
		'Please choose the \"Compound interval\"',
		'Incorrect format in \"Saving period\"',
		'Please enter \"Saving period\".',
		'Please enter \"Regular savings amount\".',
		'The amount you entered in \"Your savings goal\" must be greater than that in \"Amount you have already\".',
		'Incorrect format in \"Regular savings amount\".',
		'Please enter \"Savings amount per period \".',
		'In this scenario, it may take you less than one $replace$ to reach your goal.'
		],
		[
		'請填寫「其他」一欄的資料。',
		'請輸入「目標金額」。',
		'請輸入「已儲蓄金額」。',
		'目標金額格式不正確。',
		'已儲蓄金額格式不正確。',
		'請輸入「預期回報率」。',
		'預期回報率格式不正確。',
		'請選擇「複利計算周期」。',
		'月儲蓄時期格式不正確。',
		'請輸入「儲蓄期」。',
		'請輸入「儲蓄金額」。',
		'你所輸入的「目標金額」必須高於「已儲蓄金額」。',
		'定時儲蓄金額格式不正確。',
		'請輸入「定時儲蓄金額」',
		'在此情況下，你或可於$replace$內達到你的目標金額。'
		]
	],
	// saving calculator 1
	SUMMARYTEMPLATE1 : ['You will have to save $REPLACE$ per $PERIOD$', '你需$PERIOD$儲蓄 $REPLACE$'],
	SUMMARYTEMPLATE2 : ['Your saving purpose: <span class="orange">$REPLACE$</span>', '儲蓄目標: <span class="orange">$REPLACE$</span>'],
	SUMMARYTEMPLATE3 : ['Your savings goal: <span class="orange">$REPLACE$</span>', '目標金額: <span class="orange">$REPLACE$</span>'],
	SUMMARYTEMPLATE4 : ['Amount you have already: <span class="orange">$REPLACE$</span>', '現有儲蓄: <span class="orange">$REPLACE$</span>'],
	SUMMARYTEMPLATE5 : ['Expected rate of return: <span class="orange">$REPLACE$</span>', '預期回報率: <span class="orange">$REPLACE$</span>'],
	SUMMARYTEMPLATE6 : ['Saving period: <span class="orange">$REPLACE$</span>', '儲蓄期: <span class="orange">$REPLACE$</span>'],
	SUMMARYTEMPLATE7 : ['Compounding frequency: <span class="orange">$REPLACE$</span>', '複利息次數: <span class="orange">$REPLACE$</span>'],
	// ended
	// saving calculator 2
	SUMMARYTEMPLATE8 : ['You will have $REPLACE$ at the end of your saving period', '在儲蓄期完結時，你最終所得的儲蓄金額是 $REPLACE$'],
	SUMMARYTEMPLATE9 : ['Your saving purpose: <span class="orange">$REPLACE$</span>', '儲蓄目的: <span class="orange">$REPLACE$</span>'],
	SUMMARYTEMPLATE10 : ['Amount you have already: <span class="orange">$REPLACE$</span>', '現有儲蓄: <span class="orange">$REPLACE$</span>'],
	SUMMARYTEMPLATE11 : ['Regular savings amount: <span class="orange">$REPLACE$</span>', '定時儲蓄金額: <span class="orange">$REPLACE$</span>'],
	SUMMARYTEMPLATE12 : ['Expected rate of return: <span class="orange">$REPLACE$</span>', '預期回報率: <span class="orange">$REPLACE$</span>'],
	SUMMARYTEMPLATE13 : ['Saving period: <span class="orange">$REPLACE$</span>', '儲蓄期: <span class="orange">$REPLACE$</span>'],
	SUMMARYTEMPLATE14 : ['Compound interval: <span class="orange">$REPLACE$</span>', '複利息次數: <span class="orange">$REPLACE$</span>'],
	// ended
	// saving calculator 3
	SUMMARYTEMPLATE15 : ['<p>It will take you</p> <p class="data">$REPLACE$</p> <p>to reach your goal</p>', '要達到你的目標，<br />你將需要$REPLACE$'],
	SUMMARYTEMPLATE16 : ['Your saving purpose: <span class="orange">$REPLACE$</span>', '儲蓄目標: <span class="orange">$REPLACE$</span>'],
	SUMMARYTEMPLATE17 : ['Regular savings amount: <span class="orange">$REPLACE$</span>', '定時儲蓄金額: <span class="orange">$REPLACE$</span>'],
	SUMMARYTEMPLATE18 : ['Your savings goal: <span class="orange">$REPLACE$</span>', '目標金額: <span class="orange">$REPLACE$</span>'],
	SUMMARYTEMPLATE19 : ['Expected rate of return: <span class="orange">$REPLACE$</span>', '預期回報率: <span class="orange">$REPLACE$</span>'],
	SUMMARYTEMPLATE20 : ['Compound interval: <span class="orange">$REPLACE$</span>', '複利息次數: <span class="orange">$REPLACE$</span>'],
	// ended
	SUMMARYINFOHEADER : [
		['How much you need to save : ', 'How much you will have : ', 'How long will it take : '],
		['需儲蓄的金額: ', '最終可儲蓄的金額: ', '儲蓄需時多久: ',]
	],
	SUMMARYINFOREPLACE : ['<span class="orange">$REPLACE$</span>', '<span class="orange">$REPLACE$</span>'],
			
	SUMMARYCLASS : 'calculator-innerwrapper-right',
	SUMMARYDETAILCLASS : 'padding10 summary_panel',
	SUMMARYIMAGE : [
		'icon-summy-edication.png',
		'icon-summy-starting-a-business.png',
		'icon-summy-saving-for-a-rainy-day.png',
		'icon-summy-wedding.png',
		'icon-summy-housing.png',
		'icon-summy-motor-vehicles.png',
		'icon-summy-having-a-baby.png',
		//'icon-summy-retirement.png',
		'icon-summy-holiday.png',
		'icon-summy-others.png'
	],
	IMAGEPATH : '../images/common/calculator/',	
	PURPOSETITLE : ['Your saving purpose', ''],
	PURPOSEVALUE : [
		[
		'Education', 
		'Starting a business',
		'Saving for a rainy day',
		'Wedding',
		'Setting up home',
		'Buying a car ',
		'Having a baby',
		//'Retirement',
		'Holiday',
		''
		],
		[
		'教育 ', 
		'創業 ',
		'未雨綢繆 ',
		'結婚',
		'置業家居',
		'買車',
		'生育',
		//'退休 ',
		'渡假',
		''
		]		
	],
	NAME : [
	'rdo',
	'txt_last',
	'txt_g1',
	'txt_g2',
	'txt_g3',
	'txt_g4_a',
	'txt_g4_b', 
	'rdo_g5'
	],
	DATA : 'data',
	FORM : 'form',
	MAX_YR : 99,
	MAX_MTH : 11,
	addCommas : function(_nStr) {
		_nStr += '';
		var x = _nStr.split('.');
		var x1 = x[0];
		var x2 = x.length > 1 ? '.' + x[1] : '';
		var rgx = /(\d+)(\d{3})/;
		while(rgx.test(x1)) {
			x1 = x1.replace(rgx, '$1' + ',' + '$2');
		}
		return x1 + x2;
	},	
	isValidatedMth : function(_p) {
		var errMsg = '';
		var _this = this;
		var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1;
		
		// field 1 for radio option of expected usage
		if(typeof $('input[name=' + this.PREFIX[_p] + this.NAME[0] + ']:checked').val() === 'undefined') {
			// please select radio
			//errMsg += '請選擇金額用途。\n';
		}
		// field 2 for the text input of other usage
		// for current latest jQuery version (1.9 or above)
		// the checking index should be boolean
		if($('input#month_rdo_last').attr('checked') === 'checked') {
			if($('input[name=' + this.PREFIX[_p] + this.NAME[1] + ']').val() === '') {
				// please enter value of other option
				errMsg += _this.ERRORMESSAGE[lang][0] + '\n';
			}
		}
		// field 3 for target amount
		// field 4 for saved amount
		for(var i = 2; i < 4; i++) {
			var field3N4Val = $('input[name=' + this.PREFIX[_p] + this.NAME[i] + ']').val();
			if(field3N4Val === '') {
				// please enter value
				if(i === 2) {
					errMsg += _this.ERRORMESSAGE[lang][1] + '\n';
				}else if(i === 3) {
					errMsg += _this.ERRORMESSAGE[lang][2] + '\n';
				}
			}else if(!this.isValidatedNum(field3N4Val)) {
				// target amount's format is not valid
				if(i === 2) {				
					errMsg += _this.ERRORMESSAGE[lang][3] + '\n';
				}else if(i === 3) {
					errMsg += _this.ERRORMESSAGE[lang][4] + '\n';
				}
			}
		}
		
		if(parseFloat($('input[name=' + this.PREFIX[_p] + this.NAME[2] + ']').val()) <= parseFloat($('input[name=' + this.PREFIX[_p] + this.NAME[3] + ']').val())) {
			errMsg += _this.ERRORMESSAGE[lang][11] + '\n';
		}
		
		// field 5 for interest rate
		var field5Val = $('input[name=' + this.PREFIX[_p] + this.NAME[4] + ']').val();
		if(field5Val === '') {
			// please enter interest
			errMsg += _this.ERRORMESSAGE[lang][5] + '\n';
		}else if(isNaN(parseInt(field5Val))) {
			// interest's format is not valid
			errMsg += _this.ERRORMESSAGE[lang][6] + '\n';
		}
		// field 6 for period of saving
		var isEmpty = true;
		for(var i = 5; i < 7; i++) {
			var field6N7Val = $('input[name=' + this.PREFIX[_p] + this.NAME[i] + ']').val();
			if(field6N7Val !== '') {
				isEmpty = false;
				if(isNaN(field6N7Val) || field6N7Val.search(/\D/g) !== -1) {
					errMsg += _this.ERRORMESSAGE[lang][8] + '\n';
				}
			}
		}
		if(isEmpty) {
			errMsg += (window.location.href.search('/en/') !== -1) ?
			'Please enter \"Saving period\"' :
			'請輸入儲蓄期。';
		}
		// field 7 for calculating way of interest
		if(typeof $('input[name=' + this.PREFIX[_p] + this.NAME[this.NAME.length - 1] + ']:checked').val() === 'undefined') {
			// please select radio
			errMsg += _this.ERRORMESSAGE[lang][7] + '\n';
		}
		if($('input[name=' + this.PREFIX[_p] + this.NAME[this.NAME.length - 1] + ']:checked').attr('id') === 'month_rdo_g5_c') {
			if($('input#month_txt_g4_b').val() !== '' && $('input#month_txt_g4_b').val() !== '0') {
				errMsg += (lang === 0) ?
				'Regular savings amount in \"Yearly\" only applies to saving period with complete year(s). You can choose \"Monthly\" or \"Weekly\" in the \"Regular savings amount\" field to continue the calculation.\nIf you would like to set regular savings amount on a yearly basis, the savings period must be in \"year(s)\" ONLY.\n' :
				'每年計算複利息一次只適用於完整年度的儲蓄期。你可在「複利息次數」一欄選擇「每月一次」或「每周一次」，以繼續計算。\n若複利息次數為「每年一次」，儲蓄期則必需只輸入年期部份。\n';
			}else if(
			// 2013.1.6 UPDATED start
			$('input#month_txt_g4_a').val() === '0' ||
			$('input#month_txt_g4_a').val() === ''
			// 2013.1.6 UPDATED ended
			) {
				errMsg += _this.ERRORMESSAGE[lang][9];
			}
		}else {
			if(
			($('input#month_txt_g4_a').val() === '0' && $('input#month_txt_g4_b').val() === '') ||
			($('input#month_txt_g4_b').val() === '0' && $('input#month_txt_g4_a').val() === '') ||
			($('input#month_txt_g4_a').val() === '0' && $('input#month_txt_g4_b').val() === '0') ||
			($('input#month_txt_g4_b').val() === '0' && $('input#month_txt_g4_a').val() === '0')			
			) {
				errMsg += _this.ERRORMESSAGE[lang][9];
			}	
		}
		if(errMsg !== '') {
			alert(errMsg);
			return false;
		}else {
			return true;
		}
	},
	calResultMth : function(_p) {
		
		// commonly used by 3 tabs
		var lang = this.getLangInt();	
		var period = '';
		var data = [];
		var data1 = []; // with CI
		var data2 = []; // without CI
		var data3 = []; // x title
		var data4 = ''; // x period
		var dollarPrefix = (lang === 0) ? 'HKD ' : '港元 ';
		var ciwording1 = (lang === 0) ? 'Without compound interest' : '沒有複合利息';
		var ciwording2 = (lang === 0) ? 'With compound interest' : '有複合利息';
		
		// resource name for image and wording
		var rdoName = this.RADIONAME[0];
		var rdoIdx = $('input[name=' + rdoName + ']:checked').parent('li').index();
		var summaryImg = '<img src="../images/common/calculator/' + this.SUMMARYIMAGE[rdoIdx] + '" />';
		var purposeWord = this.PURPOSEVALUE[lang][rdoIdx];
		if(purposeWord === '') {
			purposeWord = $('input#month_txt_last').val();
			summaryImg = '';
		}
		
		// variable for formula
		var sum = $('input#month_txt_g1').val(); // savings goal
		var p = $('input#month_txt_g2').val(); // amount you have
		var r = $('input#month_txt_g3').val(); // rate of return
		r = r / 100;
		var y = $('input#month_txt_g4_a').val(); // year
		y = (y === '' || y === '0') ? 0 : y;
		var m = $('input#month_txt_g4_b').val(); // month
		m = (m === '' || m === '0') ? 0 : m;
		var t; // for loop only
		var n; // compounding frequency
		var cfId = $('input[name="month_rdo_g5"]:checked').attr('id'); // compounding frequency
		if(cfId.search('_a') !== -1) { // week
			n = 52;
			t = parseInt(y * 52) + parseInt(m * (52/ 12));
			period = (lang === 0) ? 'per week' : '每周';
			data4 = (lang === 0) ? 'Week(s)' : '周'; // 2014.1.16 text consistency editing, first alpha upper case
		}else if(cfId.search('_b') !== -1) { // month
			n = 12;
			t = parseInt(y * 12) + parseInt(m);
			period = (lang === 0) ? 'per month' : '每月';
			data4 = (lang === 0) ? 'Month(s)' : '月';
		}else if(cfId.search('_c') !== -1) { // year
			n = 1;
			t = parseInt(y) + parseInt(m / 12);
			period = (lang === 0) ? 'per year' : '每年';
			data4 = (lang === 0) ? 'Year(s)' : '年';
		}
		//this.printLog(sum + ', ' + p + ', ' + r + ', ' + y + ', ' + m + ', ' + n + ', ' + t + ', ' + period);
		
		var pmt; // result
		pmt = ( sum - p * Math.pow( 1 + parseFloat( r / n ), t ) ) / ( (Math.pow( 1 + parseFloat( r / n ), t) - 1) / (r / n) );
		
		// with compound interest
		var result;
		for(var i = 1; i <= t; i++) {
			result = p * Math.pow( 1 + parseFloat( r / n ), i ) + pmt * ( ( Math.pow( 1 + parseFloat( r / n), i ) - 1 ) / (r / n) );
			result = parseFloat(result);
			data1[i - 1] = parseFloat(result); // assign value to data1
		}
		
		// without compound interest
		var __pmt;
		var __result = parseFloat( p );
		__pmt = ( sum - p ) / t;
		
		for(var i = 1; i <= t; i++) {
			__result += parseFloat(__pmt);
			if(isNaN(pmt)) {// assign value to data1 if 0 interest
				data1[i - 1] = parseFloat(__result);
			}
			data2[i - 1] = parseFloat(__result); // assign value to data2
			data3[i - 1] = i; // assign value to data3
		}
		pmt = (isNaN(pmt)) ? __pmt : pmt;
		
		// join as ONE array
		data[0] = data1;
		data[1] = data2;
		data[2] = data3;
		data[3] = data4;
		
		
		if(pmt < 0) {
			var alertMsg = (lang === 0) ? 'You compound interest has covered your saving goal.' : '你的複合利息已可助你達標。';
			alert(alertMsg);
		}else {
			
			var htmlTemplate = $('#cache-template1').html();
			var formattedHtml = htmlTemplate;
			formattedHtml = formattedHtml.replace(/__savingForImg__/g, summaryImg);
			formattedHtml = formattedHtml.replace(/__savingForWord__/g, purposeWord);
			formattedHtml = formattedHtml.replace(/__withCIA__/g, dollarPrefix + this.addCommas(parseFloat(pmt).toFixed(1)));
			formattedHtml = formattedHtml.replace(/__perPeriod__/g, period);
			if(lang === 0) {
				formattedHtml = formattedHtml.replace(/__contribute__/g, dollarPrefix + this.addCommas((parseFloat(__pmt - pmt).toFixed(1))) + ' less');
			}else {
				formattedHtml = formattedHtml.replace(/__contribute__/g, '節省' + dollarPrefix + this.addCommas((parseFloat(__pmt - pmt).toFixed(1))));	
			}
			formattedHtml = formattedHtml.replace(/__withoutCIA__/g, dollarPrefix + this.addCommas(parseFloat(__pmt).toFixed(1)));
			formattedHtml = formattedHtml.replace(/__ciwording1__/g, ciwording1);
			formattedHtml = formattedHtml.replace(/__ciwording2__/g, ciwording2);
			
			// add data to the hidden field
			$('form#month_form input#savingForImg').val(this.SUMMARYIMAGE[rdoIdx]);
			$('form#month_form input#savingForWord').val(purposeWord);
			$('form#month_form input#withCIA').val(this.addCommas(parseFloat(pmt).toFixed(1)));
			$('form#month_form input#withoutCIA').val(this.addCommas(parseFloat(__pmt).toFixed(1)));
			$('form#month_form input#period').val(period);
			if(lang === 0) {
				$('form#month_form input#contribute').val(this.addCommas((parseFloat(__pmt - pmt).toFixed(1))) + ' less');
			}else {
				$('form#month_form input#contribute').val('節省' + dollarPrefix + this.addCommas((parseFloat(__pmt - pmt).toFixed(1))));	
			}
			$('form#month_form input#linechart_period').val(data4);

			
			$('ul.tab li.tab-report').css('display', 'block');
			$('div.form-content').css('display', 'none');
			$('div.form-result').css('display', 'block');			
			// set event listener after HTML created respectively
			$('.summary-wrapper').html(formattedHtml);

			// GA Tracking (2015.2.4)
			bindResultPageHandler();			
			
			
			// 2014.1.15 start
			// re-ordering the hyperlink in 'What to do next' upon the saving goal
			this.reorderHyperLink('.summary-wrapper', rdoIdx);
			// 2014.1.15 ended
			
			this.generateGraph('result_graph_1', data, 0);
			// 2013.12.26 start
			this.bindCISelector('result_graph_1', data, 0, n);
			// 2013.12.26 ended
			this.setBackButton();
			this.openBox('.btn-do-next','.do-next-innerwrapper');
			$('.btm_btn_submit').click(function() {$('a.btn_submit').click();});
		}
		
		return data; // array to be parsed if form do
	},
	isValidatedCon : function(_p) {
		var errMsg = '';
		var _this = this;
		var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1; // en
		// field 3 for target amount
		// field 4 for saved amount
		if($('input#final_rdo_last').attr('checked') === 'checked') {
			if($('input[name=' + this.PREFIX[_p] + this.NAME[1] + ']').val() === '') {
				// please enter value of other option
				errMsg += _this.ERRORMESSAGE[lang][0] + '\n';
			}
		}
		for(var i = 2; i < 4; i++) {
			var field3N4Val = $('input[name=' + this.PREFIX[_p] + this.NAME[i] + ']').val();
			if(field3N4Val === '') {
				// please enter value
				if(i === 2) {
					errMsg += _this.ERRORMESSAGE[lang][13] + '\n';
				}else if(i === 3) {
					errMsg += _this.ERRORMESSAGE[lang][2] + '\n';
				}
			}else if(!this.isValidatedNum(field3N4Val)) {
				// target amount's format is not valid
				if(i === 2) {				
					errMsg += _this.ERRORMESSAGE[lang][3] + '\n';
				}else if(i === 3) {
					errMsg += _this.ERRORMESSAGE[lang][4] + '\n';
				}
			}
		}
		
		if(parseInt($('input[name=' + this.PREFIX[_p] + this.NAME[2] + ']').val()) <= parseInt($('input[name=' + this.PREFIX[_p] + this.NAME[3] + ']').val())) {
			//errMsg += '已儲蓄金額不可大於或等於目標金額。\n';
		}
		
		// field 5 for interest rate
		var field5Val = $('input[name=' + this.PREFIX[_p] + this.NAME[4] + ']').val();
		if(field5Val === '') {
			// please enter interest
			errMsg += _this.ERRORMESSAGE[lang][5] + '\n';
		}else if(isNaN(parseInt(field5Val))) {
			// interest's format is not valid
			errMsg += _this.ERRORMESSAGE[lang][6] + '\n';
		}
		// field 6 for period of saving
		var isEmpty = true;
		for(var i = 5; i < 7; i++) {
			var field6N7Val = $('input[name=' + this.PREFIX[_p] + this.NAME[i] + ']').val();
			if(field6N7Val !== '') {
				isEmpty = false;
				if(isNaN(field6N7Val) || field6N7Val.search(/\D/g) !== -1) {
					errMsg += _this.ERRORMESSAGE[lang][8] + '\n';
				}
			}
			
		}
		
		var isZero = false;
		if(
		($('input#final_txt_g4_a').val() === '0' && $('input#final_txt_g4_b').val() === '') ||
		($('input#final_txt_g4_a').val() === '' && $('input#final_txt_g4_b').val() === '0') ||
		($('input#final_txt_g4_a').val() === '0' && $('input#final_txt_g4_b').val() === '0')
		) {
			isZero = true;
		}
		
		
		if(isEmpty || isZero) {
			errMsg += _this.ERRORMESSAGE[lang][9] + '\n';
		}
		// field 7 for calculating way of interest
		/*
		if(typeof $('input[name=' + this.PREFIX[_p] + this.NAME[this.NAME.length - 1] + ']:checked').val() === 'undefined') {
			// please select radio
			errMsg += _this.ERRORMESSAGE[lang][7] + '\n';
		}
		*/
		if($('select#tab2_saveperiod').val() === '2') {
			if($('input#final_txt_g4_a').val() === '' || ($('input#final_txt_g4_b').val() !== '' && $('input#final_txt_g4_b').val() !== '0')) {
				errMsg += (window.location.href.search('/en/') !== -1) ?
				'If you would like to set regular savings amount on a yearly basis, the savings period must be in \"year(s)\" ONLY.\n' :
				'若你的定期儲蓄金額為「每年一次」，儲蓄期則必需只輸入年期部份。\n';
			}
		}
		
		if(errMsg !== '') {
			alert(errMsg);
			return false;
		}else {
			return true;
		}		
	},
	calResultCon : function(_p) {
		
		// commonly used by 3 tabs
		var lang = this.getLangInt();	
		var period = '';
		var data = [];
		var data1 = []; // with CI
		var data2 = []; // without CI
		var data3 = []; // x title
		var data4 = ''; // x period
		var dollarPrefix = (lang === 0) ? 'HKD ' : '港元 ';
		var ciwording1 = (lang === 0) ? 'Without compound interest' : '沒有複合利息';
		var ciwording2 = (lang === 0) ? 'With compound interest' : '有複合利息';

		// resource name for image and wording
		var rdoName = this.RADIONAME[1];
		var rdoIdx = $('input[name=' + rdoName + ']:checked').parent('li').index();
		var summaryImg = '<img src="../images/common/calculator/' + this.SUMMARYIMAGE[rdoIdx] + '" />';
		var purposeWord = this.PURPOSEVALUE[lang][rdoIdx];
		if(purposeWord === '') {
			purposeWord = $('input#final_txt_last').val();
			summaryImg = '';
		}
		
		// variable for formula
		var pmt = $('input#final_txt_g1').val(); // regular saving amount
		var p = $('input#final_txt_g2').val(); // amount you have
		var r = $('input#final_txt_g3').val(); // rate of return
		r = r / 100;
		var y = $('input#final_txt_g4_a').val(); // year
		var m = $('input#final_txt_g4_b').val(); // month
		y = (y === '' || y === '0') ? 0 : y;
		m = (m === '' || m === '0') ? 0 : m;
		var t; // for loop only
		var n; // compounding frequency
		var $savePeriod = $('select#tab2_saveperiod option:selected');
		var savePeriod = $savePeriod.val();
		var n = 1;
		if(savePeriod === '0') {
			n = 52;
			t = parseInt(y * 52) + parseInt(m * (52/ 12));
			period = (lang === 0) ? 'per week' : '每周';
			data4 = (lang === 0) ? 'Week(s)' : '周'; // 2014.1.16 text consistency editing, first alpha upper case
		}else if(savePeriod === '1') {
			n = 12;
			t = parseInt(y * 12) + parseInt(m);
			period = (lang === 0) ? 'per month' : '每月';
			data4 = (lang === 0) ? 'Month(s)' : '月'; // 2014.1.16 text consistency editing, first alpha upper case
		}else if(savePeriod === '2') {
			n = 1;
			t = parseInt(y) + parseInt(m / 12);
			period = (lang === 0) ? 'per year' : '每年';
			data4 = (lang === 0) ? 'Year(s)' : '年'; // 2014.1.16 text consistency editing, first alpha upper case
		}
		var result = (p === '') ? 0 : parseFloat( p );
		var __result = parseFloat( p );
		
		// for loop here
		// with compound interest
		for(var i = 1; i <= t; i++) {
			if(r === 0) { // when r < 0
				result += parseFloat( pmt );
			}else { // when r > 0 and the formula is able to calculate
				result = p * Math.pow( 1 + parseFloat( r / n ), i ) + pmt * ( ( Math.pow( 1 + parseFloat( r / n), i ) - 1 ) / (r / n) );				
			}
			data1[i - 1] = parseFloat(result);
		}
		
		// without compound interest
		for(var i = 1; i <= t; i++) {
			__result += parseFloat( pmt );
			data2[i - 1] = parseFloat(__result); // assign value to data2
			data3[i - 1] = i; // assign value to data3
		}
		
		// join as ONE array
		data[0] = data1;
		data[1] = data2;
		data[2] = data3;
		data[3] = data4;
		
		// genereate graph 2013.12.17
		var htmlTemplate = $('#cache-template2').html();
		var formattedHtml = htmlTemplate;
		formattedHtml = formattedHtml.replace(/__savingForImg__/g, summaryImg);
		formattedHtml = formattedHtml.replace(/__savingForWord__/g, purposeWord);
		formattedHtml = formattedHtml.replace(/__withCIA__/g, dollarPrefix + this.addCommas(parseFloat(result).toFixed(1)));
		formattedHtml = formattedHtml.replace(/__perPeriod__/g, period);
		if(lang === 0) {
			formattedHtml = formattedHtml.replace(/__contribute__/g, dollarPrefix + this.addCommas((parseFloat(result - __result).toFixed(1))) + ' more');			
		}else {
			formattedHtml = formattedHtml.replace(/__contribute__/g, '多獲' + dollarPrefix + this.addCommas((parseFloat(result - __result).toFixed(1))));		
		}
		formattedHtml = formattedHtml.replace(/__withoutCIA__/g, dollarPrefix + this.addCommas(parseFloat(__result).toFixed(1)));
		formattedHtml = formattedHtml.replace(/__ciwording1__/g, ciwording1);
		formattedHtml = formattedHtml.replace(/__ciwording2__/g, ciwording2);
		
		// add data to the hidden field
		$('form#final_form input#savingForImg').val(this.SUMMARYIMAGE[rdoIdx]);
		$('form#final_form input#savingForWord').val(purposeWord);
		$('form#final_form input#withCIA').val(this.addCommas(parseFloat(result).toFixed(1)));
		$('form#final_form input#withoutCIA').val(this.addCommas(parseFloat(__result).toFixed(1)));
		$('form#final_form input#period').val(period);
		if(lang === 0) {
			$('form#final_form input#contribute').val(this.addCommas((parseFloat(result - __result).toFixed(1))) + ' more');			
		}else {
			$('form#final_form input#contribute').val('多獲' + dollarPrefix + this.addCommas((parseFloat(result - __result).toFixed(1))));	
		}
		$('form#final_form input#linechart_period').val(data4);

		
		$('ul.tab li.tab-report').css('display', 'block');
		$('div.form-content').css('display', 'none');
		$('div.form-result').css('display', 'block');			
		// set event listener after HTML created respectively
		$('.summary-wrapper').html(formattedHtml);

		// GA Tracking (2015.2.4)
		bindResultPageHandler();
		
		// 2014.1.15 start
		// re-ordering the hyperlink in 'What to do next' upon the saving goal
		this.reorderHyperLink('.summary-wrapper', rdoIdx);
		// 2014.1.15 ended
		
		// 2013.1.2 start
		var $tab2RemarkText;
		if(this.getLangInt() === 0) {
			$tab2RemarkText = $('<div style="font-style:normal; text-align:left;">It is important to consider inflation when setting long-term financial goals as it affects the actual value of money over time.<a target="_blank" href="' + EXTERNAL_LINK.en + '">Click here for the statistics about inflation rate.</a></div>');
		}else {
			$tab2RemarkText = $('<div>考慮通脹因素是在制定長遠的財務目標時的重要一環，時間會影響實際的財富價值。<a target="_blank" href="' + EXTERNAL_LINK.tc + '">查看更多關於通脹率的統計數字。</a></div>');
		}
		var $tab2Remark = $('<a href="javascript:;" class="tab2Hover"><img style="padding-left:5px;" src="../images/common/calculator/icon-ques.png" /></a>');
		$tab2Remark.append($tab2RemarkText);
		$('div.form-result p.tab2Phrase').html($tab2Remark);
		// 2013.1.2 ended			
		
		this.generateGraph('result_graph_2', data, 1);
		// 2013.12.26 start
		this.bindCISelector('result_graph_2', data, 1, n);
		// 2013.12.26 ended
		this.setBackButton();
		this.openBox('.btn-do-next','.do-next-innerwrapper');
		//this.saveAsPDFListener();
		$('.btm_btn_submit').click(function() {$('a.btn_submit').click();});		
		//
		return data;
	},
//	
	isValidatedLon : function(_p) {
		var errMsg = '';
		var _this = this;
		var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1; // en
		// field 3 for target amount
		// field 4 for saved amount
		if($('input#long_rdo_last').attr('checked') === 'checked') {
			if($('input[name=' + this.PREFIX[_p] + this.NAME[1] + ']').val() === '') {
				// please enter value of other option
				errMsg += _this.ERRORMESSAGE[lang][0] + '\n';
			}
		}
		var regularS = parseFloat($('input#long_txt_g0').val());
		if($('select#tab3_saveperiod').val() === '2') { // yearly
			//regularS = regularS / 12; // 2013.11.15 ignore factor reason
		}else if($('select#tab3_saveperiod').val() === '0') { // weekly
			//regularS = regularS * 4.333333; // 2013.11.15 ignore factor reason
		}
		if(parseFloat($('input#long_txt_g1').val()) - parseFloat($('input#long_txt_g2').val()) < regularS) {
			var replacedText = _this.ERRORMESSAGE[lang][14];
			var arr = (lang === 0) ? ['month', 'month', 'year'] : ['一個月', '一個月', '一年'];
			var per = '';
			if($('select#tab3_saveperiod').val() === '0') { // weekly
				per = arr[0];
			}else if($('select#tab3_saveperiod').val() === '1') { // monthly
				per = arr[1];
			}else { // yearly
				per = arr[2];
			}
			replacedText = replacedText.replace('$replace$', per);
			errMsg += replacedText;
			//errMsg += (lang === 0) ? _this.ERRORMESSAGE[lang][14] : _this.ERRORMESSAGE[lang][14];
		}
		
		for(var i = 2; i < 4; i++) {
			var field3N4Val = $('input[name=' + this.PREFIX[_p] + this.NAME[i] + ']').val();
			if(field3N4Val === '') {
				// please enter value
				if(i === 2) {
					errMsg += _this.ERRORMESSAGE[lang][1] + '\n';
				}else if(i === 3) {
					errMsg += _this.ERRORMESSAGE[lang][2] + '\n';
				}
			}else if(!this.isValidatedNum(field3N4Val)) {
				// target amount's format is not valid
				if(i === 2) {				
					errMsg += _this.ERRORMESSAGE[lang][3] + '\n';
				}else if(i === 3) {
					errMsg += _this.ERRORMESSAGE[lang][4] + '\n';
				}
			}
		}
		
		if(parseInt($('input[name=' + this.PREFIX[_p] + this.NAME[2] + ']').val()) <= parseInt($('input[name=' + this.PREFIX[_p] + this.NAME[3] + ']').val())) {
			errMsg += _this.ERRORMESSAGE[lang][11] + '.\n';
		}
		
		// Regular saving amount
		var regSaveAmountVal = $('input#long_txt_g0').val();
		if(regSaveAmountVal === '') {
			errMsg += _this.ERRORMESSAGE[lang][13] + '\n';
		}else if(regSaveAmountVal === '0') {
			errMsg += _this.ERRORMESSAGE[lang][10] + '\n';
		}
		
		// field 5 for interest rate
		var field5Val = $('input[name=' + this.PREFIX[_p] + this.NAME[4] + ']').val();
		if(field5Val === '') {
			// please enter interest
			errMsg += _this.ERRORMESSAGE[lang][5] + '\n';
		}else if(isNaN(parseInt(field5Val))) {
			// interest's format is not valid
			errMsg += _this.ERRORMESSAGE[lang][6] + '\n';
		}
		// field 7 for calculating way of interest
		/*
		if(typeof $('input[name=' + this.PREFIX[_p] + this.NAME[this.NAME.length - 1] + ']:checked').val() === 'undefined') {
			// please select radio
			errMsg += _this.ERRORMESSAGE[lang][7] + '\n';
		}
		*/
		if(errMsg !== '') {
			alert(errMsg);
			return false;
		}else {
			return true;
		}		
	},
	calResultLon : function(_p) {
		// commonly used by 3 tabs
		var lang = this.getLangInt();	
		var period = '';
		var data = [];
		var data1 = []; // with CI
		var data2 = []; // without CI
		var data3 = []; // x title
		var data4 = ''; // x period
		var dollarPrefix = (lang === 0) ? 'HKD ' : '港元 ';
		var ciwording1 = (lang === 0) ? 'Without compound interest' : '沒有複合利息';
		var ciwording2 = (lang === 0) ? 'With compound interest' : '有複合利息';

		// resource name for image and wording
		var rdoName = this.RADIONAME[2];
		var rdoIdx = $('input[name=' + rdoName + ']:checked').parent('li').index();
		var summaryImg = '<img src="../images/common/calculator/' + this.SUMMARYIMAGE[rdoIdx] + '" />';
		var purposeWord = this.PURPOSEVALUE[lang][rdoIdx];
		if(purposeWord === '') {
			purposeWord = $('input#long_txt_last').val();
			summaryImg = '';
		}
		var sum = $('input#long_txt_g1').val();//saving goal
		var p = $('input#long_txt_g2').val();//amount you have already
		var pmt = $('input#long_txt_g0').val();//regular savings amount
		var $savePeriod = $('select#tab3_saveperiod option:selected');//rsa drop down
		var savePeriod = $savePeriod.val();////rsa drop down
		var n = 1;
		
		if(savePeriod === '0') { // week
			n = 52;
			period = (lang === 0) ? 'per week' : '每周';
			data4 = (lang === 0) ? 'Week(s)' : '周'; // 2014.1.16 text consistency editing, first alpha upper case
		}else if(savePeriod === '1') { // month 
			n = 12;
			period = (lang === 0) ? 'per month' : '每月';
			data4 = (lang === 0) ? 'Month(s)' : '月'; // 2014.1.16 text consistency editing, first alpha upper case
		}else if(savePeriod === '2') { // year
			n = 1;
			period = (lang === 0) ? 'per year' : '每年';
			data4 = (lang === 0) ? 'Year(s)' : '年'; // 2014.1.16 text consistency editing, first alpha upper case
		}
		var r = $('input#long_txt_g3').val();//expected rate of return	
		r = r / 100;
		
		var t;
		var y;
		var m;
		
		var __t;
		var __y;
		var __m;
		
		// assign without compound interest value
		__t = ( sum - p ) / pmt;
		if(n === 12) {
			
			if(__t >= 12) {
				__y = Math.floor( __t / 12 );
				__m = __t - ( __y * 12 );
			}else {
				__y = 0;
				__m = __t;
			}
		
		}else if(n === 1) {
			
			__y = __t;
			__m = 0;
		
		}else if(n === 52) {
			
			if(__t >= 52) {
				__y = Math.floor( __t / 52 );
			}else {
				__y = 0;
			}

			if(__t >= 4) {
				__m = Math.round( __t * 12 / 52 ) - ( __y * 12 );
			}else {
				__m = 0;
			}

		}
		
		if(r > 0) { // assign with compound interest value
			t = (Math.log(sum / pmt * (r / n) + 1) - Math.log(p / pmt * (r / n) + 1)) / (n * Math.log(1 + r / n)) * n;
			if(n === 12) { // month
				if(t >= 12) {
					y = Math.floor( t / 12 );
					m = Math.ceil( t - ( y * 12 ) );
				}else {
					y = 0;
					m = Math.ceil( t );
				}
				
			}else if(n === 1) { // year
				
				//y = Math.round( t );
				y = Math.floor( t );
				m = Math.round( ( t - Math.floor( t ) ) * 12 );
			
			}else if(n === 52) { // week
			
				if(t >= 52) {
					y = Math.floor( t / 52 );
				}else {
					y = 0;
				}
				if(t >= 4) {
					m = Math.round( t * 12 / 52 ) - ( y * 12 );
				}else {
					m = 0;
				}
				
			}
		}else { // assign without compound interest value to with compound interest
			t = __t;
			y = __y;
			m = __m;	
		}

		// t = with compound interest
		// __t = without compound interest
		// t or __t + saving period
		// __t - t = EARILER
		
		var result = parseFloat( p );
		var __result = parseFloat( p );
		var longestLen = 0;
		
		// for loop here
		// with compound interest
		// 2014.1.17 start
		// change the x axis to base on 'with compound interest' so 
		// decrease the possibility in terms of exceptional case 
		// which made enormous range between with & without compound.
		// To give the last of x axis more room so we * 1.1 so
		// increase 10% data to the graph
		var xAxisT = Math.ceil(t * 1.1);
		//var xAxisT = Math.ceil(__t);
		// 2014.1.17 ended
		if(n === 1) {
			
		}else if(n === 12 && xAxisT % 10 !== 0) {
			xAxisT = xAxisT - (xAxisT % 10) + 10;
		}else if(n === 52 && xAxisT % 10 !== 0) {
			xAxisT = xAxisT - (xAxisT % 10) + 10;
		}
		// 2014.1.16 start
		// to limit the x axis to be max 99 year
		// tab 3 only
		/*
		if(n === 1) {
			xAxisT = (xAxisT > 100) ? 100 : xAxisT;
		}else if(n === 12) {
			xAxisT = (xAxisT > 1200) ? 1200 : xAxisT;
		}else if(n === 52) {
			xAxisT = (xAxisT > 5200) ? 5200 : xAxisT;
		}
		*/
		// 2014.1.16 ended
		for(var i = 1; i <= xAxisT; i++) {
			if(r === 0) { // when r < 0
				result += parseFloat( pmt );
			}else { // when r > 0 and the formula is able to calculate
				result = p * Math.pow( 1 + parseFloat( r / n ), i ) + pmt * ( ( Math.pow( 1 + parseFloat( r / n), i ) - 1 ) / (r / n) );
				
			}
			data1[i - 1] = parseFloat(result);
		}
		// without compound interest	
		for(var i = 1; i <= xAxisT; i++) {	
			__result += parseFloat( pmt );
			data2[i - 1] = parseFloat(__result);
		}
		/*
		while((data1[data1.length - 1]).toFixed(1) < sum) {
			if(r === 0) {
				result += parseFloat( pmt );
			}else {
				result = p * Math.pow( 1 + parseFloat( r / n ), Math.ceil(__t) ) + pmt * ( ( Math.pow( 1 + parseFloat( r / n), Math.ceil(__t) ) - 1 ) / (r / n) );			
			}
			data1[data1.length] = parseFloat(result);
		}
		while((data2[data2.length - 1]).toFixed(1) < parseFloat( sum ) ) {
			__result += parseFloat( pmt );
			data2[data2.length] = parseFloat( __result );		
		}
		*/

		
		longestLen = (data1.length > data2.length) ? data1.length : data2.length;
		
		for(var i = 1; i <= longestLen; i++) {
			data3[i - 1] = i;
		}
		//data1[data1.length - 1] = parseFloat( sum );
		//data2[data2.length - 1] = parseFloat( sum );			
		data[0] = data1;
		data[1] = data2;
		data[2] = data3;
		data[3] = data4;
		data[4] = [p, r, n, xAxisT, pmt];
		
		var withCI = '';
		var withoutCI = '';
		var contribute = '';
		var yr = '';
		var mth = '';
		var __yr = '';
		var __mth = '';
		yr = (y === 0) ? '0' : Math.round( y );
		mth = (m === 0) ? '0' : Math.round( m );
		withCI = Math.ceil( t );
		withoutCI = Math.ceil( __t );
		contribute = (withoutCI - withCI) + ' ' + data4;
		
		// genereate graph 2013.12.20
		var htmlTemplate = $('#cache-template3').html();
		var formattedHtml = htmlTemplate;
		if(lang === 0) {
			formattedHtml = formattedHtml.replace(/__result__/g, yr + ' year(s) ' + mth + ' month(s)');	
		}else {
			formattedHtml = formattedHtml.replace(/__result__/g, yr + ' 年 ' + mth + ' 月');	
		}
		formattedHtml = formattedHtml.replace(/__savingForImg__/g, summaryImg);
		formattedHtml = formattedHtml.replace(/__savingForWord__/g, purposeWord);
		formattedHtml = formattedHtml.replace(/__withCIA__/g, withCI + ' ' + data4 );
		formattedHtml = formattedHtml.replace(/__perPeriod__/g, period);
		if(lang === 0) {
			formattedHtml = formattedHtml.replace(/__contribute__/g, contribute + ' earlier');			
		}else {
			formattedHtml = formattedHtml.replace(/__contribute__/g, '提早' + contribute);				
		}
		formattedHtml = formattedHtml.replace(/__withoutCIA__/g, withoutCI + ' ' + data4 );
		formattedHtml = formattedHtml.replace(/__ciwording1__/g, ciwording1);
		formattedHtml = formattedHtml.replace(/__ciwording2__/g, ciwording2);
		
		// add data to the hidden field
		$('form#long_form input#year').val(yr);
		$('form#long_form input#month').val(mth);
		$('form#long_form input#savingForImg').val(this.SUMMARYIMAGE[rdoIdx]);
		$('form#long_form input#savingForWord').val(purposeWord);
		$('form#long_form input#withCIA').val( withCI + ' ' + data4 );
		$('form#long_form input#withoutCIA').val( withoutCI + ' ' + data4 );
		$('form#long_form input#period').val(period);
		$('form#long_form input#savingGoal').val(sum);
		if(lang === 0) {
			$('form#long_form input#contribute').val(contribute + ' earlier');	
		}else {
			$('form#long_form input#contribute').val('提早' + contribute);			
		}
		$('form#long_form input#linechart_period').val(data4);

		
		$('ul.tab li.tab-report').css('display', 'block');
		$('div.form-content').css('display', 'none');
		$('div.form-result').css('display', 'block');			
		// set event listener after HTML created respectively
		$('.summary-wrapper').html(formattedHtml);

		// GA Tracking (2015.2.4)
		bindResultPageHandler();
		
		// 2014.1.15 start
		// re-ordering the hyperlink in 'What to do next' upon the saving goal
		this.reorderHyperLink('.summary-wrapper', rdoIdx);
		// 2014.1.15 ended
		
		this.generateGraph('result_graph_3', data, 2);
		// 2013.12.26 start
		this.bindCISelector('result_graph_3', data, 2, n);
		// 2013.12.26 ended
		this.setBackButton();
		this.openBox('.btn-do-next','.do-next-innerwrapper');
		//this.saveAsPDFListener();
		$('.btm_btn_submit').click(function() {$('a.btn_submit').click();});		
		//
		//console.log(data);
		return data;
	},
	bindCISelector : function(_elm, _data, _tab, _cf) {
		
		var lang = this.getLangInt();
		var _this = this;
		
		var newDataW = [];
		var newDataW0 = [];
		var newDataW1 = [];
		var newDataW2 = [];
		var newDataW3 = (lang === 0) ? 'Week(s)' : '周';
		
		var newDataM = [];
		var newDataM0 = [];
		var newDataM1 = [];
		var newDataM2 = [];
		var newDataM3 = (lang === 0) ? 'Month(s)' : '月';
		
		var newDataY = [];
		var newDataY0 = [];
		var newDataY1 = [];
		var newDataY2 = [];
		var newDataY3 = (lang === 0) ? 'Year(s)' : '年';
		
		var pCount = 0;
		var count = 0;
		
		if(_cf === 1) { // yearly
			
			// dropdown to choose not required
			$('.summary-wrapper select#ciSelect' + (_tab + 1)).css('visibility', 'hidden');
			
		}else if(_cf === 12 && _data[2].length >= 24) { // monthly
			
			// select monthly first
			$('.summary-wrapper select#ciSelect' + (_tab + 1)).css('visibility', 'visible');
			$('.summary-wrapper select#ciSelect' + (_tab + 1)).val('1');
			
			// weekly not required
			$('.summary-wrapper select#ciSelect' + (_tab + 1) + ' option').filter('[value="0"]').remove();
			
			pCount = parseInt(_data[2].length / 11);
			for(var i = 0; i < _data.length; i++) {

				if(typeof _data[i] !== 'string') {
					if(i === 0 || i === 1) {
						count = 0;
						for(var j = 11; j < _data[i].length; j = j + 12) {
							if(i === 0) {
								//newDataY0[count] = ( (j + 12) >= _data[i].length) ? _data[i][_data[i].length - 1] : _data[i][j];
								newDataY0[count] = _data[i][j];
							}else if(i === 1) {
								//newDataY1[count] = ( (j + 12) >= _data[i].length) ? _data[i][_data[i].length - 1] : _data[i][j];
								newDataY1[count] = _data[i][j];
							}
							count++;
						}
					}else if(i === 2) {
						for(var k = 0; k < newDataY1.length; k++) {
							newDataY2[k] = k + 1;
						}
					}
				}
			}
			
			newDataM = _data;
			newDataY[0] = newDataY0;
			newDataY[1] = newDataY1;
			newDataY[2] = newDataY2;
			newDataY[3] = newDataY3;			
			
		}else if(_cf === 52 && _data[2].length >= 8) { // weekly
			
			// select weekly first
			$('.summary-wrapper select#ciSelect' + (_tab + 1)).css('visibility', 'visible');			
			$('.summary-wrapper select#ciSelect' + (_tab + 1)).val('0');
			
			if(_data[2].length >= 104) { // have yearly
			
				for(var i = 0; i < _data.length; i++) {

					if(typeof _data[i] !== 'string') {
						if(i === 0 || i === 1) {
							count = 0;
							for(var j = 51; j < _data[i].length; j = j + 52) {
								if(i === 0) {
									//newDataY0[count] = ( (j + 52) >= _data[i].length) ? _data[i][_data[i].length - 1] : _data[i][j];
									newDataY0[count] = _data[i][j];
								}else if(i === 1) {
									//newDataY1[count] = ( (j + 52) >= _data[i].length) ? _data[i][_data[i].length - 1] : _data[i][j];
									newDataY1[count] = _data[i][j];
								}
								count++;
							}
						}else if(i === 2) {
							for(var k = 0; k < newDataY1.length; k++) {
								newDataY2[k] = k + 1;
							}
						}
					}
				}
				newDataY[0] = newDataY0;
				newDataY[1] = newDataY1;
				newDataY[2] = newDataY2;
				newDataY[3] = newDataY3;
				
			}else {
				// yearly not required
				$('.summary-wrapper select#ciSelect' + (_tab + 1) + ' option').filter('[value="2"]').remove();
			}
			for(var i = 0; i < _data.length; i++) {
				if(typeof _data[i] !== 'string') {
					if(i === 0 || i === 1) {
						count = 0;
						if(_tab !== 2) {
							for(var j = 3; j < _data[i].length; j = j + (52 / 12)) {
								if(i === 0) {
									newDataM0[count] = _data[i][Math.round(j)];
								}else if(i === 1) {
									newDataM1[count] = _data[i][Math.round(j)];
								}
								count++;
							}
						}else {
						
							for(var j = 3; j < _data[i].length; j = j + 4) {
								if(i === 0) {
									newDataM0[count] = _data[i][j];
								}else if(i === 1) {
									newDataM1[count] = _data[i][j];
								}
								count++;
							}

						}
					}else if(i === 2) {
						for(var k = 0; k < newDataM1.length; k++) {
							newDataM2[k] = k + 1;
						}
					}
				}
				
			}
			
			newDataM[0] = newDataM0;
			newDataM[1] = newDataM1;
			newDataM[2] = newDataM2;
			newDataM[3] = newDataM3;
			newDataW = _data;
		}
		
		if(_tab === 2) {
			newDataW[4] = _data[4];
			newDataM[4] = _data[4];
			newDataY[4] = _data[4];
		}
		$('.summary-wrapper select#ciSelect' + (_tab + 1)).change(function() {
			if($(this).val() === '0') {
				_this.generateGraph(_elm, newDataW, _tab);
			}else if($(this).val() === '1') {
				_this.generateGraph(_elm, newDataM, _tab);
			}else if($(this).val() === '2') {
				_this.generateGraph(_elm, newDataY, _tab);
			}
		});
		
	},
	generateGraph : function(_elm, _data, _tab) {
		
		$('#' + _elm).html('');
		
		var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1;
		var label1 = (lang === 0) ? 'With compound interest' : '有複合利息';
		var label2 = (lang === 0) ? 'Without compound interest' : '沒有複合利息';
		var labelX = _data[3];
		var millionPrefix = (lang === 0) ? ' (million)' : ' (百萬)';
		var labelY = (lang === 0) ? 'HKD' : '港元';
		var s1 = _data[0];
		var s2 = _data[1];
		// 2014.1.21 start
		var _this = this;
		var isMillion = false;
		var yLabel = (lang === 0) ? 'label-en' : 'label-tc';
		// to format either 2 or 1 decimal base on the amount
		if(_data[0][_data[0].length - 1] >= 1000000) {
			isMillion = true;
			labelY += millionPrefix;
			s1 = _this.parseToDecimal(s1, 2);
			s2 = _this.parseToDecimal(s2, 2);
		}else {
			s1 = _this.parseToDecimal(s1, 1);
			s2 = _this.parseToDecimal(s2, 1);		
		}
		
		// 2014.1.21 ended
		var ticks = _data[2];
		var id = _elm;
		if(s2.length > 50) {
			var newIdx = 0;
			var j = 0;
			var temps1 = s1;
			var temps2 = s2;
			var tempticks = ticks;
			
			newIdx = s2.length - (s2.length % 10);
			s1 = [];
			s2 = [];
			ticks = [];
			for(var i = 0; i < 10; i++) {
				s1[i] = temps1[ ( (i + 1) * (newIdx / 10) ) - 1];
				s2[i] = temps2[ ( (i + 1) * (newIdx / 10) ) - 1];
				ticks[i] = tempticks[ ( (i + 1) * (newIdx / 10) ) - 1];
			}
		}		
		var frmName = '';
		if(_tab === 0) {
			frmName = 'month_form';
		}else if(_tab === 1) {
			frmName = 'final_form';
		}else if(_tab === 2) {
			frmName = 'long_form';
		}
		
		// 2014.1.16 start
		// append '~' to the last x-axis if any surplus for period
		// only tab 1 & 2 is applicable
		if(_tab === 0 || _tab === 1) {
			var testY = (lang === 0) ? 'Year(s)' : '年';
			var showPeriod = _data[3];
			var sourceLastX = _data[2][_data[2].length - 1];
			var parsedLastX = ticks[ticks.length - 1];
			if(showPeriod === testY) { // different case handle for year
				var $mthIpt = (_tab === 0) ? $('input#month_txt_g4_b') : $('input#final_txt_g4_b');
				var mthVal = parseInt($mthIpt.val());
				if(!isNaN(mthVal) && mthVal % 12 !== 0) {
					// 2014.1.21 start
					// to prevent re-append ' ~'
					if(typeof ticks[ticks.length - 1] !== 'string') {
						ticks[ticks.length - 1] += ' ~';
					}
					// 2014.1.21 ended
				}
			}else { // week & month should be same case
				if(sourceLastX - parsedLastX !== 0) {
					// 2014.1.21 start
					// to prevent re-append ' ~'
					if(typeof ticks[ticks.length - 1] !== 'string') {
						ticks[ticks.length - 1] += ' ~';
					}
					// 2014.1.21 ended
				}
			}
		}
		// 2014.1.16 ended
		
		$('form#' + frmName + ' input#withCData').val(s1.join());
		$('form#' + frmName + ' input#withoutCData').val(s2.join());
		$('form#' + frmName + ' input#ticksValue').val(ticks.join());
		$('form#' + frmName + ' input#linechart_period').val(_data[3]);
		
		var dataArray = [];
		var colorArray = [];
		var seriesArray = [];
		if($('div.form-content div.active').index() === 2) {
			var crossLineArray = [];
			var savingGoal = parseFloat($('input#long_txt_g1').val());
			for(var i = 0; i < ticks.length; i++) {
				crossLineArray[i] = savingGoal;
			}
			dataArray = [crossLineArray, s1, s2];
			colorArray = ['#666666', '#DC543A', '#3EA8A4'];
			seriesArray = [ {showMarker : false}, {label : label1, rendererOptions: {smooth: true} }, {label : label2, rendererOptions: {smooth: true} } ];
			
		}else {
			dataArray = [s1, s2];
			colorArray = ['#DC543A', '#3EA8A4'];
			seriesArray = [ {label : label1}, {label : label2} ];
		}		
		var plot1 = $.jqplot(id, dataArray, {
			seriesColors:colorArray,
		    highlighter: {
		      show: true,
		      showMarker: false,
		      tooltipAxes: 'y',
		      sizeAdjust: 30
			},
			grid : {
				drawBorder : false,
				shadow : false,
				background: '#ffffff',
				borderColor : '#ffffff',
				borderWidth:0
			},
			axesDefaults : {
				tickOptions : {
				  fontSize : '9pt',
//				  fontFamily : 'Arial',
				  textColor : '#727272'
				},
			    rendererOptions: {
			       drawBaseline: true
			    },
			    min : 0
			},
	        // The "seriesDefaults" option is an options object that will
	        // be applied to all series in the chart.
	        seriesDefaults:{
	           //renderer:$.jqplot.BarRenderer,
	            rendererOptions: {fillToZero: true}
	        },
	        // Custom labels for the series are specified with the "label"
	        // option on the series option.  Here a series option object
	        // is specified for each series.
	        series:seriesArray,
	        // Show the legend and put it outside the grid, but inside the
	        // plot container, shrinking the grid to accomodate the legend.
	        // A value of "outside" would not shrink the grid and allow
	        // the legend to overflow the container.
	        legend: {
	            show: false
	        },
	        axes: {
	            // Use a category axis on the x axis and use our custom ticks.
	            xaxis: {
	                renderer: $.jqplot.CategoryAxisRenderer,
	                label: labelX,
	                ticks: ticks,
	                tickOptions : {
	        			showGridline : false
	        		}
	            },
	            // Pad the y axis just a little so bars can get close to, but
	            // not touch, the grid boundaries.  1.2 is the default padding.
	            yaxis: {
	                //pad: 1.05,
	                label : labelY,
	                //renderer: $.jqplot.CategoryAxisRenderer,
	                tickOptions: {
	            		showGridline : false,
						// 2014.1.20 start
						// to format the y axis in order to prevent styling issue
	        			formatter : (isMillion) ? _this.millionFormatter : _this.normalFormatter,
						// 2014.1.20 ended
	        			formatString : "%'.1f"
	            	}
	            }
	        }	        
		});
		// 2014.1.20 start
		// to append label class based on page language
		$('.jqplot-yaxis-label').addClass(yLabel);
		// 2014.1.20 ended
	},
	// 2014.1.24 start
	// to format the y axis in order to prevent styling issue
	millionFormatter : function(_format, _val) {
		return SavingCalculator.utilAddCommas(parseFloat( (_val / 1000000).toFixed(2) ));
	},
	normalFormatter : function(_format, _val) {
		return SavingCalculator.utilAddCommas(_val);
	},	
	// 2014.1.20 ended
	// 2014.1.21 start
	parseToDecimal : function(_arr, _fix) {
		var arr = [];
		for(var i = 0; i < _arr.length; i++) {
			arr[i] = parseFloat(_arr[i].toFixed(_fix));		
		}
		return arr;
	},
	// 2014.1.21 ended
	isValidatedNum : function(_val) {
		var rgx = /^\d+(\.\d{1,8})?$/;
		return rgx.test(_val);
	},
	isValidatedInt : function(_val) {
		return typeof _val === 'number' && parseFloat(_val) == parseInt(_val, 10) && !isNaN(_val);
	},
	generateTimeItem : function(_elm, _id, _timeItem) {
		if($(_elm + _id).next().hasClass('timeItem')) {
			$(_elm + _id).next().html(_timeItem);
		}else {
			$(_elm + _id).after($('<div class="timeItem">' + _timeItem + '</div>'));
		}
		
	},
	utilAddCommas : function(_nStr) {
		_nStr += '';
		x = _nStr.split('.');
		x1 = x[0];
		x2 = x.length > 1 ? '.' + x[1] : '';
		var rgx = /(\d+)(\d{3})/;
		while(rgx.test(x1)) {
			x1 = x1.replace(rgx, '$1' + ',' + '$2');
		}
		return x1 + x2;
	},
	utilParseString : function(_data) {
		var str = '';
		for(var i = 0; i < _data.length; i++) {
			str += '[' + _data[i].join(',') + ']';
			str += (i === _data.length - 1) ? '' : '&';
		}
		return str;
	},
	setBackButton : function() {
		$('a.btn_back').click(function() {
			$('ul.tab li.tab-report').css('display', 'none');
			$('div.form-content').css('display', 'block');
			$('div.form-result').css('display', 'none');
			// clear the template
			$('.summary-wrapper').html('');
		});		
	},
	printLog : function(_mes) {
		if(this.DEBUG && !$.browser.msie) {
			console.log(_mes);
		}
	},
	// 2014.1.21 start
	// to also handle href reordering
	reorderHyperLink : function(_clsName, _rdoIdx) {
		var $content = $(_clsName);
		var lang = this.getLangInt();
		var text = [];
		var reorderText = [];
		if(lang === 0) {
			text = ['setting up a home', 'wedding', 'buying a car', 'having children'];
		}else {
			text = ['置業安居', '結婚', '買車', '生育'];
		}
		var link = [];
		var reorderLink = [];
		for(var i = 0; i < 4; i++) {
			link[i] = $content.find('.ex_link_' + i).attr('href');
		}
		switch(_rdoIdx) {
			//
			case 4 : 
			reorderText = text;
			reorderLink = link;
			break;
			//
			case 3 :
			reorderText[0] = text[1]; reorderLink[0] = link[1];
			reorderText[1] = text[0]; reorderLink[1] = link[0];
			reorderText[2] = text[2]; reorderLink[2] = link[2];
			reorderText[3] = text[3]; reorderLink[3] = link[3];
			break;
			//
			case 5 :
			reorderText[0] = text[2]; reorderLink[0] = link[2];
			reorderText[1] = text[0]; reorderLink[1] = link[0];
			reorderText[2] = text[1]; reorderLink[2] = link[1];
			reorderText[3] = text[3]; reorderLink[3] = link[3];
			break;
			//
			case 6 :
			reorderText[0] = text[3]; reorderLink[0] = link[3];
			reorderText[1] = text[0]; reorderLink[1] = link[0];
			reorderText[2] = text[1]; reorderLink[2] = link[1];
			reorderText[3] = text[2]; reorderLink[3] = link[2];
			break;
			//
			default :
			reorderText = text;
			reorderLink = link;
			break;
		}
		$content.find('.ex_link_0').html(reorderText[0]).attr('href', reorderLink[0]);
		$content.find('.ex_link_1').html(reorderText[1]).attr('href', reorderLink[1]);
		$content.find('.ex_link_2').html(reorderText[2]).attr('href', reorderLink[2]);
		$content.find('.ex_link_3').html(reorderText[3]).attr('href', reorderLink[3]);
	},
	// 2014.1.21 ended
	openBox : function(_self, _target){
		$(_self).click(function(){
			// IF IE7, SINCE THERE ARE PROBLEMS OF SLIDETOGGLE AND ANIMTE HEIGHT TOGGLE IN IE7
			if($.browser.msie && parseInt($.browser.version, 10) == 7 || $.browser.msie && parseInt($.browser.version, 10) == 8) {
			    // $(this).parent().find(target).stop().show();
			    var hasClassOpened = $(this).parent().find(_target).hasClass("opened");				
				if(hasClassOpened == true){
					$(this).parent().find(_target).stop().hide();
					$(this).parent().find(_target).removeClass('opened');
				} else {
					$(this).parent().find(_target).stop().show();
					$(this).parent().find(_target).addClass('opened');
				}
			} else {
				$(this).parent().find(_target).stop().slideToggle(500);	
			}
			
			if($(this).hasClass('open')) {
				$(this).removeClass('open');
			}else {
				$(this).addClass('open');
			}
			
		});
	},
	saveAsPDFListener : function() {

		$('a.btn_submit, a.btn_print').click(function() {
			var idx = parseInt($('div.form-wrapper').children('div.active').index());
			var isValid = false;
			var data = ''; // 2014.1.16 bug fixing for the save button
			if(idx === 0) {
				if(SavingCalculator.isValidatedMth(idx)) {
					isValid = true;
					 // 2014.1.16 bug fixing for the save button
					if($('div.form-result').css('display') !== 'block') {
						data = SavingCalculator.calResultMth(idx);	
					}
				}
			}else if(idx === 1) {
				if(SavingCalculator.isValidatedCon(idx)) {
					isValid = true;
					 // 2014.1.16 bug fixing for the save button
					if($('div.form-result').css('display') !== 'block') {
						data = SavingCalculator.calResultCon(idx);
					}
				}
			}else if(idx === 2) {
				if(SavingCalculator.isValidatedLon(idx)) {
					isValid = true;
					 // 2014.1.16 bug fixing for the save button
					if($('div.form-result').css('display') !== 'block') {
						data = SavingCalculator.calResultLon(idx);
					}
				}
			}
			if(isValid) {
				//var str = SavingCalculator.utilParseString(data);
				//$('input[name=' + SavingCalculator.PREFIX[idx] + SavingCalculator.DATA + ']').val(str);
				//console.log(data);
				if(data !== null) {
					var formAction = $('form#' + SavingCalculator.PREFIX[idx] + SavingCalculator.FORM).attr('action');
					if($(this).hasClass('btn_print')) {
						// 2014.1.30 start
						// GA event tracking code
						printPDFTracking(SavingCalculator.getLangInt());
						// 2014.1.30 ended					
						formAction = formAction.replace('&print=y', '');
						$('form#' + SavingCalculator.PREFIX[idx] + SavingCalculator.FORM).attr('action', formAction + '&print=y');
						$('form#' + SavingCalculator.PREFIX[idx] + SavingCalculator.FORM).attr('target', '_blank');
						$('form#' + SavingCalculator.PREFIX[idx] + SavingCalculator.FORM).submit();
					}else {
						// 2014.1.30 start
						// GA event tracking code
						downloadPDFTracking(SavingCalculator.getLangInt());
						setTimeout(function() { // to allow time for the hit request to process before taking the user by _self
							formAction = formAction.replace('&print=y', '');
							$('form#' + SavingCalculator.PREFIX[idx] + SavingCalculator.FORM).attr('action', formAction);
							$('form#' + SavingCalculator.PREFIX[idx] + SavingCalculator.FORM).attr('target', '_self');
							$('form#' + SavingCalculator.PREFIX[idx] + SavingCalculator.FORM).submit();
						}, 500);
						// 2014.1.30 ended
					}
					
				}
			}
		});

	},

	calculatorTab : function(){
		$('.calculator .calculator-wrapper ul.tab li a').click(function(){
			var _this = $(this);
			if(!_this.parent('li').hasClass('tab-report')) { // 2013.12.12 start
				
				var formWrapper = $('.form-content');
				var thisIndex = _this.parent().index() - 1;
				$('.calculator .calculator-wrapper ul.tab li a').removeClass('active');
				_this.addClass('active');
				formWrapper.children().removeClass('active');
				formWrapper.children().eq(thisIndex).addClass('active');
				
				
				if($('div.summary_panel').length > 0) {
					$('div.summary_panel').remove();
					$('div.panel_wrapper').css('display', 'block');
					$('div.chart_wrapper').css('display', 'none');
				}
			
			} // 2013.12.12 ended
			
		});
	},
	calculatorExpand : function(){
		$('ul.expand-list li>a').click(function(){
			var _this = $(this);
			if(!_this.parents('ul').hasClass('expandAll')) { // 2013.9.10
				// _this.parents('ul').children().removeClass('open');
				// _this.parent().addClass('open');
				_this.parent().toggleClass('open');
			}
		});
	},
	calculatorProcess : function(target){
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
		$('.calculator .calculator-wrapper .form-content .form-innerwrapper').removeClass('active');
		$('.calculator .calculator-wrapper .form-content .form-innerwrapper').eq(target).addClass('active');
	},
	closeAllTab : function(){
		$('.close-all').click(function(){
			var _this = $(this);
			_this.next().children().removeClass('open');
		});
	},
	getLangInt : function() {
		return (window.location.href.search('/en/') !== -1) ? 0 : 1;
	},
	bindEventListeners : function(_lang) {
		var _this = this;
		var val = '';
		var regExp1 = /([.]){2}/;
		var regExp2 = /^[0-9][.]{1}$/;
		
		// 2013.1.3 start
		var external_link = (_lang === 0) ? EXTERNAL_LINK_SAVING.en : EXTERNAL_LINK_SAVING.tc;
		for(var i = 0; i < external_link.length; i++) {
			$('a.ex_link_' + i).each(function() {
				$(this).attr('href', external_link[i]);
				$(this).attr('target', '_blank');
			});
		}
		// 2013.1.3 ended
		
		// save to excel format
		if($('a.btn_record').length > 0) {
			$('a.btn_record').each(function() {
				$(this).click(function() {
					if(BudgetCalculator.isValidatedValueAll()) {
						$('form#' + BudgetCalculator.FORM).attr('action', '../excelBudgetServlet.do?lang=' + _lang);
						$('form#' + BudgetCalculator.FORM).attr('target', '_self');
						$('form#' + BudgetCalculator.FORM).submit();
					}
				});
			});
		}
		
		// set input[text] with keypress & blur behaviour
		for(var i = 0; i < _this.PREFIX.length; i++) {
		
			$('form#' + _this.PREFIX[i] + 'form').find('input[type=text]').each(function() {
				if(!$(this).hasClass('input-other')) {
					$(this).keypress(function(event) {
						var key;
						if(window.event) {
							isWindowEvent = true;
							key = window.event.keyCode;
						}else {
							key = event.which;
						}
						var keychar = String.fromCharCode(key);
						// check current value up to 1 decimal;
						if(key === 8) {
							return true;
						}
						var currentVal = $(this).val() + keychar;
						if(!$(this).hasClass('field5')) {
							if(currentVal.indexOf('.') > 0) {
								if(currentVal.length - currentVal.indexOf('.') > 2) {
									return false;
								}
							}
						}else {
							
							if(currentVal.length - currentVal.indexOf('.') > 3) {
								return false;
							}
						}
						// ended
						if((key == null) || (key == 0) || (key == 8) || (key == 9) || (key == 13) || (key == 27) ) {
							return true;
						}else if((("0123456789.").indexOf(keychar) > -1)) {
							return true;
						}else {
							return false;
						}
					});
					/*
					$(this).blur(function() {
						val = $(this).val();
						if(val === '' || regExp1.test(val) || regExp2.test(val) || val.indexOf('.') === 0) {
							$(this).val(0);
						}
						_this.setAmount(false);
					});
					*/
				}
			});
		}
		// 2013.12.12 start
		// additional event listener
		
		// bind back to calculating page listener to the button, will need to
		// re-bind when user submit a result and program replace HTML
		_this.setBackButton();
		
		// pop the disclaimer for saving every page load
		$('<a href="saving_disclaimer.html?date=' + new Date().getTime() + '" style="display:none;" class="disclaimer" />').fancybox({
			'type':'iframe',
			'height':300,
			'width':877,
			'showCloseButton':true,
			'padding':0,
			'margin':0,
			'modal':true,
			'transitionOut':'none',
			'overlayShow':false,
			'onComplete': function(){
				var hHeight = $(document).height();
				// var wHeight = $(window).height();
				$('#fancybox-overlay').css('height',hHeight);
				// alert(hHeight);
			}
		}).trigger('click');
		
		// bind assumption listener to btn-assumption
		$('.tab-assumption a.btn-assumption').attr('href', $('.tab-assumption a').attr('href') + '?date=' + new Date().getTime());
		$('.tab-assumption a.btn-assumption').fancybox({
				'type':'iframe',
				'height':550,
				'width':907,
				'showCloseButton':true,
				'padding':0,
				'margin':0,
				'modal':true,
				'transitionOut':'none',
				'overlayShow':false,
				'overlayOpacity':0.5,
				'onComplete' : function() {
					$('#fancybox-close').addClass('closeBtnShown');
					var hHeight = $(document).height();
					$('#fancybox-overlay').css('height',hHeight);
				}
		});
		
		// facebook sharing listener
		if($('a.btn_shareFB').length > 0) {

			$('a.btn_shareFB').each(function() {
				$(this).click(function() {				
					//2014.2.6 start
					//move original function to the upper so all tracking function under same scope
					var currentURL = window.location.href;
					var langIdx = (currentURL.search('/en/') !== -1) ? 0 : 1;
					shareToFBTracking(langIdx);
					//2014.2.6 ended				
				
				});
				
			});
			
			
		}
		
		// mailto function
		if($('a.btn_mailTo').length > 0) {
			$('a.btn_mailTo').each(function() {

				$(this).click(function() {	
					//2014.2.6 start
					//move original function to the upper so all tracking function under same scope
					var currentURL = window.location.href;
					var langIdx = (currentURL.search('/en/') !== -1) ? 0 : 1;
					mailToTracking(langIdx);
					//2014.2.6 ended
				});

			});
		}
		
		// .qicon for different explanation pop-up
		$('.qicon').each(function() {
			var text = $(this).html();
			var alertMessage = '';
			if($(this).hasClass('qicon1')) {
				alertMessage = SavingCalculator.ALERTMESSAGE[_lang][0];
			}else if($(this).hasClass('qicon2')) {
				alertMessage = SavingCalculator.ALERTMESSAGE[_lang][2];
			}else if($(this).hasClass('qicon3')) {
				alertMessage = SavingCalculator.ALERTMESSAGE[_lang][3];
			}else {
				alertMessage = SavingCalculator.ALERTMESSAGE[_lang][1];
			}
			var $anchor = $('<a href="javascript:;" class="qicon_hover" />');
			$anchor.html($(this).html() + '<img style="padding-left:5px;" src="../images/common/calculator/icon-ques.png" /><div class="qicon_message">' + alertMessage + '</div>');
			$(this).html('').append($anchor);
		});
		
		// bind event listener to save PDF button, global share
		this.saveAsPDFListener();
		// 2013.12.12 ended
	}
};