var current_Slide = 0, 
	totalSlide = 0,
	tmpTips = "",
	sudoSlider = "",
	store = [];
	sudoslider1 = "";
	
var sliders = ["step1_0", //sliderbar0
               "step1_1", //sliderbar1
               "step1_2", //sliderbar2
               
               "step2_0", //sliderbar3
               "step2_2",//sliderbar4
               "step2_3",//sliderbar5
	           
               "step3_0_0",//sliderbar6
               "step3_0_1",//sliderbar7
               "step3_0_2",//sliderbar8
               "step3_0_3",//9
               "step3_0_4",//10
               "step3_0_5",//11
               "step3_0_6",//12
               "step3_0_7",//13
               "step3_1_0",//14
               "step3_1_1",//15
               "step3_1_2",//16
               "step3_1_3",//17
			   
               "step4_0",//18
               "step4_1",//19
               "step4_2",//20
			   
               "step5_0",//21
               "step5_1"//22,
			  /* {"min":0,"max":999999,"defaultValue":0},//23  itemcount
			   {"min":0,"max":999999,"defaultValue":0},//24 
			   {"min":0,"max":999999,"defaultValue":0},//25
			   {"min":0,"max":999999,"defaultValue":0},//26
			   {"min":0,"max":999999,"defaultValue":0},//27
			   {"min":0,"max":999999,"defaultValue":0},//28
		       {"min":0,"max":999999,"defaultValue":0},//29
			   {"min":0,"max":999999,"defaultValue":0},//30
			   {"min":0,"max":9999999,"defaultValue":0},//31
			   {"min":0,"max":9999999,"defaultValue":0},//32
			   {"min":0,"max":9999999,"defaultValue":0},//33
			   {"min":0,"max":9999999,"defaultValue":0},//34
			   {"min":0,"max":9999999,"defaultValue":0},//35
			   {"min":0,"max":9999999,"defaultValue":0},//36
			   {"min":0,"max":999999,"defaultValue":0},//37
			   {"min":0,"max":999999,"defaultValue":0},//38
			   {"min":0,"max":999999,"defaultValue":0},//39
			   {"min":0,"max":999999,"defaultValue":0},//40
			   {"min":0,"max":999999,"defaultValue":0},//41
			   {"min":0,"max":999999,"defaultValue":0},//42
			   {"min":0,"max":30,"defaultValue":0},//43
			   {"min":0,"max":30,"defaultValue":0},//44
			   {"min":0,"max":30,"defaultValue":0},//45
			   {"min":0,"max":30,"defaultValue":0},//46
			   {"min":0,"max":30,"defaultValue":0},//47
			   {"min":0,"max":30,"defaultValue":0},//48
*/			   
	          ];

