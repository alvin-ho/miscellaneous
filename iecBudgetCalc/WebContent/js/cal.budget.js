//GA tracking 2015.2.4
var _gaq = _gaq || [];
if (/(www.thechinfamily.hk)/i.test(window.location.href)) {
	_gaq.push(['_setAccount', 'UA-34416257-1']); //live ga code
	_gaq.push(['_setDomainName', 'www.thechinfamily.hk']); //live domain
} else if (/(thechinfamily.intra.hksfc.org.hk)/i.test(window.location.href)) {
	_gaq.push(['_setAccount', 'UA-36354635-1']); //uat ga code
	_gaq.push(['_setDomainName', 'thechinfamily.intra.hksfc.org.hk']); //uat domain
}
_gaq.push(['_trackPageview']);

(function () {
	var ga = document.createElement('script');
	ga.type = 'text/javascript';
	ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(ga, s);
})();

function unbindRatingClick() {
	$("#rating1").unbind("click");
	$("#rating2").unbind("click");
	$("#rating3").unbind("click");
	$("#rating4").unbind("click");
	$("#rating5").unbind("click");
}
//
var ONLOADED = window.onload || function () {};




$(document).ready(function () {

	// Budget Planner (2015.2.4)
	var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1; // en & tc

	// Budget Planner 
	$(".tab-assumption").click(function (e) {
		_gaq.push(['_trackEvent', 'Budget Tools', 'Disclaimer', (lang == 0 ? 'English' : 'Traditional Chinese')]);
	});
	$('.calculator .calculator-wrapper ul.tab li a').eq(0).click(function (e) {
		_gaq.push(['_trackEvent', 'Budget Tools', 'Income Tab', (lang == 0 ? 'English' : 'Traditional Chinese')]);
	});
	$('.calculator .calculator-wrapper ul.tab li a').eq(1).click(function (e) {
		_gaq.push(['_trackEvent', 'Budget Tools', 'Savings Tab', (lang == 0 ? 'English' : 'Traditional Chinese')]);
	});
	$('.calculator .calculator-wrapper ul.tab li a').eq(2).click(function (e) {
		_gaq.push(['_trackEvent', 'Budget Tools', 'Expenses Tab', (lang == 0 ? 'English' : 'Traditional Chinese')]);
	});
	$('.calculator .calculator-wrapper .form-wrapper .form-innerwrapper a.btn').eq(1).click(function (e) {
		_gaq.push(['_trackEvent', 'Budget Tools', 'Income page Next', (lang == 0 ? 'English' : 'Traditional Chinese')]);
	});
	$('.calculator .calculator-wrapper .form-wrapper .form-innerwrapper a.btn').eq(3).click(function (e) {
		_gaq.push(['_trackEvent', 'Budget Tools', 'Savings page Next', (lang == 0 ? 'English' : 'Traditional Chinese')]);
	});
	$('.calculator .calculator-wrapper .form-wrapper .form-innerwrapper a.btn').eq(6).click(function (e) {
		_gaq.push(['_trackEvent', 'Budget Tools', 'Result button', (lang == 0 ? 'English' : 'Traditional Chinese')]);
	});
	$('.calculator-innerwrapper-right .share-wrapper a.btn_shareFB').click(function (e) {
		_gaq.push(['_trackEvent', 'Budget Tools', 'Facebook share button', (lang == 0 ? 'English' : 'Traditional Chinese')]);
	});
	$('.calculator-innerwrapper-right .share-wrapper a.btn_mailTo').click(function (e) {
		_gaq.push(['_trackEvent', 'Budget Tools', 'Email share button', (lang == 0 ? 'English' : 'Traditional Chinese')]);
	});

	// Result page
	$("#rating1").click(function (e) {
		_gaq.push(['_trackEvent', 'Budget Tools', 'rating 1', (lang == 0 ? 'English' : 'Traditional Chinese')]);
		unbindRatingClick();
	});
	$("#rating2").click(function (e) {
		_gaq.push(['_trackEvent', 'Budget Tools', 'rating 2', (lang == 0 ? 'English' : 'Traditional Chinese')]);
		unbindRatingClick();
	});
	$("#rating3").click(function (e) {
		_gaq.push(['_trackEvent', 'Budget Tools', 'rating 3', (lang == 0 ? 'English' : 'Traditional Chinese')]);
		unbindRatingClick();
	});
	$("#rating4").click(function (e) {
		_gaq.push(['_trackEvent', 'Budget Tools', 'rating 4', (lang == 0 ? 'English' : 'Traditional Chinese')]);
		unbindRatingClick();
	});
	$("#rating5").click(function (e) {
		_gaq.push(['_trackEvent', 'Budget Tools', 'rating 5', (lang == 0 ? 'English' : 'Traditional Chinese')]);
		unbindRatingClick();
	});
	$("#feedback").click(function (e) {
		_gaq.push(['_trackEvent', 'Budget Tools', 'email feedback', (lang == 0 ? 'English' : 'Traditional Chinese')]);
	});

});

//2014.1.30 start
//GA event tracking code
function downloadExcelTracking(_langIdx) {
	var file = ['../excel/budget_en.xls', '../excel/budget_tc.xls'];
	var lang = ['English', 'Traditional Chinese'];
	_gaq.push(['_trackEvent', 'Budget Tools', 'Download Excel (Template)', lang[_langIdx]]);
	setTimeout(function () { // to allow time for the hit request to process before taking the user by _self
		window.open(file[_langIdx], '_self');
	}, 500);

}

function downloadPDFTracking(_langIdx) {
	var lang = ['English', 'Traditional Chinese'];
	_gaq.push(['_trackEvent', 'Budget Tools', 'Download PDF', lang[_langIdx]]);
}

function printPDFTracking(_langIdx) {
	var lang = ['English', 'Traditional Chinese'];
	_gaq.push(['_trackEvent', 'Budget Tools', 'Print PDF', lang[_langIdx]]);
}

function saveExcelTracking(_langIdx) {
	var lang = ['English', 'Traditional Chinese'];
	_gaq.push(['_trackEvent', 'Budget Tools', 'Download Excel (Web version)', lang[_langIdx]]);
}
//2014.1.30 ended

//2014.2.6 start
//tracking for mailto & share by facebook
function mailToTracking(_langIdx) {
	var lang = ['English', 'Traditional Chinese'];
	_gaq.push(['_trackEvent', 'Budget Tools', 'Mail To', lang[_langIdx]]);
	setTimeout(function () { // to allow time for the hit request to process before taking the user by _self
		var aHref = '';
		var subject = '';
		var content = '';
		var currentURL = window.location.href;

		if (currentURL.search('/en/') !== -1) {
			subject = 'Budget Planner';
			content = 'Use our budget planner to keep track of your finance.  You can save your budget planner results on your computer, print out and do it later, or you can set up a budget by downloading our budgeting spreadsheet into your computer.\n' + window.location.href;
			aHref = 'mailto:info@thechinfamily.hk' + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(content);
			window.location = aHref;
		} else if (currentURL.search('/tc/') !== -1) {
			subject = '個人收支計算機';
			content = '個人收支計算機助你記錄所有資金出入，你可將預算結果儲存在你的電腦內、列印並於稍後再進行規劃，或將預算數據表下載到你的電腦，然後制定你的個人收支預算\n' + window.location.href;
			aHref = 'mailto:info@thechinfamily.hk' + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(content);
			window.location = aHref;
		};



	}, 500);
}

function shareToFBTracking(_langIdx) {
	var lang = ['English', 'Traditional Chinese'];
	_gaq.push(['_trackEvent', 'Budget Tools', 'Share By Facebook', lang[_langIdx]]);
	setTimeout(function () {
		var fbLink = '';
		var currentURL = window.location.href;
		if (currentURL.search('/en/') !== -1) {
			fbLink = FB_LINK.budget_en;
		} else if (currentURL.search('/tc/') !== -1) {
			fbLink = FB_LINK.budget_tc;
		};
		var page = window.location.href;
		window.open(FB_LINK.fb + '?u=' + encodeURIComponent(fbLink), 'newwindow', 'width=700, height=410, top=0, left=0, toolbar=no, menubar=no, scrollbars=yes, resizable=yes,location=no, status=no');
	}, 500);
}
//2014.2.6 ended

