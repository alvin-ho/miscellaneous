var ONLOADED = window.onload || function() {};

//window.onload = function() {
$(document).ready(function() {
	
	var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1; // en & tc
	var nowedit = 0;
	$('#totalrepay').val(0);
	$('#totalrepay_revised').val(0);
	var currenttop = 0;

	$('<a href="debt_disclaimer.html?date=' + new Date().getTime() + '" style="display:none;" class="disclaimer" />').fancybox({
		'type':'iframe',
		'height':350,
		'width':900,
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
		if(currentURL.search('/en/debt.html') !== -1) {
			fbLink = FB_LINK.debt_en;
		}else if(currentURL.search('/tc/debt.html') !== -1) {
			fbLink = FB_LINK.debt_tc;
		}

		$('a.btn_shareFB').each(function() {
			$(this).click(function(e) {
				e.preventDefault();
				
				fbShareTracking(lang);
				
				var page = window.location.href;
				window.open(FB_LINK.fb + '?u=' + encodeURIComponent(fbLink), 'newwindow', 'width=700, height=410, top=0, left=0, toolbar=no, menubar=no, scrollbars=yes, resizable=yes,location=no, status=no');
			});
		});
	}

	if($('a.tellus').length > 0) {
		$('a.tellus').click(function(e) {
			e.preventDefault();
			var aHref = '';
			var subject = '';
			var content = '';

			subject = 'Feedback on Debt Calculator';
			content = ''
			aHref = 'mailto:info@thechinfamily.hk' + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(content);
			window.location = aHref;
		});
	}
	
	$('.ratingClick').click(function(e) {
	
		ratingTracking(lang, $(this).val());
		//$('.ratingStart').hide();
		//$('.ratingThanks').show();
	});
	
	$('.tac .btn').live( "click", function(e) {
		e.preventDefault();
		
		//clickDisclaimerTracking(lang);
	});
	
	if($('a.btn_mailTo').length > 0) {
		$('a.btn_mailTo').each(function() {

			$(this).click(function(e) {
				e.preventDefault();
				
//				emailShareTracking(lang);
				
				var aHref = '';
				var subject = '';
				var content = '';

				
				
				if(lang==0){
					subject = 'Debt Calculator';
					content = 'Use our calculator to get an overview of all your personal debts and our options and tips to help you manage your debts effectively.\n' + window.location.href;
				}else{
					subject = '債務計算機';
					content = '使用債務計算機助你了解個人的債務概況，並參考有關提示和建議方案，讓你妥善地管理債務。\n' + window.location.href;
				}
					
				
				
				aHref = 'mailto:info@thechinfamily.hk' + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(content);			

				window.location = aHref;
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

	if($('form#debt_form').length > 0) { // debt calculator
		
		DebtCalculator.bindEventListeners(); //refresh on load

		// serializable field
		$('a.btn_serialize').click(function(e) {
			e.preventDefault();
			DebtCalculator.serializeOthersField(this, -1, 0);
		});
		$('a.btn_deserialize').click(function(e) {
			e.preventDefault();
			DebtCalculator.deserializeOthersField(DebtCalculator, this);
		});

		//credit card calc
		$('.ccard a.btn_calc').click(function(e) {
			e.preventDefault();

			/*GA*/
//			calculateCreditCardTracking(lang);
			
			//Find Tab
			//var id = $(".tab li a.active").attr("id");
			
			//reset array
			DebtCalculator.DEBTLIST=[];
			
			//insert array
			var ValidPass = 0;
			for (i=0;i<=tab_index;i++)
			{
				DebtCalculator.Currenttab=i;
				if(DebtCalculator.checkingitem(i)!=false){
					ValidPass++;
				}else{
					return false;
				}
			}
			
			
			if(ValidPass==tab_index+1){
				//button active
				$(".report_cc .higher .btn_default").addClass('active');
				
				//content
				$('.debt .debt-wrapper .form-wrapper .form-innerwrapper').removeClass('active');
				$('.report_cc').show();
				$('.report_cc .notice').show();
				
				//Tab
				/*
				$('.debt .debt-wrapper ul.tab li').hide();
				*/
				
				//display summary
				DebtCalculator.distributionCCL();
				DebtCalculator.CCSummary();
				
				//CCL Chart
				if(DebtCalculator.EditStatus==0){
					DebtCalculator.Create_CCLChart();
				}else{
					DebtCalculator.Create_CCLChartEdit();
				}

				//calc sort
				DebtCalculator.SortDebtArray(1);
				DebtCalculator.SortDebtArray(2);
				DebtCalculator.SortDebtArray(3);
				
				//hidden
				
				
			}
		});

		//personal loan calc
		$('.loan a.btn_calc').click(function(e) {
			e.preventDefault();
			
			//calculatePersonalLoanTracking(lang);
			
			//reset array
			DebtCalculator.LOANLIST=[];
			
			//insert array
			var ValidPass = 0;
			for (i=0;i<=tab2_index;i++)
			{
				DebtCalculator.Currentloan=i;
				if(DebtCalculator.checkingloanitem(i)!=false){
					ValidPass++;
				}else{
					return false;
				}
			}
			
			//
			if(ValidPass==tab2_index+1){
				//content
				$('.debt .debt-wrapper .form-wrapper .form-innerwrapper').removeClass('active');
				$('.report_pl').show();
				
				//show overview1
				DebtCalculator.pl_overview();
				DebtCalculator.pl_summary();
				//generate PL_chart
				DebtCalculator.Create_PLChart();
			}
		});
		
		//Other loan calc
		
		$('.otherloan a.btn_calc').click(function(e) {
			e.preventDefault();
			
			//calculateOtherLoanTracking(lang);
			
			//reset array
			DebtCalculator.OTHERLOANLIST=[];
			
			//insert array
			var ValidPass = 0;
			for (i=0;i<=tab3_index;i++)
			{
				DebtCalculator.Currentotherloan=i;
				if(DebtCalculator.checkingotherloanitem(i)!=false){
					ValidPass++;
				}else{
					return false;
				}
			}
			
			
			//
			if(ValidPass==tab3_index+1){
				//content
				$('.debt .debt-wrapper .form-wrapper .form-innerwrapper').removeClass('active');
				$('.report_ol').show();
				
				//show overview1
				DebtCalculator.ol_overview();
				DebtCalculator.ol_summary();
				//generate PL_chart
				DebtCalculator.Create_OLChart();
			}
		});
		
		$(".expand-list li").click(function(e) {
			for (i=1;i<=10;i++)
			{
			  var listItem = $('.open.tab'+i);
			}

			//var listopenTotal= $(".expand-list li.open").size()
		});
		
		$('.close-all').click(function(e){
			e.preventDefault();
			DebtCalculator.closeAllItem();
		});

		$('.reportTitle').click(function(e){
			e.preventDefault();
			return false;
		});

		$('.ccard a.btn_reset').click(function(e) {
			e.preventDefault();
			$('.ccard input').each(function() {
				if($(this).hasClass('txtOthers')) {
					$(this).val('');
				}else if($(this).hasClass('interest')){
					$(this).val('0');
				}else if($(this).hasClass('minterest')){
					$(this).val('0');
				}else {
					$(this).val('0');
				}
			});

			//income
			$('.income_type').val('0');
			
			$('.tab-report, .report_cc').hide();
			$('.form-innerwrapper').eq(0).addClass('active');
			DebtCalculator.reset_cc_Report();

			$('.ccard .result_summary').hide();
			$(".higher .btn").removeClass('active');
			
			
			for (i=1;i<10;i++)
			{
			  $(".ccard .expand-list .tab"+i).remove();
			}
			
			//reset current tab
			tab_index = 0;
			
			//reset Hidden
			$("#save_cc_dsr").val(0);

			$('#cc_sum_data').val("0 / 0 / 0 / 0 / 0");
			$('#cc_list_data').val("0 / 0 / 0 / 0 / 0 / 0 / 0");
			$('#cc_data').val("0 / 0 / 0 / 0 / 0 / 0 / 0");
			
			$('#view_sum_data').val(DebtCalculator.DOLLARPREFIX[lang]+" 0.0 / "+DebtCalculator.DOLLARPREFIX[lang]+" 0.0 / 0 "+DebtCalculator.DATEFORMAT[lang][2]+" / 0");
			
			DebtCalculator.clearOverviewCC(".all_loan .cc-all");
			
		});
		
		$('.loan a.btn_reset').click(function(e) {
			e.preventDefault();
			$('.loan input').each(function() {
				if($(this).hasClass('txtOthers')) {
					$(this).val('');
				}else if($(this).hasClass('interest')){
					$(this).val('0');
				}else if($(this).hasClass('minterest')){
					$(this).val('0');
				}else {
					$(this).val('0');
				}
			});

			$(".loan .period").val(0);
			
			//income
			$('.income_type').val('0');
			
			
			$('.tab-report, .report_pl').hide();
			$('.form-innerwrapper').eq(1).addClass('active');
			DebtCalculator.reset_pl_Report();

			$('.loan .repay_summary span').html(DebtCalculator.DOLLARPREFIX[lang]+" 0");
			
			for (i=1;i<10;i++)
			{
			  $(".loan .expand-list .tabloan"+i).remove();
			}
			//reset current tab
			tab2_index = 0;
			
			//reset Hidden
			$("#save_pl_dsr").val(0);
			$('#hpl_sum_data').val("0 / 0 / 0 / 0 / 0");
			$('#hpl_list_data').val("0 / 0 / 0 / 0 / 0 / 0 / 0");
			$('#hpl_data').val("0 / 0 / 0 / 0 / 0 / 0 / 0");
			
			$('#view_sum_data').val(DebtCalculator.DOLLARPREFIX[lang]+" 0.0 / "+DebtCalculator.DOLLARPREFIX[lang]+" 0.0 / 0 "+DebtCalculator.DATEFORMAT[lang][2]+" / 0");
			
			DebtCalculator.clearOverviewLoan(".all_loan .pl-all");
		});
		
		$('.otherloan a.btn_reset').click(function(e) {
			e.preventDefault();
			$('.otherloan input').each(function() {
				if($(this).hasClass('txtOthers')) {
					$(this).val('');
				}else if($(this).hasClass('interest')){
					$(this).val('0');
				}else if($(this).hasClass('minterest')){
					$(this).val('0');
				}else {
					$(this).val('0');
				}
			});
			
			$('.tab-report, .report_ol').hide();
			$('.form-innerwrapper').eq(2).addClass('active');
			DebtCalculator.reset_ol_Report();

			//income
			$('.income_type').val('0');
			
			$('.otherloan .repay_summary span').html(DebtCalculator.DOLLARPREFIX[lang]+" 0");
			
			for (i=1;i<10;i++)
			{
			  $(".otherloan .expand-list .tabotherloan"+i).remove();
			}
			//reset current tab
			tab3_index = 0;
			
			//reset hidden
			$("#save_ol_dsr").val(0);
			$('#ol_sum_data').val("0 / 0 / 0 / 0 / 0");
			$('#ol_list_data').val("0 / 0 / 0 / 0 / 0 / 0 / 0");
			$('#ol_data').val("0 / 0 / 0 / 0 / 0 / 0 / 0");
			$('#view_sum_data').val(DebtCalculator.DOLLARPREFIX[lang]+" 0.0 / "+DebtCalculator.DOLLARPREFIX[lang]+" 0.0 / 0 "+DebtCalculator.DATEFORMAT[lang][2]+" / 0");
			
			DebtCalculator.clearOverviewOther(".all_loan .ol-all");
			
		});
		
		$('.report_cc a.btn_edit').click(function(e) {
			e.preventDefault();
			
			$('.tab-report, .report_cc').hide();
			$('.tab-report, .report_pl').hide();
			$('.tab-report, .report_ol').hide();
			
			$('.form-innerwrapper').eq(0).addClass('active');

			$(".higher .btn").removeClass('active');
			
			//DebtCalculator.EditStatus = 0;
			
			//$('.debt .debt-wrapper ul.tab li a.active').removeClass('active');
			//$('.debt .debt-wrapper ul.tab li').eq(0).children('a').addClass('active');
		});
		
		$('.report_pl a.btn_edit').click(function(e) {
			e.preventDefault();
			
			$('.tab-report, .report_cc').hide();
			$('.tab-report, .report_pl').hide();
			$('.tab-report, .report_ol').hide();
			
			$('.form-innerwrapper').eq(1).addClass('active');

			//DebtCalculator.EditStatus = 0;
			
			//$('.debt .debt-wrapper ul.tab li a.active').removeClass('active');
			//$('.debt .debt-wrapper ul.tab li').eq(1).children('a').addClass('active');
		});
		
		$('.report_ol a.btn_edit').click(function(e) {
			e.preventDefault();
			
			$('.tab-report, .report_cc').hide();
			$('.tab-report, .report_pl').hide();
			$('.tab-report, .report_ol').hide();
			
			$('.form-innerwrapper').eq(2).addClass('active');

			//DebtCalculator.EditStatus = 0;
			
			//$('.debt .debt-wrapper ul.tab li a.active').removeClass('active');
			//$('.debt .debt-wrapper ul.tab li').eq(2).children('a').addClass('active');
		});

		//Pdf tab1
		$('.report_cc a.btn_save_pdf').live( "click", function(e) {
			e.preventDefault();

			//downloadCreditCardPDFTracking(lang);
			
			$('#debt_form').attr('action', '../pdfDebt.do?lang=' + lang);

			$('#cc_data').val(DebtCalculator.prepareDataForPdf());
			$('#cc_list_data').val(DebtCalculator.prepareDataForPdfList());
			//$('#totalrepay').val(DebtCalculator.totalrepay());
			
			$('#cc_data_by_debt').val(DebtCalculator.prepareDataForPdfByDebt());
			$('#cc_data_by_period').val(DebtCalculator.prepareDataForPdfByPeriod());
			$('#cc_data_by_rate').val(DebtCalculator.prepareDataForPdfByRate());
			
			$('#debt_form').submit();
		});
		
		//Pdf tab2
		$('.report_pl a.btn_save_pdf').live( "click", function(e) {
			e.preventDefault();

			//downloadPersonalLoanPDFTracking(lang);
			
			$('#debt_form').attr('action', '../pdfDebt.do?lang=' + lang);

			$('#hpl_data').val(DebtCalculator.prepareDataForPdfPL());
			$('#hpl_list_data').val(DebtCalculator.prepareDataForPdfListPL());
			
			
			$('#debt_form').submit();
		});
		
		//Pdf tab3
		$('.report_ol a.btn_save_pdf').live( "click", function(e) {
			e.preventDefault();

			//downloadOtherLoanPDFTracking(lang);
			
			$('#debt_form').attr('action', '../pdfDebt.do?lang=' + lang);

			$('#ol_data').val(DebtCalculator.prepareDataForPdfOL());
			$('#ol_list_data').val(DebtCalculator.prepareDataForPdfListOL());
			
			
			$('#debt_form').submit();
		});
		
		//Pdf tab4
		$('.all_loan a.btn_save_pdf').live( "click", function(e) {
			e.preventDefault();

			//downloadOverviewPDFTracking(lang);
			
			$('#debt_form').attr('action', '../pdfDebt.do?lang=' + lang);
			
			if(DebtCalculator.DEBTLIST.length>0){
				$('#cc_list_data').val(DebtCalculator.prepareDataForPdfList());
			}
			if(DebtCalculator.LOANLIST.length>0){
				$('#hpl_list_data').val(DebtCalculator.prepareDataForPdfListPL());
			}
			if(DebtCalculator.OTHERLOANLIST.length>0){
				$('#ol_list_data').val(DebtCalculator.prepareDataForPdfListOL());
			}
			
			
			$('#debt_form').submit();
		});

		$('a.btn_compare_save_pdf').live( "click", function(e) {
			e.preventDefault();

			$('#debt_form').attr('action', '../pdfDebt.do?lang=' + lang);

			$('#cc_data').val(DebtCalculator.prepareDataForRevisedPdf());
			
			$('#debt_form').submit();
		});

		$('a.btn_save_excel').click(function(e) {
			e.preventDefault();

			$('#debt_form').attr('action', '../excelDebtServlet.do?lang=' + lang);
			$('#debt_form').attr('target', '_self');
			$('#debt_form').submit();

		});

		$('.toolTips').hover(function() {
					$(this).children('span').css({
						'display' : 'block',
						'width' : 210,
						'left' : $(this).width()
					});
				}, function() {
					$(this).children('span').css('display', 'none');
				});	
	}
	
	$( "body" ).click(function() {
		//DebtCalculator.checkingitem(DebtCalculator.Currenttab);
	});
	
	//test
	$(".ccard ul.expand-list li").live( "click", function(e) {
		e.preventDefault();
		//alert($(this).index());
		DebtCalculator.Currenttab = $(this).index();
		var tab = DebtCalculator.Currenttab;
		
	});
	/*
	$( ".ccard .debt1, .ccard .debt2, .ccard .interest, .ccard .debt4" ).live( "click", function(e) {
		e.preventDefault();
		var id = $( this ).attr("name");
		var secondchar = id.substr(1, 1); //get the second 1 char
		DebtCalculator.Currenttab = secondchar;
		
		//test
		$(".tab0 .topic").html(DebtCalculator.Currenttab);
	});
	*/
	$( ".loan .debt1,.loan .period, .loan .debt2, .loan .interest" ).live( "click", function(e) {
		e.preventDefault();
		var id = $( this ).attr("name");
		var secondchar = id.substr(1, 1); //get the second 1 char
		DebtCalculator.Currentloan = secondchar;
	});

	$( ".otherloan .debt1,.otherloan .period, .otherloan .debt2, .otherloan .interest" ).live( "click", function(e) {
		e.preventDefault();
		var id = $( this ).attr("name");
		var secondchar = id.substr(1, 1); //get the second 1 char
		DebtCalculator.Currentotherloan = secondchar;
	});
	
	/*
	$( ".expand-list li :input" ).click(function() {
		DebtCalculator.checkingitem(DebtCalculator.Currenttab);
		var id = $( this ).parent().attr('class');	
		
		alert(DebtCalculator.Currenttab);
		if(id.length<5) {
			var two = id.substr(3, 1); //get the second 1 char
			DebtCalculator.Currenttab = two;
		}	
	});
	*/
	/*
	$(".btn_explore").click(function() {
		DebtCalculator.exploreEdit();
		DebtCalculator.EditStatus = 1;
		nowedit = 1;
	});
	*/
	$(".btn_compare").click(function() {
	
	   if(nowedit==1){
			for (i=1;i<=DebtCalculator.DEBTLIST.length;i++){
				DebtCalculator.EditTab = i;
				DebtCalculator.calculate();
			}	
			DebtCalculator.distributionCCL();
			$('.jqplot-xaxis-tick').css("left", "+=46");
			nowedit =0;
			
			//change revised input value class
			$('.btn_save_pdf').removeClass('btn_save_pdf').addClass('btn_compare_save_pdf');
		}
				
	});
	
	//clone
	var tab_index=0;
	$('a.btn_addother').live( "click", function(e) {
		e.preventDefault();
		
		
		if(tab_index==9){
			alert(DebtCalculator.ADDERRORMESSAGE[0][lang]);
		}else{
			//if(DebtCalculator.checkingitem(DebtCalculator.Currenttab)!=false){
				
				DebtCalculator.Currenttab++;
				tab_index++;
				
				//
				var cloned_el = $('li.tab0').clone(); 
				$(".ccard .expand-list").append('<li class="tab'+tab_index+' open">'+cloned_el.html()+'</li>');
				
				
				$("li.tab" + tab_index + " :input").each(function(){
					$(this).val("");
				});
				
				
				//change name
		        $("li.tab" +tab_index+" .debt1").attr("name","n"+tab_index+"item1");
		        $("li.tab" +tab_index+" .debt2").attr("name","p"+tab_index+"item2");
		        $("li.tab" +tab_index+" .interest").attr("name","p"+tab_index+"item3");
		        $("li.tab" +tab_index+" .debt4").attr("name","p"+tab_index+"item4");
		        $("li.tab" +tab_index+" .result_summary").attr("class","result_summary summary"+tab_index);
				
				//add value
				$("li.tab" + tab_index +" .debt2").val(0);
		        $("li.tab" + tab_index +" .interest").val(0);
				$("li.tab" + tab_index +" .debt4").val(0);
				
		        $("li.tab" + tab_index +" .result_summary").attr("style","");
		    //}
		}
	});
	
	//clone tab2
	var tab2_index=0;
	$('a.btn_addloan').live( "click", function(e) {
		e.preventDefault();

		
		if(tab2_index==9){
			alert(DebtCalculator.ADDERRORMESSAGE[1][lang]);
		}else{
		
			//if(DebtCalculator.checkingloanitem(DebtCalculator.Currentloan)!=false){
				DebtCalculator.Currentloan++;
				tab2_index++;
				/*
				$(this).parent().before($("li.tabloan0").clone().attr("class","tabloan" + tab2_index +" open"));
			
				$("li.tabloan" + tab2_index + " :input").each(function(){
					$(this).val("");
				});
				*/
				var cloned_el = $('li.tabloan0').clone(); 
				$(".loan .expand-list").append('<li class="tabloan'+tab2_index+' open">'+cloned_el.html()+'</li>');
				
				
				$("li.tabloan" + tab2_index + " :input").each(function(){
					$(this).val("");
				});
				
				//change name
		        $("li.tabloan" + tab2_index +" .debt1").attr("name","n"+tab2_index+"loan1");
		        $("li.tabloan" + tab2_index +" .debt2").attr("name","p"+tab2_index+"loan2");
				$("li.tabloan" + tab2_index +" .period").attr("name","p"+tab2_index+"loan3");
		        $("li.tabloan" + tab2_index +" .interest").attr("name","p"+tab2_index+"loan4");
				
				$("li.tabloan" + tab2_index +" .repay_summary").attr("class","repay_summary average_repay"+tab2_index);
				$("li.tabloan" + tab2_index +" .repay_summary").attr("name","p"+tab2_index+"loan5");
		        
				//value
				$("li.tabloan" + tab2_index +" .debt2").val(0);
				$("li.tabloan" + tab2_index +" .interest").val(0);
				
				$(".average_repay"+DebtCalculator.Currentloan+" span").html(DebtCalculator.DOLLARPREFIX[0]+" 0");
		    //}
		}
	});
	
	
	//clone tab3
	var tab3_index=0;
	$('a.btn_addotherloan').live( "click", function(e) {
		e.preventDefault();
		
		
		if(tab3_index==9){
			alert(DebtCalculator.ADDERRORMESSAGE[1][lang]);
		}else{
			//if(DebtCalculator.checkingotherloanitem(DebtCalculator.Currentotherloan)!=false){
				DebtCalculator.Currentotherloan++;
				tab3_index++;
	
				var cloned_el = $('li.tabotherloan0').clone(); 
				$(".otherloan .expand-list").append('<li class="tabotherloan'+tab3_index+' open">'+cloned_el.html()+'</li>');
			
				$("li.tabotherloan" + tab3_index + " :input").each(function(){
					$(this).val("");
				});
			
				//change name
		        $("li.tabotherloan" + tab3_index +" .debt1").attr("name","n"+tab3_index+"otherloan1");
		        $("li.tabotherloan" + tab3_index +" .debt2").attr("name","p"+tab3_index+"otherloan2");
				$("li.tabotherloan" + tab3_index +" .period_year").attr("name","p"+tab3_index+"otherloan3");
		        $("li.tabotherloan" + tab3_index +" .period_month").attr("name","p"+tab3_index+"otherloan4");
				$("li.tabotherloan" + tab3_index +" .interest").attr("name","p"+tab3_index+"otherloan5");
				$("li.tabotherloan" + tab3_index +" .repay_summary").attr("class","repay_summary average_repay"+tab3_index);
		        
				//value
				$("li.tabotherloan" + tab3_index +" .debt2").val(0);
				$("li.tabotherloan" + tab3_index +" .period_year").val(0);
				$("li.tabotherloan" + tab3_index +" .period_month").val(0);
				$("li.tabotherloan" + tab3_index +" .interest").val(0);
				
				$(".otherloan .average_repay"+DebtCalculator.Currentotherloan+" span").html(DebtCalculator.DOLLARPREFIX[lang]+" 0");
		    //}
		}
	});
	
		//switch tab
		$('.calcContainer .tab a').click(function(){
			
				var _this = $(this),
				formWrapper = $('.form-wrapper'),
				thisIndex = _this.parent().index();
				
				$('.calcContainer ul.tab li a').removeClass('active');
				_this.addClass('active');
				formWrapper.children().removeClass('active');
				formWrapper.children().eq(thisIndex).addClass('active');
				
				
				if($('div.summary_panel').length > 0) {
					$('div.summary_panel').remove();
					$('div.panel_wrapper').css('display', 'block');
					$('div.chart_wrapper').css('display', 'none');
				}
				
				//hide report
				$('.report_cc').hide();
				$('.report_pl').hide();
				$('.report_ol').hide();
				
				//save current tab to hidden field
				$('#current_tab').val(thisIndex);
				//same to var current tab
				currenttop = thisIndex;
			
				if(thisIndex==3){ //show all loans
					
					//GA
					//clickOverviewTabTracking(lang);
					
					DebtCalculator.ShowAllSummary();
				}
			
		});
	
		//Typing delay (ccard)
		var typingTimer;                //timer identifier
		var typingTimerRe;
		var doneTypingInterval = 800;  //time in ms
		//on keyup, start the countdown 
		$('.ccard .debt1,.ccard .debt2, .ccard .interest, .ccard .debt4').live('keyup', function () {
		    typingTimer = setTimeout(doneTyping, doneTypingInterval);
		});
		//on keydown, clear the countdown 
		$('.ccard .debt1,.ccard .debt2, .ccard .interest, .ccard .debt4').live('keydown', function () {
		    clearTimeout(typingTimer);
		});
		//user is "finished typing," do something
		function doneTyping () {
		    DebtCalculator.autocheckingitem(DebtCalculator.Currenttab);
		}
		/*END Typing delay*/
	
		//Standard the income of 2 input
		$(".income_type").live('keyup', function () {
			var income = $(this).val();
			//set
			$("#monthly_income, #monthly_income2, #monthly_income3").val(income);
		});
	
		//(loan) auto
		//on keyup, start the countdown
		$('.loan .debt1,.loan .debt2,.loan .interest,.loan .period').live('keyup', function () {
		    typingTimer = setTimeout(doneLoanTyping, doneTypingInterval);
		});
		//on keydown, clear the countdown 
		$('.loan .debt1,.loan .debt2,.loan .interest,.loan .period').live('keydown', function () {
		    clearTimeout(typingTimer);
		});
		//user is "finished typing," do something
		function doneLoanTyping () {
		    DebtCalculator.autocheckingloanitem(DebtCalculator.Currentloan);
		}
		$( ".loan .period" ).live( "change", function( event ) {
			doneLoanTyping();
		});
		
		//(loan) auto2
		$('.loan .repay_summary').live('keyup', function () {
		    typingTimerRe = setTimeout(doneLoanTypingRe, doneTypingInterval);
		});
		//on keydown, clear the countdown 
		$('.loan .repay_summary').live('keydown', function () {
		    clearTimeout(typingTimerRe);
		});
		function doneLoanTypingRe () {
			DebtCalculator.autocheckingloanRe(DebtCalculator.Currentloan);
		}
		
		//otherloan auto
		$('.otherloan .debt1,.otherloan .debt2,.otherloan .interest,.otherloan .period_year,.otherloan .period_month').live('keyup', function () {
		    typingTimer = setTimeout(doneOtherLoanTyping, doneTypingInterval);
		});
		$('.otherloan .debt1,.otherloan .debt2,.otherloan .interest,.otherloan .period_year,.otherloan .period_month').live('keydown', function () {
		    clearTimeout(typingTimer);
		});
		function doneOtherLoanTyping () {
		    DebtCalculator.autocheckingotherloanitem(DebtCalculator.Currentotherloan);
		}
	
		//dialog
		var area = $('.debt');
		$('.ui-dialog').draggable( "option", "containment", '.debt' );  
		var window_width = $( document ).width();
		var window_height = $( document ).height();
		$( "#cc_dialog, #cc_dialog_mp" ).dialog({
				autoOpen: false,
			    show: {
			        effect: 'fade',
			        duration: 500
			    },
			    hide: {
			        effect: 'fade',
			        duration: 500
			    },
				title: " ",
				height: 250,
				width: 800,
				position: [(window_width/2)-(800/2),350],
				resizable: false
		}).parent().draggable({
        containment: ".debt"});
		
		$( "#cc_minrepay_dialog" ).dialog({
				autoOpen: false,
			    show: {
			        effect: 'fade',
			        duration: 500
			    },
			    hide: {
			        effect: 'fade',
			        duration: 500
			    },
				title: " ",
				height: 600,
				width: 800,
				position: [(window_width/2)-(800/2),350],
				resizable: false
		}).parent().draggable({
        containment: ".debt"});
		
		$( "#cc_change_period, #cc_change_amount, #cc_comparison_table, #PL_review" ).dialog({
				autoOpen: false,
			    show: {
			        effect: 'fade',
			        duration: 500
			    },
			    hide: {
			        effect: 'fade',
			        duration: 500
			    },
				title: " ",
				height: 600,
				width: 800,
				position: [(window_width/2)-(800/2),350],
				resizable: false
		}).parent().draggable({
        containment: ".debt"});

		$(".check_compare").live('click', function () {
			/*
				$(window).scrollTop(0);
				$("#cc_dialog").dialog("open");
			*/
			
			//checkComparisonTracking(lang);
			
			//set minrepay_dialog
			DebtCalculator.DONTKNOWMIN = 1;
			DebtCalculator.CCCalculateKnowMinRepayAmount();
			DebtCalculator.DONTKNOWMIN = 0;
			
			//input data to table
			DebtCalculator.CCVsTable();
			
			$(window).scrollTop(0);
			
			//show dialog
			$("#cc_comparison_table").dialog("open");
			//show chart
			DebtCalculator.CCL_chart_min_interest();
			DebtCalculator.CCL_chart_min_period();
			
			
    		return false;
		});
		
		
		$(".change_repayment").live('click', function () {
			$(window).scrollTop(0);
			
			//changeRepaymentAmountTracking(lang);
			
			//update div
			DebtCalculator.CCChangeSummary();
			DebtCalculator.CCLChangeamount();
			
			//dialog
			$("#cc_change_amount").dialog("open");
			//chart
			$("#CCL_chart_change_amount").html("");

    		return false;
		});
		
		
		$(".change_period").live('click', function () {
			$(window).scrollTop(0);
			
			//changeRepaymentPeriodTracking(lang);
			
			//update div
			DebtCalculator.CCChangeSummary();
			DebtCalculator.CCLChangeperiod();
			
			$("#cc_change_period").dialog("open");
			$("#CCL_chart_change_period").html("");
			
    		return false;
		});
		
		
		$(".btn_changeperiod").live('click', function () {
			
			var valid = 0;
			
			for (i=0;i<DebtCalculator.DEBTLIST.length;i++)
			{
				var period = $("[name=editperiod"+i+"]").val();
				
				if(period==0){
					alert(DebtCalculator.ALERTMESSAGE[2][lang]);
				}else{
					valid++;
				}
				
			}
			
			if(valid==DebtCalculator.DEBTLIST.length){
				DebtCalculator.CCCalculate_changeperiod();
				
				//show the edit chart
				DebtCalculator.Create_CCLChartEditPeriod();
				
				//refresh #cc_change_amount
				DebtCalculator.RefreshCCChangeSummary();
				//refresh #cc_change_list
				DebtCalculator.RefreshCCLChangeperiod();
			}
				
			
		});
		
		
		$(".btn_changeamount").live('click', function () {
			DebtCalculator.EditStatus=1;
			DebtCalculator.VALIDLOOP = 0;
			
			//load new order array
			var olddebt ="";
			olddebt = DebtCalculator.CurrentArray();
			
		
			//add to editdebt array
			for (i=0;i<olddebt.length;i++){
				DebtCalculator.EditTab = i;
			
				var name = olddebt[i][0];
				var amount = parseFloat(olddebt[i][5]);
				var interest =olddebt[i][6];
				var newrepay = parseFloat($("[name=editamount"+i+"]").val().replace(/,/g, ''));
			
				DebtCalculator.calculate(name,amount,interest,newrepay);
				
			}

			DebtCalculator.EditStatus=0;
			
			if(DebtCalculator.VALIDLOOP==DebtCalculator.DEBTLIST.length){
				//refresh #cc_change_amount
				DebtCalculator.RefreshCCChangeSummary();
				//refresh #cc_change_list
				DebtCalculator.RefreshCCLChangeamount();
				
				//show edited chart
				DebtCalculator.Create_CCLChartEditAmount();
			}
		});
	
		$(".btn_yes").live('click', function () {
			$("#cc_dialog").dialog('close');
			
			$(window).scrollTop(0);
			//set minrepay_dialog
			DebtCalculator.CCEditMinRepayAmount();
			
			$("#cc_minrepay_dialog").dialog("open");
			return false;
		});
		
		$(".btn_no, .mp_btn_no").live('click', function () {
			$("#cc_dialog").dialog('close');
			$("#cc_dialog_mp").dialog('close');
			
			//set minrepay_dialog
			DebtCalculator.DONTKNOWMIN = 1;
			DebtCalculator.CCCalculateKnowMinRepayAmount();
			DebtCalculator.DONTKNOWMIN = 0;
			
			//input data to table
			DebtCalculator.CCVsTable();
			
			$(window).scrollTop(0);
			
			//show dialog
			$("#cc_comparison_table").dialog("open");
			//show chart
			DebtCalculator.CCL_chart_min_interest();
			DebtCalculator.CCL_chart_min_period();
			
			return false;
		});
		
		
		//minpay calculate
		$(".btn_minrepay").live('click', function () {
			var valid = 0;
			DebtCalculator.VALIDLOOP = 0;
			
			for (i=0;i<DebtCalculator.DEBTLIST.length;i++)
			{
				var editvalue = parseFloat($("[name=editminamount"+i+"]").val().replace(/,/g, ''));
				var outstanding5 = parseFloat(DebtCalculator.DEBTLIST[i][5])*0.05;
				
				if(editvalue > outstanding5){
					//dialog
					$(window).scrollTop(0);
					$("#cc_minrepay_dialog").dialog("close");
					$("#cc_dialog_mp").dialog("open");
					
				}else{
					valid++;
				}
				
			}
			
			if(valid==DebtCalculator.DEBTLIST.length){
				DebtCalculator.CCCalculateKnowMinRepayAmount();

				if(DebtCalculator.VALIDLOOP==DebtCalculator.DEBTLIST.length){
					//input data to table
					DebtCalculator.CCVsTable();
					
					//show comparison table page
					$("#cc_minrepay_dialog").dialog('close');
					
					//show dialog
					$(window).scrollTop(0);
					$("#cc_comparison_table").dialog("open");
					
					//show chart
					DebtCalculator.CCL_chart_min_interest();
					DebtCalculator.CCL_chart_min_period();
				}
			}
		});
		
		//yes minpay 5%
		$(".mp_btn_yes").live('click', function () {
			$("#cc_dialog_mp").dialog("close");
			$(window).scrollTop(0);
			$("#cc_minrepay_dialog").dialog("open");
		});

		
		/*Tab2 Below(PL)*/
		//bar chart click
		$('#PL_chart').bind('jqplotDataClick',
			function (ev, seriesIndex, pointIndex, data) {
			  //alert(data[1]); //show which bar clicked
			  
			  //pop up
			  $(window).scrollTop(0);
			  $("#PL_review").dialog("open");
			  
			  //gen the PL review
			  DebtCalculator.Create_PLReview(data[1]);
			  
			}
		); 
		
		//bar chart notice
		/*
		$('#PL_chart, #OL_chart').bind('jqplotMouseEnter', 
			function (ev, seriesIndex, pointIndex, data) {
				$(".notice").show();
			}
		);
		$('#PL_chart, #OL_chart').bind('jqplotMouseLeave', 
			function (ev, seriesIndex, pointIndex, data) {
				$(".notice").hide();
			}
		);
		$( ".report_pl .notice, .report_ol .notice" ).mouseover(function() {
			$(".notice").show();
		}).mouseout(function() {
			$(".report_pl .notice, .report_ol .notice").hide();
		});
		*/
		
		/*overall*/
		$( ".btn_details_cc" ).live('click', function () {
			$( ".all_loan .cc-all .report-table, .all_loan .cc-all .notice" ).toggle( "slow" );
			$( this ).toggleClass( "highlight" );
			
			$('.cc-all .details .btn').html(DebtCalculator.OTHERNAME[1][lang]);
			$('.cc-all .details .highlight').html(DebtCalculator.OTHERNAME[2][lang]);
			
		});
		
		$( ".btn_details_pl" ).live('click', function () {
			$( ".all_loan .pl-all .report-table,.all_loan .pl-all .notice" ).toggle( "slow" );
			$( this ).toggleClass( "highlight" );
			
			$('.pl-all .details .btn').html(DebtCalculator.OTHERNAME[1][lang]);
			$('.pl-all .details .highlight').html(DebtCalculator.OTHERNAME[2][lang]);
		});
		
		$( ".btn_details_ol" ).live('click', function () {
			$( ".all_loan .ol-all .report-table,.all_loan .ol-all .notice" ).toggle( "slow" );
			$( this ).toggleClass( "highlight" );
			
			$('.ol-all .details .btn').html(DebtCalculator.OTHERNAME[1][lang]);
			$('.ol-all .details .highlight').html(DebtCalculator.OTHERNAME[2][lang]);
		});
		
		/*valid key*/
		$("input").live("blur", function(){
			if(!$(this).hasClass('txtOthers')) {
				val = $(this).val();
				var regExp1 = /([.]){2}/;
				var regExp2 = /^[0-9][.]{1}$/;
				if(val === '' || regExp1.test(val) || regExp2.test(val) || val.indexOf('.') === 0) {
					$(this).val(0);
				}
			}
		});
		
		$("input").live( 'keypress', function(event) {
			if(!$(this).hasClass('txtOthers')) {
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
						
						var countdot = currentVal.split('.');
						if (countdot.length > 2) {
							return false;
						}
						
						if(currentVal.indexOf('.') > 0) {
							if(currentVal.length - currentVal.indexOf('.') > 3) {
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
			}
		});
		
		//for edit input
		$('.editperiod, .editamount').live( 'keydown', function(event) {
                // Allow special chars + arrows 
                if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 
                    || event.keyCode == 27 || event.keyCode == 13 
                    || (event.keyCode == 65 && event.ctrlKey === true) 
                    || (event.keyCode >= 35 && event.keyCode <= 39)){
                        return;
                }else {
                    // If it's not a number stop the keypress
                    if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                        event.preventDefault(); 
                    }   
                }
        });
		
		/*View different chart ccard*/
		$('.report_cc a.btn_view_period').live( "click", function(e) {
			e.preventDefault();
			
			//sortRepaymentPeriodTracking(lang);
			
			//calc sort
			DebtCalculator.SortType = 1;
			//DebtCalculator.SortDebtArray(DebtCalculator.SortType);
			
			DebtCalculator.CCLChart_period();
			DebtCalculator.REFRESHLIST(DebtCalculator.SortType);
			
			$(".higher .btn").removeClass('active');
			$(this).addClass('active');
			
		});
		
		
		$('.report_cc a.btn_view_rate').live( "click", function(e) {
			e.preventDefault();
			
			//sortAPRTracking(lang);
			
			DebtCalculator.SortType = 2;
			//DebtCalculator.SortDebtArray(DebtCalculator.SortType);
			
			DebtCalculator.CCLChart_rate();
			DebtCalculator.REFRESHLIST(DebtCalculator.SortType);
			
			$(".higher .btn").removeClass('active');
			$(this).addClass('active');
		});
		
		$('.report_cc a.btn_view_debt').live( "click", function(e) {
			e.preventDefault();
			
			//sortDebtAmountTracking(lang);
			
			DebtCalculator.SortType = 3;
			//DebtCalculator.SortDebtArray(DebtCalculator.SortType);
			
			DebtCalculator.CCLChart_debt();
			DebtCalculator.REFRESHLIST(DebtCalculator.SortType);
			
			$(".higher .btn").removeClass('active');
			$(this).addClass('active');
		});
		
		$('.report_cc a.btn_default').live( "click", function(e) {
			e.preventDefault();
			
			//sortYourInputOrderTracking(lang);
			
			DebtCalculator.SortType = 0;
			
			DebtCalculator.Create_CCLChart();
			DebtCalculator.REFRESHLIST(DebtCalculator.SortType);
			
			$(".higher .btn").removeClass('active');
			$(this).addClass('active');
		});
		
		//Default value
		$("#save_dsr").val("");
		$("#save_cc_dsr").val(0);
		$("#save_pl_dsr").val(0);
		$("#save_ol_dsr").val(0);
		$('#current_tab').val(0);
		$('#cc_sum_data, #hpl_sum_data, #ol_sum_data').val("0 / 0 / 0 / 0 / 0");
		$('#cc_list_data, #hpl_list_data, #ol_list_data').val("0 / 0 / 0 / 0 / 0 / 0 / 0");
		
		/*remove-tab cc*/
		$('.ccard ul li .remove-tab').live( "click", function(e) {
			e.preventDefault();
			  
			var clickedtab = $(this).closest('.ccard').find('.remove-tab').index(this);
			
			//remove
			$(".ccard .tab"+clickedtab).remove();
			
			//reset current tab to 1
			DebtCalculator.Currenttab = 0;
			tab_index--;
			
			//remove tab class and add class
			for (i=1;i<10;i++)
			{
				$( ".ccard ul li:eq("+i+")" ).removeClass();
				$( ".ccard ul li:eq("+i+")" ).addClass('tab'+i+' open');
			}
			//change name
			for (i=1;i<10;i++)
			{
				$("li.tab" + i +" .debt1").attr("name","n"+i+"item1");
				$("li.tab" + i +" .debt2").attr("name","p"+i+"item2");
				$("li.tab" + i +" .interest").attr("name","p"+i+"item3");
				$("li.tab" + i +" .debt4").attr("name","p"+i+"item4");
				$("li.tab" + i +" .result_summary").attr("class","result_summary summary"+i);
			}
			
				
		});
		
		/*remove-tab pl*/
		$('.loan ul li .remove-tab').live( "click", function(e) {
			e.preventDefault();
			  
			var clickedtab = $(this).closest('.loan').find('.remove-tab').index(this);
			
			//remove
			$(".loan .tabloan"+clickedtab).remove();
			
			//reset current tab to 1
			DebtCalculator.Currentloan = 0;
			tab2_index--;
			
			//remove tab class and add class
			for (i=1;i<10;i++)
			{
				$( ".loan ul li:eq("+i+")" ).removeClass();
				$( ".loan ul li:eq("+i+")" ).addClass('tabloan'+i+' open');
			}
			//change name
			for (i=1;i<10;i++)
			{
				$("li.tabloan" + i +" .debt1").attr("name","n"+i+"loan1");
				$("li.tabloan" + i +" .debt2").attr("name","p"+i+"loan2");
				$("li.tabloan" + i +" .period").attr("name","p"+i+"loan3");
				$("li.tabloan" + i +" .interest").attr("name","p"+i+"loan4");
				$("li.tabloan" + i +" .repay_summary").attr("class","repay_summary average_repay"+i);
			}

		});
		
		/*remove-tab pl*/
		$('.otherloan ul li .remove-tab').live( "click", function(e) {
			e.preventDefault();
			  
			var clickedtab = $(this).closest('.otherloan').find('.remove-tab').index(this);
			
			//remove
			$(".otherloan .tabotherloan"+clickedtab).remove();
			
			//reset current tab to 1
			DebtCalculator.Currentloan = 0;
			tab3_index--;
			
			//remove tab class and add class
			for (i=1;i<10;i++)
			{
				$( ".otherloan ul li:eq("+i+")" ).removeClass();
				$( ".otherloan ul li:eq("+i+")" ).addClass('tabotherloan'+i+' open');
			}
			//change name
			for (i=1;i<10;i++)
			{
				$("li.tabotherloan" + i +" .debt1").attr("name","n"+i+"otherloan1");
				$("li.tabotherloan" + i +" .debt2").attr("name","p"+i+"otherloan2");
				$("li.tabotherloan" + i +" .period_year").attr("name","p"+i+"otherloan3");
				$("li.tabotherloan" + i +" .period_month").attr("name","p"+i+"otherloan4");
				$("li.tabotherloan" + i +" .interest").attr("name","p"+i+"otherloan5");
				$("li.tabotherloan" + i +" .repay_summary").attr("class","repay_summary average_repay"+i);
			}
			
				
		});
		
		/*top button*/
		$('a.top_btn_save_pdf').click(function(e) {
			e.preventDefault();
			
			//target _self
			$('#debt_form').attr('target', '_self');
			
			//alert(currenttop);
			if(currenttop==0){
				
				$(".ccard .btn_calc").trigger('click');	
				if(DebtCalculator.DEBTLIST.length>0){
					$(".report_cc a.btn_save_pdf").trigger('click');	
				}
				
			}else if(currenttop==1){
				$(".loan .btn_calc").trigger("click" );
				if(DebtCalculator.LOANLIST.length>0){
					$(".report_pl a.btn_save_pdf").trigger('click');	
				}
				
			}else if(currenttop==2){
				$(".otherloan .btn_calc").trigger("click" );
				if(DebtCalculator.OTHERLOANLIST.length>0){
					$(".report_ol a.btn_save_pdf").trigger('click');	
				}
				
			}else if(currenttop==3){
				$(".all_loan .btn_save_pdf").trigger("click" );
			}
		});
		
		$('a.btn_print').click(function(e) {
			e.preventDefault();
			
			//target _blank
			$('#debt_form').attr('target', '_blank');
			
			//alert(currenttop);
			if(currenttop==0){
				
				//printCreditCardPDFTracking(lang);
				
				$(".ccard .btn_calc").trigger('click');	
				if(DebtCalculator.DEBTLIST.length>0){
					$(".report_cc a.btn_save_pdf").trigger('click');
				}
				
			}else if(currenttop==1){
			
				//printPersonalLoanPDFTracking(lang);
			
				$(".loan .btn_calc").trigger("click" );
				if(DebtCalculator.LOANLIST.length>0){
					$(".report_pl a.btn_save_pdf").trigger('click');	
				}
				
			}else if(currenttop==2){
			
				//printOtherLoanPDFTracking(lang);
			
				$(".otherloan .btn_calc").trigger("click" );
				if(DebtCalculator.OTHERLOANLIST.length>0){
					$(".report_ol a.btn_save_pdf").trigger('click');	
				}
				
			}else if(currenttop==3){
			
				//printOverviewPDFTracking(lang);
				
				$(".all_loan .btn_save_pdf").trigger("click" );
			}
			
			$('#debt_form').attr('target', '_self');
		});
		
		$(".learnmore").click(function(e) {
			e.preventDefault();
			
			$('.tab-assumption a').trigger('click');
		});
});

	

	