var UserAgent=function(){
	var nav=window.navigator;
	var android=nav.userAgent.match(/Android/i)!=null;
	var ipod=nav.userAgent.match(/iPod/i)!=null;
	var iphone=nav.userAgent.match(/iPhone/i)!=null;
	var ipad=nav.userAgent.match(/iPad/i)!=null;
	var blackberry=nav.userAgent.match(/blackberry/i)!=null;
	
	return{
		mobile:android||ipod||iphone||ipad||blackberry,
		tablet:android||ipad,
		android:android,
		ios:ipod||iphone||ipad,
		ipod:ipod,
		iphone:iphone,
		ipad:ipad,
		blackberry:blackberry,
		userAgent:nav.userAgent
	}
}	  

			  
adjustStyle($(window).width());
$(function(){
	
	disable_StepTrack();
	appendmenuitem();
	$(window).resize(function(){
		adjustStyle($(window).width());
		bottomMenu(current_Slide);
		
	});
	buildSudoSlider();
	$(".facebook").on("click", fbShare );
	$(".email").on("click", mailShare);
	$("#backToTop, .goToTop").on("click", mPageTop);
	$("#reset").on("click", resetQuest);
	$("#edit").on("click", editValue);
	 $(".oMenu, .loadingMask").unbind().click(function(e){
		menuMobile($(this))
	 });
	
	$(".startBtn, .quest").click(function(e){ 
		fancyBox_remind("#useExplain", "auto", true, false, "auto");
	});
		
	if(window.location.href.indexOf("/index") > -1){
		fancyBox_remind("#opening", "auto", false, false,"auto");
		$(".mfooterLine").hide();
	}else {
		sudoSlider = $("#slider").sudoSlider({
			prevNext: false,
			updateBefore:true,
			autoHeight:true,
			afterAnimation:function(slide){
				current_Slide = slide;
				showHide_prevNext_Btn("afterAnimate", current_Slide);
				bottomMenu(slide);
			},
			initCallback: function() {
				totalSlide = this.getValue("totalslides");
				current_Slide = this.getValue("currentslide");
				showHide_prevNext_Btn("init", current_Slide);
				enable_StepTrack( this.getValue("currentslide") - 1 );
			}		
		});

		$('a#next,a#bottomNext, a#previous, a#bottomPrev').click(function() {
			prevNextSlide( this.id , current_Slide, sudoSlider, false);
		});

		// Step Track Hover
		$('.step_btn_outer .step_btn .rela').hover(
			function() {
				$('#'+ $(this)[0].id).find('.hoverele').show();
			}, function() {
				$('#'+ $(this)[0].id).find('.hoverele').hide();
			}
		);
		
		$('.showTips').mouseover(function(e) { 
			var mX = e.pageX, mY = e.pageY;
			tmpTips = $(this).attr("data-targetTips");
			if(screenMode == 1 || screenMode == 2)
				$(tmpTips).css({'top':mY+15,'left':mX-70}).show();
			else if(screenMode == 3)
			{
				$(tmpTips).css({'top':mY+20}).show();
				tipsNewLocation();
			}
		}).mouseout(function(e) { 
			$(tmpTips).hide();
		});
		
		function tipsNewLocation()
		{
			$( window ).resize(function() {
				$(".tips").css({'left':"68px"});
			});
		}
		if(UserAgent().tablet || UserAgent().mobile){
			$('body').off("mouseover mouseout", ".showTips");
			$('.showTips').click(function(e) { 
				var mX = e.pageX, mY = e.pageY;
				tmpTips = $(this).attr("data-targetTips");
				if(screenMode == 1 || screenMode == 2)
					$(tmpTips).css({'top':mY+15,'left':mX-70}).show();
				else if(screenMode == 3)
				{
					$(tmpTips).css({'top':mY+20}).show();
					tipsNewLocation();
				}
			});
			if(UserAgent().ios){
				$('body>*').click(function() { $('.tips').hide();	});
			}
		}

		// Slide 2 and Slide 4 Radio / CheckBox input checking
		$("input[name=radioType_retireExpense], input[name=checkBoxType_savingInvest]").click(function(){
			var target = $(this).attr("data-en_disTarget").split(","), 
				checkType = "";	
				
			checkType = ( $(this).is(":checked") )? "checked" : "unchecked";
			
			if( current_Slide == 4 ) {
				slide4_Checking(checkType, target);
			} else {
				dimLayer("undim", target[0]);
				dimLayer("dim", target[1]);
			}
		});
		
	
		
		$(".addArrow").click(function(){
			if($(this).hasClass('openIcon'))
			{
				$(this).siblings('div.slideCon').slideUp(function() {sudoSlider.adjust();});
				$(this).removeClass('openIcon').addClass('closeIcon');
				var src = $(this).children('img').attr("src").replace(/\/minus/g,'/plus');
			}else 
			{
				$(this).siblings('div.slideCon').slideDown(function() {sudoSlider.adjust();});
				$(this).addClass('openIcon').removeClass('closeIcon');
				var src = $(this).children('img').attr("src").replace(/\/plus/g,'/minus');
			}
			$(this).children('img').attr("src", src);
		});
		
	
	//$("#"+in_id).find(".ocIcon").attr("src", tmp);
		
		for(var i = 0; i < 23; i++){
			$('#sliderBar'+i).slider({
				range:"min",
				min:fieldValidationProperties[sliders[i]].slide_min,
				max:fieldValidationProperties[sliders[i]].slide_max+0.01,
				animate: "fast",
				step:fieldValidationProperties[sliders[i]].step,
				value: fieldValidationProperties[sliders[i]].defaultVal,
				start:function(){},
				slide: function( event, ui ) {
					var tempID = this.id;
					var tempNum = tempID.replace(/sliderBar/,"");
					var fieldName = $( "#mount" + tempNum ).attr("name");
					$( "#mount" + tempNum ).val(getNumberWithUnit(ui.value.toString(),fieldValidationProperties[fieldName].unit)).change();
					
					if(ui.value>=fieldValidationProperties[$( "#mount" +tempNum ).attr("name")].slide_max){
						$(this).closest(".questContainer").find(".remindMsg").show();
					}else{
						$(this).closest(".questContainer").find(".remindMsg").hide();
					}
					sudoSlider.adjust();
				}
			});
			/*
			var percentValue = toPercent(i);
			$('#mount'+ i).val(sliders[i].defaultValue + percentValue).change();*/
		}
		//Initialize the form
		initializeFormFieldsVal();
		
		
		$(".mount").on({
			keyup:function() {
				if(!$(this).hasClass("postEdit")){
					plus_minus_inputBox(this.id);	
				}
			}
		});
		
		$(".mount, .itemMount").on({
			focusin:function(){
				$(this).val( $(this).val().replace(/[,$%]/g,"") );
			},focusout:function(){
				if(this.t_value == undefined || this.t_value == ""){
					this.t_value = 0;
				}
				
				if($(this).val() == "" || !$(this).val().replace(/[,$%]/g,"").match(/^\d*?\.?\d*?$/)){
					this.value=getDisplayVal(this.t_value,this.name);
				}
				else this.t_value=this.value;if(this.value.match(/^(\d+(?:\.\d+)?)?$/))this.o_value=this.value;
				
				if(!$(this).hasClass("postEdit")){
					plus_minus_inputBox(this.id);	
				}
				adjustValueWithUnit(this.name,($(this).hasClass("postEdit")&&this.name!="res_rate"&&!$(this).hasClass("readonly")?1:0));
			},click:function(){
				$(this).select();
			}
		});
		
		
		$(".silderBtn").click(function() {
			plus_minus_inputBox(this.id);
		});
		
		$(".more_box_details").click(function(){
			var t = $(this).attr("data-tOpen");
			$('.moreboxLabel').children(".boxContainer").hide();
			$(t).show();
			sudoSlider.adjust();
		});
		
		$('.planTitle').click(function(){
			slideToggle(this);
		});
		
		
		$('input[name=checkBoxType_retireSchemes]').click(function(){
			$(".retireRemindMsg").hide();
			var checkBoxId = this.id;
			var checkBoxNum = checkBoxId.substring(checkBoxId.length-1,checkBoxId.length);
			var schemesNum = checkBoxNum - 1;	
			var isCheck1 = $("#checkbox1").is(":checked"),
				isCheck2 = $("#checkbox2").is(":checked"),
				isCheck3 = $("#checkbox3").is(":checked");
		
			if ( $(this).is(":checked") ){
				if( this.id != "checkbox3"){
					var target = $(this).attr("data-openTarget");
					$(target).removeClass('disableCol').find("p").removeClass('dimTxt disableCol');
					$(target).find("img").removeClass('disableIcon');
					dimLayer("undim", target);
					$(target).addClass('schemesOpen');
					$(target).trigger("click");
					$("#checkbox3").removeAttr('checked');
				} else {
						$("#checkbox1").removeAttr('checked');
						$("#checkbox2").removeAttr('checked');
						var retire = $('#retirement_Plan').find('input');
						backToDefault(retire);
						$($("input[name='personalType_retireSchemes']")[fieldValidationProperties["personalType_retireSchemes"].defaultVal]).click();
						var targetIds = ["#checkbox1","#checkbox2"];
						for(var i = 0 ; i < targetIds.length ; i++){
							var target = $(targetIds[i]).attr("data-openTarget");
							$(target).addClass('disableCol').find("p").addClass('dimTxt');
							$(target).find("img").addClass('disableIcon');
							
							if( $(target).next("div").css('display') != 'none'){
								$(target).trigger("click");
							}
							$(target).removeClass('schemesOpen');
							dimLayer("dim", target);
						}
						$(".retireRemindMsg").show();
				}
			} else {
				
				if(this.id == "checkbox1"){
					var mandate = $('#schemes_c0').find('input');
					backToDefault(mandate);
					$($("input[name='personalType_retireSchemes']")[fieldValidationProperties["personalType_retireSchemes"].defaultVal]).click();
				}else if(this.id == "checkbox2"){
					var orso = $('#schemes_c1').find('input');
					backToDefault(orso);
				}
				
				var target = $(this).attr("data-openTarget");
				$(target).addClass('disableCol').find("p").addClass('dimTxt');
				$(target).find("img").addClass('disableIcon');
				
				if( $(target).next("div").css('display') != 'none'){
					$(target).trigger("click");
				}
				$(target).removeClass('schemesOpen');
				dimLayer("dim", target);
			}
		});

		var t_value=""; 
		var o_value = "";
		
		$('.floats').keypress(function(){
			if(this.t_value == undefined){
				this.t_value = 0;
			}
			if(!this.value.match(/^\d*?\.?\d*?$/))
			this.value=this.t_value;
			else this.t_value=this.value;if(this.value.match(/^(\d+(?:\.\d+)?)?$/))this.o_value=this.value;
		});
			
		$('.floats').keyup(function(){
			if(this.t_value == undefined){
				this.t_value = 0;
			}
			if (!this.value.match(/^\d*?\.?\d*?$/)) this.value = this.t_value; else this.t_value = this.value; if (this.value.match(/^(\d+(?:\.\d+)?)?$/)) this.o_value = this.value;
			
			//var _relatedSliderID = "slider" + $(this).attr("id").split("field")[1];
			//var _relatedSlider = $("#"+_relatedSliderID);
			//_relatedSlider.slider( { value:$(this).attr("value") } );
			//syncSliderAndTextField();
		});
			
		$('.integer').keypress(function(){
			if(this.t_value == undefined){
				this.t_value = 0;
			}
			if(!this.value.match(/^\d*?\d*?$/))
			this.value=this.t_value;
			else this.t_value=this.value;if(this.value.match(/^(\d+(?:\d+)?)?$/))this.o_value=this.value;
		});
			
		$('.integer').keyup(function(){
			if(this.t_value == undefined){
				this.t_value = 0;
			}
			if (!this.value.match(/^\d*?\d*?$/)) this.value = this.t_value; else this.t_value = this.value; if (this.value.match(/^(\d+(?:\d+)?)?$/)) this.o_value = this.value;
			
			//var _relatedSliderID = "slider" + $(this).attr("id").split("field")[1];
			//var _relatedSlider = $("#"+_relatedSliderID);
			//_relatedSlider.slider( { value:$(this).attr("value") } );
			//syncSliderAndTextField();
		});
		
		
		for(var k = 0; k < $(".point_container > div").length - 1; k++) {
			$("#track"+k+" > input").click(function(e){ 
				var sNum = $(this).parent().attr("id"),
					sNum = sNum[sNum.length-1];
				sNum++;
					prevNextSlide("", sNum, sudoSlider, true); 
			});
		}
		
		$(document).keydown(function(e) {
			if (e.keyCode == 9) {  
				e.preventDefault(); 
			}
		});

		/*$(window).load(function(){
			setNumeric();
		});*/
	
	}
});

