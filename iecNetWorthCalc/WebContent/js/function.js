var startSlide = false;
var testMode = false;
var mobileBug = false;
// Mobile detect :start
var UserAgent=function(){
	var nav=window.navigator;
	//Mobile
	var android=nav.userAgent.match(/Android/i)!=null;
	
	var ipod=nav.userAgent.match(/iPod/i)!=null;
	var iphone=nav.userAgent.match(/iPhone/i)!=null;
	var ipad=nav.userAgent.match(/iPad/i)!=null;
	
	var blackberry=nav.userAgent.match(/blackberry/i)!=null;
	
	return{
		mobile:android||ipod||iphone||ipad||blackberry,
		android:android,
		ios:ipod||iphone||ipad,
		ipod:ipod,
		iphone:iphone,
		ipad:ipad,
		blackberry:blackberry
	}
}
// Mobile detect :end

window.onorientationchange = function() {
      var orientation = window.orientation;
	  var viewport = document.querySelector("meta[name=viewport]");
      switch(orientation) {
        case 0:
            document.body.setAttribute("class","portrait");
            //alert("portrait");
            break; 

        case 90:
            document.body.setAttribute("class","landscape");
            //alert("landscape");

		
            break;

        case -90: 
            document.body.setAttribute("class","landscape");
            //alert("landscape");

            break;
      }
    }


function removeLightbox(){
	$('.lightboxContent, .lightboxBg').fadeOut('slow', function() {
		$('.lightboxContent, .lightboxBg').remove();
	});
}


function validateQty(event) {
    var key = window.event ? event.keyCode : event.which;

 // add 2015/5/11, by Pacim
	if (event.keyCode == 8 || event.keyCode == 46
	 || event.keyCode == 37 || event.keyCode == 39 || key == 46|| key == 0) {
	    return true;
	}
	// add 2015/5/11, by Pacim
else if ( key < 48 || key > 57 ) {
    return false;
}
else return true;
};

function fbs_click(width, height) {
    var leftPosition, topPosition;
    //Allow for borders.
    leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
    //Allow for title and status bars.
    topPosition = (window.screen.height / 2) - ((height / 2) + 50);
    var windowFeatures = "status=no,height=" + height + ",width=" + width + ",resizable=yes,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";
    u=location.href;
    t=document.title;
    window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(u)+'&t='+encodeURIComponent(t),'sharer', windowFeatures);
    return false;
}


function updateTotal(checkMobile){
	var l1Num = parseInt(numeral($('#l_1').val()).format('0.0'));
	var l2Num = parseInt(numeral($('#l_2').val()).format('0.0'));
	if(l2Num > l1Num){
		$('.question1').addClass('alert2');
	}else{
		$('.question1').removeClass('alert2');
	}
	var l3Num = parseInt(numeral($('#l_3').val()).format('0.0'));
	var l4Num = parseInt(numeral($('#l_4').val()).format('0.0'));
	if(l4Num > l3Num){
		$('.question2').addClass('alert2');
	}else{
		$('.question2').removeClass('alert2');
	}
	var l7Num = parseInt(numeral($('#l_7').val()).format('0.0'));
	var l8Num = parseInt(numeral($('#l_8').val()).format('0.0'));
	if(l8Num > l7Num){
		$('.question3').addClass('alert2');
	}else{
		$('.question3').removeClass('alert2');
	}
	if(checkMobile == true){
		if(UserAgent().iphone){
			if(mobileBug == false){
				$('.caption2').css({'font-size':'20px','line-height':'25px'});
				mobileBug = true;
			}else{
				$('.caption2').css({'font-size':'12px','line-height':'15px'});
			}
			
		}
	}
	var totalAssets = 16;//$('.assetsInner .dataDiv').index();
	var totalLiabilities = 8;
	var totalAssetsVal = 0;
	var totalAssetsTemp = 0;
	var totalLiabilitiesTemp = 0;
	for(i=0;i<totalAssets;i++){
		totalAssetsTemp = numeral($('.assetsInner .dataDiv:eq('+i+') input').val()).format('0.0');
		totalAssetsVal = totalAssetsVal + Number(totalAssetsTemp.replace(/,/g, ''));
	}
	//console.log(totalAssets);
	var totalLiabilitiesVal = 0;
	for(i=0;i<totalLiabilities;i++){
		totalLiabilitiesTemp = numeral($('.liabilitiesInner .dataDiv:eq('+i+') input').val()).format('0.0');
		totalLiabilitiesVal = totalLiabilitiesVal + Number(totalLiabilitiesTemp.replace(/,/g, ''));
	}
	totalLiabilitiesVal = totalLiabilitiesVal-(parseInt(numeral($('#l_2').val()).format('0.0'))+parseInt(numeral($('#l_4').val()).format('0.0'))+parseInt(numeral($('#l_8').val()).format('0.0')));
	//console.log(totalLiabilities)
	var inputAssets = numeral(totalAssetsVal).format('0,0.0');
	var inputLiabilitiesVal = numeral(totalLiabilitiesVal).format('0,0.0');
	var inputEnd = numeral(totalAssetsVal- totalLiabilitiesVal).format('0,0.0');
	$('.totalLiabilities h3 span').text(inputLiabilitiesVal);
	$('.totalAssets h3 span').text(inputAssets);
	$('.endInner h3 span').text(inputEnd);
	if(parseInt(numeral(totalAssetsVal- totalLiabilitiesVal).format('0.0')) < 0){
		$('.endInner h3').addClass('red');
	}else{
		$('.endInner h3').removeClass('red');
	}
	//console.log(inputAssets);
}

