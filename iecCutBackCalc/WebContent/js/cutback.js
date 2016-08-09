var ONLOADED = window.onload || function() {};

//window.onload = function() {
$(document).ready(function() {
	
	var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1; // en & tc
	var folder_lang = 'en';

	if (lang==1){
		folder_lang = 'tc';
	}

	// set the link
	$('.link1').attr('href',hyperlink_path+'tools/'+folder_lang+'/saving.html');
	$('.link2').attr('href',hyperlink_path+'tools/'+folder_lang+'/budget.html');
	$('.link3').attr('href',hyperlink_path+'web/'+folder_lang+'/banking-and-credit/managing-debt/managing-debts-effectively.html');
	$('.link4').attr('href',hyperlink_path+'web/'+folder_lang+'/managing-your-money/saving-for-the-future.html');

	$('<a href="cutback_disclaimer.html?date=' + new Date().getTime() + '" style="display:none;" class="disclaimer" />').fancybox({
		'type':'iframe',
		'height':300,
		'width':877,
		'padding':0,
		'margin':0,
		'modal':true,
		'transitionOut':'none',
		'onComplete': function(){
			var hHeight = $(document).height();
			$('#fancybox-overlay').css('height',hHeight);
		}
	}).trigger('click');
	
	$('.tab-assumption a').fancybox({
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

	if($('a.btn_shareFB').length > 0) {
		var fbLink = '';
		var currentURL = window.location.href;
		if(currentURL.search('/en/cutback.html') !== -1) {
			fbLink = FB_LINK.cutback_en;
		}else if(currentURL.search('/tc/cutback.html') !== -1) {
			fbLink = FB_LINK.cutback_tc;
		}

		$('a.btn_shareFB').each(function() {
			$(this).click(function(e) {
				e.preventDefault();
				var page = window.location.href;
				fbShareTracking(CutbackCalculator.getLangInt());
				window.open(FB_LINK.fb + '?u=' + encodeURIComponent(fbLink), 'newwindow', 'width=700, height=410, top=0, left=0, toolbar=no, menubar=no, scrollbars=yes, resizable=yes,location=no, status=no');
			});
		});
	}

	if($('a.btn_mailTo').length > 0) {
		$('a.btn_mailTo').each(function() {

			$(this).click(function(e) {
				e.preventDefault();
				var aHref = '';
				var subject = '';
				var content = '';

				var currentURL = window.location.href;

		if (currentURL.search('/en/') !== -1) {
			subject = 'Cut-back Calculator';
				content = 'Use our calculator to prioritise your needs and wants and look for non-essential expenses you can cut to save money. You can save the results on your computer, print out and do it later, or you can download the tool and use it offline.\n' + window.location.href;
			aHref = 'mailto:info@thechinfamily.hk' + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(content);
			window.location = aHref;
		} else if (currentURL.search('/tc/') !== -1) {
			subject = '削減開支計算機';
			content = '定期檢討開支可讓你增加儲蓄。削減開支計算機協助你界定消費優先次序(如必需品和一般消費項目) 和削減不必要的開支，以省錢累積財富。你可以將報告貯存於電腦內、列印出來作日後之用，或者直接下載此計算機使用。\n' + window.location.href;
			aHref = 'mailto:info@thechinfamily.hk' + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(content);
			window.location = aHref;
		};
			 
			 
				emailShareTracking(CutbackCalculator.getLangInt());
			});

			/*
			$(this).attr('href', 'email/popup-mail.html?t=' + new Date().getTime());
	 		$(this).fancybox({
	 			'padding':0,
	 			'width':640,
	 			'height':500,
	 			'titleShow':false
	 		});
			*/

		});
	}
	
	if($('a.tellus').length > 0) {
		$('a.tellus').click(function(e) {
			e.preventDefault();
			var aHref = '';
			var subject = '';
			var content = '';

			subject = 'Feedback on Cut-back Calculator';
			content = ''
			aHref = 'mailto:info@thechinfamily.hk' + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(content);			
			window.location = aHref;
		});
	}
	
	if ($('.ratingClick').length > 0) {
		$('.ratingClick').click(function(e) {
			
			ratingTracking(CutbackCalculator.getLangInt(), $(this).val())
			
		});
	}

	if($('form#cutback_form').length > 0) { // cutback calculator
		
		CutbackCalculator.bindEventListeners();

		// serializable field
		$('a.btn_serialize').click(function(e) {
			e.preventDefault();
			CutbackCalculator.serializeOthersField(this, -1, 0);
		});
		$('a.btn_deserialize').click(function(e) {
			e.preventDefault();
			CutbackCalculator.deserializeOthersField(CutbackCalculator, this);
		});

		$('a.btn_calc').click(function(e) {
			e.preventDefault();

			calculateTracking(CutbackCalculator.getLangInt());
			
			if(CutbackCalculator.isValidatedValueAll()) {
				CutbackCalculator.calculate();
				$(window).scrollTop(0);
			}
		});

		$('.close-all').click(function(e){
			e.preventDefault();
			CutbackCalculator.closeAllItem();
		});

		$('.reportTitle').click(function(e){
			e.preventDefault();
			return false;
		});

		$('a.btn_reset').click(function(e) {
			e.preventDefault();
			$('input').each(function() {
				if($(this).hasClass('txtOthers')) {
					$(this).val('');
				}else {
					$(this).val('0');
				}
			});

			$('.selectP1').each(function() {
				$(this).val('1');
			});

			$('.cutback .cutback-wrapper ul.tab li').show();
			$('.tab-report, .report').hide();
			$('.form-innerwrapper').eq(0).addClass('active');
			CutbackCalculator.resetReport();

			$('.cutback .cutback-wrapper ul.tab li a.active').removeClass('active');
			$('.cutback .cutback-wrapper ul.tab li').eq(0).children('a').addClass('active');
		});

		$('a.btn_edit').click(function(e) {
			e.preventDefault();
			$('.cutback .cutback-wrapper ul.tab li').show();
			$('.tab-report, .report').hide();
			$('.form-innerwrapper').eq(0).addClass('active');
			CutbackCalculator.resetReport();

			$('.cutback .cutback-wrapper ul.tab li a.active').removeClass('active');
			$('.cutback .cutback-wrapper ul.tab li').eq(0).children('a').addClass('active');
		});

		$('a.btn_save_pdf').click(function(e) {
			e.preventDefault();

			if(CutbackCalculator.isValidatedValueAll()) {
				$('#cutback_form').attr('action', '../pdfCutBack.do?lang=' + lang);
				$('#cutback_form').attr('target', '_self');

				// 2014.2.7 start
				// GA event tracking code
				downloadPDFTracking(CutbackCalculator.getLangInt());
				setTimeout(function() { // to allow time for the hit request to process before taking the user by _self
					CutbackCalculator.calculate();
					$('#cutback_data').val(CutbackCalculator.prepareBarDataForPdf());
					$('#cutback_category_data').val(CutbackCalculator.preparePieDataForPdf());
					$('#total_save').val(CutbackCalculator.SAVEAMOUNT);
					$('#percent_income').val(CutbackCalculator.PERCENTINCOME);
					$('#percent_expense').val(CutbackCalculator.PERCENTEXPENSE);
					$('#cutback_form').submit();
				}, 500);
				// 2014.2.7 ended
			}
		});

		$('a.btn_save_excel').click(function(e) {
			e.preventDefault();

			$('#cutback_form').attr('action', '../excelCutBackServlet.do?lang=' + lang);
			$('#cutback_form').attr('target', '_self');
			$('#cutback_form').submit();

		});

		$('a.btn_print').click(function(e) {
			e.preventDefault();

			if(CutbackCalculator.isValidatedValueAll()) {
				$('#cutback_form').attr('action', '../pdfCutBack.do?lang=' + lang + '&print=y');
				$('#cutback_form').attr('target', '_self');

				// 2014.2.7 start
				// GA event tracking code
				printPDFTracking(CutbackCalculator.getLangInt());
				setTimeout(function() { // to allow time for the hit request to process before taking the user by _self
					CutbackCalculator.calculate();
					$('#cutback_data').val(CutbackCalculator.prepareBarDataForPdf());
					$('#cutback_category_data').val(CutbackCalculator.preparePieDataForPdf());
					$('#total_save').val(CutbackCalculator.SAVEAMOUNT);
					$('#percent_income').val(CutbackCalculator.PERCENTINCOME);
					$('#percent_expense').val(CutbackCalculator.PERCENTEXPENSE);
					$('#cutback_form').submit();
				}, 500);
				// 2014.2.7 ended
			}

		});

	}
		
});




var CutbackCalculator = {
	LENGTH : 1,
	MAXITEM : 15,
	FORM : 'cutback_form',
	DOLLARPREFIX : ['HKD ', '港元 '],
	LANG : [0, 1], // 0 : en, 1 : tc
	DATEFORMAT : [
		['daily', 'weeks', 'months', 'years'],
		['日', '週', '月', '年']
	],
	SERIALIZABLE : ['ipt_serialize', 'ipt_deserialize', 'btn_deserialize', 'deserializable'], // 0 : root element, 1 : two other generated field, 3 : btn to recoginze event, 4 :tr.class to identify
	FIELDTOTAL : 40,
	OTHERFIELDTOTAL : 8,
	PERIODFACTOR : [0, 52, 12, 1], // 0, week, month, year
	CATEGORYNAME : [
		['Family and friends','親友','icon-summary-family.jpg'],
		['Food and drinks','食品及飲品','icon-summary-food.jpg'],
		['Healthy and beauty','健康及美容','icon-summary-health.jpg'],
		['Leisure / Lifestyle','生活消閒','icon-summary-leisure.jpg'],
		['Shopping','購物','icon-summary-shopping.jpg'],
		['Transport','交通','icon-summary-transport.jpg'],
		['Travelling','旅遊','icon-summary-travelling.jpg'],
		['Others','其他','icon-summary-others.jpg']
	],
	FIELDNAME : [
		['Interest class / Activities','興趣班／活動'],['Clothing','衣服'],['Toys','玩具'],['Pocket money','零用錢'],['Treats and gifts','款待及禮物'],['Celebrations','慶祝活動'],
		['Grocery shopping','食品雜貨'],['Eating out','外出用膳'],['Snacks','零食'],['Coffee','咖啡'],['Alcohol','酒類'],
		['Health supplements','保健食品'],['Cosmetics and skincare products','化裝品及護膚品'],['Beauty and fitness','美容及健身服務'],['Hairdressing','理髮'],['Eye-care / Glasses','眼部護理／眼鏡'],
		['Lottery and gambling','博彩及賭博'],['Interest class','興趣班'],['Reading','閱讀'],['Games','遊戲'],['Movies / Drama','電影／戲劇'],['Music','音樂'],['Sports','運動'],['Photography','攝影'],['Cigarettes','香煙'],['Bars / Clubs','酒吧／會所'],['Exhibitions','參觀展覽'],['',''],
		['Furniture and home appliances','傢俬及家電器'],['Household goods','家庭用品'],['Mobile phone','流動電話'],['Computer / Tablet','電腦／平板電腦'],['Clothing and footwear','衣履'],['Accessories (eg jewellery, watches, handbags)','配飾(例：珠寶, 名錶, 手袋)'],['Personal care products','個人護理用品'],
		['Fare - taxi','的士車費'],['Motor vehicle purchase / Rental','購買車輛／租賃'],
		['Tour','導遊團費'],['Transportation','交通費用'],['Accommodation','住宿費用']
	],
	CATEGORYMAP : [0,0,0,0,0,0,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,6,6,6],
	OTHERFIELDMAP : [0,6,11,16,28,35,37,40],
	CUTBACKLIST : [], // item array
	CUTBACKCATEGORYLIST : [], // category array
	TOTALSAVEAMOUNT : 0,
	SAVEAMOUNT : '',
	PERCENTINCOME : 0,
	PERCENTEXPENSE : 0,
	ERRORMESSAGE : [
		['Please select a maximum of 15 items.','請選擇最多15個項目。'],
		['Please enter amount.\n','必須輸入金額。\n'],
		['We only accept figures in 1 decimal place.\n','我們只接受小數點後1位的數字。\n'],
		['Period is not correct.\n','時段輸入不正確。\n'],
		['Please input at least 1 item.\n','請輸入最少一個項目。\n'],
		['Please enter the name of \"Others\" in the \"$section$\" section.\n','請輸入「$section$」部份的「其他」項目名稱。\n']
	],
	VALUECLASS : ['.selectP1', '.txtInputP1', '.field3'],

	isValidatedValueAll : function() {
		var _this = this,
			isValid = true,
			errorMessage = '', errorMessage1 = '', errorMessage2 = '', errorMessage3 = '',
			lang = (window.location.href.search('/en/') !== -1) ? 0 : 1;

		// check value field
		for(var i = 0; i < _this.VALUECLASS.length; i++) {
			$(_this.VALUECLASS[i]).each(function() {
				var val = $(this).val();

				if(val === '') {
					isValid = false;
					errorMessage1 += _this.ERRORMESSAGE[1][lang];
				}else if(!_this.isValidatedNum(val)) {
					isValid = false;
					errorMessage1 += _this.ERRORMESSAGE[2][lang];
				}else {
					if (_this.VALUECLASS[i] == '.selectP1'){
						if (val.length > 1){
							isValid = false;
							errorMessage1 += _this.ERRORMESSAGE[3][lang];
						}
					}
				}
			});
		}

		// check other field
		for (i=1;i<=_this.OTHERFIELDTOTAL;i++){
			if ($('#otherName'+i).val()=='' && $('#p1otherItem'+i).val()>0){
				isValid = false;
				errorMessage3 += _this.ERRORMESSAGE[5][lang].replace('$section$', _this.CATEGORYNAME[i-1][lang]);
			} else if ($('#otherName'+i+'_2').val()=='' && $('#p1otherItem'+i+'_2').val()>0){
				isValid = false;
				errorMessage3 += _this.ERRORMESSAGE[5][lang].replace('$section$', _this.CATEGORYNAME[i-1][lang]);
			}else if ($('#otherName'+i+'_3').val()=='' && $('#p1otherItem'+i+'_3').val()>0){
				isValid = false;
				errorMessage3 += _this.ERRORMESSAGE[5][lang].replace('$section$', _this.CATEGORYNAME[i-1][lang]);
			}
		}

		if (isValid){
			var bolItem = false;
			$(_this.VALUECLASS[1]).each(function() {
				var val = $(this).val();
				if (val > 0){
					bolItem=true;
				}
			});

			if (bolItem==false){
				isValid = false;
				errorMessage2 = _this.ERRORMESSAGE[4][lang];
			}
		}

		if(!isValid) {
			errorMessage = errorMessage1 + errorMessage2 + errorMessage3;
			alert(errorMessage);
		}

		return isValid;

	},
	bindEventListeners : function(_event) {
		var _this = this;
		var formId = _this.FORM;
		var val = '';
		var regExp1 = /([.]){2}/;
		var regExp2 = /^[0-9][.]{1}$/;

		// set input[text] with keypress & blur behaviour
		$('form#' + formId).find('input[type=text]').each(function() {
			if(!$(this).hasClass('txtOthers')) {
				$(this).val(0);
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
					if($(this).hasClass('txtInputP1') || $(this).hasClass('txtInputP2')) {
						var currentVal = $(this).val() + keychar;
						if(currentVal.indexOf('.') > 0) {
							if(currentVal.length - currentVal.indexOf('.') > 2) {
								if((key == null) || (key == 0) || (key == 8) || (key == 9) || (key == 13) || (key == 27) ) {
									return true;
								} else {
									return false;
								}
							}
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
				
				$(this).blur(function() {
					val = $(this).val();
					if(val === '' || regExp1.test(val) || regExp2.test(val) || val.indexOf('.') === 0) {
						$(this).val(0);
					}
					//_this.setAmount(false);
				});
				

				/*
				var selectIdName = 's' + $(this).attr('id').substr(1);
				var $select = $(this).parent('td').parent('tr').children('td').eq(1).children('select');
				$select.attr('id', selectIdName);
				$select.attr('name', selectIdName);
				*/
			}else {
				/*
				if(
				$(this).parent('td').parent('tr').children('td').eq(3).children('input').attr('id').search('p1Saving9') !== -1 ||
				$(this).parent('td').parent('tr').children('td').eq(3).children('input').attr('id').search('p1Saving10') !== -1 ||
				$(this).parent('td').parent('tr').children('td').eq(3).children('input').attr('id').search('p1Saving11') !== -1
				) {
				}else {
					var txtIdName = 't' + $(this).parent('td').parent('tr').children('td').eq(3).children('input').attr('id').substr(1);
					$(this).attr('id', txtIdName);
					$(this).attr('name', txtIdName);
				}
				*/
			}
		});

	},
	serializeOthersField : function(_elm, _val, _select) {
		var _this = this;
		var $this = $(_elm);
		var $module = $this.parent('td').parent('tr');
		var count = $module.attr('class');
		var $newModule = {};
		count = (count === undefined) ? 1 : parseInt(count);
		if(!isNaN(count) && count < 3) {
			var $tbody = $module.parent('tbody');
			//$module.parent('tbody').append($module.clone());
			if($module.next().hasClass(_this.SERIALIZABLE[3])) {
				$module.clone().insertAfter($module.next());
				$newModule = $module.next().next();
			}else {
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
			$newModuleIpt.attr('class', _this.SERIALIZABLE[1] + ' txtInputP1');
			$newModuleIpt.keypress(function(event) {
				var key;
				if(window.event) {
					isWindowEvent = true;
					key = window.event.keyCode;
				}else {
					key = event.which;
				}				
				var keychar = String.fromCharCode(key);
				if((key == null) || (key == 0) || (key == 8) || (key == 9) || (key == 13) || (key == 27) ) {
					return true;
				}else if((("0123456789.").indexOf(keychar) > -1)) {
					return true;
				}else {
					return false;
				}
			});
			$newModuleIpt.blur(function() {
				var regExp1 = /([.]){2}/;
				var regExp2 = /^[0-9][.]{1}$/;
				val = $(this).val();
				if(val === '' || regExp1.test(val) || regExp2.test(val) || val.indexOf('.') === 0) {
					$(this).val(0);
				}
				//_this.setAmount(false);
			});			
			
			// ended
			$btn.attr('class', _this.SERIALIZABLE[2]);
			$btn.children('img').attr('src', '../images/common/calculator/icon-minus.png');
			$btn.click(function() {fn(_this, this);});
			
			count++;
			$module.attr('class', count);
			$newModule.attr('class', _this.SERIALIZABLE[3]);
			
			if(_val === -1) {
				$newModuleIpt.val('0');
				$newModuleIpt.parent('td').parent('tr').children('td').eq(0).find('input').val('');
			}else {
				//this.setOthersRowFrontend($newModuleIpt.attr('id'), _val, _select);			
			}
			
			$newModule.children('td').eq(1).children('select').change(function() {
				//_this.setAmount(false);
			});
		}
	},
	deserializeOthersField : function(_this, _elm) {
		var $serialize=0;
		var $this = $(_elm);
		var $module = $this.parent('td').parent('tr');
		if(!$module.next().hasClass(_this.SERIALIZABLE[3]) && !$module.prev().hasClass(_this.SERIALIZABLE[3])) {
			$module.prev().attr('class', 1);
		}else {
			if($module.next().hasClass(_this.SERIALIZABLE[3])) {
				$module.prev().attr('class', 2);
				$serialize=2;
			}else {
				$module.prev().prev().attr('class', 2);
			}
		}

		$module.remove();

		// fix the Firefox bug
		$module = $this.parent('td').parent('tr');
		if ($serialize == 2){
			var $module2 = $module.children('td').eq(0).find('input');
			var $module3 = $module.children('td').eq(1).find('select');
			var $module4 = $module.children('td').eq(3).find('input');

			if ($module2.attr('id').indexOf('_2') > -1){
				var itemName = $module2.attr('id').replace('_2','');
				var selectName = $module3.attr('id').replace('_2','');
				var amountName = $module4.attr('id').replace('_2','');
				alert(itemName);
				$('#'+itemName+'_3').attr('name', $('#'+itemName+'_3').attr('name').replace('_3','_2'));
				$('#'+itemName+'_3').attr('id', $('#'+itemName+'_3').attr('id').replace('_3','_2'));
				$('#'+selectName+'_3').attr('name', $('#'+selectName+'_3').attr('name').replace('_3','_2'));
				$('#'+selectName+'_3').attr('id', $('#'+selectName+'_3').attr('id').replace('_3','_2'));
				$('#'+amountName+'_3').attr('name', $('#'+amountName+'_3').attr('name').replace('_3','_2'));
				$('#'+amountName+'_3').attr('id', $('#'+amountName+'_3').attr('id').replace('_3','_2'));
			}
		}

		//_this.setAmount(false);
	},
	isValidatedNum : function(_val) {
		var rgx = /^\d+(\.\d+)?$/;
		return rgx.test(_val);
	},
	calculate : function() {
		var i=1,j=0,
			itemCount=0,
			_this = this,
			amount = 0,
			annual_income = 0,
			lang = (window.location.href.search('/en/') !== -1) ? 0 : 1,
			dollar_sign = _this.DOLLARPREFIX[lang];

		// reset
		_this.CUTBACKLIST =[];
		_this.CUTBACKCATEGORYLIST=[];
		_this.TOTALSAVEAMOUNT=0;
		_this.SAVEAMOUNT='';
		$('#chart').html('');
		$('#barChart').html('');
		$('.otherSavings').hide();

		$('.txtInputP1').each(function() {
			if ($(this).val()>0){
				itemCount++;
			}
		});

		if (itemCount > _this.MAXITEM){
			alert(_this.ERRORMESSAGE[0][lang]);

			return false;
		} else {

			if (_this.isValidatedNum($('#annual_income').val())){
				annual_income = $('#annual_income').val();
			}
			
			// for categories
			var cateNum=0,
				cateName=_this.CATEGORYNAME[0][lang],
				cateIcon=_this.CATEGORYNAME[0][2],
				subAmount = 0;

			for (i=1;i<=_this.FIELDTOTAL;i++){
				if (_this.CATEGORYMAP[i-1] == cateNum){
						subAmount += (_this.PERIODFACTOR[$('#item'+i).val()] * $('#p1Item'+i).val());
					if (i==_this.FIELDTOTAL){
						_this.CUTBACKCATEGORYLIST.push([cateName, subAmount]);
						subAmount=0;
					}
				} else {
					cateNum++;
					_this.CUTBACKCATEGORYLIST.push([cateName, subAmount]);
					cateName=_this.CATEGORYNAME[cateNum][lang];
					cateIcon=_this.CATEGORYNAME[cateNum][2];
					subAmount=0;
					subAmount += (_this.PERIODFACTOR[$('#item'+i).val()] * $('#p1Item'+i).val());
				}
				//alert(subAmount );
			}
			// init Others
			_this.CUTBACKCATEGORYLIST.push([_this.CATEGORYNAME[6][lang], 0]);
			

			// for items
			var otherItemIndex=1;
			for (i=1;i<=_this.FIELDTOTAL;i++){
				if (_this.isValidatedNum($('#p1Item'+i).val()) && $('#p1Item'+i).val()>0){
					_this.insertToArray(_this.FIELDNAME[i-1][lang], 
						_this.PERIODFACTOR[$('#item'+i).val()], $('#p1Item'+i).val(), annual_income,
						_this.CATEGORYNAME[_this.CATEGORYMAP[i-1]][lang], _this.CATEGORYNAME[_this.CATEGORYMAP[i-1]][2]);
				}

				if (_this.OTHERFIELDMAP[otherItemIndex]==i){
					subAmount = 0;
					if (_this.isValidatedNum($('#p1otherItem'+otherItemIndex).val()) && $('#p1otherItem'+otherItemIndex).val()>0){
						otherItemName=$('#otherName'+otherItemIndex).val();
						if (otherItemName==''){
							otherItemName='---';
						}
						_this.insertToArray(otherItemName, _this.PERIODFACTOR[$('#iotherSelect'+otherItemIndex).val()], $('#p1otherItem'+otherItemIndex).val(), annual_income,
							_this.CATEGORYNAME[otherItemIndex-1][lang], _this.CATEGORYNAME[otherItemIndex-1][2]);
						subAmount += _this.PERIODFACTOR[$('#iotherSelect'+otherItemIndex).val()] * $('#p1otherItem'+otherItemIndex).val();
					}
					if (_this.isValidatedNum($('#p1otherItem'+otherItemIndex+'_2').val()) && $('#p1otherItem'+otherItemIndex+'_2').val()>0){
						otherItemName=$('#otherName'+otherItemIndex+'_2').val();
						if (otherItemName==''){
							otherItemName='---';
						}
						_this.insertToArray(otherItemName, _this.PERIODFACTOR[$('#iotherSelect'+otherItemIndex+'_2').val()], $('#p1otherItem'+otherItemIndex+'_2').val(), annual_income,
							_this.CATEGORYNAME[otherItemIndex-1][lang], _this.CATEGORYNAME[otherItemIndex-1][2]);
						subAmount += _this.PERIODFACTOR[$('#iotherSelect'+otherItemIndex+'_2').val()] * $('#p1otherItem'+otherItemIndex+'_2').val();
					}
					if (_this.isValidatedNum($('#p1otherItem'+otherItemIndex+'_3').val()) && $('#p1otherItem'+otherItemIndex+'_3').val()>0){
						otherItemName=$('#otherName'+otherItemIndex+'_3').val();
						if (otherItemName==''){
							otherItemName='---';
						}
						_this.insertToArray(otherItemName, _this.PERIODFACTOR[$('#iotherSelect'+otherItemIndex+'_3').val()], $('#p1otherItem'+otherItemIndex+'_3').val(), annual_income,
							_this.CATEGORYNAME[otherItemIndex-1][lang], _this.CATEGORYNAME[otherItemIndex-1][2]);
						subAmount += _this.PERIODFACTOR[$('#iotherSelect'+otherItemIndex+'_3').val()] * $('#p1otherItem'+otherItemIndex+'_3').val();
					}

					_this.CUTBACKCATEGORYLIST[otherItemIndex-1][1] += parseFloat(subAmount);
					otherItemIndex++;
				}
			}

			//other section
			if (_this.isValidatedNum($('#p1otherItem'+otherItemIndex).val()) && $('#p1otherItem'+otherItemIndex).val()>0){
				otherItemName=$('#otherName'+otherItemIndex).val();
				if (otherItemName==''){
					otherItemName='---';
				}
				_this.insertToArray(otherItemName, _this.PERIODFACTOR[$('#iotherSelect'+otherItemIndex).val()], $('#p1otherItem'+otherItemIndex).val(), annual_income,
					_this.CATEGORYNAME[otherItemIndex-1][lang], _this.CATEGORYNAME[otherItemIndex-1][2]);
				subAmount += _this.PERIODFACTOR[$('#iotherSelect'+otherItemIndex).val()] * $('#p1otherItem'+otherItemIndex).val();
			}
			if (_this.isValidatedNum($('#p1otherItem'+otherItemIndex+'_2').val()) && $('#p1otherItem'+otherItemIndex+'_2').val()>0){
				otherItemName=$('#otherName'+otherItemIndex+'_2').val();
				if (otherItemName==''){
					otherItemName='---';
				}
				_this.insertToArray(otherItemName, _this.PERIODFACTOR[$('#iotherSelect'+otherItemIndex+'_2').val()], $('#p1otherItem'+otherItemIndex+'_2').val(), annual_income,
					_this.CATEGORYNAME[otherItemIndex-1][lang], _this.CATEGORYNAME[otherItemIndex-1][2]);
				subAmount += _this.PERIODFACTOR[$('#iotherSelect'+otherItemIndex+'_2').val()] * $('#p1otherItem'+otherItemIndex+'_2').val();
			}
			if (_this.isValidatedNum($('#p1otherItem'+otherItemIndex+'_3').val()) && $('#p1otherItem'+otherItemIndex+'_3').val()>0){
				otherItemName=$('#otherName'+otherItemIndex+'_3').val();
				if (otherItemName==''){
					otherItemName='---';
				}
				_this.insertToArray(otherItemName, _this.PERIODFACTOR[$('#iotherSelect'+otherItemIndex+'_3').val()], $('#p1otherItem'+otherItemIndex+'_3').val(), annual_income,
					_this.CATEGORYNAME[otherItemIndex-1][lang], _this.CATEGORYNAME[otherItemIndex-1][2]);
				subAmount += _this.PERIODFACTOR[$('#iotherSelect'+otherItemIndex+'_3').val()] * $('#p1otherItem'+otherItemIndex+'_3').val();
			}

			_this.CUTBACKCATEGORYLIST[otherItemIndex-1][1] += parseFloat(subAmount);

			_this.CUTBACKLIST = _this.CUTBACKLIST.sort(function(a,b) {
			  return ((a[1] > b[1]) ? -1 : ((a[1] < b[1]) ? 1 : 0));
			});

			$('.cutback .cutback-wrapper ul.tab li a').removeClass('active');
			$('.form-wrapper').children().removeClass('active');
			$('.cutback .cutback-wrapper ul.tab li').hide();
			$('.tab-report, .summaryContainer, .rating table, .report').show();

			_this.SAVEAMOUNT = dollar_sign+_this.formatPrice(_this.TOTALSAVEAMOUNT);
			$('p span.price').html(_this.SAVEAMOUNT);

			if (annual_income > 0){
				var percent=(_this.TOTALSAVEAMOUNT/annual_income)*100;
				_this.PERCENTINCOME = percent.toFixed(_this.LENGTH);
				$('.incomePercent').html(_this.PERCENTINCOME);
				$('.annualIncome').show();
			} else {
				$('.annualIncome').hide();
			}

			var totalItem=_this.CUTBACKLIST.length;

			
			if (totalItem > _this.MAXITEM){
				totalItem=_this.MAXITEM;
			}
			

			/*
			for (i=0;i<totalItem;i++){
				$('.rating table tr').eq(i).show();
				$('.savingItem').eq(i).html(_this.CUTBACKLIST[i][0]);
				$('.savingAmount').eq(i).html(dollar_sign+_this.formatPrice(_this.CUTBACKLIST[i][1]));
			}
			*/
			var itemIndex=0;
			for (i=0;i<totalItem;i++){
				if (i < 3){
					$('.billboardContainer .billboardCol').eq(i).show();
					$('.catIcon').eq(i).attr('src', '../images/common/calculator/'+_this.CUTBACKLIST[i][4]);
					$('.catIcon').eq(i).attr('alt', _this.CUTBACKLIST[i][3]);
					$('.billboardCat').eq(i).html(_this.CUTBACKLIST[i][3]);
					$('.billboardItem').eq(i).html(_this.CUTBACKLIST[i][0]);
					$('.billboardPrice').eq(i).html(dollar_sign+_this.formatPrice(_this.CUTBACKLIST[i][1]));
					$('.billboardPercent').eq(i).html(_this.CUTBACKLIST[i][2]);
				} else {
					$('.otherSavings').show();
					$('.otherCol').eq(itemIndex).show();
					$('.otherCatIcon').eq(itemIndex).attr('src', '../images/common/calculator/'+_this.CUTBACKLIST[i][4]);
					$('.otherCatIcon').eq(itemIndex).attr('alt', _this.CUTBACKLIST[i][3]);
					$('.otherCat').eq(itemIndex).html(_this.CUTBACKLIST[i][3]);
					$('.otherItem').eq(itemIndex).html(_this.CUTBACKLIST[i][0]);
					$('.otherPrice').eq(itemIndex).html(dollar_sign+_this.formatPrice(_this.CUTBACKLIST[i][1]));

					itemIndex++;
				}
			}

			/*
			var data = [];
			var seriesLabel = [];

			for(i = 0; i < _this.OTHERFIELDTOTAL; i++) {
				data[i] = [_this.CUTBACKCATEGORYLIST[i][0], parseFloat(_this.CUTBACKCATEGORYLIST[i][1])];
			}

			_this.generatePie('chart', data);


			data = [];
			for(i = 0; i < totalItem; i++) {
				data[i] = [parseFloat(_this.CUTBACKLIST[i][1])];
				seriesLabel.push({
					label: _this.CUTBACKLIST[i][0]
				});
			}

			_this.generateBar('barChart', data, seriesLabel);
			*/

		}

	},
	insertToArray : function(name, period, value, annualIncome, category, cateIcon) {
		var _this = this,
			subAmount = 0,
			income_percent = 0;

			subAmount = period * value;
			if (annualIncome > 0){
				income_percent = (subAmount / annualIncome) * 100;
			} else {
				income_percent = 0;
			}
			
			_this.TOTALSAVEAMOUNT += subAmount;
			_this.CUTBACKLIST.push([name, subAmount, income_percent.toFixed(_this.LENGTH), category, cateIcon]);
	},
	formatPrice : function(price) {
		var _this = this;
		return price.toFixed(_this.LENGTH).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
	},
	closeAllItem : function() {
		$('.expand-list').children('li').removeClass('open');
	},
	getLangInt : function() {
		return (window.location.href.search('/en/') !== -1) ? 0 : 1;
	},
	generateBar : function(id, data, seriesData) {
		var colorArray = ['#1c94a4', '#8e7355', '#9dbf8d', '#dc543a', '#91bdd8', '#ac63e9', '#fe6965', '#ecb284', '#7e8aa2', '#466673'];
		var _this = this;

		var plot = $.jqplot(id, data, {
			seriesColors : colorArray,
			seriesDefaults: {
				renderer:$.jqplot.BarRenderer,
				// Show point labels to the right ('e'ast) of each bar.
				// edgeTolerance of -15 allows labels flow outside the grid
				// up to 15 pixels. If they flow out more than that, they
				// will be hidden.
				pointLabels: { show: true, location: 'e', edgeTolerance: -15},
				// Rotate the bar shadow as if bar is lit from top right.
				shadowAngle: 135,
				shadow : false,
				// Here's where we tell the chart it is oriented horizontally.
				rendererOptions: {
					barDirection: 'horizontal',
					barWidth: 25
					// Set varyBarColor to tru to use the custom colors on the bars.
					//varyBarColor: true
				}
			},
			legend: {
				show: true,
				location: 's',
				placement: 'outsideGrid'
			},
			grid : {
				drawBorder : false,
				shadow : false,
				background : '#ffffff',
				borderColor : '#727272',
				borderWidth : 0.3
			},
			axes: {
				xaxis: {
					//labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
					label: 'Amount (HKD)',
					labelOptions: {
						show: true,
						fontSize: '9pt'
					},
					tickOptions : {formatString : "%'.1f", showGridline : true}
				},
				yaxis: {
					renderer: $.jqplot.CategoryAxisRenderer,
					ticks: ['']
				}
			},
			axesDefaults : {
				tickRenderer: $.jqplot.CanvasAxisTickRenderer,
				tickOptions : {
				  angle : -30,
				  fontSize : '9pt',
				  fontFamily : 'Arial',
				  textColor : '#727272'
				},
				min : 0,
				pad : 1.2
			},
			series: seriesData
		});

		$(".jqplot-yaxis").hide();

	},
	generatePie : function(id, data) {
		var colorArray = ['#1c94a4', '#8e7355', '#9dbf8d', '#dc543a', '#91bdd8', '#ac63e9', '#fe6965', '#ecb284', '#7e8aa2', '#466673'];
		var _this = this;

		// fixed IE8 100% issue
		var startA = 270,
			count=0;
		for(var i = 0; i < data.length; i++) {
			if(data[i][1] >0) {
				count++;
			}
		}
		if (count ==1){
			startA = 0;
		}

		$.jqplot(id, [data], {
			seriesDefaults : {
				renderer : jQuery.jqplot.PieRenderer,
				rendererOptions : {
					showDataLabels: true,
					highlightMouseOver: false,
					startAngle : startA
				},
				shadow : false
			},
			legend : {
				show : true,
				location : 'e'
			},
			grid : {
				drawBorder : false,
				shadow : false,
				background : '#ffffff',
				borderColor : '#727272',
				borderWidth : 0.3
			},
			seriesColors : colorArray
		});

	},
	resetReport : function() {
		$('.savings, .summaryContainer, .billboardCol').hide();
		this.CUTBACKLIST = [];
	},
	prepareBarDataForPdf : function() {
		var _this=this,
			i=0,
			return_val='';

		if (_this.CUTBACKLIST.length > 0){
			for (i=0;i<_this.CUTBACKLIST.length;i++){
				return_val += _this.CUTBACKLIST[i][0]+' : '+_this.CUTBACKLIST[i][1]+' : '+_this.CUTBACKLIST[i][2]+' : '+_this.CUTBACKLIST[i][3]+' : '+_this.CUTBACKLIST[i][4]+' , ';
			}
			return_val=return_val.slice(0, -3);
		}
		
		return return_val;
	},
	preparePieDataForPdf : function() {
		var _this=this,
			i=0,
			return_val='';

		if (_this.CUTBACKCATEGORYLIST.length > 0){
			for (i=0;i<_this.CUTBACKCATEGORYLIST.length;i++){
				return_val += _this.CUTBACKCATEGORYLIST[i][0]+' : '+_this.CUTBACKCATEGORYLIST[i][1]+' , ';
			}
			return_val=return_val.slice(0, -3);
		}

		return return_val;
	},
	getSaveAmount : function() {
		var _this=this;

	}
	
};