/*
function setNumeric(){
	var  isTargetDevice = UserAgent();

	if(isTargetDevice.mobile || isTargetDevice.tablet){ 
		var s = '#nper1, #nper2, #discountedTotalExpenses, #MPFAccruedBenefit, #totalSavingInvestment, input[type="radio"]';
		//$('input').not(s).prop('type', 'number')
	};
}
*/

		
function tipsNewLocation()
{		
	$( window ).resize(function() {
		$(".tips").css({'left':68});	
	});
}

function runTipsBox(mX,mY,tmpTips){
	if(screenMode == 1 || screenMode == 2) {
		$(tmpTips).css({'top':mY+15,'left':mX-70}).show();
	} else if(screenMode == 3) {
		$(tmpTips).css({'top':mY+20}).show();
		tipsNewLocation();
	}
}

function mMenuClose(){
	$('.oMenu').removeClass('over');
	$('.loadingMask, #blockLayer').css('display','none');
}

function bottomMenu(slide){
	slide = slide? slide : "";
	if( slide != "" ) {
		if( screenMode == 3 && slide == totalSlide ) {
			$("#bottomBtn").appendTo("body");
			$(".mfooterLine").hide();
		}
	}
}

function buildSudoSlider()
	{
		var tableClone = $('.tableTabs').find('div.mobileRe_mores').clone();
		$('#mobileSlider').html(tableClone);
		sudoSlider1 = $("#mobileSlider").sudoSlider({
			continuous: true,
			speed:500,
			beforeAnimation:function(slide){
				$(".boxContainer").fadeOut();
				$("#boxLabel"+slide).fadeIn();
			},afterAnimation:function(){
				sudoSlider.adjust();
			}
		});
		
	}

