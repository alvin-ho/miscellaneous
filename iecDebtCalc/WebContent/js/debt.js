var DebtCalculator = {
	LENGTH : 1,
	FORM : 'debt_form',
	DOLLARPREFIX : ['HKD ', '港元 '],
	LANG : [0, 1], // 0 : en, 1 : tc
	DATEFORMAT : [
		['daily', 'weeks', 'months', 'years'],
		['日', '週', '個月', '年']
	],
	SERIALIZABLE : ['ipt_serialize', 'ipt_deserialize', 'btn_deserialize', 'deserializable'], // 0 : root element, 1 : two other generated field, 3 : btn to recoginze event, 4 :tr.class to identify
	FIELDTOTAL : 9,
	OTHERFIELDTOTAL : 3,
	PERIODFACTOR : [365, 12, 52, 1], // daily, month, week, year
	CCLTABLE: [['Credit card(s)','信用卡'],['Debt amount','結欠金額'],['Amount of debt including cost of borrowing','債務金額(包括借貸成本) '],['APR','實際年利率'],['Cost of borrowing','借貸成本'],['Average monthly repayment amount','每月平均還款額'],['Repayment period','還款期'],['Minimum payment amount','最低還款額']],
	PLTABLE: [['Financial institution','金融機構'],['Loan amount','貸款金額'],['Amount of debt including cost of borrowing','債務總金額(包括借貸成本)'],['APR','實際年利率'],['Cost of borrowing','借貸總成本'],['Average monthly repayment amount','每月平均還款額'],['Repayment period','還款期']],
	OLTABLE: [['Source / Purpose','來源 / 目的'],['Loan amount','貸款金額'],['Amount of debt including interest','債務總金額<br/>(包括利息)'],['Annualised interest rate','平息<br/>(以年計)'],['Interest','利息'],['Average monthly repayment amount','每月平均還款額'],['Repayment period','還款期']],
	PLREVIEW: [['Month','月'],['Total amount paid','還款金額'],['Total interest paid','己付利息'],['Total loan amount paid','己付貸款'],['Outstanding balance','未償還餘額']],
	FIELDNAME : [
		['Grocery shopping','購物'],['Eating out','外出用餐'],['Snacks','小吃'],['Coffee','咖啡'],['Alcohol','酒精飲品'],
		['Medical services','醫療服務'],['Dental care','口腔保健'],
		['Fare','車費'],['Purchase and repair','購買及維修']
	],
	DEBTLIST : [],
	EDITDEBTLIST : [],
	EDITMINDEBTLIST : [],
	EDITPERIODDEBTLIST : [],
	LOANLIST : [],
	OTHERLOANLIST : [],
	MINDEBTLIST : [],
	DEBTLISTBYPERIOD : [],
	DEBTLISTBYRATE : [],
	DEBTLISTBYDEBT : [],
	SAVEAMOUNT : '',
	PERCENTINCOME : 0,
	PERCENTEXPENSE : 0,
	CCDSR : 0,
	PLDSR : 0,
	OLDSR : 0,
	OTHERNAME :[['Debt-to-income ratio','債務收入比率'],['View details','查閱詳情'],['Hide details','隱藏詳情']],
	PERIODCHANGE :["","",3,6,12,18,24,36,48,60],
	ALERTMESSAGE : [
		['Your payment amount cannot pay off the monthly interest from credit card issuer ','你輸入的每月還款額不足以繳付'],
		['. Please revise.',' 的每月利息。請修改。']
	],
	ERRORMESSAGE : [
		['Select maximum 6 items only.'],
		['最多只可選擇6個項目。']
	],
	ADDERRORMESSAGE : [
		['You can provide details up to 10 credit cards ONLY.','你只可提供最多10項信用卡資料。'],
		['You can provide details up to 10 loans ONLY.','你只可提供最多10項貸款資料。']
	],
	ALERTCCFIELD : [
		['Please enter "Credit card issuer"','請輸入發卡機構'],['Please enter "Debt amount"','請輸入結欠金額'],['Please enter "Annualised percentage rate (APR)"','請輸入實際年利率'],['Please enter "Average monthly repayment amount"','請輸入每月平均還款額']
	],
	ALERTPLFIELD : [
		['Please enter "Financial institution"','請輸入金融機構'],['Please enter "Loan amount"','請輸入貸款金額'],['Please select "Loan period"','請選擇貸款年期'],['Please enter "Annualised percentage rate (APR)"','請輸入實際年利率'],['Please enter "Average monthly repayment amount"','請輸入實際年利率'],['Your average monthly repayment amount is not enough, please increase the amount.','你的平均每月還款額不足夠，請增加金額。']
	],
	ALERTOLFIELD : [
		['Please enter "Source / Purpose"','請輸入來源 / 目的 '],['Please enter "Loan amount"','請輸入貸款金額'],['Please enter "Loan period"','請輸入貸款年期'],['Please enter "Annualised percentage rate (APR)"','請輸入實際年利率']
	],
	CCVSNAME: [
		['Your existing monthly payment','現時每月還款額'],['Making minimum payment','每月支付最低還款額']
	],
	CCVSXAIS: [
		['Months','月'],
		['APR(%)','實際年利率(%)']
	],
	PLBAR:[
		['Please click for details','按此查閱詳情。']
	],
	Currenttab : 0,
	EditStatus : 0,
	EditTab : 0,
	EditMinTab : 0,
	MonthlyIncome :0,
	EditRepay : 0,
	EditMinRepay : 0,
	DONTKNOWMIN : 0,
	Currentloan : 0,
	Currentotherloan : 0,
	SortType : 0,
	VALIDLOOP : 0,
	CCLabel : [
		['Debt amount','結欠金額'],
		['Cost of borrowing','借貸成本'],
		['Amount(HKD in thousand)','金額(千港元)'],
		['Months','月'],
		['Repayment period','還款期'],
		['APR','實際年利率']
	],
	PLLabel : [
		['Loan amount','貸款金額'],
	],
	OLLabel : [
		['Interest','利息'],
	],
	CCEditLabel : [
		['Debt amount','結欠金額'],
		['Cost of borrowing with existing payment','現時的借貸成本'],
		['Cost of borrowing with new repayment amount','更新後的借貸成本']
	],
	CCEditName :[
		['(Existing)','(現時)'],
		['(New)','(更新後)']
	],
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
				$(".loan .period").val(0);
				
			}else {
				$(this).val("");
				
			}
		});

	},
	isValidatedNum : function(_val) {
		var rgx = /^\d+(\.\d+)?$/;
		return rgx.test(_val);
	},
	calculate : function(name,amount,interest,repayment) {
		var mininterest=0,fin_chg = 0,num_mnths = 0,min_mnths = 0,tot_int = 0,min_int=0,res1=0,res2=0,res3=0;
		var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1;
		
		
		  //
		  if(this.EditStatus==0){
			var i = this.Currenttab;
		  }else{
			var i = this.EditTab; //change amount method
		  }
		  
			var nummin = this.EditMinTab;
		  
		var interestperc = parseFloat(interest.replace("%",""))/100;
		interestperc = Math.pow((1+interestperc),(1/12))-1;
			
		
		var cur_bal = amount;
		
		//for normal
		while (cur_bal > 0){
			fin_chg = cur_bal*interestperc;
			//fin_chg =this.roundToTwo(fin_chg);
			
			var currepayment = 0;
			if(this.DONTKNOWMIN==1){
				//if dont know min repayment
					var twopercent = cur_bal*0.02;
					var onepercentwithinterest = (cur_bal*0.01)+fin_chg;
					
					var myArray = [twopercent,onepercentwithinterest,50];
					
					var currepayment = Math.max.apply(Math, myArray);
					
			}else{
				currepayment = repayment;
			}
			
			
			cur_bal = cur_bal + fin_chg - currepayment;
			num_mnths++;
			if(this.DONTKNOWMIN==0){
				if (num_mnths > 1188)
				{
					$(".summary"+this.Currenttab).fadeOut("slow");
					alert(this.ALERTMESSAGE[0][lang]+'"'+name+'"'+this.ALERTMESSAGE[1][lang]);
					return false;
				}
			}
			tot_int += fin_chg;
		}
		
		res1 = amount + tot_int;
		
		//old data method
		if(this.EditStatus==0){
			this.insertToArray(name,res1,tot_int,repayment,num_mnths,i,amount,interest);
			
			res1 = this.DOLLARPREFIX[lang]+this.formatPrice(res1);
			res2 = this.DOLLARPREFIX[lang]+ this.formatPrice(tot_int);
			res3 = num_mnths +" "+this.DATEFORMAT[lang][2];
			$(".summary"+this.Currenttab).fadeIn("slow");
			$(".summary"+this.Currenttab+" .total1").html(res1);
			$(".summary"+this.Currenttab+" .interest1").html(res2);
			$(".summary"+this.Currenttab+" .repay1").html(res3);
		}else{
			if(this.EditMinRepay==0){
				this.VALIDLOOP++;
				this.insertToEditArray(name,res1,tot_int,repayment,num_mnths,i,amount,interest);
			}else{
				this.VALIDLOOP++;
				this.insertToEditMinArray(name,res1,tot_int,repayment,num_mnths,nummin,amount,interest);
			}
				
		}
		
	},
	autocheckingitem : function(tab) {
		var itemCount=0;
		var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1;
	
		$('.tab'+tab +" :input").each(function() {
			if ($(this).val()!="" && $(this).val()!="%"&& $(this).val()!=0){
				itemCount++;
			}
		});
			
		
		if (itemCount==4){
			var i = this.Currenttab;
			
			var name = this.htmlEncode($("[name=n"+i+"item1]").val());
			
		  	var amount = parseFloat($("[name=p"+i+"item2]").val());
		  	var interest = $("[name=p"+i+"item3]").val();
		  	var repayment = parseFloat($("[name=p"+i+"item4]").val());
			
			return(this.calculate(name,amount,interest,repayment));
		}else{
			$(".summary"+this.Currenttab).fadeOut("slow");
			return false;
		}
		
		
		
	},
	checkingitem : function(tab) {
		var itemCount=0;
		var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1;
	
		$('.tab'+tab +" :input").each(function() {
			if ($(this).val()!="" && $(this).val()!="%"&& $(this).val()!=0){
				itemCount++;
			}
		});
			var i = this.Currenttab;
			var name = this.htmlEncode($("[name=n"+i+"item1]").val());
		  	var amount = parseFloat($("[name=p"+i+"item2]").val());
		  	var interest = $("[name=p"+i+"item3]").val();
		  	var repayment = parseFloat($("[name=p"+i+"item4]").val());
			
		
		if (itemCount==4){
			return(this.calculate(name,amount,interest,repayment));
		}else{
			var message = "";
			
			if(name==""){
				message += this.ALERTCCFIELD[0][lang]+'\n';
			}
			if(amount==""||amount==0){
				message +=this.ALERTCCFIELD[1][lang]+'\n';
			}
			if(interest==""||interest==0){
				message +=this.ALERTCCFIELD[2][lang]+'\n';
			}
			if(repayment==""||repayment==0){
				message +=this.ALERTCCFIELD[3][lang]+'\n';
			}
			
			alert(message);
			
			return false;
		}
		
		
	},
	insertToArray : function(name, totalpay, tot_int,repay,time,curtab,amount,interest) {
		this.DEBTLIST[curtab]=[name,totalpay.toFixed(this.LENGTH),tot_int.toFixed(this.LENGTH),repay,parseFloat(time),amount,interest];
	},
	insertToEditArray : function(name, totalpay, tot_int,repay,time,curtab,amount,interest) {
		this.EDITDEBTLIST[curtab]=[name,totalpay.toFixed(this.LENGTH),tot_int.toFixed(this.LENGTH),repay,parseFloat(time),amount,interest];
	},
	insertToEditAmountArray : function(name, totalpay, tot_int,repay,time,curtab,amount,interest) {
		this.EDITPERIODDEBTLIST[curtab]=[name,totalpay.toFixed(this.LENGTH),tot_int.toFixed(this.LENGTH),repay,parseFloat(time),amount,interest];
	},
	insertToEditMinArray : function(name, totalpay, tot_int,repay,time,curtab,amount,interest) {
		this.EDITMINDEBTLIST[curtab]=[name,totalpay.toFixed(this.LENGTH),tot_int.toFixed(this.LENGTH),repay,parseFloat(time),amount,interest];
	},
	insertToLoanArray : function(name,totalpay,tot_int,min_repay,period,curtab,amount,interest) {
		this.LOANLIST[curtab]=[name,totalpay.toFixed(this.LENGTH),tot_int.toFixed(this.LENGTH),min_repay,parseFloat(period),amount,interest];
	},
	insertToOtherLoanArray : function(name,totalpay,tot_int,min_repay,period,curtab,amount,interest) {
		this.OTHERLOANLIST[curtab]=[name,totalpay.toFixed(this.LENGTH),tot_int.toFixed(this.LENGTH),min_repay,parseFloat(period),amount,interest];
	},
	formatPrice : function(price) {
		var _this = this;
		return price.toFixed(_this.LENGTH).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
	},
	closeAllItem : function() {
		$('.expand-list').children('li').removeClass('open');
	},
	reset_cc_Report : function() {
		this.DEBTLIST = [];
		this.Currenttab = 0;
	},
	reset_pl_Report : function() {
		this.LOANLIST = [];
		this.Currentloan = 0;
	},
	reset_ol_Report : function() {
		this.OTHERLOANLIST = [];
		this.Currentotherloan = 0;
	},
	prepareDataForPdf : function() {
		var _this=this,
			i=0,
			return_val='';
		
		var newdebt =this.ReversePdfArray(_this.DEBTLIST);
		
		if (newdebt.length > 0){
			return_val = _this.GenerateChartData(newdebt);
		}
		
		return return_val;
	},
	prepareDataForPdfByDebt : function() {
		var _this=this,
			i=0,
			return_val='';
		
		var newdebt =this.ReversePdfArray(_this.DEBTLISTBYDEBT);
		
		if (newdebt.length > 0){
			return_val = _this.GenerateChartData(newdebt);
		}
		
		return return_val;
	},
	prepareDataForPdfByPeriod : function() {
		var _this=this,
			i=0,
			return_val='';
		
		var newdebt =this.ReversePdfArray(_this.DEBTLISTBYPERIOD);
		
		if (newdebt.length > 0){
			return_val = _this.GenerateChartData(newdebt);
		}
		
		return return_val;
	},
	prepareDataForPdfByRate : function() {
		var _this=this,
			i=0,
			return_val='';
		
		var newdebt =this.ReversePdfArray(_this.DEBTLISTBYRATE);
		
		if (newdebt.length > 0){
			return_val = _this.GenerateChartData(newdebt);
		}
		
		return return_val;
	},
	prepareDataForPdfPL : function() {
		var _this=this,
			i=0,
			return_val='';
		
		var newdebt =this.ReversePdfArray(_this.LOANLIST);
		
		if (newdebt.length > 0){
			return_val = _this.GenerateChartData(newdebt);
		}
		
		return return_val;
	},
	prepareDataForPdfOL : function() {
		var _this=this,
			i=0,
			return_val='';
		
		var newdebt =this.ReversePdfArray(_this.OTHERLOANLIST);
		
		if (newdebt.length > 0){
			return_val = _this.GenerateChartData(newdebt);
		}
		
		return return_val;
	},
	GenerateChartData : function(newdebt) {
		var return_val ='';
		for (i=0;i<newdebt.length;i++){
				return_val += newdebt[i][0]+' / '+(newdebt[i][1]/1000).toFixed(4)+' / '+(newdebt[i][2]/1000).toFixed(4)+' / '+(newdebt[i][3]/1000).toFixed(4)+' / '+newdebt[i][4]+' / '+newdebt[i][5]/1000+' / '+newdebt[i][6]+' , ';
			}
		return_val=return_val.slice(0, -3);
		return return_val;
	},
	prepareDataForPdfList : function() {
		var _this=this,
			i=0,
			return_val='';
		
		if (_this.DEBTLIST.length > 0){
			return_val = this.GenerateListData(_this.DEBTLIST);
		}
		return return_val;
	},
	prepareDataForPdfListPL : function() {
		var _this=this,
			i=0,
			return_val='';
		
		if (_this.LOANLIST.length > 0){
			return_val = this.GenerateListData(_this.LOANLIST);
		}
		return return_val;
	},
	prepareDataForPdfListOL : function() {
		var _this=this,
			i=0,
			return_val='';
		
		if (_this.OTHERLOANLIST.length > 0){
			return_val = this.GenerateListData(_this.OTHERLOANLIST);
		}
		return return_val;
	},
	GenerateListData : function(newdebt) {
		var _this=this;
		var return_val='';
		var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1;
		
		for (i=0;i<newdebt.length;i++){
				return_val += newdebt[i][0]+' / '+_this.DOLLARPREFIX[lang]+_this.formatPrice(parseFloat(newdebt[i][1]))+' / '+_this.DOLLARPREFIX[lang]+_this.formatPrice(parseFloat(newdebt[i][2]))+' / '+_this.DOLLARPREFIX[lang]+_this.formatPrice(parseFloat(newdebt[i][3]))+' / '+newdebt[i][4]+' '+_this.DATEFORMAT[lang][2]+' / '+_this.DOLLARPREFIX[lang]+_this.formatPrice(parseFloat(newdebt[i][5]))+' / '+newdebt[i][6]+'% , ';
		}
		return_val=return_val.slice(0, -3);
		
		return return_val;
		
	},
	prepareDataForRevisedPdf : function() {
		var _this=this,
			i=0,
			return_val='';

		if (_this.DEBTLIST.length > 0){
			for (i=0;i<_this.DEBTLIST.length;i++){
				return_val += _this.DEBTLIST[i][0]+' / '+_this.DEBTLIST[i][1]+' / '+_this.DEBTLIST[i][2]+' , ';
				return_val += _this.EDITDEBTLIST[i][0]+' new / '+_this.EDITDEBTLIST[i][1]+' / '+_this.EDITDEBTLIST[i][2]+' , ';
			}
			return_val=return_val.slice(0, -3);
		}
		return return_val;
	},
	totalrepay : function() {
		var _this=this,return_val=0;

		if (_this.DEBTLIST.length > 0){
			for (i=0;i<_this.DEBTLIST.length;i++){
				return_val += parseFloat(_this.DEBTLIST[i][1]); //sum of total repay
			}
		}
		return return_val;
	},
	getSaveAmount : function() {
		var _this=this;

	},
	distributionCCL : function() {
		var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1;
		
		if(this.EditStatus==0){
			var newdebt = this.DEBTLIST;
		}else{
			var newdebt = this.EDITDEBTLIST;
		}
		
		var content = "";
		content += '<table class="all-table"><th class="first">'+this.CCLTABLE[0][lang]+'</th><th>'+this.CCLTABLE[1][lang]+'</th><th>'+this.CCLTABLE[2][lang]+'</th><th width="65">'+this.CCLTABLE[3][lang]+'</th><th>'+this.CCLTABLE[4][lang]+'</th><th>'+this.CCLTABLE[5][lang]+'</th><th>'+this.CCLTABLE[6][lang]+'</th>';
		
		for (i=0;i<newdebt.length;i++)
		{
			var total = parseFloat(newdebt[i][1]);
			var totalint = parseFloat(newdebt[i][2]);
			var repay = parseFloat(newdebt[i][3]);
			
		
		  content += '<tr><td class="corter">'+newdebt[i][0]+'</td><td>'+this.DOLLARPREFIX[lang]+this.formatPrice(newdebt[i][5])+'</td><td>'+this.DOLLARPREFIX[lang]+this.formatPrice(total)+'</td><td>'+newdebt[i][6]+'%</td><td>'+this.DOLLARPREFIX[lang]+this.formatPrice(totalint)+'</td><td>'+this.DOLLARPREFIX[lang]+this.formatPrice(repay)+'</td><td>'+newdebt[i][4]+" "+this.DATEFORMAT[lang][2]+'</td></tr>';
		}

		content += '</table>';

		$('.debtmain .report_cc .report-table').html(content);
		
	},
	Create_CCLChart : function(){
		var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1;
		var s1 = [];
		var s2 = [];
		var ticks = [];
		
		var labelY = (lang === 0) ? 'HKD' : '港元';
		
		var seriesLabel = [];
		seriesLabel.push({
			label: this.CCLabel[0][lang]
		});
		seriesLabel.push({
			label: this.CCLabel[1][lang]
		});
		
		var reversearray = this.ReverseArray(this.DEBTLIST);
		
		for(var i = 0; i <reversearray.length ; i++) {
		
			s1.push([parseFloat(reversearray[i][5])/1000,i+1]);
			s2.push([parseFloat(reversearray[i][2])/1000,i+1]);
			ticks.push(reversearray[i][0]);
		}

		$("#CCL_chart").html("");
		
			plot3 = $.jqplot('CCL_chart', [s1,s2], {
				// Tell the plot to stack the bars.
				stackSeries: true,
				captureRightClick: true,
				seriesColors:['#48b6bd', '#f2c700'],
				highlighter: {
					show: true,
					showMarker: false,
					tooltipAxes: 'x',
					sizeAdjust: 30
				}, 
				seriesDefaults:{
				  renderer:$.jqplot.BarRenderer,
				  rendererOptions: {
					  // Put a 30 pixel margin between bars.
					  barDirection: 'horizontal',
					  barWidth:20,
					  borderColor: '#000000'
				  },
				  pointLabels: { show: false }
				},
				axes: {
		            yaxis: {
		                renderer: $.jqplot.CategoryAxisRenderer,
		                ticks: ticks
		            },
		            xaxis: {
					  label :this.CCLabel[2][lang],
					  min: 0
				  }
		        },
				legend: {
					show: true,
					location: 'e',
					placement: 'outside'
				},
				grid: {
					drawGridLines: false,        // wether to draw lines across the grid or not.
						gridLineColor: '#ffffff',   // CSS color spec of the grid lines.
						background: '#ffffff',      // CSS color spec for background color of grid.
						borderColor: '#999999',     // CSS color spec for border around grid.
						borderWidth: 1.0,           // pixel width of border around grid.
						shadow: false,               // draw a shadow for grid.
						shadowAngle: 45,            // angle of the shadow.  Clockwise from x axis.
						shadowOffset: 1.5,          // offset from the line of the shadow.
						shadowWidth: 3,             // width of the stroke for the shadow.
						shadowDepth: 3
				}, 
			// Custom labels for the series are specified with the "label"
			// option on the series option.  Here a series option object
			// is specified for each series.
			series:seriesLabel
			});
	},
	CCLChart_period : function(){
		var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1;
		var s1 = [];
		var s2 = [];
		var ticks = [];
		
		var labelY = (lang === 0) ? 'HKD' : '港元';
		
		var seriesLabel = [];
		seriesLabel.push({
			label: this.CCLabel[4][lang]
		});
		
		var reversearray = this.ReverseArray(this.DEBTLISTBYPERIOD);
		
		for(i = 0; i < reversearray.length; i++) {
		
			s1.push([parseFloat(reversearray[i][4]),i+1]);
			ticks.push(reversearray[i][0]);
		}

		$("#CCL_chart").html("");
		
			plot3 = $.jqplot('CCL_chart', [s1], {
				// Tell the plot to stack the bars.
				stackSeries: true,
				captureRightClick: true,
				seriesColors:['#4c2683'],
				highlighter: {
					show: true,
					showMarker: false,
					tooltipAxes: 'x',
					sizeAdjust: 30
				}, 
				seriesDefaults:{
				  renderer:$.jqplot.BarRenderer,
				  rendererOptions: {
					  // Put a 30 pixel margin between bars.
					  barDirection: 'horizontal',
					  barWidth:20,
					  borderColor: '#000000'
				  },
				  pointLabels: { show: false }
				},
				axes: {
		            yaxis: {
		                renderer: $.jqplot.CategoryAxisRenderer,
		                ticks: ticks
		            },
		            xaxis: {
					  label :this.CCLabel[3][lang],
					  min: 0
				  }
		        },
				legend: {
					show: true,
					location: 'e',
					placement: 'outside'
				},
				grid: {
					drawGridLines: false,        // wether to draw lines across the grid or not.
						gridLineColor: '#ffffff',   // CSS color spec of the grid lines.
						background: '#ffffff',      // CSS color spec for background color of grid.
						borderColor: '#999999',     // CSS color spec for border around grid.
						borderWidth: 1.0,           // pixel width of border around grid.
						shadow: false,               // draw a shadow for grid.
						shadowAngle: 45,            // angle of the shadow.  Clockwise from x axis.
						shadowOffset: 1.5,          // offset from the line of the shadow.
						shadowWidth: 3,             // width of the stroke for the shadow.
						shadowDepth: 3
				}, 
			// Custom labels for the series are specified with the "label"
			// option on the series option.  Here a series option object
			// is specified for each series.
			series:seriesLabel
			});
	},
	CCLChart_rate : function(){
		var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1;
		var s1 = [];
		var s2 = [];
		var ticks = [];
		
		var labelY = (lang === 0) ? 'HKD' : '港元';
		
		var seriesLabel = [];
		seriesLabel.push({
			label: this.CCLabel[5][lang]
		});
		
		var reversearray = this.ReverseArray(this.DEBTLISTBYRATE);
		
		for(i = 0; i < reversearray.length; i++) {
		
			s1.push([parseFloat(reversearray[i][6]),i+1]);
			ticks.push(reversearray[i][0]);
		}

		$("#CCL_chart").html("");
		
			plot3 = $.jqplot('CCL_chart', [s1], {
				// Tell the plot to stack the bars.
				stackSeries: true,
				captureRightClick: true,
				seriesColors:['#48b6bd'],
				highlighter: {
					show: true,
					showMarker: false,
					tooltipAxes: 'x',
					sizeAdjust: 30
				}, 
				seriesDefaults:{
				  renderer:$.jqplot.BarRenderer,
				  rendererOptions: {
					  // Put a 30 pixel margin between bars.
					  barDirection: 'horizontal',
					  barWidth:20,
					  borderColor: '#000000'
				  },
				  pointLabels: { show: false }
				},
				axes: {
		            yaxis: {
		                renderer: $.jqplot.CategoryAxisRenderer,
		                ticks: ticks
		            },
		            xaxis: {
					  label :this.CCVSXAIS[1][lang],
					  min: 0
				  }
		        },
				legend: {
					show: true,
					location: 'e',
					placement: 'outside'
				},
				grid: {
					drawGridLines: false,        // wether to draw lines across the grid or not.
						gridLineColor: '#ffffff',   // CSS color spec of the grid lines.
						background: '#ffffff',      // CSS color spec for background color of grid.
						borderColor: '#999999',     // CSS color spec for border around grid.
						borderWidth: 1.0,           // pixel width of border around grid.
						shadow: false,               // draw a shadow for grid.
						shadowAngle: 45,            // angle of the shadow.  Clockwise from x axis.
						shadowOffset: 1.5,          // offset from the line of the shadow.
						shadowWidth: 3,             // width of the stroke for the shadow.
						shadowDepth: 3
				}, 
			// Custom labels for the series are specified with the "label"
			// option on the series option.  Here a series option object
			// is specified for each series.
			series:seriesLabel
			});
	},
	CCLChart_debt : function(){
		var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1;
		var s1 = [];
		var s2 = [];
		var ticks = [];
		
		var labelY = (lang === 0) ? 'HKD' : '港元';
		
		var seriesLabel = [];
		seriesLabel.push({
			label: this.CCLabel[0][lang]
		});
		seriesLabel.push({
			label: this.CCLabel[1][lang]
		});
		
		var reversearray = this.ReverseArray(this.DEBTLISTBYDEBT);
		
		for(var i = 0; i <reversearray.length ; i++) {
		
			s1.push([parseFloat(reversearray[i][5])/1000,i+1]);
			s2.push([parseFloat(reversearray[i][2])/1000,i+1]);
			ticks.push(reversearray[i][0]);
		}

		$("#CCL_chart").html("");
		
			plot3 = $.jqplot('CCL_chart', [s1,s2], {
				// Tell the plot to stack the bars.
				stackSeries: true,
				captureRightClick: true,
				seriesColors:['#f2c700', '#4c2683'],
				highlighter: {
					show: true,
					showMarker: false,
					tooltipAxes: 'x',
					sizeAdjust: 30
				}, 
				seriesDefaults:{
				  renderer:$.jqplot.BarRenderer,
				  rendererOptions: {
					  // Put a 30 pixel margin between bars.
					  barDirection: 'horizontal',
					  barWidth:20,
					  borderColor: '#000000'
				  },
				  pointLabels: { show: false }
				},
				axes: {
		            yaxis: {
		                renderer: $.jqplot.CategoryAxisRenderer,
		                ticks: ticks
		            },
		            xaxis: {
					  label :this.CCLabel[2][lang],
					  min: 0
				  }
		        },
				legend: {
					show: true,
					location: 'e',
					placement: 'outside'
				},
				grid: {
					drawGridLines: false,        // wether to draw lines across the grid or not.
						gridLineColor: '#ffffff',   // CSS color spec of the grid lines.
						background: '#ffffff',      // CSS color spec for background color of grid.
						borderColor: '#999999',     // CSS color spec for border around grid.
						borderWidth: 1.0,           // pixel width of border around grid.
						shadow: false,               // draw a shadow for grid.
						shadowAngle: 45,            // angle of the shadow.  Clockwise from x axis.
						shadowOffset: 1.5,          // offset from the line of the shadow.
						shadowWidth: 3,             // width of the stroke for the shadow.
						shadowDepth: 3
				}, 
			// Custom labels for the series are specified with the "label"
			// option on the series option.  Here a series option object
			// is specified for each series.
			series:seriesLabel
			});
	},
	exploreEdit : function(){
		var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1;
		
		if(this.EditStatus==0){
			var newdebt = this.DEBTLIST;
		}else{
			var newdebt = this.EDITDEBTLIST;
		}
		
		
		for (i=1;i<=newdebt.length;i++)
		{
		  for (j=1;j<=newdebt.length;j++)
		  {
			var originalname = $("[name=n"+j+"item1]").val();
			if(newdebt[i-1][0]==originalname){
				var newtab = j;
			}
		  }
		  
		  $(".change_total_list .repay_edit"+i).html(this.DOLLARPREFIX[lang]+'<input class="editrepay" type="text" name="edit'+newtab+'" value="'+newdebt[i-1][3]+'" maxlength="10">');
		}	
	},
	Create_CCLChartEditAmount : function(){
		var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1;
		var s1 = [];
		var s2 = [];
		var s3 = [];
		var ticks = [];
		
		var olddebt = this.ReverseArray(this.CurrentArray());
		var reverseedit = this.ReverseArray(this.EDITDEBTLIST);
		
		
		for(i = 0; i < olddebt.length; i++) {
				s1.push(parseFloat(reverseedit[i][5])/1000);
				s1.push(parseFloat(olddebt[i][5])/1000);
				
				s2.push(parseFloat(0));
				s2.push(parseFloat(olddebt[i][2])/1000);
				
				s3.push(parseFloat(reverseedit[i][2])/1000);
				s3.push(parseFloat(0));
				

				ticks.push(olddebt[i][0]+" "+this.CCEditName[1][lang]);
				ticks.push(olddebt[i][0]+" "+this.CCEditName[0][lang]);
				
					
		}
		
		var seriesLabel = [];
		seriesLabel.push({
			label: this.CCEditLabel[0][lang]
		});
		seriesLabel.push({
			label: this.CCEditLabel[1][lang]
		});
		seriesLabel.push({
			label: this.CCEditLabel[2][lang]
		});
		
		$("#CCL_chart_change_amount").html("");
		
			plot3 = $.jqplot('CCL_chart_change_amount', [s1, s2, s3], {
				stackSeries: true,
				captureRightClick: true,
				seriesColors:['#48b6bd','#f2c700', '#4c2683'],
				highlighter: {
					show: true,
					showMarker: false,
					tooltipAxes: 'x',
					sizeAdjust: 30
				}, 
				seriesDefaults:{
				  renderer:$.jqplot.BarRenderer,
				  rendererOptions: {
					  // Put a 30 pixel margin between bars.
					  barDirection: 'horizontal',
					  barWidth:20,
					  borderColor: '#000000'
				  },
				  pointLabels: { show: false }
				},
				axes: {
		            yaxis: {
		                renderer: $.jqplot.CategoryAxisRenderer,
		                ticks: ticks
		            },
		            xaxis: {
					  label :this.CCLabel[2][lang],
					  min: 0
				  }
		        },
				legend: {
					show: true,
					location: 'e',
					placement: 'outside'
				},
				grid: {
					drawGridLines: false,        // wether to draw lines across the grid or not.
						gridLineColor: '#ffffff',   // CSS color spec of the grid lines.
						background: '#ffffff',      // CSS color spec for background color of grid.
						borderColor: '#999999',     // CSS color spec for border around grid.
						borderWidth: 1.0,           // pixel width of border around grid.
						shadow: true,               // draw a shadow for grid.
						shadowAngle: 45,            // angle of the shadow.  Clockwise from x axis.
						shadowOffset: 1.5,          // offset from the line of the shadow.
						shadowWidth: 3,             // width of the stroke for the shadow.
						shadowDepth: 3
				}, 
			// Custom labels for the series are specified with the "label"
			// option on the series option.  Here a series option object
			// is specified for each series.
			series:seriesLabel
			});
	},
	CCSummary : function(){
		var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1;
		
		//update value
		$(".report-overview #tnumber").html(this.DEBTLIST.length);
		
		
		var total = 0;
		var interest = 0;
		var month = 0;
		var Principal = 0;
		
		month = this.MaxValue(this.DEBTLIST,4);
		
		for (var i = 0; i < this.DEBTLIST.length; i++) {
		    total += parseFloat(this.DEBTLIST[i][1]);
		    interest += parseFloat(this.DEBTLIST[i][2]);
			Principal += parseFloat(this.DEBTLIST[i][5]);
		}

		var percent = this.DSRcalculate(total,month);
		this.CCDSR = percent;
		
		//save to
		$('#save_cc_dsr').val(this.CCDSR);
		
		if(percent.length>1){
			$(".dsr-table #dsr").html(percent);
			$(".dsr-table").show();
		}else{
			$(".dsr-table").hide();
		}
		
		$(".report_cc .report-overview #Principal").html(this.DOLLARPREFIX[lang]+this.formatPrice(Principal));
		$(".report_cc .report-overview #tdebt").html(this.DOLLARPREFIX[lang]+this.formatPrice(total));
		$(".report_cc .report-overview #tinterest").html(this.DOLLARPREFIX[lang]+this.formatPrice(interest));
		$(".report_cc .report-overview #tperiod").html(month+" "+this.DATEFORMAT[lang][2]);
		
		//Hidden Data
		var hd_cc_overview =  this.DEBTLIST.length+' / '+this.DOLLARPREFIX[lang]+this.formatPrice(Principal)+' / '+this.DOLLARPREFIX[lang]+this.formatPrice(total)+' / '+this.DOLLARPREFIX[lang]+this.formatPrice(interest)+' / '+month+' '+this.DATEFORMAT[lang][2]+' , ';
		hd_cc_overview = hd_cc_overview.slice(0, -3);
		$('#cc_sum_data').val(hd_cc_overview);
	},
	CCChangeSummary : function(){
		var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1;
		
		//update value
		$(".change_total #tnumber").html(this.DEBTLIST.length);
		
		var total = 0;
		var interest = 0;
		
		var month = 0;
		month = this.MaxValue(this.DEBTLIST,4);
		
		var Principal = 0;
		for (var i = 0; i < this.DEBTLIST.length; i++) {
		    total += parseFloat(this.DEBTLIST[i][1]);
		    interest += parseFloat(this.DEBTLIST[i][2]);
			Principal += parseFloat(this.DEBTLIST[i][5]);
		}

		$(".change_total #Principal").html(this.DOLLARPREFIX[lang]+this.formatPrice(Principal));
		$(".change_total #tdebt").html(this.DOLLARPREFIX[lang]+this.formatPrice(total));
		$(".change_total #tinterest").html(this.DOLLARPREFIX[lang]+this.formatPrice(interest));
		$(".change_total #tperiod").html(month+" "+this.DATEFORMAT[lang][2]);
	},
	RefreshCCChangeSummary : function(){
		var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1;
		
		//update value
		$(".change_total #tnumber").html(this.EDITDEBTLIST.length);
		
		var total = 0;
		var interest = 0;
		
		var month = this.MaxValue(this.EDITDEBTLIST,4);
		
		var Principal = 0;
		for (var i = 0; i < this.EDITDEBTLIST.length; i++) {
		    total += parseFloat(this.EDITDEBTLIST[i][1]);
		    interest += parseFloat(this.EDITDEBTLIST[i][2]);
			Principal += parseFloat(this.EDITDEBTLIST[i][5]);
		}

		$(".change_total #Principal").html(this.DOLLARPREFIX[lang]+this.formatPrice(Principal));
		$(".change_total #tdebt").html(this.DOLLARPREFIX[lang]+this.formatPrice(total));
		$(".change_total #tinterest").html(this.DOLLARPREFIX[lang]+this.formatPrice(interest));
		$(".change_total #tperiod").html(month+" "+this.DATEFORMAT[lang][2]);
	},
	CCLChangeamount : function() {
		var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1;
		
		var newdebt = "";
		
		//load different type Array
		newdebt = this.CurrentArray();
		/*
		if(this.EditStatus==0){
			var newdebt = this.DEBTLIST;
		}else{
			var newdebt = this.EDITDEBTLIST;
		}
		*/
		
		
		var content = "";
		content += '<table class="edit-table"><th class="first">'+this.CCLTABLE[0][lang]+'</th><th>'+this.CCLTABLE[1][lang]+'</th><th width="105">'+this.CCLTABLE[2][lang]+'</th><th width="65">'+this.CCLTABLE[3][lang]+'</th><th>'+this.CCLTABLE[4][lang]+'</th><th>'+this.CCLTABLE[5][lang]+'</th><th>'+this.CCLTABLE[6][lang]+'</th>';
		
		for (i=0;i<newdebt.length;i++)
		{
		  var total = parseFloat(newdebt[i][1]);
			var totalint = parseFloat(newdebt[i][2]);
			var repay = parseFloat(newdebt[i][3]);
			
		
		  content += '<tr><td class="corter">'+newdebt[i][0]+'</td><td>'+this.DOLLARPREFIX[lang]+this.formatPrice(newdebt[i][5])+'</td><td>'+this.DOLLARPREFIX[lang]+this.formatPrice(total)+'</td><td>'+newdebt[i][6]+'%</td><td>'+this.DOLLARPREFIX[lang]+this.formatPrice(totalint)+'</td><td class="repay_edit'+(i+1)+'">'+this.DOLLARPREFIX[lang]+'<input class="editamount" type="text" name="editamount'+i+'" value="'+this.formatPrice(repay)+'" maxlength="10"></td><td>'+newdebt[i][4]+" "+this.DATEFORMAT[lang][2]+'</td></tr>';
		}

		content += '</table>';

		$('.changeamount_total_list').html(content);
		
	},
	RefreshCCLChangeamount : function() {
		var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1;
		
		var newdebt = this.EDITDEBTLIST;
		
		
		var content = "";
		content += '<table class="edit-table"><th class="first">'+this.CCLTABLE[0][lang]+'</th><th>'+this.CCLTABLE[1][lang]+'</th><th width="105">'+this.CCLTABLE[2][lang]+'</th><th width="65">'+this.CCLTABLE[3][lang]+'</th><th>'+this.CCLTABLE[4][lang]+'</th><th>'+this.CCLTABLE[5][lang]+'</th><th>'+this.CCLTABLE[6][lang]+'</th>';
		
		for (i=0;i<newdebt.length;i++)
		{
		  var total = parseFloat(newdebt[i][1]);
			var totalint = parseFloat(newdebt[i][2]);
			var repay = parseFloat(newdebt[i][3]);
			
		
		  content += '<tr><td class="corter">'+newdebt[i][0]+'</td><td>'+this.DOLLARPREFIX[lang]+this.formatPrice(newdebt[i][5])+'</td><td>'+this.DOLLARPREFIX[lang]+this.formatPrice(total)+'</td><td>'+newdebt[i][6]+'%</td><td>'+this.DOLLARPREFIX[lang]+this.formatPrice(totalint)+'</td><td class="repay_edit'+(i+1)+'">'+this.DOLLARPREFIX[lang]+'<input class="editamount" type="text" name="editamount'+i+'" value="'+this.formatPrice(repay)+'" maxlength="10"></td><td>'+newdebt[i][4]+" "+this.DATEFORMAT[lang][2]+'</td></tr>';
		}

		content += '</table>';

		$('.changeamount_total_list').html(content);
		
	},
	DSRcalculate : function(totaldebt,month){
		this.MonthlyIncome = $('#monthly_income').val();
		var dsratio =0;
		
		if(this.MonthlyIncome!=0){
			dsratio = parseFloat(totaldebt*100/(this.MonthlyIncome*month)).toFixed(2)+'%';
			
			//save to Hidden
			$("#save_dsr").val(dsratio);
			
			return dsratio;
		}else{
			//save to Hidden
			$("#save_dsr").val("");
			return 0;
		}
		
	},
	CCLChangeperiod : function() {
		var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1;
		var newdebt = "";
		newdebt = this.CurrentArray();
		
		/*
		if(this.EditStatus==0){
			var newdebt = this.DEBTLIST;
		}else{
			var newdebt = this.EDITDEBTLIST;
		}
		*/
		/*
		if(newdebt.length>1){
			newdebt = newdebt.sort(function(a,b) {
				  return ((a[1] > b[1]) ? -1 : ((a[1] < b[1]) ? 1 : 0));
			});
		}	
		*/
		
		var content = "";
		content += '<table class="edit-table"><th class="first">'+this.CCLTABLE[0][lang]+'</th><th>'+this.CCLTABLE[1][lang]+'</th><th>'+this.CCLTABLE[2][lang]+'</th><th width="65">'+this.CCLTABLE[3][lang]+'</th><th>'+this.CCLTABLE[4][lang]+'</th><th>'+this.CCLTABLE[5][lang]+'</th><th width="100">'+this.CCLTABLE[6][lang]+'</th>';
		
		for (i=0;i<newdebt.length;i++)
		{
			var total = parseFloat(newdebt[i][1]);
			var totalint = parseFloat(newdebt[i][2]);
			var repay = parseFloat(newdebt[i][3]);
			
		
		  content += '<tr><td class="corter">'+newdebt[i][0]+'</td><td>'+this.DOLLARPREFIX[lang]+this.formatPrice(newdebt[i][5])+'</td><td>'+this.DOLLARPREFIX[lang]+this.formatPrice(total)+'</td><td>'+newdebt[i][6]+'%</td><td>'+this.DOLLARPREFIX[lang]+this.formatPrice(totalint)+'</td><td>'+this.DOLLARPREFIX[lang]+this.formatPrice(repay)+'</td><td class="repay_edit'+(i+1)+'"><input class="editperiod" type="text" name="editperiod'+i+'" value="'+newdebt[i][4]+'" maxlength="10"> '+this.DATEFORMAT[lang][2]+'</td></tr>';
		
		
		
		}

		content += '</table>';
		
		$('.changeperiod_total_list').html(content);
		
	},
	RefreshCCLChangeperiod : function() {
		var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1;
		
		var newdebt = this.EDITDEBTLIST;
		
		var content = "";
		content += '<table class="edit-table"><th class="first">'+this.CCLTABLE[0][lang]+'</th><th>'+this.CCLTABLE[1][lang]+'</th><th>'+this.CCLTABLE[2][lang]+'</th><th width="65">'+this.CCLTABLE[3][lang]+'</th><th>'+this.CCLTABLE[4][lang]+'</th><th>'+this.CCLTABLE[5][lang]+'</th><th width="100">'+this.CCLTABLE[6][lang]+'</th>';
		
		for (i=0;i<newdebt.length;i++)
		{
			var total = parseFloat(newdebt[i][1]);
			var totalint = parseFloat(newdebt[i][2]);
			var repay = parseFloat(newdebt[i][3]);
			
		
		  content += '<tr><td class="corter">'+newdebt[i][0]+'</td><td>'+this.DOLLARPREFIX[lang]+this.formatPrice(newdebt[i][5])+'</td><td>'+this.DOLLARPREFIX[lang]+this.formatPrice(total)+'</td><td>'+newdebt[i][6]+'%</td><td>'+this.DOLLARPREFIX[lang]+this.formatPrice(totalint)+'</td><td>'+this.DOLLARPREFIX[lang]+this.formatPrice(repay)+'</td><td class="repay_edit'+(i+1)+'"><input class="editperiod" type="text" name="editperiod'+i+'" value="'+newdebt[i][4]+'" maxlength="10"> '+this.DATEFORMAT[lang][2]+'</td></tr>';

		}

		content += '</table>';
		
		$('.changeperiod_total_list').html(content);
		
	},
	CCCalculate_changeperiod : function() {
	
		//var olddebt = this.DEBTLIST;
		var olddebt = "";
		olddebt = this.CurrentArray();
		
		for (i=0;i<olddebt.length;i++){
			var name = olddebt[i][0];
			var amount = parseFloat(olddebt[i][5]);
			var interest = olddebt[i][6];
			
			var period = $("[name=editperiod"+i+"]").val();
			
			
			var interest_new = this.effectiveRate(interest);
			var r = parseFloat(interest_new/1200);
			
			var min_repay = (r*amount)/(1-Math.pow(1+r,-period));
			
			var totalpay = min_repay*period;
			var tot_int = totalpay - amount;
			
			//put to new array
			this.insertToEditArray(name, totalpay, tot_int,min_repay,period,i,amount,interest);	 //insertToEditAmountArray
			
		}
		
	},
	Create_CCLChartEditPeriod : function(){
		var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1;
		var s1 = [];
		var s2 = [];
		var s3 = [];
		var ticks = [];
		
		
		var olddebt = this.ReverseArray(this.CurrentArray());
		var reverseedit = this.ReverseArray(this.EDITDEBTLIST);
		
		
		for(i = 0; i < olddebt.length; i++) {
				s1.push(parseFloat(reverseedit[i][5])/1000);
				s1.push(parseFloat(olddebt[i][5])/1000);
				
				s2.push(parseFloat(0));
				s2.push(parseFloat(olddebt[i][2])/1000);
				
				s3.push(parseFloat(reverseedit[i][2])/1000);
				s3.push(parseFloat(0));
				
				ticks.push(olddebt[i][0]+" "+this.CCEditName[1][lang]);
				ticks.push(olddebt[i][0]+" "+this.CCEditName[0][lang]);
				
		}
		
		var seriesLabel = [];
		seriesLabel.push({
			label: this.CCEditLabel[0][lang]
		});
		seriesLabel.push({
			label: this.CCEditLabel[1][lang]
		});
		seriesLabel.push({
			label: this.CCEditLabel[2][lang]
		});
		
		$("#CCL_chart_change_period").html("");
		
			plot3 = $.jqplot('CCL_chart_change_period', [s1, s2, s3], {
				stackSeries: true,
				captureRightClick: true,
				seriesColors:['#48b6bd','#f2c700', '#4c2683'],
				highlighter: {
					show: true,
					showMarker: false,
					tooltipAxes: 'x',
					sizeAdjust: 30
				}, 
				seriesDefaults:{
				  renderer:$.jqplot.BarRenderer,
				  rendererOptions: {
					  // Put a 30 pixel margin between bars.
					  barDirection: 'horizontal',
					  barWidth:20,
					  borderColor: '#000000'
				  },
				  pointLabels: { show: false }
				},
				axes: {
		            yaxis: {
		                renderer: $.jqplot.CategoryAxisRenderer,
		                ticks: ticks
		            },
		            xaxis: {
					  label :this.CCLabel[2][lang],
					  min: 0
				  }
		        },
				legend: {
					show: true,
					location: 'e',
					placement: 'outside'
				},
				grid: {
					drawGridLines: false,        // wether to draw lines across the grid or not.
						gridLineColor: '#ffffff',   // CSS color spec of the grid lines.
						background: '#ffffff',      // CSS color spec for background color of grid.
						borderColor: '#999999',     // CSS color spec for border around grid.
						borderWidth: 1.0,           // pixel width of border around grid.
						shadow: true,               // draw a shadow for grid.
						shadowAngle: 45,            // angle of the shadow.  Clockwise from x axis.
						shadowOffset: 1.5,          // offset from the line of the shadow.
						shadowWidth: 3,             // width of the stroke for the shadow.
						shadowDepth: 3
				}, 
			// Custom labels for the series are specified with the "label"
			// option on the series option.  Here a series option object
			// is specified for each series.
			series:seriesLabel
			});
	},
	CCEditMinRepayAmount : function(){
		var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1;
		var newdebt = this.DEBTLIST;
		var content = "";
		content += '<table class="edit-table"><th class="first"></th><th>'+this.CCLTABLE[0][lang]+'</th><th>'+this.CCLTABLE[7][lang]+'</th>';
		
		for (i=0;i<newdebt.length;i++){
		  var total = parseFloat(newdebt[i][1]);
		  var totalint = parseFloat(newdebt[i][2]);
		  var repay = parseFloat(newdebt[i][3]);
			
		
		  content += '<tr><td class="corter">'+(i+1)+'.</td><td>'+newdebt[i][0]+'</td><td class="repay_edit'+(i+1)+'">'+this.DOLLARPREFIX[lang]+'<input class="editminamount" type="text" name="editminamount'+i+'" value="'+this.formatPrice(repay)+'" maxlength="10"></td></tr>';
		}

		content += '</table>';
		
		$('.know_min_repay').html(content);
	},
	CCCalculateKnowMinRepayAmount : function(){
		this.EditMinRepay = 1;
		this.EditStatus = 1;
		//calculate
		var olddebt = this.DEBTLIST;
		
		//add to editdebt array
			for (i=0;i<olddebt.length;i++){
				this.EditMinTab = i;
			
				var name = olddebt[i][0];
				var amount = parseFloat(olddebt[i][5]);
				var interest =olddebt[i][6];
				
				
				if(this.DONTKNOWMIN==0){
					var newrepay = parseFloat($("[name=editminamount"+i+"]").val().replace(/,/g, ''));
				}else{
					/*
					//if dont know min repayment
					var newrepay =0;
					var twopercent = parseFloat(amount*0.02);
					var onepercentwithinterest = parseFloat(amount*0.01)+parseFloat(amount*interest/100/12);
					
					if(twopercent>onepercentwithinterest){
						newrepay = twopercent;
					}else{
						newrepay = onepercentwithinterest;
					}
					*/
				}
				
				this.calculate(name,amount,interest,newrepay);
				
			}

		this.EditMinRepay = 0;
		this.EditStatus = 0;
	},
	CCVsTable : function(){
		var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1;
		
		var olddebt = this.DEBTLIST;
		var mindebt = this.EDITMINDEBTLIST;
		
		var ex_tamount = 0;
		var ex_tdebt = 0;
		
		var min_tamount = 0;
		var min_tdebt = 0;
		
		//add existing payment
		for (i=0;i<olddebt.length;i++){
			ex_tamount += parseFloat(olddebt[i][1]);
			ex_tdebt += parseFloat(olddebt[i][2]);
		}
		var ex_tperiod = this.MaxValue(olddebt,4);
		
		$(".vs_min_payment #ex_tamount").html(this.DOLLARPREFIX[lang]+this.formatPrice(ex_tamount));
		$(".vs_min_payment #ex_tdebt").html(this.DOLLARPREFIX[lang]+this.formatPrice(ex_tdebt));
		$(".vs_min_payment #ex_tperiod").html(ex_tperiod+" "+this.DATEFORMAT[lang][2]);
		
		//add min payment
		for (i=0;i<mindebt.length;i++){
			min_tamount += parseFloat(mindebt[i][1]);
			min_tdebt += parseFloat(mindebt[i][2]);
		}
		
		var min_tperiod = this.MaxValue(mindebt,4);
		
		$(".vs_min_payment #min_tamount").html(this.DOLLARPREFIX[lang]+this.formatPrice(min_tamount));
		$(".vs_min_payment #min_tdebt").html(this.DOLLARPREFIX[lang]+this.formatPrice(min_tdebt));
		$(".vs_min_payment #min_tperiod").html(min_tperiod+" "+this.DATEFORMAT[lang][2]);
		
	},
	CCL_chart_min_interest : function(){
		var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1;
		var s1 = [];
		var s2 = [];
		var ticks = [];
		
		//var labelY = (lang === 0) ? 'HKD' : '港元';
		
		//Legend
		var seriesLabel = [];
		seriesLabel.push({
			label: this.CCLabel[0][lang]
		});
		seriesLabel.push({
			label: this.CCLabel[1][lang]
		});

		//min
		var min_tprincipal = 0;
		var min_tcost = 0;
		for(i = 0; i < this.EDITMINDEBTLIST.length; i++) {
			min_tprincipal += parseFloat(this.EDITMINDEBTLIST[i][5])/1000;
			min_tcost += parseFloat(this.EDITMINDEBTLIST[i][2])/1000;
		}
		s1.push(min_tprincipal);
		s2.push(min_tcost);
		ticks.push(this.CCVSNAME[1][lang]);
		
		//existing
		var ex_tprincipal = 0;
		var ex_tcost = 0;
		for(i = 0; i < this.DEBTLIST.length; i++) {
			ex_tprincipal += parseFloat(this.DEBTLIST[i][5])/1000;
			ex_tcost += parseFloat(this.DEBTLIST[i][2])/1000;
		}
		s1.push(ex_tprincipal);
		s2.push(ex_tcost);
		ticks.push(this.CCVSNAME[0][lang]);
		

		$("#CCL_min_interest").html("");
		
			plot3 = $.jqplot('CCL_min_interest', [s1,s2], {
				// Tell the plot to stack the bars.
				stackSeries: true,
				captureRightClick: true,
				seriesColors:['#48b6bd','#f2c700'],
				highlighter: {
					show: true,
					showMarker: false,
					tooltipAxes: 'x',
					sizeAdjust: 30
				}, 
				seriesDefaults:{
				  renderer:$.jqplot.BarRenderer,
				  rendererOptions: {
					  // Put a 30 pixel margin between bars.
					  barDirection: 'horizontal',
					  barWidth:20,
					  borderColor: '#000000'
				  },
				  pointLabels: { show: false }
				},
				axes: {
		            yaxis: {
		                renderer: $.jqplot.CategoryAxisRenderer,
		                ticks: ticks
		            },
		            xaxis: {
					  label :this.CCLabel[2][lang],
					  min: 0
				  }
		        },
				legend: {
					show: true,
					location: 'e',
					placement: 'outside'
				},
				grid: {
					drawGridLines: false,        // wether to draw lines across the grid or not.
						gridLineColor: '#ffffff',   // CSS color spec of the grid lines.
						background: '#ffffff',      // CSS color spec for background color of grid.
						borderColor: '#999999',     // CSS color spec for border around grid.
						borderWidth: 1.0,           // pixel width of border around grid.
						shadow: false,               // draw a shadow for grid.
						shadowAngle: 45,            // angle of the shadow.  Clockwise from x axis.
						shadowOffset: 1.5,          // offset from the line of the shadow.
						shadowWidth: 3,             // width of the stroke for the shadow.
						shadowDepth: 3
				}, 
			// Custom labels for the series are specified with the "label"
			// option on the series option.  Here a series option object
			// is specified for each series.
			series:seriesLabel
			});
	},
	CCL_chart_min_period : function(){
		var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1;
		var s1 = [];
		var ticks = [];
		
		//var labelY = (lang === 0) ? 'HKD' : '港元';
		
		//Legend
		var seriesLabel = [];
		seriesLabel.push({
			label: this.CCLTABLE[6][lang]
		});

		//min
		var min_tperiod = this.MaxValue(this.EDITMINDEBTLIST,4);
		s1.push(min_tperiod);
		ticks.push(this.CCVSNAME[1][lang]);
		
		//existing
		var ex_tperiod = this.MaxValue(this.DEBTLIST,4);
		s1.push(ex_tperiod);
		ticks.push(this.CCVSNAME[0][lang]);

		

		$("#CCL_chart_min_period").html("");
		
			plot3 = $.jqplot('CCL_chart_min_period', [s1], {
				// Tell the plot to stack the bars.
				stackSeries: true,
				captureRightClick: true,
				seriesColors:['#48b6bd'],
				highlighter: {
					show: true,
					showMarker: false,
					tooltipAxes: 'x',
					sizeAdjust: 30
				}, 
				seriesDefaults:{
				  renderer:$.jqplot.BarRenderer,
				  rendererOptions: {
					  // Put a 30 pixel margin between bars.
					  barDirection: 'horizontal',
					  barWidth:20,
					  borderColor: '#000000'
				  },
				  pointLabels: { show: false }
				},
				axes: {
		            yaxis: {
		                renderer: $.jqplot.CategoryAxisRenderer,
		                ticks: ticks
		            },
		            xaxis: {
					  label :this.CCVSXAIS[0][lang],
					  min: 0
				  }
		        },
				legend: {
					show: true,
					location: 'e',
					placement: 'outside'
				},
				grid: {
					drawGridLines: false,        // wether to draw lines across the grid or not.
						gridLineColor: '#ffffff',   // CSS color spec of the grid lines.
						background: '#ffffff',      // CSS color spec for background color of grid.
						borderColor: '#999999',     // CSS color spec for border around grid.
						borderWidth: 1.0,           // pixel width of border around grid.
						shadow: false,               // draw a shadow for grid.
						shadowAngle: 45,            // angle of the shadow.  Clockwise from x axis.
						shadowOffset: 1.5,          // offset from the line of the shadow.
						shadowWidth: 3,             // width of the stroke for the shadow.
						shadowDepth: 3
				}, 
			// Custom labels for the series are specified with the "label"
			// option on the series option.  Here a series option object
			// is specified for each series.
			series:seriesLabel
			});
	},
	autocheckingloanitem : function(tab) {
		var itemCount=0;
		var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1;
		
		$('.tabloan'+tab +" :input").not( '.tabloan'+tab+" .repay_summary").each(function() {
			if ($(this).val()!="" && $(this).val()!="%"&& $(this).val()!=0){
				itemCount++;
			}
		});
		
		if (itemCount==4){
			var i = this.Currentloan;
			
			var name = this.htmlEncode($("[name=n"+i+"loan1]").val());
		  	var amount = parseFloat($("[name=p"+i+"loan2]").val());
				var period = $("[name=p"+i+"loan3]").val();
				period = this.PERIODCHANGE[period];
				
		  	var interest = $("[name=p"+i+"loan4]").val();
			return(this.calculateloan(name,amount,period,interest));
		}else{
			$(".loan .average_repay"+this.Currentloan).val('0');
		}
			return false;
		
	},
	checkingloanitem : function(tab) {
		var itemCount=0;
		var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1;
		
		$('.tabloan'+tab +" :input").not( '.tabloan'+tab+" .repay_summary").each(function() {
			if ($(this).val()!="" && $(this).val()!="%"&& $(this).val()!=0){
				itemCount++;
			}
		});
		
		var i = this.Currentloan;
			var name = this.htmlEncode($("[name=n"+i+"loan1]").val());
		  	var amount = parseFloat($("[name=p"+i+"loan2]").val());
				var period = $("[name=p"+i+"loan3]").val();
				period = this.PERIODCHANGE[period];
				
		  	var interest = $("[name=p"+i+"loan4]").val();
		
		if (itemCount==4){
			return(this.calculateloan(name,amount,period,interest));
		}else{
			var message = "";
			
			if(name==""){
				message += this.ALERTPLFIELD[0][lang]+'\n';
			}
			if(amount==""||amount==0){
				message +=this.ALERTPLFIELD[1][lang]+'\n';
			}
			if(period==""||period==0){
				message +=this.ALERTPLFIELD[2][lang]+'\n';
			}
			if(interest==""||interest==0){
				message +=this.ALERTPLFIELD[3][lang]+'\n';
			}
			
			alert(message);
			
			return false;
		}
		
		
	},
	autocheckingloanRe : function(tab) {
		var itemCount=0;
		var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1;
		
		$('.tabloan'+tab +" :input").not( '.tabloan'+tab+" .interest").each(function() {
			if ($(this).val()!="" && $(this).val()!="%"&& $(this).val()!=0){
				itemCount++;
			}
		});
		
		var i = this.Currentloan;
		var name = this.htmlEncode($("[name=n"+i+"loan1]").val());
		var amount = parseFloat($("[name=p"+i+"loan2]").val());
		var period = $("[name=p"+i+"loan3]").val();
			period = this.PERIODCHANGE[period];
				
		var replay = $("[name=p"+i+"loan5]").val();
		replay = replay.replace(",", "");
		
		if (itemCount==4){
			return(this.calculateloanRe(name,amount,period,replay, tab));
		}else{
			var message = "";
			
			if(name==""){
				message += this.ALERTPLFIELD[0][lang]+'\n';
			}
			if(amount==""||amount==0){
				message +=this.ALERTPLFIELD[1][lang]+'\n';
			}
			if(period==""||period==0){
				message +=this.ALERTPLFIELD[2][lang]+'\n';
			}
			if(replay==""||replay==0){
				message +=this.ALERTPLFIELD[4][lang]+'\n';
			}
			
			alert(message);
			
			return false;
		}
	
	},
	calculateloanRe : function(name,amount,period,replay, tab){
		var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1;
		var payfreq=12;
		
		var principal = amount;
		var term = period;
		
		var repayment = replay;
		
		var lower=0;
		var upper=1000;
		var total=0;
		var guess, presval, answer;
		
		while ((upper - lower) > 0.0000000001){
			//guess that the actual APR is halfway between the upper and lower values.
			guess=((lower + upper)/2);
			//add up the present values of all the repayments, assuming the first payment is made one week/month after the loan is issued.
			for (i=1; i<=(term); i++){
				presval=(repayment/(Math.pow((1+guess),i/payfreq)));
				total+=presval;
			}
			//if the total is less than the principal, the APR must be lower than the guess, so set the guess as the new upper bound.
			if (total<principal) {
				upper=guess;
			//if the total is more than the principal, the APR must be higher than the guess, so set the guess as the new lower bound.
			}else if (total>principal){
				lower=guess;
			//if neither of the above is true, the guess must be correct, so set the upper and lower bounds to be the same as the guess to end the while loop.
			}else {
				lower=guess; 
				upper=guess;
			}
			total=0;
		}
		answer=(lower+upper)*5000;
		
		answer=Math.round(answer)/100;
		//answer = answer/100;
		
		if (answer<=0){
			//alert error
			alert(this.ALERTPLFIELD[5][lang]);
		}
		
		
		//change APR
		$("[name=p"+tab+"loan4]").val(answer);
		
	},
	calculateloan : function(name,amount,period,interest){
			var interest_new = this.effectiveRate(interest);
			
			var r = interest_new/1200;
			
			var min_repay = (r*amount)/(1-Math.pow(1+r,-period));
			
			
			var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1;
			//var min_repay = (r*amount)/(1-Math.pow(1+r,-period));

			var tot_int = min_repay*period-amount;
			var totalpay = tot_int+amount;
			
			$(".loan .average_repay"+this.Currentloan).val(this.formatPrice(min_repay));
			
			//save to array
			this.insertToLoanArray(name,totalpay,tot_int,min_repay,period,this.Currentloan,amount,interest);
			
	},
	pl_overview : function(){
		var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1;
	
		var principal= 0;
		var totalamount = 0;
		var totalinterest = 0;
		
	
		for(i = 0; i < this.LOANLIST.length; i++) {
		  principal += parseFloat(this.LOANLIST[i][5]);
		  totalamount += parseFloat(this.LOANLIST[i][1]);
		  totalinterest += parseFloat(this.LOANLIST[i][2]);
		  
		}
		
		var period = this.MaxValue(this.LOANLIST,4);
		  
		//insert
		$(".report_pl .totalnumber").html(this.LOANLIST.length);
		$(".report_pl .totalprincipal").html(this.DOLLARPREFIX[lang]+this.formatPrice(principal));
		$(".report_pl .totaldebt").html(this.DOLLARPREFIX[lang]+this.formatPrice(totalamount));
		$(".report_pl .totalinterest").html(this.DOLLARPREFIX[lang]+this.formatPrice(totalinterest));
		$(".report_pl .totalperiod").html(period+" "+this.DATEFORMAT[lang][2]);
		
		//Calculate Debt-to-income ratio
		var percent = this.DSRcalculate(totalamount,period);	
		this.PLDSR = percent;
		
		//save to
		$('#save_pl_dsr').val(this.PLDSR);
		
		if(percent.length>1){
			$(".report_pl #dsr").html(percent);
			$(".report_pl .dsr-table").show();
		}else{
			$(".report_pl .dsr-table").hide();
		}
		
		//Hidden Data
		var hd_pl_overview =  this.LOANLIST.length+' / '+this.DOLLARPREFIX[lang]+this.formatPrice(principal)+' / '+this.DOLLARPREFIX[lang]+this.formatPrice(totalamount)+' / '+this.DOLLARPREFIX[lang]+this.formatPrice(totalinterest)+' / '+period+' '+this.DATEFORMAT[lang][2]+' , ';
		hd_pl_overview = hd_pl_overview.slice(0, -3);
		$('#hpl_sum_data').val(hd_pl_overview);
		
	},
	pl_summary : function(){
		var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1;
		var newdebt = this.LOANLIST;
		
		var content = "";
		content += '<table class="all-table"><th class="first">'+this.PLTABLE[0][lang]+'</th><th>'+this.PLTABLE[1][lang]+'</th><th>'+this.PLTABLE[2][lang]+'</th><th width="65">'+this.PLTABLE[3][lang]+'</th><th>'+this.PLTABLE[4][lang]+'</th><th>'+this.PLTABLE[5][lang]+'</th><th>'+this.PLTABLE[6][lang]+'</th>';
		
		for (i=0;i<newdebt.length;i++)
		{
			var total = parseFloat(newdebt[i][1]);
			var totalint = parseFloat(newdebt[i][2]);
			var repay = parseFloat(newdebt[i][3]);
			
		
		  content += '<tr><td class="corter">'+newdebt[i][0]+'</td><td>'+this.DOLLARPREFIX[lang]+this.formatPrice(newdebt[i][5])+'</td><td>'+this.DOLLARPREFIX[lang]+this.formatPrice(total)+'</td><td>'+newdebt[i][6]+'%</td><td>'+this.DOLLARPREFIX[lang]+this.formatPrice(totalint)+'</td><td>'+this.DOLLARPREFIX[lang]+this.formatPrice(repay)+'</td><td>'+newdebt[i][4]+" "+this.DATEFORMAT[lang][2]+'</td></tr>';
		}

		content += '</table>';

		$('.debtmain .report_pl .report-table').html(content);
		
	},
	Create_PLChart : function(){
		var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1;
		var s1 = [];
		var s2 = [];
		var ticks = [];
		
		var labelY = (lang === 0) ? 'HKD' : '港元';
		
		var seriesLabel = [];
		seriesLabel.push({
			label: this.PLLabel[0][lang]
		});
		seriesLabel.push({
			label: this.CCLabel[1][lang]
		});
		
		for(i = 0; i < this.LOANLIST.length; i++) {
		
			s1.push([parseFloat(this.LOANLIST[i][5])/1000,i+1]);
			s2.push([parseFloat(this.LOANLIST[i][2])/1000,i+1]);
			ticks.push(this.LOANLIST[i][0]);
		}

		$("#PL_chart").html("");
		
			plot3 = $.jqplot('PL_chart', [s1,s2], {
				// Tell the plot to stack the bars.
				stackSeries: true,
				captureRightClick: true,
				seriesColors:['#48b6bd','#f2c700'],
				highlighter: {
					show: true,
					showMarker: false,
					tooltipAxes: 'x',
					sizeAdjust: 30,
					formatString:this.PLBAR[0][lang]
				}, 
				seriesDefaults:{
				  renderer:$.jqplot.BarRenderer,
				  rendererOptions: {
					  // Put a 30 pixel margin between bars.
					  barDirection: 'horizontal',
					  barWidth:15,
					  borderColor: '#000000'
				  },
				  pointLabels: { show: false }
				},
				axes: {
		            yaxis: {
		                renderer: $.jqplot.CategoryAxisRenderer,
		                ticks: ticks
		            },
		            xaxis: {
					  label :this.CCLabel[2][lang],
					  min: 0
				  }
		        },
				legend: {
					show: true,
					location: 'e',
					placement: 'outside'
				},
				grid: {
					drawGridLines: false,        // wether to draw lines across the grid or not.
						gridLineColor: '#ffffff',   // CSS color spec of the grid lines.
						background: '#ffffff',      // CSS color spec for background color of grid.
						borderColor: '#999999',     // CSS color spec for border around grid.
						borderWidth: 1.0,           // pixel width of border around grid.
						shadow: false,               // draw a shadow for grid.
						shadowAngle: 45,            // angle of the shadow.  Clockwise from x axis.
						shadowOffset: 1.5,          // offset from the line of the shadow.
						shadowWidth: 3,             // width of the stroke for the shadow.
						shadowDepth: 3
				}, 
			// Custom labels for the series are specified with the "label"
			// option on the series option.  Here a series option object
			// is specified for each series.
			series:seriesLabel
			});
	},
	Create_PLReview : function(which){
	
	var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1;
	var newdebt = this.LOANLIST;
	var which = which-1;
	
	
	$('#PL_review h3').html(this.PLTABLE[0][lang]+": "+newdebt[which][0]);
	

		var content = "";
		
		content += '<table class="all-table"><th class="first">'+this.PLREVIEW[0][lang]+'</th><th>'+this.PLREVIEW[1][lang]+'</th><th>'+this.PLREVIEW[2][lang]+'</th><th>'+this.PLREVIEW[3][lang]+'</th><th>'+this.PLREVIEW[4][lang]+'</th>';
		
		var fin_chg = 0;
		var cur_bal = newdebt[which][5];
		
		var new_percent = this.effectiveRate(newdebt[which][6]);
		var percent = parseFloat(new_percent/1200);
		
		
		for (i=0;i<newdebt[which][4];i++)
		{
			fin_chg = cur_bal*percent;
			
			
			cur_bal = cur_bal - newdebt[which][3]+fin_chg;
			
			var total_principal = newdebt[which][3]-fin_chg;
		
		  content += '<tr><td class="corter">'+(i+1)+'</td><td>'+this.DOLLARPREFIX[lang]+this.formatPrice(newdebt[which][3])+'</td><td>'+this.DOLLARPREFIX[lang]+this.formatPrice(fin_chg)+'</td><td>'+this.DOLLARPREFIX[lang]+this.formatPrice(total_principal)+'</td><td>'+this.DOLLARPREFIX[lang]+this.formatPrice(cur_bal)+'</td>';
		}

		content += '</table>';

		$('#PL_review .review_table').html(content);
		
	},
	/*Tab3*/
	autocheckingotherloanitem : function(tab) {
		var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1;
		var itemCount=0;
		var i = this.Currentotherloan;
		var period = 0;
		var year = $("[name=p"+i+"otherloan3]").val();
		var month = $("[name=p"+i+"otherloan4]").val();
		period = parseFloat(year*12) + parseFloat(month);
		var valid = false;
		
		var interest = $("[name=p"+i+"otherloan5]").val();
		
		var amount = parseFloat($("[name=p"+i+"otherloan2]").val());
		
		var name = this.htmlEncode($("[name=n"+i+"otherloan1]").val());
		
		
		if(period!=0 && amount!=0 && amount!="" && name!=0 && name!=""){
			valid = true;
		}else{
			valid = false;
		}
		
		if (valid === true){
			return(this.calculateotherloan(name,amount,period,interest));
		}else{
			$(".otherloan .average_repay"+this.Currentotherloan+" span").html(this.DOLLARPREFIX[lang]+' 0');
			return false;
		}
		
	},
	checkingotherloanitem : function(tab) {
		var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1;
		var itemCount=0;
		var i = this.Currentotherloan;
		var period = 0;
		var year = $("[name=p"+i+"otherloan3]").val();
		var month = $("[name=p"+i+"otherloan4]").val();
		period = parseFloat(year*12) + parseFloat(month);
		var valid = false;
		
		var interest = $("[name=p"+i+"otherloan5]").val();
		
		var amount = parseFloat($("[name=p"+i+"otherloan2]").val());
		
		var name = this.htmlEncode($("[name=n"+i+"otherloan1]").val());
		
		if(period!=0 && amount!=0 && amount!="" && name!=0 && name!=""){
			valid = true;
		}else{
			valid = false;
		}
		
		if (valid === true){
			return(this.calculateotherloan(name,amount,period,interest));
		}else{
			var message = "";
			
			if(name==""){
				message += this.ALERTOLFIELD[0][lang]+'\n';
			}
			if(amount==""||amount==0){
				message +=this.ALERTOLFIELD[1][lang]+'\n';
			}
			if(period==""||period==0){
				message +=this.ALERTOLFIELD[2][lang]+'\n';
			}
			
			alert(message);
			
			return false;
		}
		
		
	},
	calculateotherloan : function(name,amount,period,interest){
			var interestperc = parseFloat(interest.replace("%",""))/100;
			interestperc = interestperc/12;
			
			var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1;
			
			//var min_repay = (r*amount)/(1-Math.pow(1+r,-period));
			var interestamount = amount * interestperc;
			var min_repay = (interestamount*period+amount)/period;
			var tot_int = interestamount*period;
			var totalpay = tot_int+amount;
			
			$(".otherloan .average_repay"+this.Currentotherloan+" span").html(this.DOLLARPREFIX[lang]+this.formatPrice(min_repay));
			
			//save to array
			this.insertToOtherLoanArray(name,totalpay,tot_int,min_repay,period,this.Currentotherloan,amount,interest);
			
	},
	ol_overview : function(){
		var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1;
	
		var principal= 0;
		var totalamount = 0;
		var totalinterest = 0;
	
		var newdebt = this.OTHERLOANLIST;
	
		for(i = 0; i < newdebt.length; i++) {
		  principal += parseFloat(newdebt[i][5]);
		  totalamount += parseFloat(newdebt[i][1]);
		  totalinterest += parseFloat(newdebt[i][2]);
		}
		var period = this.MaxValue(newdebt,4);
		  
		//insert
		$(".report_ol .totalnumber").html(newdebt.length);
		$(".report_ol .totalprincipal").html(this.DOLLARPREFIX[lang]+this.formatPrice(principal));
		$(".report_ol .totaldebt").html(this.DOLLARPREFIX[lang]+this.formatPrice(totalamount));
		$(".report_ol .totalinterest").html(this.DOLLARPREFIX[lang]+this.formatPrice(totalinterest));
		$(".report_ol .totalperiod").html(period+" "+this.DATEFORMAT[lang][2]);
		
		//Calculate Debt-to-income ratio
		var percent = this.DSRcalculate(totalamount,period);
		
		this.OLDSR = percent;
		
		//save to
		$('#save_ol_dsr').val(this.OLDSR);
		
		if(percent.length>1){
			$(".report_ol #dsr").html(percent);
			$(".report_ol .dsr-table").show();
		}else{
			$(".report_ol .dsr-table").hide();
		}
		
		//Hidden Data
		var hd_ol_overview =  this.OTHERLOANLIST.length+' / '+this.DOLLARPREFIX[lang]+this.formatPrice(principal)+' / '+this.DOLLARPREFIX[lang]+this.formatPrice(totalamount)+' / '+this.DOLLARPREFIX[lang]+this.formatPrice(totalinterest)+' / '+period+' '+this.DATEFORMAT[lang][2]+' , ';
		hd_ol_overview = hd_ol_overview.slice(0, -3);
		$('#ol_sum_data').val(hd_ol_overview);
		
	},
	ol_summary : function(){
		var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1;
		var newdebt = this.OTHERLOANLIST;
		
		var content = "";
		content += '<table class="all-table"><th class="first">'+this.OLTABLE[0][lang]+'</th><th>'+this.OLTABLE[1][lang]+'</th><th>'+this.OLTABLE[2][lang]+'</th><th width="65">'+this.OLTABLE[3][lang]+'</th><th>'+this.OLTABLE[4][lang]+'</th><th>'+this.OLTABLE[5][lang]+'</th><th>'+this.OLTABLE[6][lang]+'</th>';
		
		for (i=0;i<newdebt.length;i++)
		{
			var total = parseFloat(newdebt[i][1]);
			var totalint = parseFloat(newdebt[i][2]);
			var repay = parseFloat(newdebt[i][3]);
			
		
		  content += '<tr><td class="corter">'+newdebt[i][0]+'</td><td>'+this.DOLLARPREFIX[lang]+this.formatPrice(newdebt[i][5])+'</td><td>'+this.DOLLARPREFIX[lang]+this.formatPrice(total)+'</td><td>'+newdebt[i][6]+'%</td><td>'+this.DOLLARPREFIX[lang]+this.formatPrice(totalint)+'</td><td>'+this.DOLLARPREFIX[lang]+this.formatPrice(repay)+'</td><td>'+newdebt[i][4]+" "+this.DATEFORMAT[lang][2]+'</td></tr>';
		}

		content += '</table>';

		$('.debtmain .report_ol .report-table').html(content);
		
	},
	Create_OLChart : function(){
		var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1;
		var s1 = [];
		var s2 = [];
		var ticks = [];
		
		var labelY = (lang === 0) ? 'HKD' : '港元';
		
		var seriesLabel = [];
		seriesLabel.push({
			label: this.PLLabel[0][lang]
		});
		seriesLabel.push({
			label: this.OLLabel[0][lang]
		});
		
		for(i = 0; i < this.OTHERLOANLIST.length; i++) {
		
			s1.push([parseFloat(this.OTHERLOANLIST[i][5])/1000,i+1]);
			s2.push([parseFloat(this.OTHERLOANLIST[i][2])/1000,i+1]);
			ticks.push(this.OTHERLOANLIST[i][0]);
		}

		$("#OL_chart").html("");
		
			plot3 = $.jqplot('OL_chart', [s1,s2], {
				// Tell the plot to stack the bars.
				stackSeries: true,
				captureRightClick: true,
				seriesColors:['#48b6bd','#f2c700'],
				highlighter: {
					show: true,
					showMarker: false,
					tooltipAxes: 'x',
					sizeAdjust: 30
				}, 
				seriesDefaults:{
				  renderer:$.jqplot.BarRenderer,
				  rendererOptions: {
					  // Put a 30 pixel margin between bars.
					  barDirection: 'horizontal',
					  barWidth:20,
					  borderColor: '#000000'
				  },
				  pointLabels: { show: false }
				},
				axes: {
		            yaxis: {
		                renderer: $.jqplot.CategoryAxisRenderer,
		                ticks: ticks
		            },
		            xaxis: {
					  label :this.CCLabel[2][lang],
					  min: 0
				  }
		        },
				legend: {
					show: true,
					location: 'e',
					placement: 'outside'
				},
				grid: {
					drawGridLines: false,        // wether to draw lines across the grid or not.
						gridLineColor: '#ffffff',   // CSS color spec of the grid lines.
						background: '#ffffff',      // CSS color spec for background color of grid.
						borderColor: '#999999',     // CSS color spec for border around grid.
						borderWidth: 1.0,           // pixel width of border around grid.
						shadow: false,               // draw a shadow for grid.
						shadowAngle: 45,            // angle of the shadow.  Clockwise from x axis.
						shadowOffset: 1.5,          // offset from the line of the shadow.
						shadowWidth: 3,             // width of the stroke for the shadow.
						shadowDepth: 3
				}, 
			// Custom labels for the series are specified with the "label"
			// option on the series option.  Here a series option object
			// is specified for each series.
			series:seriesLabel
			});
	},
	ShowAllSummary : function(){
		var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1;
		var total_debt = 0;
		var total_interest = 0;
		var total_period = 0;
		var total_dsr = 0;
		var montharray =[0,0,0];
		
		if(this.DEBTLIST.length>0){
			for (i=0;i<this.DEBTLIST.length;i++)
			{
			  total_debt +=  parseFloat(this.DEBTLIST[i][1]);
			  total_interest +=  parseFloat(this.DEBTLIST[i][2]);
			  //total_period +=  parseFloat(this.DEBTLIST[i][4]);
			  montharray[0] = this.MaxValue(this.DEBTLIST,4);
			}
		}
		if(this.LOANLIST.length>0){
			for (i=0;i<this.LOANLIST.length;i++)
			{
			  total_debt +=  parseFloat(this.LOANLIST[i][1]);
			  total_interest +=  parseFloat(this.LOANLIST[i][2]);
			  //total_period +=  parseFloat(this.LOANLIST[i][4]);
			  montharray[1] = this.MaxValue(this.LOANLIST,4);
			}
		}
		if(this.OTHERLOANLIST.length>0){
			for (i=0;i<this.OTHERLOANLIST.length;i++)
			{
			  total_debt +=  parseFloat(this.OTHERLOANLIST[i][1]);
			  total_interest +=  parseFloat(this.OTHERLOANLIST[i][2]);
			  //total_period +=  parseFloat(this.OTHERLOANLIST[i][4]);
			  montharray[2] = this.MaxValue(this.OTHERLOANLIST,4);
			}
		}
		
		//Find Max month in 3 Array
		total_period = Math.max(montharray[0],montharray[1],montharray[2]);

		
		total_dsr = this.DSRcalculate(total_debt,total_period);
		
		//insert overall
		$(".all_loan #all_debt").html(this.DOLLARPREFIX[lang]+this.formatPrice(total_debt));
		$(".all_loan #all_interest").html(this.DOLLARPREFIX[lang]+this.formatPrice(total_interest));
		$(".all_loan #all_period").html(total_period+" "+this.DATEFORMAT[lang][2]);
		$(".all_loan #all_dsr").html(total_dsr);
		
		//hidden
		//Hidden Data
		var overview =  this.DOLLARPREFIX[lang]+this.formatPrice(total_debt)+' / '+this.DOLLARPREFIX[lang]+this.formatPrice(total_interest)+' / '+total_period+' '+this.DATEFORMAT[lang][2]+' / '+total_dsr+' , ';
		overview = overview.slice(0, -3);
		$('#view_sum_data').val(overview);
		
		//get cc data
		var title_cc = $(".report_cc .willSave h2").text();
		
		var cc_overview = $(".report_cc .report-overview").html();
		var cc_details = $(".report_cc .report-table").html();
		var cc_options = $(".report_cc .notice").html();
		
		if(this.DEBTLIST.length>0){
			$(".all_loan .cc-all .cc_title h2").html(title_cc);
			$(".all_loan .cc-all .report-overview").html(cc_overview);
			$(".all_loan .cc-all .report-table").html(cc_details);
			$(".all_loan .cc-all .details").show();
			$(".all_loan .cc-all .notice").html(cc_options);
			
			//add DSR
			$(".cc-all .summary_table tbody tr").eq(0).append('<th>'+this.OTHERNAME[0][lang]+'</th>');
			$(".cc-all .summary_table tr").eq(1).append('<td>'+this.CCDSR+'</td>')
			
		}else{
			this.clearOverviewCC(".all_loan .cc-all");
		}
		
		//get pl data
		var title_pl = $(".report_pl .willSave h2").text();
		var pl_overview = $(".report_pl .report-overview").html();
		var pl_details = $(".report_pl .report-table").html();
		var pl_options = $(".report_pl .notice").html();
		
		if(this.LOANLIST.length>0){
			$(".all_loan .pl-all .pl_title h2").html(title_pl);
			$(".all_loan .pl-all .report-overview").html(pl_overview);
			$(".all_loan .pl-all .report-table").html(pl_details);
			$(".all_loan .pl-all .details").show();
			$(".all_loan .pl-all .notice").html(pl_options);
			
			//add DSR
			$(".pl-all .summary_table tbody tr").eq(0).append('<th>'+this.OTHERNAME[0][lang]+'</th>');
			$(".pl-all .summary_table tr").eq(1).append('<td>'+this.PLDSR+'</td>')
			
		}else{
			this.clearOverviewLoan(".all_loan .pl-all");
		}
		
		//get ol data
		var title_ol = $(".report_ol .willSave h2").text();
		var ol_overview = $(".report_ol .report-overview").html();
		var ol_details = $(".report_ol .report-table").html();
		var ol_options = $(".report_ol .notice").html();
		
		if(this.OTHERLOANLIST.length>0){
			$(".all_loan .ol-all .ol_title h2").html(title_ol);
			$(".all_loan .ol-all .report-overview").html(ol_overview);
			$(".all_loan .ol-all .report-table").html(ol_details);
			$(".all_loan .ol-all .details").show();
			$(".all_loan .ol-all .notice").html(ol_options);
			
			//add DSR
			$(".ol-all .summary_table tbody tr").eq(0).append('<th>'+this.OTHERNAME[0][lang]+'</th>');
			$(".ol-all .summary_table tr").eq(1).append('<td>'+this.OLDSR+'</td>')
		}else{
			this.clearOverviewOther(".all_loan .ol-all");
		}
		
	},
	SortDebtArray : function(type){
		
		var oldebt = [].concat(this.DEBTLIST);
		if(type==1){
			this.DEBTLISTBYPERIOD = oldebt.sort(function(a,b) {
				return ((a[4] > b[4]) ? -1 : ((a[4] < b[4]) ? 1 : 0));
			});
		}else if(type==2){
			this.DEBTLISTBYRATE = oldebt.sort(function(a,b) {
				return ((parseFloat(a[6]) > parseFloat(b[6])) ? -1 : ((parseFloat(a[6]) < parseFloat(b[6])) ? 1 : 0));
			});
		}else if(type==3){
			this.DEBTLISTBYDEBT = oldebt.sort(function(a,b) {
				return ((parseFloat(a[1]) > parseFloat(b[1])) ? -1 : ((parseFloat(a[1]) < parseFloat(b[1])) ? 1 : 0));
			});
		}
	
	},
	MaxValue : function(array,type){
	
		var max = -Infinity;
	    for (var i = array.length; i--;) {
			if (array[i][type] > max) {
			  max = array[i][type];
			}
		}
		return max;

	},
	ReverseArray : function(array){
		/*
		var newdebt = [].concat(array);	
		var reversearray = newdebt.reverse();
		return reversearray;
		*/
		return array;
	},
	ReversePdfArray : function(array){
		
		var newdebt = [].concat(array);	
		var reversearray = newdebt.reverse();
		return reversearray;
		
		return array;
	},
	REFRESHLIST : function(type){
		
		var newdebt = "";
		var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1;
		
		//load different type Array
		newdebt = this.CurrentArray();
		
		//Refresh content
		var content = "";
		content += '<table class="all-table"><th class="first">'+this.CCLTABLE[0][lang]+'</th><th>'+this.CCLTABLE[1][lang]+'</th><th>'+this.CCLTABLE[2][lang]+'</th><th width="65">'+this.CCLTABLE[3][lang]+'</th><th>'+this.CCLTABLE[4][lang]+'</th><th>'+this.CCLTABLE[5][lang]+'</th><th>'+this.CCLTABLE[6][lang]+'</th>';
		
		for (i=0;i<newdebt.length;i++)
		{
			var total = parseFloat(newdebt[i][1]);
			var totalint = parseFloat(newdebt[i][2]);
			var repay = parseFloat(newdebt[i][3]);
			
		
		  content += '<tr><td class="corter">'+newdebt[i][0]+'</td><td>'+this.DOLLARPREFIX[lang]+this.formatPrice(newdebt[i][5])+'</td><td>'+this.DOLLARPREFIX[lang]+this.formatPrice(total)+'</td><td>'+newdebt[i][6]+'%</td><td>'+this.DOLLARPREFIX[lang]+this.formatPrice(totalint)+'</td><td>'+this.DOLLARPREFIX[lang]+this.formatPrice(repay)+'</td><td>'+newdebt[i][4]+" "+this.DATEFORMAT[lang][2]+'</td></tr>';
		}

		content += '</table>';

		$('.debtmain .report_cc .report-table').html(content);
		
		
	},
	CurrentArray : function(){
		var newdebt ="";
		if(this.SortType==1){
			newdebt = this.DEBTLISTBYPERIOD;
		}else if(this.SortType==2){
			newdebt = this.DEBTLISTBYRATE;
		}else if(this.SortType==3){
			newdebt = this.DEBTLISTBYDEBT;
		}else{
			newdebt = this.DEBTLIST;
		}
		
		return newdebt;
	},
	roundToTwo : function(value){
		return(Math.round(value * 100) / 100);
	},
	htmlEncode : function(str) {
		return str.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#039;').replace(/"/g, '&quot;');
	},
	getLangInt : function() {
		return (window.location.href.search('/en/') !== -1) ? 0 : 1;
	},
	effectiveRate : function(interest_new){
		return ((Math.pow((1+interest_new/100),(1/12))-1)*1200).toFixed(2); //%
	},
	clearOverviewOther : function(place){
		$(place+" .ol_title h2").html("");
		$(place+" .report-overview").html("");
		$(place+" .report-table").html("");
		$(place+" .details").hide();
		$(place+" .notice").html("");
	},
	clearOverviewLoan : function(place){
		$(place+" .pl_title h2").html("");
		$(place+" .report-overview").html("");
		$(place+" .report-table").html("");
		$(place+" .details").hide();
		$(place+" .notice").html("");
	},
	clearOverviewCC : function(place){
		$(place+" .cc_title h2").html("");
		$(place+" .report-overview").html("");
		$(place+" .report-table").html("");
		$(place+" .details").hide();
		$(place+" .notice").html("");
	}
};