//window.onload = function() {
$(document).ready(function () {

	var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1; // en & tc

	$('<a href="budget_disclaimer.html?date=' + new Date().getTime() + '" style="display:none;" class="disclaimer" />').fancybox({
		'type': 'iframe',
		'height': 300,
		'width': 877,
		'padding': 0,
		'margin': 0,
		'modal': true,
		'transitionOut': 'none',
		'onComplete': function () {
			var hHeight = $(document).height();
			$('#fancybox-overlay').css('height', hHeight);
		}
	}).trigger('click');

	$('.tab-assumption a').fancybox({
		'type': 'iframe',
		'height': 550,
		'width': 907,
		'showCloseButton': true,
		'padding': 0,
		'margin': 0,
		'modal': true,
		'transitionOut': 'none',
		'overlayShow': false,
		'overlayOpacity': 0.5,
		'onComplete': function () {
			$('#fancybox-close').addClass('closeBtnShown');
			var hHeight = $(document).height();
			$('#fancybox-overlay').css('height', hHeight);
		}
	});

	if ($('a.btn_shareFB').length > 0) {

		$('a.btn_shareFB').each(function () {
			$(this).click(function () {
				//2014.2.6 start
				//move original function to the upper so all tracking function under same scope
				var currentURL = window.location.href;
				var langIdx = (currentURL.search('/en/') !== -1) ? 0 : 1;
				shareToFBTracking(langIdx);
				//2014.2.6 ended
			});
		});
	}
	if ($('a.btn_mailTo').length > 0) {
		$('a.btn_mailTo').each(function () {

			$(this).click(function () {
				//2014.2.6 start
				//move original function to the upper so all tracking function under same scope
				var currentURL = window.location.href;
				var langIdx = (currentURL.search('/en/') !== -1) ? 0 : 1;
				mailToTracking(langIdx);
				//2014.2.6 ended
			});
		});


	}
	if ($('a.btn_record').length > 0) {
		$('a.btn_record').each(function () {
			$(this).click(function () {

				if (BudgetCalculator.isValidatedValueAll()) {
					$('form#' + BudgetCalculator.FORM).attr('action', '../excelBudgetServlet.do?lang=' + lang);
					$('form#' + BudgetCalculator.FORM).attr('target', '_self');
					$('form#' + BudgetCalculator.FORM).submit();
				}
			});
		});
	}
	BudgetCalculator.bindEventListeners();
	BudgetCalculator.getRecord();
	BudgetCalculator.setAmount(false);

	// real deal
	$('a.btn_cal, a.btn_submit').click(function () {

		if (BudgetCalculator.isValidatedValueAll()) {
			//BudgetCalculator.setAmount(true);

			if ($(this).hasClass('btn_submit')) {
				//2014.1.30 start
				downloadPDFTracking(lang);
				setTimeout(function () { // to allow time for the hit request to process before taking the user by _self
					$('form#' + BudgetCalculator.FORM).attr('action', '../pdfBudget.do?lang=' + lang);
					$('form#' + BudgetCalculator.FORM).attr('target', '_self');
					$('form#' + BudgetCalculator.FORM).submit();
				}, 500);
				//2014.1.30 ended
			} else {
				BudgetCalculator.setAmount(true);
			}
		} else {
			if ($(this).hasClass('btn_cal')) { // return to last page
				BudgetCalculator.calculatorProcess(2);
			}
		}
	});

	// serializable field
	$('a.btn_serialize').click(function () {
		BudgetCalculator.serializeOthersField(this, -1, 0);
	});
	$('a.btn_deserialize').click(function () {
		BudgetCalculator.deserializeOthersField(BudgetCalculator, this);
	});

	// save record in cookie format
	$('a.btn_save').click(function () {
		if (BudgetCalculator.isValidatedValueAll()) {
			//2014.1.30 start
			saveExcelTracking(lang);
			setTimeout(function () {
				$('form#' + BudgetCalculator.FORM).attr('action', '../excelBudgetServlet.do?lang=' + lang);
				$('form#' + BudgetCalculator.FORM).submit();
			}, 500);
			//2014.1.30 ended

		}

	});

	$('a.btn_reset').click(function () {

		$('input').each(function () {
			if ($(this).hasClass('txtOthers')) {
				$(this).val('');
			} else {
				$(this).val('0');
			}
		});

		BudgetCalculator.setAmount(true);
		BudgetCalculator.calculatorProcess(2);
		$('.calculator .calculator-wrapper ul.tab li a.active').removeClass('active');
		$('.calculator .calculator-wrapper ul.tab li').eq(0).children('a').addClass('active');
	});


	$('a.btn_print').click(function () {
		if (BudgetCalculator.isValidatedValueAll()) {
			//2014.1.30 start
			printPDFTracking(lang);
			//2014.1.30 ended
			$('form#' + BudgetCalculator.FORM).attr('action', '../pdfBudget.do?lang=' + lang + '&print=y');
			$('form#' + BudgetCalculator.FORM).attr('target', '_blank');
			$('form#' + BudgetCalculator.FORM).submit();
		}
	});
});
//};
var BudgetCalculator = {
	FORM: 'budget_form',
	DATATABLEID: 'data_table',
	LANG: [0, 1], // 0 : en, 1 : tc
	DOLLARPREFIX: ['HKD', '港元'],
	MAXCOOKIEAGE: 365,
	COOKIEVALUE: ['hkiec_budget_cal_val1', 'hkiec_budget_cal_val2', 'hkiec_budget_cal_val3'], // store value
	COOKIEINFO: ['hkiec_budget_cal_info1', 'hkiec_budget_cal_info2', 'hkiec_budget_cal_info3'], // store name, create date & update date

	BALANCEID: 'balanceView',
	BALANCENAME: [[' Surplus ', ' Shortfall '], [' 盈餘 ', ' 差額 ']],
	TEXTCONTAINER: ['\\(', '\\)'],
	SERIALIZABLE: ['ipt_serialize', 'ipt_deserialize', 'btn_deserialize', 'deserializable'], // 0 : root element, 1 : two other generated field, 3 : btn to recoginze event, 4 :tr.class to identify
	CLASS: ['txtInputP1', 'txtInputP2', 'txtOthers'],
	BEANID: ['beanData1', 'beanData2', 'beanData3', 'beanData4'], // 0 : income, 1 : saving, 2 : expense, 3 : balance
	BEANWORDING: [[' Income ', ' Savings & Investments ', ' Expenses ', ''], [' 收入 ', ' 儲蓄及投資 ', ' 支出 ', '']],
	INCOMEWORDING: [
		['Salary', 'Spouse\'s salary', 'Other income'],
		['薪金', '配偶薪金', '其他收入']
	],
	INCOMECHILDID: [ // is using to pair with first level only
		['p1Income2', 'p1Income3', 'p1Income4', 'p1Income5', 'p1Income_6'], // Salary
		['p1Income16', 'p1Income17', 'p1Income18', 'p1Income19', 'p1Income_20'], // Spouse's salary ***** new appended 2013.10.22 *****
		['p1Income9', 'p1Income15', 'p1Income10', 'p1Income11', 'p1Income12', 'p1Income_13'] // Other income
	],
	INCOMENAME: ['p1Income1', 'p1Income7', 'p1Income8'],
	INCOMEID: ['p3Income1', 'p3Income2', 'p3Income3'],
	SAVINGCHILDID: [
		['p1Saving9', 'p1Saving10', 'p1Saving11', 'p1Saving_2'], // Saving & Investment Regular & Lump sum
		['p1Saving4', 'p1Saving5', 'p1Saving_6'] // Retirement schemes
	],
	SAVINGNAME: ['p1Saving3', 'p1Saving7'],
	SAVINGID: ['p3Saving2', 'p3Saving3'],
	SAVINGWORDING: [
		['Savings/Investment', 'Retirement schemes'],
		['儲蓄及投資', '退休計劃']
	],
	TIPSSTYLE: [ // 0 for anchor tag, 1 for span tag
		{
			display: 'inline',
			position: 'relative'
		},
		{
			display: 'none',
			position: 'absolute',
			top: 0,
			padding: '5px',
			//			background : '#FCAF1A',

			background: '#48b6bd',
			color: '#ffffff'
		}
	],
	OTHERSVARIABLE: '&n@',
	OTHERSNAME: ['Others', '其他'],
	OTHERSID: [],
	OTHERSCLASS: 'txtOthers',
	AMOUNTID: [
		1,
		7,
		8,
		14, // should not sum up with others
		3,
		7,
		8, // should not sum up with others
		1,
		// here
		54,
		// here
		16,
		23,
		31,
		43,
		1,
		8,
		14,
		16, // should not sum up with others 15
		//23,
		27,
		34,
		35,
		43,
		60,

		98, // should not sum up with others
		99, // should not sum up with others

		'' // should not sum up with others
	],
	AMOUNTPREFIX: [
		'p1Income',
		'p1Income',
		'p1Income',
		'p1Income', // should not sum up with others
		'p1Saving',
		'p1Saving',
		'p1Saving', // should not sum up with others
		'p1Expense',
		// here
		'p1Expense',
		// here
		'p1Expense',
		'p1Expense',
		'p1Expense',
		'p1Expense',
		'p2Expense',
		'p2Expense',
		'p2Expense',
		'p2Expense', // 15
		//'p2Expense',
		'p2Expense',
		'p2Expense',
		'p2Expense',
		'p2Expense',
		'p2Expense',

		'p2Expense',
		'p2Expense',

		'p2Total' // should not sum up with others
	],
	AMOUNTCHILDREN: [
		[2, 3, 4, 5, 6],
		[16, 17, 18, 19, 20], // ***** new appended 2013.10.22 *****
		[9, 15, 10, 11, 12, 13],
		[1, 7, 8], // should not sum up with others
		[9, 10, 11, 2], // dynamic with name input
		[4, 5, 6],
		[3, 7], // should not sum up with others
		[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
		// here
		[18, 19, 20, 21, 55, 56], // should not sum up with others
		// here
		[17, 18, 19, 20, 21, 22, 55, 56],
		[24, 25, 28, 29, 30, 27], //57, 58], remain for later use
		[32, 33, 34, 35, 36, 37, 38, 39, 41, 42, 59, 60, 61, 62, 63],
		[44, 45, 46, 47, 48, 49, 50, 52, 53],
		[2, 3, 4, 5, 6, 7, 53, 54, 55],
		[9, 10, 11, 12, 13],
		[15, [17, 18, 19, 20, 56, 57, 58, 21], 24, 25, 26],
		[17, 18, 19, 20, 56, 57, 58, 21], // 15
		//[24, 25, 26],
		[28, 29, 30, 31, 32, 33],
		[[36, 37, 38, 39, 40, 41, 42], [44, 59, 45, 46, 47, 48, 49], 50, 51],
		[36, 37, 38, 39, 40, 41, 42],
		[44, 59, 45, 46, 47, 48, 49, 50, 51],
		[61, 62],

		[63],
		[52],

		[[1, 16, 23, 31, 43], [1, 8, 14, 27, 34, 60, 63, 52]] // should not sum up with others
	],
	EXPENSECHILDID: [
		['p1Expense2', 'p1Expense3', 'p1Expense4', 'p1Expense5',
		 'p1Expense6', 'p1Expense7', 'p1Expense8', 'p1Expense9',
		 'p1Expense10', 'p1Expense11', 'p1Expense12', 'p1Expense13', 'p1Expense14', 'p1Expense_15'
		], // Expense
		['p1Expense17', 'p1Expense18', 'p1Expense19', 'p1Expense20', 'p1Expense21', 'p1Expense55', 'p1Expense56', 'p1Expense_22'], // Transport
		['p1Expense24', 'p1Expense25', 'p1Expense28', 'p1Expense29', 'p1Expense30', 'p1Expense_27'], //'p1Expense57', 'p1Expense58'], remain for later use // Food and drinks

		['p2Expense15', 'p2Expense17', 'p2Expense18', 'p2Expense19', 'p2Expense20', 'p2Expense56', 'p2Expense57', 'p2Expense58', 'p2Expense21', 'p2Expense24', 'p2Expense25', 'p2Expense_26'], // Family and friends
		['p2Expense28', 'p2Expense29', 'p2Expense30', 'p2Expense31', 'p2Expense32', 'p2Expense_33'], // Taxation
		//['p2Expense35', 'p2Expense36', 'p2Expense37', 'p2Expense38', 'p2Expense39', 'p2Expense40',
		['p2Expense36', 'p2Expense37', 'p2Expense38', 'p2Expense39', 'p2Expense40',
		 'p2Expense41', 'p2Expense_42', 'p2Expense44', 'p2Expense59', 'p2Expense45', 'p2Expense46',
		 'p2Expense47', 'p2Expense48', 'p2Expense49', 'p2Expense50', 'p2Expense_51'
		], // Financial commitments

		//['p1Expense32', 'p1Expense33', 'p1Expense34', 'p1Expense35', 'p1Expense36', 'p1Expense37', 'p1Expense38', 'p1Expense39', 'p1Expense41', 'p1Expense_42', 'p1Expense59', 'p1Expense60', 'p1Expense61', 'p1Expense62', 'p1Expense63'], // Leisure
		["p1Expense32",
		"p1Expense33",
		"p1Expense34",
		"p1Expense35",
		"p1Expense36",
		"p1Expense37",
		"p1Expense39",
		"p1Expense60",
		"p1Expense41",
		"p1Expense61",
		"p1Expense62",
		"p1Expense63",
		"p1Expense_42"],
		['p1Expense44', 'p1Expense45', 'p1Expense46', 'p1Expense47', 'p1Expense48', 'p1Expense49', 'p1Expense50', 'p1Expense52', 'p1Expense_53'], // Shopping
		//['p2Expense2', 'p2Expense3', 'p2Expense4', 'p2Expense5', 'p2Expense6', 'p2Expense_7', 'p2Expense53', 'p2Expense54', 'p2Expense55'], // Health and beauty
		['p2Expense2', 'p2Expense53', 'p2Expense3', 'p2Expense54', 'p2Expense55', 'p2Expense4', 'p2Expense5', 'p2Expense6', 'p2Expense_7'], // Health and beauty
		['p2Expense9', 'p2Expense10', 'p2Expense11', 'p2Expense12', 'p2Expense_13'], // Education and profession

		['p2Expense61', 'p2Expense62'],

		['p2Expense63'],
		['p2Expense52'] // Miscellaneous
	],
	EXPENSENAME: [
		'p1Expense1',
		'p1Expense16',
		'p1Expense23',

		'p2Expense14',
		'p2Expense27',
		'p2Expense34',

		'p1Expense31',
		'p1Expense43',
		'p2Expense1',
		'p2Expense8',

		'p2Expense60',
		'p2Expense98',
		'p2Expense99'
	],
	EXPENSEID: [
		'p3Expense1',
		'p3Expense2',
		'p3Expense3',

		'p3Expense8',
		'p3Expense9',
		'p3Expense10',

		'p3Expense4',
		'p3Expense5',
		'p3Expense6',
		'p3Expense7',

		'p3Expense11',
		'p3Expense12',
		'p3Expense13'
	],
	EXPENSEWORDING: [
		['Household',
		'Transport',
		'Food and drinks',

		'Family and friends',
		'Taxation',
		'Finanical commitments',

		'Leisure / Lifestyle',
		'Shopping',
		'Health and beauty',
		'Education and profession',

		'Planning for ageing',
		'Financial and legal advice',
		'Miscellaneous'
		],
		['家居',
		'交通',
		'食品及飲品',
		'親友',
		'稅項',
		'財務承擔',

		'生活消閒',
		'購物',
		'健康美容',
		'教育及專業資格',

		'養老準備',
		'金融及法律意見',
		'雜項'
		]
	],
	PERIODFACTOR: [1, (52 / 12), (1 / 12)],
	HIDDEN: 'hdnInput',
	MAXLENGTH: 8, // max length of input value, included floating point
	RANDOMVALUE: [147, 222, 322, 433, 544, 655, 711, 821, 922, 110, 211],
	//FACTORLIST : [4.66666, 1, 0.08333],
	isValidatedValueAll: function () {
		var isValid = true;
		var errorMessage = '';
		var errorMessage1 = '';
		var errorMessage2 = '';
		var errorMessage3 = '';
		var errorMessage4 = '';
		var _this = this; // to prevent conflict in jQuery
		var patt = /\W/g;
		var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1;
		for (var i = 0; i < _this.CLASS.length; i++) {
			$('input.' + _this.CLASS[i]).each(function () {
				var val = $(this).val();
				if (i !== 2) {
					if (val === '') {
						isValid = false;
						errorMessage1 = (lang === 0) ? 'Please enter amount.\n' : '必須輸入金額。\n';
					} else if (!_this.isValidatedNum(val)) {
						isValid = false;
						errorMessage2 = (lang === 0) ? 'We only accept figures in 1 decimal place.\n' : '我們只接受小數點後1位的數字。\n';
					}
				} else {
					val = val.replace(' ', '\s');
					if (val === '') {
						if ($(this).parent('td').parent('tr').children('td').eq(3).children('input').val() !== '0') {
							isValid = false;
							var tempText = '';
							if (
								$(this).attr('id') === 'p1Saving9Title' ||
								$(this).attr('id') === 'p1Saving10Title' ||
								$(this).attr('id') === 'p1Saving11Title'
							) {
								tempText = (lang === 0) ? 'Please enter the name of your savings / investment item.\n' : '請輸入儲蓄 / 投資項目名稱。\n';
								if (errorMessage3.search(tempText) < 0) {
									errorMessage3 += (lang === 0) ? 'Please enter the name of your savings / investment item.\n' : '請輸入儲蓄 / 投資項目名稱。\n';
								}
							} else {
								//tempText = (lang === 0) ? 'Please enter the name of your item.\n' : '請輸入項目名稱。\n';
								tempText = (lang === 0) ?
									'Please enter the name of \"Others\" in the \"$section$\" section under \"$tab$\".\n' :
									'請輸入「$tab$」內「$section$」部份的「其他」項目名稱。\n';
								var sectionName = $(this).parent('td').parent('tr').parent('tbody').parent('table').parent('li').children('a').children('h2').html();
								var tabName = '';
								if ($(this).attr('id').search('Income') !== -1) {
									tabName = (lang === 0) ? 'Income' : '收入';
								} else if ($(this).attr('id').search('Saving') !== -1) {
									tabName = (lang === 0) ? 'Savings and investments' : '儲蓄及投資';
								} else if ($(this).attr('id').search('Expense') !== -1) {
									tabName = (lang === 0) ? 'Expenses' : '支出';
								}
								tempText = tempText.replace('$section$', sectionName);
								tempText = tempText.replace('$tab$', tabName);

								if (errorMessage3.search(tempText) < 0) {
									errorMessage3 += tempText;
								}
							}

						}
					}

					if ($(this).attr('id') === 'p1Saving9Title') {
						if (
							$(this).val() !== '' &&
							(
								$(this).val() === $('input#p1Saving10Title').val() ||
								$(this).val() === $('input#p1Saving11Title').val() ||
								$(this).val() === $('input#t1Saving_2').val()
							)
						) {
							isValid = false;
							errorMessage4 = (lang === 0) ? 'Please use different names for each savings / investment item.\n' : '請使用不同儲蓄及投資項目名稱。\n';
						}
					} else if ($(this).attr('id') === 'p1Saving10Title') {
						if (
							$(this).val() !== '' &&
							(
								$(this).val() === $('input#p1Saving9Title').val() ||
								$(this).val() === $('input#p1Saving11Title').val() ||
								$(this).val() === $('input#t1Saving_2').val()
							)
						) {
							isValid = false;
							errorMessage4 = (lang === 0) ? 'Please use different names for each savings / investment item.\n' : '請使用不同儲蓄及投資項目名稱。\n';
						}
					} else if ($(this).attr('id') === 'p1Saving11Title') {
						if (
							$(this).val() !== '' &&
							(
								$(this).val() === $('input#p1Saving9Title').val() ||
								$(this).val() === $('input#p1Saving10Title').val() ||
								$(this).val() === $('input#t1Saving_2').val()
							)
						) {
							isValid = false;
							errorMessage4 = (lang === 0) ? 'Please use different names for each savings / investment item.\n' : '請使用不同儲蓄及投資項目名稱。\n';
						}
					}
					/*
					if(patt.test(val)) {
						isValid = false;
						errorMessage3 = '不可輸入非文字符號。\n';
					}
					*/
				}
			});
		}
		if (!isValid) {
			errorMessage = errorMessage1 + errorMessage2 + errorMessage3 + errorMessage4;
			alert(errorMessage);
		} else {
			var rgx = /^\d+[.][0-9]{2,}?$/;
			var hasMoreDecimal = false;
			var popupMessage = (window.location.href.search('/en/') !== -1) ? 'To be confirmed' : '有待確認';
			$('input.' + _this.CLASS[0]).each(function () {
				if (rgx.test($(this).val())) {
					hasMoreDecimal = true;
					return false;
				}
			});
			$('input.' + _this.CLASS[1]).each(function () {
				if (rgx.test($(this).val())) {
					hasMoreDecimal = true;
					return false;
				}
			});
			if (hasMoreDecimal) {
				alert(popupMessage);
			}
		}
		return isValid;
	},
	isValidatedNum: function (_val) {
		var rgx = /^\d+(\.\d+)?$/;
		return rgx.test(_val);
	},
	setAmount: function (_isSubmit) {
		var amountId = this.AMOUNTID;
		var amountPrefix = this.AMOUNTPREFIX;
		var amountChild = [];
		var amountChildren = this.AMOUNTCHILDREN;
		var elm = '';
		var value = 0.0;
		var _this = this;
		var tempAmountVal = 0;
		var income = 0;
		var saving = 0;
		var expense = 0;
		// 2013.9.11
		//this.setOthersVal();
		//this.setAllFieldFactorized();		
		// ended

		this.setOthersVal();

		for (var i = 0; i < amountId.length; i++) {
			elm = amountPrefix[i] + amountId[i];
			amountChild = amountChildren[i];
			for (var k = 0; k < amountChild.length; k++) {
				if (typeof amountChild[k] === 'number') {
					var temp = parseFloat(this.factorizeVal('input#' + amountPrefix[i] + amountChild[k]));
					temp = (isNaN(temp)) ? 0 : temp;
					value += temp;
				} else if (typeof amountChild[k] === 'object') {
					var level3 = amountChild[k];
					var e = '';
					for (var l = 0; l < level3.length; l++) {
						if (amountId[i] === '') { // last child
							e = (k === 0) ? 'p1Expense' : 'p2Expense';
						} else { // normal case
							e = amountPrefix[i];
						}

						var temp = parseFloat(this.factorizeVal('input#' + e + level3[l]));
						temp = (isNaN(temp)) ? 0 : temp;
						value += temp;
					}
				}
				//console.log('input#' + amountPrefix[i] + amountChild[k]);
			}
			value = value.toFixed(1);


			//console.log(value);
			var vStr = value.toString();
			var lastIndex = vStr.charAt(vStr.length - 1);
			$('input#' + elm).val(value);
			//console.log(value);

			if (i !== 3 && i !== 6 && i !== 8 && i !== 16 && i !== 18 && i !== 24) { // total amount
				tempAmountVal += parseFloat(value);
			}
			value = 0;
			if (i === 3) {
				income = tempAmountVal;
				tempAmountVal = 0;
				//console.log('data1 : ' + income);
			} else if (i === 5) {
				saving = tempAmountVal;
				tempAmountVal = 0;
				//console.log('data2 : ' + saving);
			} else if (i === amountId.length - 1) {
				expense = tempAmountVal;
				tempAmountVal = 0;
				//console.log('data3 : ' + expense);
			}
		}
		// assign bar values to the hidden input & and data to jQPlot		

		income.toFixed(1);
		saving.toFixed(1);
		expense.toFixed(1);
		income = (isNaN(income)) ? 0 : income;
		saving = (isNaN(saving)) ? 0 : saving;
		expense = (isNaN(expense)) ? 0 : expense;
		var balance = income - saving - expense;
		balance = balance.toFixed(1);

		var beanVal = 0.0;
		var data = [];
		var lang = (window.location.href.search('/en/') !== -1) ? this.LANG[0] : this.LANG[1];
		var wording = '';
		for (var i = 0; i < this.BEANID.length; i++) {
			switch (i) {
			case 0:
				beanVal = income;
				break;
			case 1:
				beanVal = saving;
				break;
			case 2:
				beanVal = expense;
				break;
			case 3:
				beanVal = balance;
				break;
			default:
				beanVal = 0;
				break;
			}
			if (i === 3) {
				wording = this.BALANCENAME[lang][(balance > 0) ? 0 : 1];
			} else {
				wording = this.BEANWORDING[lang][i];
			}
			data[i] = [wording, parseFloat(beanVal).toFixed(1)];

			$('input#' + this.BEANID[i]).val(parseFloat(beanVal).toFixed(1));
			var dollarPrefix = this.DOLLARPREFIX[lang] + ' ';
			$('.' + this.BEANID[i]).each(function () {
				$(this).html(dollarPrefix + _this.addCommas(parseFloat(beanVal).toFixed(1)));
			});
			if (i === 3) {
				var idx = (balance > 0) ? 0 : 1;
				var balId = '#' + this.BALANCEID;
				var prefix = this.BALANCENAME[lang][idx] + ' ' + this.DOLLARPREFIX[lang] + ' ';
				$(balId).html(prefix + _this.addCommas(parseFloat(balance).toFixed(1)));
			}
		}

		// assign values to the hidden input
		this.setHiddenVal(this.INCOMENAME, this.INCOMEID, parseFloat(income).toFixed(1));
		this.setHiddenVal(this.SAVINGNAME, this.SAVINGID, parseFloat(saving).toFixed(1));
		this.setHiddenVal(this.EXPENSENAME, this.EXPENSEID, parseFloat(expense).toFixed(1));

		this.setSubItemView('price', dollarPrefix + ' ');

		if (_isSubmit) {
			// genereate the chart
			this.generateBar('div', 'chart1div', data);
			// genereate the pie
			data = [];
			for (var i = 0; i < this.SAVINGID.length; i++) {
				data[i] = [this.SAVINGWORDING[lang][i], parseFloat($('input#' + this.SAVINGID[i]).val())];
			}
			this.generatePie('div', 'chart2div', data);

			data = [];
			for (var i = 0; i < this.EXPENSEID.length; i++) {
				//console.log($('input#' + this.EXPENSEID[i]).val());
				data[i] = [this.EXPENSEWORDING[lang][i], parseFloat($('input#' + this.EXPENSEID[i]).val())];
			}
			this.generatePie('div', 'chart3div', data);

			data = [];
			for (var i = 0; i < this.INCOMEID.length; i++) {
				data[i] = [this.INCOMEWORDING[lang][i], parseFloat($('input#' + this.INCOMEID[i]).val())];
			}
			this.generatePie('div', 'chart4div', data);
		}

	},
	generateBar: function (_elm, _id, _data) {
		var balColor = ($('input#beanData4').val() > 0) ? '#006eb8' : '#F80000';
		var _this = this;
		var dollar = (window.location.href.search('/en/') !== -1) ? 'HKD ' : '港元 ';

		if (_data[3][1] < 0) { // 2013.10.3
			//_data[3][1] = Math.abs(_data[3][1]);
		}

		$(_elm + '#' + _id).html('');
		//alert(_data);
		var cls = '';
		var imgName = '';
		if (_data[3][0].search('Shortfall') !== -1 || _data[3][0].search('差額') !== -1) {
			cls = 'shortfall-wrapper';
			imgName = 'shortfall';
		} else {
			cls = 'surplus-wrapper';
			imgName = 'surplus';
		}
		$(_elm + '#' + _id).html('');
		$(_elm + '#' + _id).html('<div class="surplus-new-wrapper"><div class="income-wrapper">' +
			'<img src="../images/common/calculator/icon-report-income.jpg" alt=""  />' + _data[0][0] +
			'<div class="price">' + dollar + '<br />' + _this.addCommas(parseFloat(_data[0][1]).toFixed(1)) +
			'</div></div><div class="saving-and-investments-wrapper">' +
			'<img src="../images/common/calculator/icon-report-saving.jpg" alt="" />' + _data[1][0] +
			'<div class="price">' + dollar + '<br />' + _this.addCommas(parseFloat(_data[1][1]).toFixed(1)) +
			'</div></div><div class="expenses-wrapper">' +
			'<img src="../images/common/calculator/icon-report-expenses.jpg" alt=""  />' + _data[2][0] +
			'<div class="price">' + dollar + '<br />' + _this.addCommas(parseFloat(_data[2][1]).toFixed(1)) +
			'</div></div><div class="' + cls + '">' +
			'<img src="../images/common/calculator/icon-report-' + imgName + '.jpg" alt=""  />' + _data[3][0] +
			'<div class="price">' + dollar + '<br />' + _this.addCommas(parseFloat(_data[3][1]).toFixed(1)) +
			'</div></div><img src="../images/common/calculator/bg-report.jpg" alt="" /></div>');

	},
	generatePie: function (_elm, _id, _data) {
		var colorArray = [];
		var _this = this;
		switch (_id) {
		case 'chart2div':
			colorArray = ['#51A6A2', '#DB603F', '#F1B648'];
			break;
			//case 'chart3div' : colorArray = ['#1c94a4', '#8e7355', '#9dbf8d', '#dc543a', '#91bdd8', '#ac63e9', '#fe6965', '#ecb284', '#7e8aa2', '#466673', '#fbb144', '#e0669c', '#29bc72']; break;
		case 'chart3div':
			colorArray = ['#1c94a4', '#8e7355', '#9dbf8d', '#dc543a', '#91bdd8', '#ac63e9', '#fe6965', '#ecb284', '#7e8aa2', '#466673', '#fbb144', '#e0669c', '#29bc72'];
			break;
		case 'chart4div':
			colorArray = ['#96B9D6', '#E4B385', '#4C6472'];
			break;
		}
		$(_elm + '#' + _id).html('');
		$('#sub_' + _id).html('').attr('style', '');
		// fixed IE8 100% issue
		var startA = 270;
		for (var i = 0; i < _data.length; i++) {
			if (_data[i][1] === 100) {
				startA = 0;
				break;
			}
		}
		// ended
		$.jqplot(_id, [_data], {
			seriesDefaults: {
				renderer: jQuery.jqplot.PieRenderer,
				rendererOptions: {
					showDataLabels: true,
					startAngle: startA
				},
				shadow: false
			},
			legend: {
				show: true,
				location: 'e'
			},
			grid: {
				drawBorder: false,
				shadow: false,
				background: '#ffffff',
				borderColor: '#727272',
				borderWidth: 0.3
			},
			seriesColors: colorArray
		});
		var d = 'e';
		//console.log(_data);
		$('#' + _id).bind('jqplotDataClick', function (ev, seriesIndex, pointIndex, data) {
			$('#sub_' + _id).html(''); // clear the pie first
			$('#sub_' + _id).attr('style', '');
			var childGroup = [];
			var $elm = {};
			var subData = [];
			var j = 0;
			var id = '';
			var title = '';
			switch (_id) {
			case 'chart2div':
				childGroup = _this.SAVINGCHILDID;
				break;
			case 'chart3div':
				childGroup = _this.EXPENSECHILDID;
				break;
			case 'chart4div':
				childGroup = _this.INCOMECHILDID;
				break;
			default:
				break;
			}
			//console.log(childGroup[pointIndex]);
			for (var i = 0; i < childGroup[pointIndex].length; i++) {
				id = '#' + childGroup[pointIndex][i];
				$elm = $(id);
				title = $elm.parent('td').parent('tr').children('td.topic').html();
				var $other = null;
				if (title.search('input') !== -1 || title.search('INPUT') !== -1) {
					var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1;
					title = _this.OTHERSNAME[lang];

					$other = $elm.parent('td').parent('tr').children('td.topic').children('.txtOthers');
					title = $other.val();
					if (title === '') {
						title = '--';
					}

				} else if (title.search('</a>') !== -1 || title.search('</A>') !== -1) {
					title = $elm.parent('td').parent('tr').children('td.topic').children('a').html();
					if (title.search('<img') !== -1) {
						title = title.substring(0, title.indexOf('<img'));
						title = title.replace('<br />', '');
					} else {
						title = title.substring(0, title.indexOf('<IMG'));
						title = title.replace('<BR />', '');

					}
				}



				if (id.search('_') !== -1) {
					//$elm = $(id.replace('_', ''));
				}
				if (parseFloat($elm.val()) > 0) {
					var factor = 1;
					if ($elm.parent('td').prev().prev().children('select').val() === '0') { // month
						factor = _this.PERIODFACTOR[0];
					} else if ($elm.parent('td').prev().prev().children('select').val() === '1') { // week 
						factor = _this.PERIODFACTOR[1];
					} else { // yearly
						factor = _this.PERIODFACTOR[2];
					}
					subData[j] = [parseFloat($elm.val() * factor), $.trim(title) + '  '];
					j++;
					if ($other !== null) {
						var $otherNext1 = null;
						var $otherNext2 = null;

						if ($other.parent('td').parent('tr').next().hasClass('deserializable')) {
							$otherNext1 = $other.parent('td').parent('tr').next();

							if ($otherNext1.children('td').eq(1).children('select').val() === '0') { // month
								factor = _this.PERIODFACTOR[0];
							} else if ($otherNext1.children('td').eq(1).children('select').val() === '1') { // week 
								factor = _this.PERIODFACTOR[1];
							} else { // yearly
								factor = _this.PERIODFACTOR[2];
							}

							subData[j] = [parseFloat($otherNext1.children('td').eq(3).children('input').val() * factor),
										  $otherNext1.children('td.topic').children('input.txtOthers').val()];
							j++;
							if ($otherNext1.next().hasClass('deserializable')) {
								$otherNext2 = $otherNext1.next();

								if ($otherNext2.children('td').eq(1).children('select').val() === '0') { // month
									factor = _this.PERIODFACTOR[0];
								} else if ($otherNext2.children('td').eq(1).children('select').val() === '1') { // week 
									factor = _this.PERIODFACTOR[1];
								} else { // yearly
									factor = _this.PERIODFACTOR[2];
								}

								subData[j] = [parseFloat($otherNext2.children('td').eq(3).children('input').val() * factor),
										     $otherNext2.children('td.topic').children('input.txtOthers').val()];
								j++;
							}
						}
						$other = null;
						$otherNext1 = null;
						$otherNext2 = null;

					}
				}
			}
			//console.log(subData);
			// external jqPlot
			var eachHeight = 95;
			eachHeight *= subData.length;
			$('#sub_' + _id).css('height', eachHeight + 'px');
			// Hard-code the width of the whole bar chart
			$('#sub_' + _id).css('width', '650px');

			// 2013.10.3
			// fix jqplot iterate by last index
			var reOrderSubData = [];
			var reOrderIdx = 0;
			for (var i = subData.length - 1; i >= 0; i--) {
				// Break the line for axis, next line if words are more than 20
				subData[i][1] = "<div style='text-align:left' >" + BreakLines(subData[i][1], 20) + "</div>";
				//console.log(subData[i][1]);

				reOrderSubData[reOrderIdx] = subData[i];
				reOrderIdx++;
			}
			//console.log(reOrderSubData);
			var langLabel = (window.location.href.search('/en/') !== -1) ? '(HKD)' : '(港元)';

			$.jqplot('sub_' + _id, [reOrderSubData], {
				grid: {
					//gridLineColor : '#ffffff',
					showGridline: false,
					drawBorder: false,
					shadow: false,
					background: '#ffffff',
					borderColor: '#ffffff',
					// borderWidth : 1
				},
				title: '',
				highlighter: {
					show: true,
					showMarker: false,
					tooltipAxes: 'x',
					//tooltipLocation: 'se',
					sizeAdjust: 10
				},
				seriesDefaults: {
					tickRenderer: $.jqplot.CanvasAxisTickRenderer,
					renderer: $.jqplot.BarRenderer,
					rendererOptions: {
						varyBarColor: true
					},
					pointLabels: {
						show: true,
						location: 'e',
						edgeTolerance: -15
					},
					shadow: false,
					rendererOptions: {
						barDirection: 'horizontal',
						//highlightMouseOver : false,
						barWidth: 25
					}
				},
				axesDefaults: {
					tickOptions: {
						fontSize: '9pt',
						//					  fontFamily : 'Arial',
						textColor: '#727272'
					},
					rendererOptions: {
						drawBaseline: true
					}
				},
				axes: {
					yaxis: {
						renderer: $.jqplot.CategoryAxisRenderer,
						tickOptions: {
							showGridline: false
						}
					},
					xaxis: {
						numberTicks: 4,
						label: langLabel,
						tickOptions: {
							showGridline: false,
							formatString: "%'.1f"
						}
					}
				},
				seriesColors: ['#006eb8']






				// grid : {
				// 	drawBorder : true,
				// 	shadow : false,
				// 	background : '#ffffff',
				// 	borderColor : '#dddddd',
				// 	borderWidth : 1
				// },
				// title : '',
				// series:[{
				// 	renderer : $.jqplot.BarRenderer
				// }],
				// axesDefaults : {
				// 	tickOptions : {
				// 	  fontSize : '9pt',
				// 	  fontFamily : 'Arial',
				// 	  textColor : '#727272'
				// 	},
				// 	min : 0,
				// 	pad : 1.2
				// },
				// seriesDefaults : {
				// 	tickRenderer: $.jqplot.CanvasAxisTickRenderer,
				// 	renderer : $.jqplot.BarRenderer,
				// 	rendererOptions : {varyBarColor : true},
				// 	pointLabels : {show : true, location : 'e', edgeTolerance : -15},
				// 	shadow : false,
				// 	rendererOptions : {
				// 		barDirection : 'horizontal',
				// 		highlightMouseOver : false,
				// 		barWidth : 25
				// 	}
				// },
				// axes : {
				//   yaxis : {
				// 	renderer : $.jqplot.CategoryAxisRenderer

				//   },
				//   xaxis : {
				// 	numberTicks : 4,
				// 	label : langLabel,
				// 	tickOptions : {showGridline: false, formatString : "%'.1f"}
				//   }		  
				// },
				// seriesColors : ['#006eb8']
			});
			// ended
			if ($.browser.msie && $.browser.version.search('8') !== -1) {
				// $('.jqplot-yaxis-tick').each(function() {
				// 	var style = $(this).attr('style');
				// 	$(this).wrap($('<div style="' + style + '" />'));
				// 	$(this).css('top', 0);

				// });
				// $('.jqplot-xaxis-tick').each(function() {
				// 	var style = $(this).attr('style');
				// 	$(this).attr('style', '');
				// 	$(this).wrap($('<div style="' + style + '" />'));
				// });

				/*
				$('.jqplot-target').children('.jqplot-event-canvas').each(function() {
					var style = $(this).attr('style');
					var left = $(this).css('left');
					//var top = $(this).css('top');
					$(this).css({
						'left' : -500,
						//'top' : 0,
						'width' : 675
					});
					$(this).children('div').css({
						'left' : left
					});
				});
				*/
				// $('.jqplot-target').children('.jqplot-series-canvas').each(function() {
				// 	var style = $(this).attr('style');
				// 	var left = $(this).css('left');
				// 	//var top = $(this).css('top');
				// 	$(this).css({
				// 		'left' : 0,
				// 		//'top' : 0,
				// 		'width' : 605
				// 	});
				// 	$(this).children('div').css({
				// 		'left' : left
				// 	});
				// });
			}

		});

	},
	serializeOthersField: function (_elm, _val, _select) {
		var _this = this;
		var $this = $(_elm);
		var $module = $this.parent('td').parent('tr');
		var count = $module.attr('class');
		var $newModule = {};
		count = (count === undefined) ? 1 : parseInt(count);
		if (!isNaN(count) && count < 3) {
			var $tbody = $module.parent('tbody');
			//$module.parent('tbody').append($module.clone());
			if ($module.next().hasClass(_this.SERIALIZABLE[3])) {
				$module.clone().insertAfter($module.next());
				$newModule = $module.next().next();
			} else {
				$module.clone().insertAfter($module);
				$newModule = $module.next();
			}
			// drop down
			$newModule.children('td').eq(1).children('select').val((_select === 0) ? '0' : _select);
			var newSelectId = $newModule.children('td').eq(1).children('select').attr('id') + '_' + (count + 1);
			$newModule.children('td').eq(1).children('select').attr('id', newSelectId);
			$newModule.children('td').eq(1).children('select').attr('name', newSelectId);

			// txtOther
			var newOtherId = $newModule.children('td').eq(0).children('input').attr('id') + '_' + (count + 1);
			$newModule.children('td').eq(0).children('input').attr('id', newOtherId);
			$newModule.children('td').eq(0).children('input').attr('name', newOtherId);

			// 2013.9.11
			var iptId = $module.children('td').last().children('input').attr('id');
			var iptName = $module.children('td').last().children('input').attr('name');
			var iptClass = $module.children('td').last().children('input').attr('class');
			// ended

			var $newModuleIpt = $newModule.children('td').last().children('input');
			var $btn = $newModule.children('td').eq(0).children('a');
			var fn = this.deserializeOthersField;

			//var uuid = this.getUUID();

			// to prevent id conflict
			$newModuleIpt.attr('id', iptId + '_' + (count + 1));
			$newModuleIpt.attr('name', iptId + '_' + (count + 1));
			$newModuleIpt.attr('class', _this.SERIALIZABLE[1]);
			$newModuleIpt.keypress(function (event) {
				var key;
				if (window.event) {
					isWindowEvent = true;
					key = window.event.keyCode;
				} else {
					key = event.which;
				}
				var keychar = String.fromCharCode(key);
				if ((key == null) || (key == 0) || (key == 8) || (key == 9) || (key == 13) || (key == 27)) {
					return true;
				} else if ((("0123456789.").indexOf(keychar) > -1)) {
					return true;
				} else {
					return false;
				}
			});
			$newModuleIpt.blur(function () {
				var regExp1 = /([.]){2}/;
				var regExp2 = /^[0-9][.]{1}$/;
				val = $(this).val();
				if (val === '' || regExp1.test(val) || regExp2.test(val) || val.indexOf('.') === 0) {
					$(this).val(0);
				}
				_this.setAmount(false);
			});

			// ended
			$btn.attr('class', _this.SERIALIZABLE[2]);
			$btn.children('img').attr('src', '../images/common/calculator/icon-minus.png');
			$btn.click(function () {
				fn(_this, this);
			});

			count++;
			$module.attr('class', count);
			$newModule.attr('class', _this.SERIALIZABLE[3]);

			if (_val === -1) {
				$newModuleIpt.val('0');
				$newModuleIpt.parent('td').parent('tr').children('td').eq(0).find('input').val('');
			} else {
				this.setOthersRowFrontend($newModuleIpt.attr('id'), _val, _select);
			}

			$newModule.children('td').eq(1).children('select').change(function () {
				_this.setAmount(false);
			});
		}
	},
	deserializeOthersField: function (_this, _elm) {
		var $this = $(_elm);
		var $module = $this.parent('td').parent('tr');
		if (!$module.next().hasClass(_this.SERIALIZABLE[3]) && !$module.prev().hasClass(_this.SERIALIZABLE[3])) {
			$module.prev().attr('class', 1);
		} else {
			if ($module.next().hasClass(_this.SERIALIZABLE[3])) {
				$module.prev().attr('class', 2);
			} else {
				$module.prev().prev().attr('class', 2);
			}
		}
		$module.remove();
		_this.setAmount(false);
	},
	getRandomValue: function () {
		var random = 0;
		var randomValue = this.RANDOMVALUE;
		random = Math.floor((Math.random() * randomValue.length));
		return randomValue[random];
	},
	getUUID: function () {
		var s = [];
		var hexDigits = "0123456789abcdef";
		for (var i = 0; i < 36; i++) {
			s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
		}
		s[14] = "4";
		s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
		s[8] = s[13] = s[18] = s[23] = "-";
		var uuid = s.join("");
		return uuid;
	},
	setHiddenVal: function (_name, _id, _parent) { // _name : txtInput, _id : hidInput
		var val = 0;
		var vStr = '';
		var lastIndex = '';
		for (var i = 0; i < _name.length; i++) {
			val = parseFloat($('input[name=' + _name[i] + ']').val());
			val = this.setFixedFloating(val);
			val = (val / _parent) * 100; // parse to percentage
			val = (isNaN(val)) ? 0 : val; // to prevent 0 as NaN
			val = val.toFixed(0); // fixed in .0
			$('input#' + _id[i]).val(val);
		}
	},
	setSubItemView: function (_className, _prefix) {
		var id;
		var val;
		var _this = this;
		$('.' + _className).each(function () {
			id = $.trim($(this).attr('class').replace(_className, ''));
			try {
				val = $('input#' + id).val();
			} catch (e) {
				val = 0;
			}
			if (val === undefined) {
				//p1Saving1
				//p1Saving2
				id = $(this).attr('class').replace(_className, '');
				var ids = id.split('_');
				var tempVal = 0;
				for (var i = 0; i < ids.length; i++) {
					tempVal += parseFloat($('input#' + $.trim(ids[i])).val());
				}
				$(this).html(_prefix + _this.addCommas(parseFloat(tempVal).toFixed(1)));
			} else {
				val = parseFloat(val).toFixed(1);
				$(this).html(_prefix + _this.addCommas(val));
			}
		});
	},
	setOthersVal: function () {
		var className = 'input.' + this.SERIALIZABLE[0];
		var moduleClass = '';
		var $module = {};
		var hdnId = '';
		var idx = ['1', '2', '3'];
		var sumUp = 0;
		var hasClass = false;
		var _this = this;
		$(className).each(function () {
			$module = $(this).parent('td').parent('tr');
			hdnId = 'input#' + $(this).attr('id').replace('_', '');
			for (var i = 0; i < idx.length; i++) {
				if ($module.hasClass(idx[i])) {
					hasClass = true;
					break;
				}
			}
			if (hasClass) {
				switch ($module.attr('class')) {
				case idx[0]:
					sumUp = parseFloat(_this.factorizeVal('input#' + $(this).attr('id')));
					break;
				case idx[1]:
					sumUp = parseFloat(_this.factorizeVal('input#' + $(this).attr('id'))) +
						parseFloat(_this.factorizeVal('input#' + $module.next().children('td').last().children('input').attr('id')));
					break;
				case idx[2]:
					sumUp = parseFloat(_this.factorizeVal('input#' + $(this).attr('id'))) +
						parseFloat(_this.factorizeVal('input#' + $module.next().children('td').last().children('input').attr('id'))) +
						parseFloat(_this.factorizeVal('input#' + $module.next().next().children('td').last().children('input').attr('id')));
					break;
				default:
					break;
				}
			} else {
				sumUp = parseFloat(_this.factorizeVal('input#' + $(this).attr('id')));
			}
			$(hdnId).val(sumUp);
			hasClass = false;
			sumUp = 0;
		});
	},
	setAllFieldFactorized: function () {
		var formId = this.FORM;
		var _this = this;
		$('form#' + formId).find('input[type=text]').each(function () {
			$(this).val(_this.factorizeVal('input#' + $(this).attr('id')));
		});
	},
	setFixedFloating: function (_val) {
		var val = _val.toFixed(1);
		vStr = val.toString();
		lastIndex = vStr.charAt(vStr.length - 1);
		val = (lastIndex === '0') ? parseInt(vStr.substring(0, vStr.indexOf('.'))) : val;
		return val;
	},
	bindEventListeners: function (_event) {

		var _this = this;
		var formId = _this.FORM;
		var val = '';
		var regExp1 = /([.]){2}/;
		var regExp2 = /^[0-9][.]{1}$/;
		var textHtml = '';
		var $buttonText = {};
		var $toolTip = {};
		// set input[text] with keypress & blur behaviour
		$('form#' + formId).find('input[type=text]').each(function () {
			if (!$(this).hasClass('txtOthers')) {
				$(this).keypress(function (event) {
					var key;
					if (window.event) {
						isWindowEvent = true;
						key = window.event.keyCode;
					} else {
						key = event.which;
					}
					var keychar = String.fromCharCode(key);
					// check current value up to 1 decimal;
					if ($(this).hasClass('txtInputP1') || $(this).hasClass('txtInputP2')) {
						var currentVal = $(this).val() + keychar;
						if (currentVal.indexOf('.') > 0) {
							if (currentVal.length - currentVal.indexOf('.') > 2) {
								return false;
							}
						}
					}
					// ended
					if ((key == null) || (key == 0) || (key == 8) || (key == 9) || (key == 13) || (key == 27)) {
						return true;
					} else if ((("0123456789.").indexOf(keychar) > -1)) {
						return true;
					} else {
						return false;
					}
				});
				$(this).blur(function () {
					val = $(this).val();
					if (val === '' || regExp1.test(val) || regExp2.test(val) || val.indexOf('.') === 0) {
						$(this).val(0);
					}
					_this.setAmount(false);
				});
				var selectIdName = 's' + $(this).attr('id').substr(1);
				var $select = $(this).parent('td').parent('tr').children('td').eq(1).children('select');
				$select.attr('id', selectIdName);
				$select.attr('name', selectIdName);
			} else {
				if (
					$(this).parent('td').parent('tr').children('td').eq(3).children('input').attr('id').search('p1Saving9') !== -1 ||
					$(this).parent('td').parent('tr').children('td').eq(3).children('input').attr('id').search('p1Saving10') !== -1 ||
					$(this).parent('td').parent('tr').children('td').eq(3).children('input').attr('id').search('p1Saving11') !== -1
				) {} else {
					var txtIdName = 't' + $(this).parent('td').parent('tr').children('td').eq(3).children('input').attr('id').substr(1);
					$(this).attr('id', txtIdName);
					$(this).attr('name', txtIdName);
				}
			}
		});
		// set 
		$('form#' + formId).find('select').each(function () {
			$(this).change(function () {
				_this.setAmount(false);
			});
		});

		$('form#' + formId).find('td.topic').each(function () {
			textHtml = $(this).html();
			if (textHtml.search(_this.TEXTCONTAINER[0]) !== -1 || textHtml.search(_this.TEXTCONTAINER[1]) !== -1) {
				$(this).wrapInner('<a href="javascript:" class="toolTips" />');
				$buttonText = $(this).children('a');
				$buttonText.css(_this.TIPSSTYLE[0]);

				textHtml = $buttonText.html();
				textHtml = textHtml.substring(textHtml.search(_this.TEXTCONTAINER[0]), textHtml.search(_this.TEXTCONTAINER[1]) + 1);
				$buttonText.html($buttonText.html().replace(textHtml, ''));
				$toolTip = $('<span class="toolTips">' + textHtml + '</span>');
				$toolTip.css(_this.TIPSSTYLE[1]);

				$buttonText.append($('<img style="padding-left:5px;" src="../images/common/calculator/icon-ques.png" />'), $toolTip);
				$buttonText.hover(function () {

					$(this).children('span').css({
						'display': 'block',
						'width': 210,
						'left': $(this).width()
					});
				}, function () {
					$(this).children('span').css('display', 'none');
				});
			}
		});
	},
	factorizeVal: function (_elm) {
		var val = 0;
		if ($(_elm).attr('type') !== 'hidden') {
			var $selectElm = $(_elm).parent('td').prev().prev().children('select');
			var select = $selectElm.val();
			val = $(_elm).val() * this.PERIODFACTOR[select];
			//var temp = val;
			//val = this.setFixedFloating(val);
			/*
			var test = ['17', '18', '19', '20', '21', '55', '56', '22'];			
			for(var i = 0; i < test.length; i++) {
				if($(_elm).attr('id').search(test[i]) !== -1) {
					console.log('before: ' + temp);
					console.log('after: ' + val);
					break;
				}
			}
			*/
			return val;
		} else {
			return $(_elm).val();
		}
	},
	addCommas: function (_nStr) {
		_nStr += '';
		var x = _nStr.split('.');
		var x1 = x[0];
		var x2 = x.length > 1 ? '.' + x[1] : '';
		var rgx = /(\d+)(\d{3})/;
		while (rgx.test(x1)) {
			x1 = x1.replace(rgx, '$1' + ',' + '$2');
		}
		return x1 + x2;
	},
	getCookie: function (c_name) {
		if (document.cookie.length > 0) {
			c_start = document.cookie.indexOf(c_name + "=");
			if (c_start != -1) {
				c_start = c_start + c_name.length + 1;
				c_end = document.cookie.indexOf(";", c_start);
				if (c_end == -1) c_end = document.cookie.length;
				return unescape(document.cookie.substring(c_start, c_end));
			}
		}
		return "";
	},
	setCookie: function (c_name, value, expiredays) {
		var exdate = new Date();
		exdate.setDate(exdate.getDate() + expiredays);
		this.deleteCookie(c_name);
		document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString() + ";path=/");
	},
	deleteCookie: function (c_name) {
		if (this.getCookie(c_name)) {
			document.cookie = c_name + "=;expires=Thu, 01-Jan-1970 00:00:01 GMT;path=/";
		}
	},
	saveRecord: function () {
		var formId = 'form#' + this.FORM;
		var record = '';
		var subRecord = '';
		var type = ['Income', 'Saving', 'Expense'];
		var shortT = ['i', 's', 'e'];
		var select = ['0', '1', '2'];
		var shortS = ['m', 'w', 'y'];
		var selected = '';
		var $select = {};
		var count = 1;
		var _this = this;
		var othersI = '';
		$(formId).find('input').each(function () {
			if ($(this).attr('type') !== 'hidden' && $(this).attr('id') !== undefined) {
				subRecord = $(this).attr('id');
				subRecord = subRecord.substr(1);
				for (var i = 0; i < type.length; i++) {
					if (subRecord.search(type[i]) !== -1) {
						subRecord = subRecord.replace(type[i], shortT[i]);
					}
				}
				$select = $(this).parent('td').parent('tr').children('td').eq(1).children('select');
				selected = $select.val();
				switch (selected) {
				case '0':
					selected = shortS[0];
					break;
				case '1':
					selected = shortS[1];
					break;
				case '2':
					selected = shortS[2];
					break;
				default:
					break;
				}
				if ($(this).hasClass(_this.SERIALIZABLE[0]) || $(this).hasClass(_this.SERIALIZABLE[1])) {
					if ($(this).hasClass(_this.SERIALIZABLE[0])) { // first Others
						subRecord += selected + '=';
					} else { // second or third Others
						subRecord = subRecord.substr(0, subRecord.lastIndexOf('_'));
						if ($(this).parent('td').parent('tr').prev().hasClass(_this.SERIALIZABLE[3])) { // third
							othersI = '_3';
						} else { // second
							othersI = '_2';
						}
						subRecord += selected + othersI + '=';

					}
				} else {
					subRecord += selected + '=';
				}
				subRecord += $(this).val();
				if ($(this).hasClass(_this.SERIALIZABLE[0]) || $(this).hasClass(_this.SERIALIZABLE[1])) {
					var name = $(this).parent('td').parent('tr').children('td').eq(0).find('input').val();
					subRecord += '&n@' + name;
				}
				if (count !== 1) {
					record += ',' + subRecord;
				} else {
					record += subRecord;
				}
				count++;
			} else if ($(this).hasClass(_this.OTHERSCLASS)) { // txtOthers
				//$(this).val($(this).val().replace(' ', /\s/));
			}
		});

		var isAllSave = true;
		var idx = -1;
		var cookieValue = this.COOKIEVALUE;
		var cookieInfoArray = this.COOKIEINFO;
		var url = window.location.href;
		var queries = url.substring(url.indexOf('?') + 1);
		var name;
		var d;
		var info;
		var cookieVal;
		var cookieInfo;
		queries = queries.split('&');

		// check query string to determine whether from bookmark or cookie management page
		for (var i = 0; i < queries.length; i++) {
			if (queries[i].search('record=') !== -1) {
				var query = parseInt(queries[i].split('=')[1]);
				if (!isNaN(query) && query > 0 && query < 6) {
					idx = query - 1;
				}
			}
		}
		if (idx === -1) { // as a new record to do

			for (var i = 0; i < cookieValue.length; i++) {
				if (
					this.getCookie(cookieValue[i]) === '' ||
					this.getCookie(cookieValue[i]) === null ||
					this.getCookie(cookieValue[i]) === undefined
				) {
					if (i !== cookieValue.length) {
						isAllSave = false;
						idx = i;
						break;
					}
				}
			}
			if (isAllSave) {
				alert('You have reached the maximum of record.');
			} else {
				//var agree = confirm("You understand dummy text and dummy text and dummy text and etc.");
				try {
					cookieVal = cookieValue[idx];
					cookieInfo = cookieInfoArray[idx];

					var mes1 = (window.location.href.search('/en/') !== -1) ? 'Please name your record.' : '請輸入記錄名稱。';
					var mes2 = (window.location.href.search('/en/') !== -1) ? 'Your record has been saved. You may retrieve your record in the future from the blue toolbar above the Summary box on the right-hand side.' : '你的記錄已被儲存。你可從右方概要欄上的藍色工具列，讀取這項記錄。';
					var mes3 = (window.location.href.search('/en/') !== -1) ? 'Name should not be empty.' : '記錄名稱不能空置。';
					var mes4 = (window.location.href.search('/en/') !== -1) ? 'Your information has not been saved.' : '你的資料並沒有被儲存。';


					var name = window.prompt(mes1, '');


					if (name !== null) {
						var idx = true;
						var count = 0;
						while (idx) {
							if (count === 0) {

								if (name !== null) {
									if (name !== '') {
										d = new Date();
										info = 'name=' + name + '&date=' + d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
										this.setCookie(cookieInfo, info, this.MAXCOOKIEAGE);
										this.setCookie(cookieVal, record, this.MAXCOOKIEAGE);
										alert(mes2);
										idx = false;
										break;
									} else {
										alert(mes3);
										count++;
									}
								} else {
									alert(mes4);
									idx = false;
									break;
								}
							} else {
								var n = window.prompt(mes1, '');
								if (n !== null) {
									if (n !== '') {
										d = new Date();
										info = 'name=' + n + '&date=' + d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
										this.setCookie(cookieInfo, info, this.MAXCOOKIEAGE);
										this.setCookie(cookieVal, record, this.MAXCOOKIEAGE);
										alert(mes2);
										idx = false;
										break;
									} else {
										alert(mes3);
										count++;
									}
								} else {
									alert(mes4);
									idx = false;
									break;
								}
							}
						}
					} else {
						alert(mes4);
					}

				} catch (e) {
					console.log('Error encountered while trying to save record: ' + e.toString());
				}
			}

		} else { // save to record specified by query string
			try {
				cookieVal = cookieValue[idx];
				cookieInfo = cookieInfoArray[idx];
				if (
					this.getCookie(cookieVal) !== '' &&
					this.getCookie(cookieVal) !== null &&
					this.getCookie(cookieVal) !== undefined
				) {
					d = new Date();
					info = this.getCookie(cookieInfo);
					info = info.substring(0, info.indexOf('&')) + '&date=' + d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
					this.setCookie(cookieInfo, info, this.MAXCOOKIEAGE);
					this.setCookie(cookieVal, record, this.MAXCOOKIEAGE);
					alert('Your record has been saved!');
				} else {
					console.log('Error encountered while trying to save record');
				}
			} catch (e) {
				console.log('Error encountered while trying to save record: ' + e.toString());
			}
		}
	},
	getRecord: function () {

		var idx = -1;
		var url = window.location.href;
		var queries = url.substring(url.indexOf('?') + 1);
		var name;
		var d;
		var info;
		var cookieVal;
		var cookieInfo;
		queries = queries.split('&');

		// check query string to determine whether from bookmark or cookie management page
		for (var i = 0; i < queries.length; i++) {
			if (queries[i].search('record=') !== -1) {
				var query = parseInt(queries[i].split('=')[1]);
				if (!isNaN(query) && query > 0 && query < 6) {
					idx = query - 1;
				}
			}
		}

		var cookie = this.COOKIEVALUE[idx];
		var type = ['Income', 'Saving', 'Expense'];
		var shortT = ['i', 's', 'e'];
		var select = ['0', '1', '2'];
		var shortS = ['m', 'w', 'y'];

		if (
			this.getCookie(cookie) !== '' &&
			this.getCookie(cookie) !== null &&
			this.getCookie(cookie) !== undefined
		) {
			var recordArr = this.getCookie(cookie).split(',');
			var eachRecord = [];
			var name = '';
			var val = '';
			var head = '';
			var tail = '';
			var selected = '';
			for (var i = 0; i < recordArr.length; i++) {
				eachRecord = recordArr[i].split('=');
				name = eachRecord[0];
				val = eachRecord[1];

				name = 'p' + name;
				head = name.slice(0, 2);
				tail = name.slice(3);
				switch (name.charAt(2)) {
				case shortT[0]:
					name = head + type[0] + tail;
					break;
				case shortT[1]:
					name = head + type[1] + tail;
					break;
				case shortT[2]:
					name = head + type[2] + tail;
					break;
				default:
					break;
				}
				selected = name.charAt(name.length - 1);
				switch (selected) {
				case shortS[0]:
					selected = select[0];
					break;
				case shortS[1]:
					selected = select[1];
					break;
				case shortS[2]:
					selected = select[2];
					break;
				}
				if (name.search('_') !== -1) {
					var patt = /[0-9]$/g;
					if (patt.test(name)) { // second or thrid Others
						selected = name.charAt(name.length - 3);
						name = name.slice(0, name.length - 3);
						switch (selected) {
						case shortS[0]:
							selected = select[0];
							break;
						case shortS[1]:
							selected = select[1];
							break;
						case shortS[2]:
							selected = select[2];
							break;
						}
						this.serializeOthersField('input#' + name, val, selected);

					} else { // first Others
						name = name.slice(0, name.length - 1);
						this.setOthersRowFrontend(name, val, selected);
					}
				} else {
					name = name.slice(0, name.length - 1);
					$('input#' + name).val(val);
					$('input#' + name).parent('td').parent('tr').children('td').eq(1).children('select').val(selected);
				}
			}

		} else {
			$('input').each(function () {
				if ($(this).attr('type') !== 'hidden' && !$(this).hasClass('txtOthers')) {
					$(this).val('0');
					//console.log($(this).attr('id'));
				}
			});
		}
		//this.COOKIEINFO[0]
	},
	setOthersRowFrontend: function (_name, _val, _selected) {
		var othersVariable = this.OTHERSVARIABLE;
		var varArray = _val.split(othersVariable);
		var value = varArray[0];
		var othersName = varArray[1];
		$('input#' + _name).parent('td').parent('tr').eq(0).find('input').val(othersName);
		$('input#' + _name).parent('td').parent('tr').children('td').eq(1).children('select').val(_selected);
		$('input#' + _name).val(value);
	},
	calTop: function () {
		$('body,html').stop().animate({
			scrollTop: 0
		}, 800);
	},
	calculatorTab: function () {
		$('.calculator .calculator-wrapper ul.tab li a').click(function () {
			var _this = $(this),
				formWrapper = $('.form-wrapper'),
				thisIndex = _this.parent().index();
			$('.calculator .calculator-wrapper ul.tab li a').removeClass('active');
			_this.addClass('active');
			formWrapper.children().removeClass('active');
			formWrapper.children().eq(thisIndex).addClass('active');


			if ($('div.summary_panel').length > 0) {
				$('div.summary_panel').remove();
				$('div.panel_wrapper').css('display', 'block');
				$('div.chart_wrapper').css('display', 'none');
			}

		});
	},
	calculatorExpand: function () {
		$('ul.expand-list li>a').click(function () {
			var _this = $(this);
			if (!_this.parents('ul').hasClass('expandAll')) { // 2013.9.10
				// _this.parents('ul').children().removeClass('open');
				// _this.parent().addClass('open');
				_this.parent().toggleClass('open');
			}
		});
	},
	calculatorProcess: function (target) {
		// 2013.9.11 control taken over by cal.ctrl.js
		if (target == 3) {
			$('.calculator .calculator-wrapper ul.tab li').hide();
			$('.tab-report').show();
		} else {
			$('.calculator .calculator-wrapper ul.tab li').show();
			$('.tab-report').hide();
			var jqPlotDiv = ['div#chart1div', 'div#chart2div', 'div#chart3div', 'div#chart4div'];
			for (var i = 0; i < jqPlotDiv.length; i++) {
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
	closeAllTab: function () {
		$('.close-all').click(function () {
			var _this = $(this);
			_this.next().children().removeClass('open');
		});
	}
};