function slideShow()
{

	var elements = ["eachMonth","bankSav .addArrow","stock .addArrow","fund .addArrow","bond .addArrow","insurance .addArrow","others .addArrow"];
	$('input[name=radioType_retireExpense]').click(function(){
		var getId = $(this)[0].id;
		if(getId == "radio1")
		{
			if(screenMode == 3)
			{
				$('#Form_Expense').slideDown(function() {
					sudoSlider.adjust();
				});
			}
		}else
		{
			if(screenMode == 3)
			{
				$('#Form_Expense').slideUp(function() {
					sudoSlider.adjust();
				});
				
			}
		}
	});
	(screenMode != 3) ? $('#Form_Expense').show(): ($('#radio').is(':checked')) ? $('#Form_Expense').slideUp(function() {sudoSlider.adjust();}) : "";
	
	if(screenMode == 3)
	{
		$('.slideCon').css('display','');
		for(var k = 0;k<elements.length;k++)
		{
			detectMenuMobile(elements[k]);
		}
		$(".controls .nextBtn").trigger("click");
	}else
	{
		$('.slideCon').css('display','inline');
	}
	
	
}

function detectMenuMobile(ele)
 {
	if($("#"+ele).hasClass('openIcon'))
	{
		$("#"+ele).siblings('.slideCon').slideDown();
	}else
	{
		$("#"+ele).siblings('.slideCon').slideUp();
	}
}