$(document).ready(function() {
	var viewport = document.querySelector("meta[name=viewport]");
	if(UserAgent().android){
		$('html').addClass('android');
		var nua = navigator.userAgent;
		var is_android = ((nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 &&     nua.indexOf('AppleWebKit') > -1) && !(nua.indexOf('Chrome') > -1));
		if(is_android) {
		    viewport.setAttribute('content', 'width=640, initial-scale=1, maximum-scale=1, user-scalable=0');
		}else{
			viewport.setAttribute('content', 'width=640, user-scalable=no');
		}
	}else if(UserAgent().iphone){
		viewport.setAttribute('content', 'width=640, user-scalable=no');
	}else if(UserAgent().ipad){
		viewport.setAttribute('content', 'width=1024, user-scalable=no');
	}
	$('input').placeholder();

	// add 2015/5/11, by Pacim
	if (UserAgent().mobile) {
		$('input').each(function()
		{
			var _this = $(this);
			var _type = _this.attr('type');
			if(_type != 'radio')
			{
				_this.attr('type', 'number');
			}
		});
	}
	// add 2015/5/11, by Pacim
	
	
	$('.dataDiv .slider').slider({
		range: "min",
		value: 0,
		min: 0,
		max: 999999999.9,
		slide: function( event, ui ) {
			var inputVal = numeral(ui.value).format('0,0.0');
			if ($(this).parent().find('input').attr("type") == "number") // add 2015/01/21
				inputVal = ui.value; // add 2015/01/21
			$(this).parent().find('input').val(inputVal);
			if(ui.value == parseInt($(this).parent().find('input').attr('data-max-val'))){
				$(this).parent().addClass('alert');
			}else{
				$(this).parent().removeClass('alert');
			}
			updateTotal(false);

			if($(this).parent().find('input').attr('data-monthly') == "1"){
				if(ui.value == 0){
					$('.question1').removeClass('show');
				}else{
					$('.question1').addClass('show');
				}
				
			}else if($(this).parent().find('input').attr('data-monthly') == "2"){
				if(ui.value == 0){
					$('.question2').removeClass('show');
				}else{
					$('.question2').addClass('show');
				}
			}else if($(this).parent().find('input').attr('data-monthly') == "3"){
				if(ui.value == 0){
					$('.question3').removeClass('show');
				}else{
					$('.question3').addClass('show');
				}
			}
		}
	});
	$('#a1Slider').slider( "option", "max", 50000);
	$('#a2Slider').slider( "option", "max", 500000);
	$('#a3Slider').slider( "option", "max", 500000);
	$('#a3aSlider').slider( "option", "max", 500000);
	$('#a3bSlider').slider( "option", "max", 500000);
	$('#a4Slider').slider( "option", "max", 5000000);
	$('#a5Slider').slider( "option", "max", 1000000);
	$('#a6Slider').slider( "option", "max", 1000000);
	$('#a7Slider').slider( "option", "max", 1000000);
	$('#a8Slider').slider( "option", "max", 1000000);
	$('#a9Slider').slider( "option", "max", 1000000);
	$('#a10Slider').slider( "option", "max", 1000000);
	$('#a11Slider').slider( "option", "max", 500000);
	$('#a12Slider').slider( "option", "max", 500000);
	$('#a13Slider').slider( "option", "max", 1000000);
	$('#a14Slider').slider( "option", "max", 1000000);
	$('#l1Slider').slider( "option", "max", 5000000);
	$('#l2Slider').slider( "option", "max", 50000);
	$('#l3Slider').slider( "option", "max", 1000000);
	$('#l4Slider').slider( "option", "max", 50000);
	$('#l5Slider').slider( "option", "max", 500000);
	$('#l6Slider').slider( "option", "max", 500000);
	$('#l7Slider').slider( "option", "max", 500000);
	$('#l8Slider').slider( "option", "max", 50000);
	updateTotal(false);




	if($(window).width()>640){
		var fanW = 877 ;
		var fanH = 520 ;
		var fanAH = 600 ;
		$(document).tooltip();
	}else{
		var fanW = 562 ;
		var fanH = 1000 ;
		var fanAH = 1000 ;
		$('.btnToolTips').bind('click', function(event) {
			var hintTxt = $(this).attr('title');
			if($('body').hasClass('en')){
				$('body').append('<div class="lightboxBg"></div><div class="lightboxContent"><p>'+hintTxt+'</p><a href="javascript:removeLightbox();" class="btnClose">Close</div>');
			}else{
				$('body').append('<div class="lightboxBg"></div><div class="lightboxContent"><p>'+hintTxt+'</p><a href="javascript:removeLightbox();" class="btnClose">關閉</div>');
			}
			if(UserAgent().android){
				$('.lightboxBg').css({height:$(document).height()});
			}
		});
	}



	$('<a href="disclaimer.html?date=' + new Date().getTime() + '" style="display:none;" class="disclaimer" />').fancybox({
		'type':'iframe',
		'height':fanH,
		'width':fanW,
		'padding':0,
		'margin':0,
		'modal':true,
		'showCloseButton':false,
		'transitionOut':'none',
		'onComplete': function(){
			var hHeight = $(document).height();
			$('#fancybox-overlay').css('height',hHeight);
			if(UserAgent().mobile){
				$('#fancybox-content').css({height:fanH});
				$('#fancybox-wrap').css({height:fanH+70});
			}
		}
	}).trigger('click');

	$('.btnFancy').bind('click', function(event) {
		$('<a href="about.html?date=' + new Date().getTime() + '" style="display:none;" class="about" />').fancybox({
			'type':'iframe',
			'height':fanAH,
			'width':fanW,
			'padding':0,
			'margin':0,
			'modal':true,
			'overlayShow':false,
			'showCloseButton':true,
			'transitionOut':'none',
			'onComplete': function(){
				var hHeight = $(document).height();
				$('#fancybox-overlay').css('height',hHeight);
				$('#fancybox-close').show();
				if(UserAgent().mobile){
					$('#fancybox-content').css({height:fanAH});
					$('#fancybox-wrap').css({height:fanAH+40,'margin-top':100});
				}
			}
		}).trigger('click');
	});

	// $( ".dataDiv input" ).focus(function() {
		// var newVal = numeral($(this).val()).format('0.0');
		// $(this).val(newVal);
	// });

	// $( ".dataDiv input" ).blur(function() {
		// var newVal = numeral($(this).val()).format('0,0.0');
		// $(this).val(newVal);
	// });

	$( ".dataDiv input" ).change(function(event) {
		var checkingNum = true;
		var inputLenght = $(this).val().length;
		var inputTxt = $(this).val();
		var regex = /[0-9]|\./;
		for(i=0;i<inputLenght;i++){
			//console.log(inputTxt.substring(i, (i+1)));
			if( !regex.test(inputTxt.substring(i, (i+1))) ) {
				checkingNum = false;
				//console.log(false);
			}
		}
		if(checkingNum == false){
			$(this).val('0.0');
		}else{

			var changeVal = parseInt(numeral($(this).val()).format('0.0'));
			var maxVal = parseInt($(this).attr('data-max-val'));
			var target = '.dataDiv.'+$(this).attr('data-this-target')+' .slider';
			if(changeVal < maxVal ){
				$(target).slider( "value", changeVal );
				$(this).parent().parent().removeClass('alert');
			}else if(changeVal > 999999999.9){
				$(this).val('999,999,999.9');
				$(target).slider( "value", maxVal );
			}else if(changeVal >= maxVal){
				$(this).parent().parent().addClass('alert');
				$(target).slider( "value", maxVal );
			}else{
				$(target).slider( "value", maxVal );
			}
			if($(this).parent().parent().hasClass('question')){
				updateTotal(true);
			}else{
				updateTotal(false);
			}
			
			var newFormat = numeral($(this).val()).format('0,0.0');
			if ($(this).attr("type")=="text")	// add 2015/01/21
			$(this).val(newFormat);
			
			
			// updated 2015/5/11 by Pacim start
			if($(this).attr("type")=="number")
			{
				var newFormatNumber = numeral($(this).val()).format('0.0');
				$(this).val(newFormatNumber);
			}
			// updated 2015/5/11 by Pacim end
			
			if($(this).attr('data-monthly') == "1"){
				if($(this).val() == 0){
					$('.question1').removeClass('show');
				}else{
					$('.question1').addClass('show');
				}
			}else if($(this).attr('data-monthly') == "2"){
				if($(this).val() == 0){
					$('.question2').removeClass('show');
				}else{
					$('.question2').addClass('show');
				}
			}else if($(this).attr('data-monthly') == "3"){
				if($(this).val() == 0){
					$('.question3').removeClass('show');
				}else{
					$('.question3').addClass('show');
				}
			}
		}
	});

	// $( ".dataDiv input" ).bind('keypress', function(evt) {
	// 	var theEvent = evt || window.event;
	// 	var key = theEvent.keyCode || theEvent.which;
	// 	key = String.fromCharCode( key );
	// 	var regex = /[0-9]|\./;
	// 	if( !regex.test(key) ) {
	// 		theEvent.returnValue = false;
	// 		if(theEvent.preventDefault) theEvent.preventDefault();
	// 	}


	// });

	//var startVal = numeral($( ".dataDiv .slider" ).slider( "value" )).format('0,0');;
	//$( ".assetsInner .dataDiv input,.liabilitiesInner .dataDiv input" ).val(startVal);
	//updateTotal();

	$('.btnCheck').bind('click', function(event) {
		// if($('#g1').val()=="" || $('#g1').val()==null || $('#g2').val()=="" || $('#g2').val()==null || $('#g3').val()=="" || $('#g3').val()==null || $('#g4').val()=="" || $('#g4').val()==null){

		// }else{
			var body = $("html, body");
			body.animate({scrollTop:0});

			// Emergency funds
			var grossExpensevar = parseInt(numeral($('#g_3').val()).format('0.0'));
			var monthlyExpenses = grossExpensevar/12;
			var liquidAssets = parseInt(numeral($('#a_1').val()).format('0.0'))+parseInt(numeral($('#a_2').val()).format('0.0'))+parseInt(numeral($('#a_3').val()).format('0.0'))+parseInt(numeral($('#a_3a').val()).format('0.0'))+parseInt(numeral($('#a_3b').val()).format('0.0'));
			var liquidityRatio = liquidAssets / monthlyExpenses;
			if(isFinite(Math.floor(liquidityRatio)) &&  isNaN(liquidityRatio) == false){
				$('.resultBox.emergencyFunds h5').show();
				$('.resultBox.emergencyFunds .error').hide();
				$('.resultBox.emergencyFunds h5 span').text(Math.round(liquidityRatio * 100) / 100);
			
				if(liquidityRatio >= 6){
					var liquidityRatioLv = 1;
				}else if( liquidityRatio >5 && liquidityRatio <=5.99){
					var liquidityRatioLv = 0.8;
				}else if( liquidityRatio >3 && liquidityRatio <=4.99){
					var liquidityRatioLv = 0.6;
				}else if( liquidityRatio >2 && liquidityRatio <=2.99){
					var liquidityRatioLv = 0.4;
				}else if( liquidityRatio >1 && liquidityRatio <=1.99){
					var liquidityRatioLv = 0.25;
				}else{
					var liquidityRatioLv = 0;
				}
			}else{
				$('.resultBox.emergencyFunds h5').hide();
				$('.resultBox.emergencyFunds .error').show();
				var liquidityRatioLv = 0;
			}



			// Money management
			var surplus =parseInt(numeral($('#g_1').val()).format('0.0'))+parseInt(numeral($('#g_2').val()).format('0.0'))-parseInt(numeral($('#g_3').val()).format('0.0'))-parseInt(numeral($('#g_4').val()).format('0.0'));
			var incomeAfterTax =parseInt(numeral($('#g_1').val()).format('0.0'))+parseInt(numeral($('#g_2').val()).format('0.0'))-parseInt(numeral($('#g_4').val()).format('0.0'));
			var savingRatio = (surplus / incomeAfterTax)*100;
			
			if(isFinite(Math.floor(savingRatio)) &&  isNaN(savingRatio) == false){
				$('.resultBox.moneyManagement h5').show();
				$('.resultBox.moneyManagement .error').hide();
				$('.resultBox.moneyManagement h5 span').text(Math.round(savingRatio));
				
				if(savingRatio < 5){
					var savingRatioLv = 0;
				}else if( savingRatio >=5 && savingRatio <=9.99){
					var savingRatioLv = 0.25;
				}else if( savingRatio >=10 && savingRatio <=19.99){
					var savingRatioLv = 0.4;
				}else if( savingRatio >=20 && savingRatio <=29.99){
					var savingRatioLv = 0.6;
				}else if( savingRatio >=30 && savingRatio <=39.99){
					var savingRatioLv = 0.8;
				}else{
					var savingRatioLv = 1;
				}
			}else{
				$('.resultBox.moneyManagement h5').hide();
				$('.resultBox.moneyManagement .error').show();
				var savingRatioLv = 0;
			}


			// Debt management
			var monthlyLiabilities = parseInt(numeral($('#l_2').val()).format('0.0'))+parseInt(numeral($('#l_5').val()).format('0.0'))+parseInt(numeral($('#l_6').val()).format('0.0'))+parseInt(numeral($('#l_4').val()).format('0.0'))+parseInt(numeral($('#l_8').val()).format('0.0'));
			var monthlyGrossIncome = (parseInt(numeral($('#g_1').val()).format('0.0'))+parseInt(numeral($('#g_2').val()).format('0.0')))/12;
			var debtServicingRatio = (monthlyLiabilities/ monthlyGrossIncome)*100;
			
			if(isFinite(Math.floor(debtServicingRatio)) &&  isNaN(debtServicingRatio) == false){
				$('.resultBox.debtManagement h5').show();
				$('.resultBox.debtManagement .error').hide();
				$('.resultBox.debtManagement h5 span').text(Math.round(debtServicingRatio));
				if(debtServicingRatio >= 40){
					var debtServicingRatioLv = 0;
				}else if( debtServicingRatio >=30 && debtServicingRatio <=39.99){
					var debtServicingRatioLv = 0.25;
				}else if( debtServicingRatio >=20 && debtServicingRatio <=29.99){
					var debtServicingRatioLv = 0.4;
				}else if( debtServicingRatio >=10 && debtServicingRatio <=19.99){
					var debtServicingRatioLv = 0.6;
				}else if( debtServicingRatio >=5 && debtServicingRatio <=9.99){
					var debtServicingRatioLv = 0.8;
				}else{
					var debtServicingRatioLv = 1;
				}
			}else{
				$('.resultBox.debtManagement h5').hide();
				$('.resultBox.debtManagement .error').show();
				var debtServicingRatioLv = 0;
			}


			console.log('Emergency funds - Monthly Expenses: '+monthlyExpenses + ' Liquid Assets: ' + liquidAssets + ' Liquidity Ratio: ' + liquidityRatio);
			console.log('Money management - Surplus: '+surplus + ' Income After Tax: ' + incomeAfterTax + ' Saving Ratio: ' + savingRatio);
			console.log('Debt management - Monthly Liabilities: '+monthlyLiabilities+' Monthly Gross Income:'+(Math.round(monthlyGrossIncome *100)/100)+' Debt Servicing Ratio: '+debtServicingRatio);
			console.log('Result - Emergency Funds: '+liquidityRatioLv+' Debt Management: '+debtServicingRatioLv+' Money Management: '+savingRatioLv);

			$('.calculator').fadeOut('slow', function() {
				$('.result').fadeIn('slow');
				var d = [
				  [
					{axis:"Money management",value:savingRatioLv},
					{axis:"Emergency fund",value:liquidityRatioLv},
					{axis:"Debt management",value:debtServicingRatioLv}
				  ]
				];
				RadarChart.draw("#chart", d, mycfg);
			});
		//}
	});

	$('.btnReset').bind('click', function(event) {
		$( ".dataDiv input" ).val(0);
		$('.dataDiv .slider').slider( "option", "value", 0);
		$('.question').removeClass('show');
		updateTotal(false);
	});


	$('.btnBack').bind('click', function(event) {
		var body = $("html, body");
		body.animate({scrollTop:0});
		$('.result').fadeOut('slow',function(){
			$('.calculator').fadeIn('slow');
		});
	});

	$('.assetsInner .box.liquidAssets h4').bind('click', function(event) {
		if($('.assetsInner .box.liquidAssets h4').hasClass('hide')){
			$(this).removeClass('hide');
			$('.assetsInner .box.liquidAssets .dataDiv').show();
		}else{
			$(this).addClass('hide');
			$('.assetsInner .box.liquidAssets .dataDiv').hide();
		}
	});

	$('.assetsInner .box.investmentAssets h4').bind('click', function(event) {
		if($('.assetsInner .box.investmentAssets h4').hasClass('hide')){
			$(this).removeClass('hide');
			$('.assetsInner .box.investmentAssets .dataDiv').show();
		}else{
			$(this).addClass('hide');
			$('.assetsInner .box.investmentAssets .dataDiv').hide();
		}
	});

	$('.assetsInner .box.personalAssets h4').bind('click', function(event) {
		if($('.assetsInner .box.personalAssets h4').hasClass('hide')){
			$(this).removeClass('hide');
			$('.assetsInner .box.personalAssets .dataDiv').show();
		}else{
			$(this).addClass('hide');
			$('.assetsInner .box.personalAssets .dataDiv').hide();
		}
	});

	$('.btnCollapse').bind('click', function(event) {
		$('.assetsInner h4').addClass('hide');
		$('.assetsInner .dataDiv').hide();
	});


	if($('a.icoEmail').length > 0) {
		$('a.icoEmail_en').each(function() {

			$(this).click(function() {
				var aHref = '';
				var subject = '';
				var content = '';
				subject = 'Net worth calculator ';
				content = 'Check out how good you are at managing your wealth! Use our calculator to work out if what you own outweighs what you owe.\n' + window.location.href;
				aHref = 'mailto:info@thechinfamily.hk' + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(content);			
				window.location = aHref;
			});
		});
		
		$('a.icoEmail_tc').each(function() {

			$(this).click(function() {
				var aHref = '';
				var subject = '';
				var content = '';
				subject = '資產淨值計算機';
				content = '檢視你是否有效地管理你的財富！使用資產淨值計算機助你計算你所擁有的資產是否多於你所虧欠的債務。\n' + window.location.href;
				aHref = 'mailto:info@thechinfamily.hk' + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(content);			
				window.location = aHref;
			});
		});
		
	}


	if(testMode == true){

		$('#g_1').val( 200000);
		$('#g_2').val( 2000);
		$('#g_3').val( 20000);
		$('#g_4').val( 2000);
		$('#a_1').val( 2000);
		$('#a_2').val( 2000);
		$('#a_3').val( 0);
		$('#a_4').val( 0);
		$('#a_5').val( 0);
		$('#a_6').val( 0);
		$('#a_7').val( 0);
		$('#a_8').val( 0);
		$('#a_9').val( 0);
		$('#a_10').val( 0);
		$('#a_11').val( 0);
		$('#a_12').val( 0);
		$('#a_13').val( 0);
		$('#a_14').val( 0);
		$('#l_1').val( 3000);
		$('#l_2').val( 3000);
		$('#l_3').val( 0);
		$('#l_4').val( 0);
		$('#l_5').val( 0);
		$('#l_6').val( 0);
		$('#l_7').val( 0);
		$('#l_8').val( 0);
		updateTotal(false);
	}
});