function menuMobile(element){
	if(!element.hasClass("over")){
		element.addClass("over");
		$("#blockLayer").stop().slideDown(800);
		$(".loadingMask").show();
	}else{
		element.removeClass("over");
		$("#blockLayer").stop().slideUp();
		$(".loadingMask").hide();	
	}
}

function appendmenuitem()
{	
	var object = $('.toolsSelect > *');
	
	for(var i = 0;i<object.length;i++)
	{
		//If no clone here, elements will be withdrawed from desktop and inserted into mobile directly.
		store[i] = object.eq(i).clone();
		store[i].text(store[i].attr('title')).removeAttr("title");
		store[i] = $("<li/>").append(store[i]);
		//use append or html here are both ok
		//$('#loadMenu li').eq(i).html(store[i]);
		$('#loadMenu').append(store[i]);
	}
}

function plus_minus_inputBox(uid) {
	//var number = uid.substring(uid.length-1,uid.length);
	var number = uid.replace(/[a-zA-Z]*/,"");
	if( uid == "mount"+number) {
		$("#sliderBar"+number).slider("option", "value", Math.round($("#"+uid).val().replace(/[,$%]/g,"")) );	
		$("#sliderBar"+number).closest(".questContainer").find(".remindMsg").hide();
	} else {
		var value = $("#sliderBar"+number).slider("option","value"),
			step = $("#sliderBar"+number).slider("option", "step");
		if ( uid == "addBtn"+number) {
			$("#sliderBar"+number).slider("value", value + step);
			$( "#mount"+number).val( $("#sliderBar"+number).slider("value") ).change();
		} else {
			$("#sliderBar"+number).slider("value", value - step);
			$( "#mount" +number ).val( $("#sliderBar"+number).slider("value") ).change();
		}	
		
		if($("#sliderBar"+number).slider("value")>=fieldValidationProperties[$( "#mount" +number ).attr("name")].slide_max){
			$("#sliderBar"+number).closest(".questContainer").find(".remindMsg").show();
		}else{
			$("#sliderBar"+number).closest(".questContainer").find(".remindMsg").hide();
		}
		sudoSlider.adjust();
	}
}

function toPercent(number)
{
	if($("#sliderBar"+number).attr('class').indexOf('sbPercentImg') > -1)
	{
		return "%";
	}else
	{
		return "";
	}	
}


// For Slide 3 Detection expand tab
$(document).on('click', '.schemesOpen', function(){
	slideToggle(this);
});

function prevNextSlide(uID, curr, slider, directClick) {
	if( !directClick ){
		if( uID == "next" || uID == "bottomNext" ){
			var validateResult = stepValidation(current_Slide);
			if(validateResult==""){
				updateRpObj(current_Slide);
				if(current_Slide==5){
					//Turn to result page and display result
					getFinalResult();
					displayResult();
					MpfAlert("checkBoxType_retireSchemes,totalAmountRequired",0);
				}
				
				curr++;	
				if( curr == 6 ){	
					resultSet();	
				}

			}else{
				alert(validateResult);
			}
			
		} else {
			curr--;
		}
		
		mPageTop();
		slider.goToSlide(curr);
		
		// Get et step track title for each slide title
		curr--;
		setTimeout(function(){ $("span.sTitle").text( $("div#track"+curr+" > .ele"+curr+"").text() ); },1000);
		
		// Call function for enable step track button
		enable_StepTrack(curr);
	} else {
		if(curr > current_Slide){
			updateRpObj(current_Slide);
		}
		mPageTop();
		slider.goToSlide(curr);
		//enable_StepTrack(curr);
		curr--;
		setTimeout(function(){ $("span.sTitle").text( $("div#track"+curr+" > .ele"+curr+"").text() ); },1000);
	}
}	

function fancyBox_remind( rID, rh, rClose, rClick, rScroll ) {
	var rScroll = rScroll? rScroll : "auto";
	$.fancybox({
		width: '877px', 
		height: rh, 
		'href': rID,  
		'autoSize' : false,		
		closeBtn: rClose,
		scrolling: rScroll,
		helpers : {
			overlay : {
				locked : true,
				closeClick: rClick
			}
		}
	});		
}

function fancyBox_remind1( rID, rh, rClose, rClick ) {
	$.fancybox({
		width: '877px', 
		height: rh, 
		'href': rID,  
		'autoSize' : false,		
		closeBtn: rClose,
		helpers : {
			overlay : {
				locked : true,
				closeClick: rClick
			}
		}
	});		
}

function showHide_prevNext_Btn(type, currSlide){
	if( currSlide == 1 ) {
		$("#previous, .prepage").css("visibility","hidden");
	} else if( currSlide == 5 ){
			$(".innerNext span").first().hide();
			$(".innerNext span").last().show();
	} else {
		$("#previous, .prepage").css("visibility","visible");
		if(currSlide != 5){
			$('#bottomNext span').first().show();
			$('#bottomNext span').last().hide();
		}	
	}
}

function indexPage_Link(){
	var link = window.location.href;
	link = link.substring(0, link.lastIndexOf('/')+1) + 'index.jsp';
	return link;
}

function fbShare() {
	var targetLink = indexPage_Link();
	window.open('https://www.facebook.com/sharer/sharer.php?u=' + targetLink, 'sharer', 'width=626,height=436');	
}
		
function mailShare(){
	var targetLink = indexPage_Link(),
		mailTo = "mailto:info@thechinfamily.hk?",
		body_line =  escape("\n"),
		mailSubject = "subject=" + $("#eMailShare .eMail_Title").html(),
		body = "";
		body = "&body="+ $("#eMailShare .eMail_Content").html() + body_line + encodeURIComponent(targetLink);
	mailTo += mailSubject + body;
	$(".email").attr('href', mailTo);
}			

function feedBack(){
	var mail = 'mailto:'+$("#user_feedBack .feedback_to").html()+'?',
		msubject = "subject="+$("#user_feedBack .feedback_subject").html(),
		mbody = "";
	mail += msubject + mbody;
	$("#mail_suggest").attr('href', mail);
}

function backTop(){
	$("body, html").animate({ 
		scrollTop: $(".resPlan").offset().top 
	}, 10);
}

function mPageTop(){
	$("body, html").animate({ scrollTop: 0 }, 10);
}

function resetQuest(){
	window.location.href = "index.jsp";
}

function resultSet(){
	$(".main").addClass("resetResult_Padd");
	$(".step_check, a#previous, a#next").hide();
}

function editValue(){
	//Fill the previous inserted values into the form before it slides down
	postEdit();
	
	$(".accordion").slideToggle("slow", function(){
		sudoSlider.adjust();
	});	
}

function slideToggle(action)
{ 
	var actionId = action.id, 
		actionClassName = action.className; 

	$('#'+actionId).next('div').slideToggle('fast', function(){
		
		if( current_Slide == totalSlide ) {
			activeEditPart(actionClassName, actionId); 
		}
		iconChange( $(this).css('display'), actionId );
		sudoSlider.adjust();

	});
}

function activeEditPart(actionClassName, actionId){
	if( actionClassName.indexOf("planTitle") > -1 ) {	
		if( actionClassName.indexOf("activePart") == -1 ){
			$('#'+actionId).addClass("activePart");
		} else {
			$('#'+actionId).removeClass("activePart");
		}
	}
}

function iconChange(type, in_id) {
	var tmp  = $("#"+in_id).find(".ocIcon").attr("src");
	
	if(type == "block"){
		tmp = tmp.replace(/\/plus/g,"/minus");
	} else {
		tmp = tmp.replace(/\/minus/g,"/plus");
	}
	
	$("#"+in_id).find(".ocIcon").attr("src", tmp);
}

function dimLayer(type, selector) 
{
	if(type == "dim") {
		$(selector).find(".dimLayer").show();
	} else { 
		$(selector).find(".dimLayer").hide();
	}
}

function enable_StepTrack(curr)
{
	$('.step_check input:radio[name=track'+curr+']').attr('checked','checked').attr("disabled", false).css({'cursor':'pointer','display':'block'});

}

function disable_StepTrack()
{
	$('.step_check input:radio').attr('checked',false).attr("disabled", true);
}
function slide4_Checking(type, inTarget) {
	if( type == "checked" ){
		dimLayer("undim", inTarget[0]);
		dimLayer("dim", inTarget[1]);
	} else {
		dimLayer("undim", inTarget[1]);
		dimLayer("dim", inTarget[0]);
	}
}

function backToDefault(ele)
{
	for(var i = 0;i<ele.length;i++)
	{
		if(ele[i].type == "radio")
		{	
			ele[i].checked = false;
		}else if(ele[i].type == "text")
		{
			ele[i].value = getDefaultDisplayVal(ele[i].name);
			if(ele[i].id.indexOf('itemMount') == -1){
				var id = ele[i].id.replace(/mount/,"");
				$("#sliderBar"+id).slider( "option", "value", fieldValidationProperties[sliders[id]].defaultVal);
			}
		}	
	}	
}

function initializeFormFieldsVal(){
	var fields = $(".step1, .step2, .step3, .step4, .step4_6, .step5");
	for(var i = 0; i < fields.length; i++){
		var fieldName = fields[i].name;
		if(fieldName.indexOf("step4_6")!=-1){
			fields[i].value = 0;
		}else if(fieldName.indexOf("step")!=-1){
			fields[i].value = getDefaultDisplayVal(fieldName);
		}else{
			$(fields[i]).removeAttr("checked");
		}
	}
	$("input[name='radioType_retireExpense']")[fieldValidationProperties["radioType_retireExpense"].defaultVal].click();
	$("input[name='personalType_retireSchemes']")[fieldValidationProperties["personalType_retireSchemes"].defaultVal].click();
	
}

function pdfClick(){
	//document.getElementById("pdfOrderString").value = pdfOrder;
	postEdit();
	postAction('0');
}

function resultPrint(){
	//document.getElementById("pdfOrderString").value = pdfOrder;
	postEdit();
	postAction('1');
}

function postAction(isprint){
	postEdit();
	document.getElementById("cmd_lang").value = lang();
	document.getElementById("cmd_isprint").value = isprint;
	document.getElementById("cmd").value = "check";
	$.ajax({
		cache: false,
		type: "POST",
		url: form1.action,
		data: $(form1).serialize(),
		dataType: 'html',
		async: false,
		success: function(msg){
		    if(msg == " "){
				document.getElementById("cmd").value = "print";
		    	form1.submit();
			}else {
				alert(lang()=="en"?"The input value is invalid, please try again.":"輸入的數值無效。請重試。");
			}
		    
		}
	});
}

function lang(){
	return window.location.href.indexOf("/en/")!=-1?"en":"tc";
}

function filedValid_AlertCase(alertCase){
	if(alertCase == 1){
		//Prompt Alert if MPF + retirementAge<65
		$("#mpf_Rules01 > .confirmBtn > a").attr("href","javascript:$.fancybox.close();");
		fancyBox_remind("#mpf_Rules01", "auto", false, true, "no");
	}else if(alertCase == 2){
		//Prompt Alert if expected retirement expenses < 0
		fancyBox_remind("#retire_require", "auto", false, true, "no");
	}else if(alertCase == 3){
		//Prompt Alert if both happened
		$("#mpf_Rules01 > .confirmBtn > a").attr("href","javascript:fancyBox_remind(\"#retire_require\", \"auto\", false, true, \"no\");");
		fancyBox_remind("#mpf_Rules01", "auto", false, true, "no");
	}
}

