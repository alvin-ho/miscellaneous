var match = ['about','income_and_expense','loanmanage','financialgoal','investment','saving','insurance','retirement','estateplanning'];
var store = [];
//counter for first question
var sideBar0 = false;
var btn0 = false;
//counter for second question
var sideBar1 = false;
var btn1 = false;

var enablesidertwoBtnstatus = "off";
var status = 'no';

//var insuranceFlag = true;//enable going

isClick = false;


var currentSlider = 1;

var pageAnswerTemp = [0,0,0,0,0,0,0,0,0];
var assistothers = true;

var fancytemp = [];
var gsudosllider;
var complete = 0;
var page = new Array();
		page[0] = ["ajax/insurance_animate.jsp","#ajax"];
		page[1] = ["ajax/income_and_expense_animate.jsp","#ajax"];
		page[2] = ["ajax/loanmanage_animate.jsp","#ajax"];
		page[3] = ["ajax/financialgoal_animate.jsp","#ajax"];
		page[4] = ["ajax/investment_animate.jsp","#ajax"];
		page[5] = ["ajax/saving_animate.jsp","#ajax"];
		page[6] = ["ajax/about_animate.jsp","#ajax"];
		page[7] = ["ajax/retirement_animate.jsp","#ajax"];
		page[8] = ["ajax/estateplanning_animate.jsp","#ajax"];
		
var isRetire = false;
		
function open_mMenu(p_isClick){
	if(screenMode == 3)
		$('#dropTree li').addClass('radioGroup resetMargin');		
	if(!p_isClick) {
		isClick = true;
		$("#blockLayer").show();
	} else {
		$("#blockLayer").hide();
		isClick = false;
	}
	
	$("#loadLayerContent").stop().slideToggle("slow");	
	
}


function appendmenuitem()
{	
	var object = $('.toolsSelect > *');
	
	for(var i = 0;i<object.length;i++)
	{
		//If no clone here, elements will be withdrawed from desktop and inserted into mobile directly.
		store[i] = object.eq(i).clone();	
		store[i].text(store[i].attr('title')).removeAttr("title");
		//use append or html here are both ok
		$('#loadMenu li').eq(i).html(store[i]);
	}
}

function ajaxForMain()
{
	for( var i = 0; i < page.length; i++)
	{
		$.ajax({
			url:page[i][0],//page[i][0],
			type:"POST",
			dataType: 'html',
			async:false,
			success:function(data){
				var tmp = page[i][1];
				$(tmp).append(data);
			},
			complete:function(){
				if( i == page.length -1) {
					$("#loadLay").hide();
				}
			}
		});
	}
}


$(document).ready(function(){

	$('input[type=radio]').prop('checked', false);
		var success = false; //Global variable and this variable can be accessed by below function
	
	if( !nua.match(/(iPad|iPhone|android|BlackBerry|Nokia)/i) ){
		if(window.location.href.indexOf("main.jsp") > -1) 
		{
			ajaxForMain();
		}
	} else {
		$("#loadLay").hide();
	}
	
	if(window.location.href.indexOf("index.jsp") > -1){
		$.fancybox({
			width: '877px', 
			height:'auto', 
			'href':'#opening',  
			'autoSize' : false,		
			closeBtn:false,
			helpers : {
				overlay : {
					locked : true
				}
			}
		});			
	} else {
		loadanimation(0);
	}
	
		$('a.arrowSet,input.trackstep,#footer .goToTop, #back').click(function(){
			var object = $('body');
			 $('html,body').animate({scrollTop: object.offset().top},'fast');
		});
		
		showHide_Banner();
		
		$(window).resize(function(){
			showHide_Banner();
			if(window.location.href.indexOf("index.jsp") > -1){
				$(".mfooterLine").css("display","none");
			}
		});
		
		 //handle the form validation
			$('#mount2').change(function(){
				var value = $(this).val();
				if(value == "" || value == null)	
				{
					$(this).val(0);
				}				
			});
			
			$('#mount1').change(function(){
				questHandle($('input[name=loan_radio]'));
				if($(this).val() > 0)
				{
					$('.maxMessage1 span').hide();
				}
			});
			$('.income_and_expense input[name=loan_radio]').click(function(){
				$( "#sliderBar1" ).slider( "option", "value", 1 );
				$("#mount1").val(1);
				questHandle($(this));
			});
			
			

});
function questHandle(ele)
{	
	var classname  = ele.siblings('label').find('span').attr('class');
	var slidername = "income_and_expense";

			if(classname == 'yes')
			{	
				var currentValue = $( "#sliderBar1" ).slider( "option", "value");
				if($('#mount1').val() == 0)
				{	
					$('#mount1').val(1);
					
				}
			}else if(classname == 'no')
			{
				$(".maxMessage1 span").hide();
				$( "#sliderBar1" ).slider( "option", "value", 0 );
				$( "#sliderBar1" ).slider( "option", "min", 0 );
				$('#mount1').val(0);
			}	
}
		 
function showHide_Banner() {
	if(screenMode == 3) {
		$('#ajax').hide();
		$('.tabletBanner').hide();
	} else if(screenMode == 1) {
		$('#ajax').show();
		$('.tabletBanner').hide();	
	} else if(screenMode == 2) {
		$('#ajax').hide();
		$('.tabletBanner').show();
	}
}

function loadanimation(num)
{
	var nua = navigator.userAgent;
	if( !nua.match(/(iPad|iPhone|android|BlackBerry|Nokia)/i) ){
		$('.animate').hide();
		if(num == 0)
		{
			$('#aboutanimate').show();
			$('.track .prepage').css('visibility','hidden'); // hide the previous button in the track
		}

		else{
			$('#' + match[num] + 'animate').fadeIn();
			$('.track .prepage').css('visibility','visible'); // show the previous button in the track
		}

		
		
		if(num == 5)
		{
			$('.main').css('background-color','#1a7db9');
		}else {
			$('.main').css('background-color','#AFE2D4');
		}
	}
} 



adjustStyle($(window).width());
$(document).ready(function(){
	
	appendmenuitem();

	$(window).resize(function() {
		adjustStyle($(window).width());
		if(screenMode == 1||screenMode == 2){
			$("#blockLayer").hide();
			init_mMenuTitle("block");
		} else if(screenMode == 3){
			init_mMenuTitle("none");
		}
	});

	
	$(".oMenu, .loadingMask").off().on('click',function(){
		if( $(this).attr("class") == "loadingMask"  && $('.loadingMask').height() != 0)	{
			isClick = true;
		}
		open_mMenu(isClick);
	});
});

		var ele = "";
		var ele1 = "";
		$(document).ready(function(){ 
			prequestionisasked();
		
			sliderdisappear();
			disable();
			footLine();
			
			//set all questions to blur initially
			$(".dum .qAnsContainer input").prop('disabled', true);
			$(".dum .qAnsContainer").css('opacity','0.5');	
			$(".dum").find('.qTitle').addClass('dimblue');
			$(".dum").find('.qTitle p').css({'background-color':'#888','color':'#c6c6c6'});//.addClass('dimword');
			$(".dum").find('.qTitle div').removeClass('qTitleImg').addClass('qTitledimImg');
			
			//Disable #sliderBar2
			$(".income_and_expense #mount2").prop("disabled", true); 
			$("#sliderBar2").slider({ disabled: true });
			checkincome_and_expenseEmpty();
			$('.successresult').removeClass('allowNext');
			$('.step_check input:radio').prop('disabled',true);
			$('.step_check input:radio[name=track0]').prop('disabled',false).attr('checked','checked');
			$('.step_check input:radio[name=track0]').css({'display':'block','cursor':'pointer'});
			//mouseover function
			steptrack(0);
			
		/*$("#dragCoin").draggable({
				revert:"invalid",
				snap:"cdro1, cdro2, cdro3, cdro4",
				snapMode: "inner"
			});
			
			
			var num;
			$( "#choice1, #choice2, #choice3, #choice4" ).droppable({
				tolerance: "intersect",
				drop: function(event, ui) {
					var drop_p = $(this).offset();
					var drag_p = ui.draggable.offset();
					var left_end = drop_p.left - drag_p.left + 1;
					var top_end = drop_p.top - drag_p.top + 1;
					ui.draggable.animate({
						top: '+=' + top_end,
						left: '+=' + left_end
					});
					$('input[name="dragcoin"]').removeAttr('checked');
					var radiogroup = $('#'+ $(this)[0].id).parent().find('input[type=radio]'); // input radio object
					var ele = radiogroup[0]; //to get inner things so add[0]
					ele.setAttribute("checked", "checked");
					ele.checked = true;
					var eleid = $(this)[0].id;
					num = eleid.substring(eleid.length-1,eleid.length);
					isasked(radiogroup);
				}
			});
			
			$('input[name=dragcoin]').click(function(){
					
						 if($('input[name=dragcoin]:checked').length> 0)   
						 {
	
							 var eleid = $('input[name=dragcoin]:checked').parent().find('div')[0].id;
							 num = eleid.substring(eleid.length-1,eleid.length);
							 $('#dragCoin').css({'left':$("#choice"+num).position().left,'top':$("#choice"+num).position().top,'position':'absolute'});
							$(window).resize(function(){
								$('#dragCoin').css({'left':$("#choice"+num).position().left,'top':$("#choice"+num).position().top,'position':'absolute'});
							});
						}
			});*/
			

			var nextPrevSlide = 0, totalSlide = 0;
			var sudoSlider = $("#slider").sudoSlider({
				prevNext: false,
				updateBefore:true,
				autoHeight:true,
				//touch: true, //for testing conventiently
				afterAnimation:function(slide){ 

					firstSlide("afterAnimate", slide);
					if( slide == totalSlide - 1 ) {
						$(".inner #bottomNext span").eq(1).show();
						$(".inner #bottomNext span").eq(0).hide();
					} else {
						$(".inner #bottomNext span").eq(1).hide();
						$(".inner #bottomNext span").eq(0).show();
					}
					footLine();
					if(	slide == totalSlide ) 
					{
						//sudoSlider.setOption("autoHeight", false);
						resultSetting();
						if( screenMode == 3 ) 
						{	
							init_mMenuTitle("none");
						} else {
							init_mMenuTitle("block");
						}
					} 
					
					nextPrevSlide = slide;
					//slide--;
				},
				initCallback: function() {
					var slide = this.getValue("currentslide");

					totalSlide = this.getValue("totalslides");
					firstSlide("init", slide);
					nextPrevSlide = slide;
					checkEmpty(this);
					$('.toinvest').click(function(){
						//sudoSlider.goToSlide(totalSlide);//5
						sudoSlider.goToSlide(9);
					});
					
					$('.todragTree').click(function(){
						sudoSlider.goToSlide(7);
					});
				}
					
		});
		
	gsudosllider = sudoSlider;
		
	
			
			
			var pageCount = 0;
			var previousPage;
			$('a#next,a#bottomNext').click(function() {
					// previouspage contains result then do steptrack

					if(pageCount == 0)
					{
						if($('.'+ match[0] + ' .qAnsContainer').eq(3).find('div.radioGroup').find('input[type=radio]:checked').length != 0)
						{
							steptrack(1);
							pageCount++;
						}					
					}
		
					else if(pageCount != 0){
						previousPage = match[pageCount];
						if($('.' + previousPage + ' .successresult').hasClass('allowNext') == true)
						{
							var highlineCount = pageCount + 1;
							
							if( pageCount == 6 && isRetire){
								steptrack(highlineCount);
								highlineCount++;
								steptrack(highlineCount);								
							} else {
								steptrack(highlineCount);
							}
							pageCount++;
						}
						
		
					}
					//check the 'about' question is asked or not
				
				prevNextSlide( this.id , nextPrevSlide, sudoSlider);
	
			});
			
			$('a#previous, a#bottomPrev, #back').click(function() {
				var isEdit = this.id;
				if( isEdit == "back"){
					$(".track, #slideMenu").show();
					$("#content .paddtxtC").css("background-color","#E3E3E3");
					$("#bottomBtn").appendTo(".tabs_Container");
					$("#backToTop").hide();
					$("#slider").find("form.questionContainer").css('visibility','visible');
				}
				if($('.' + match[currentSlider-1] + ' .successresult').hasClass('allowNext') == true)
				{
					pageCount--;
				}

				prevNextSlide( this.id , nextPrevSlide, sudoSlider);
				
					
			});
			
			function footLine() {
				var tmpLink = window.location.href;
				if( tmpLink.indexOf("index") > -1 ) {
					if( screenMode == 3 ) {
						$("#footer .mfooterLine").hide();
					}
				} else {
					if( screenMode == 3 ) { 
						$("#footer .mfooterLine").show();
					}
				} 
			}
			
		
		
		

		//if click the bluepoint in steptrack ,then slide to related page
		$('.trackstep').click(function(){
			//if(insuranceFlag == true)
			//{
				var c = $(this).attr('class');
				if(c != '' || c != 'undefined')
				{
					var pagenum = c.substring(c.length-1,c.length);
					var currentNum = parseInt(pagenum) + 1; //since num in steptrack starts from 0.To get current page ,jsut + 1
					if($('.'+ match[currentSlider-1] + ' .successresult').hasClass('allowNext') || currentSlider == 1){
						popup(currentNum);
						setTimeout(function(){ $("span.sTitle").text( $("div#track"+pagenum+" > .ele"+pagenum+"").text() ); },1000); //change page title
					}else
						notcompleteReminder();
				}
			//}

			//slide must form 1 to 9
		});

			$( "#sliderBar1,#sliderBar2" ).slider({
				range:"min",
				min:0,
				max:600000,
				animate: "fast",
				step:5000,
				value: 0,
				start:function(){	
					//sudoSlider.setOption("touch",false);  
					if($('.income_and_expense input:radio[name=loan_radio]:checked').length == 0)
						isasked($("#"+this.id));
					if(this.id == 'sliderBar1')
					{
						sideBar1 = true;	
					}						
					else if(this.id == 'sliderBar2')
					{
						incomeandexpenseresult(sideBar0,sideBar1,btn0,btn1);
					}
				},
				slide: function( event, ui ) {
					var tempID = this.id;
					$( "#mount" + tempID[tempID.length-1] ).val( numberWithCommas(ui.value) );
					if( ui.value == $(this).slider("option", "max") ){
						$( "p.maxMessage"+tempID[tempID.length-1] + " span").eq(0).show();
					} else {
						$( "p.maxMessage"+tempID[tempID.length-1] + " span").hide();
					}
				},stop:function()
				{
					if(this.id == 'sliderBar1')
					{
						questHandle($('input[name=loan_radio]'));
					}
				}
			});
			
				$('#sliderBar0').slider({
				range:"min",
				min:0,
				max:600000,
				animate: "fast",
				step:5000,
				value: 0,
				start:function(){	
					//sudoSlider.setOption("touch",false);  
					if($('.income_and_expense input:radio[name=loan_radio]:checked').length == 0)
						isasked($("#"+this.id));
					if(this.id == 'sliderBar0')
					{
						if($('.income_and_expense input:radio[name=loan_radio]:checked').length == 0) {
							disable();
							sliderdisappear();
							$(".income_and_expense #mount1").prop("disabled", true);
						}
						sideBar0 = true;					
					}
				},
				slide: function( event, ui ) {
					var tempID = this.id;
					$( "#mount" + tempID[tempID.length-1] ).val( numberWithCommas(ui.value) );
					if( ui.value == $(this).slider("option", "max") ){
						$( "p.maxMessage"+tempID[tempID.length-1] + " span").eq(0).show();
					} else {
						$( "p.maxMessage"+tempID[tempID.length-1] + " span").hide();
					}
				}
			});
		
			$( "#mount0,#mount1,#mount2" ).val( numberWithCommas($( "#sliderBar0,#sliderBar1,#sliderBar2" ).slider( "option", "value" )) );
			
			$(".silderBtn").click(function() {
				plus_minus_inputBox(this.id);
				var id = this.id;
				if($('.income_and_expense input:radio[name=loan_radio]:checked').length == 0)
					isasked($("#"+id));
				if(id == 'minusBtn0'||id == 'addBtn0')
				{	if($('.income_and_expense input:radio[name=loan_radio]:checked').length == 0)
						$(".income_and_expense #mount1").prop("disabled", true);
						btn0 = true;
				}
				if(id == 'minusBtn1'|| id == 'addBtn1')
				{
					if($('.income_and_expense input:radio[name=loan_radio]:checked').length == 0) 
					{
						$("#mount2").prop("disabled", true);
						$("#mount2").parents('.flag').css('opacity','0.5');
						btn1 = true;
					}
				}
				//if click miusBtn1 and addBtn1 ,and if the current question is not asked ,then nexr question should be dum and mount2 should be disabled.
				
				if(id == 'minusBtn2'|| id == 'addBtn2')
				{
					incomeandexpenseresult(sideBar0,sideBar1,btn0,btn1);
				}
			});

			$("#mount0,#mount1,#mount2").on({
				keyup:function() { 
					plus_minus_inputBox(this.id);
					
				}, focusin:function(){
					$(this).val( $(this).val().replace(/[,]/g,"") );
				}, focusout:function(){
					$(this).val( numberWithCommas($(this).val()) );
					if($(this).val() == "" || $(this).val() == null)
					{
						$(this).val(0);
					}
					
					while(true){
						var value = $(this).val();
						if(value != 0){
							value = value.replace(",","");
							var position = value.indexOf('0');
							if(position == 0){
								var newValue = value.substring(1,value.length);
								$(this).val(newValue);
							}else
								break;
						}else 
							break;
					}
				},keypress:function(evt) { 
						var theEvent = evt || window.event;
						var key = theEvent.keyCode || theEvent.which;
						
						key = String.fromCharCode( key );
						var regex = /[0-9]+/;

						if(regex.test(key)) 
						{
							theEvent.returnValue = true;
						}else{
							theEvent.returnValue = false;
							if(theEvent.preventDefault) 
							theEvent.preventDefault();
						}		
					}
			});
			
			$('#minusBtn2').click(function()
			{
				
				var opacity = $(this).parent().parent().parent().parent().css('opacity');
				if(opacity == 0.5)
				{
					complete--;
				}
			});
			
			$('#addBtn2').click(function(){
			
				var opacity = $(this).parent().parent().parent().parent().css('opacity');
				if(opacity == 0.5)
				{
					complete--;
				}
			});
			
			
			
			$( "#tabs" ).tabs({
				heightStyle: "content"/*,
				active: 0*/
			});
			// $("#tabs ul#sectionTab li").click(function(){
				// $(this).addClass("tabActive").siblings(".tabActive").removeClass("tabActive");
				// if(screenMode == 3 && nextPrevSlide == totalSlide){
					// var getName = $(this).children("a").text(),
						// getClass = $(this).children("a").attr("class").split(" ")[0];
					// $("#sTitle").attr("class", getClass).text(getName);
					// $("#mmenuTitle").trigger("click");
				// }
			// });
			
			
			$( "#accordion" ).accordion({
				active:false, 
				collapsible:true,
				heightStyle:"content",
				activate:function(e, u){
					$("#slider").find("form.questionContainer").css('visibility','hidden');
					$("#slider").css("height","auto");
				}
			});
			
			$(".planTitle").click(function(e, iName){
				var isActive = $("#accordion").accordion( "option", "active");//,
				if( isActive !== false ){
					$(this).siblings(".planOpen").removeClass("planOpen")
						.find(".ocIcon").attr({
							"src":$(this).find(".ocIcon").attr("src").replace(/\/minus/,"/plus"),
							"alt":"open"
						});
				
					$(this).addClass("planOpen")
						.find(".ocIcon").attr({
							"src":$(this).find(".ocIcon").attr("src").replace(/\/plus/,"/minus"),
							"alt":"close"
						});
				} else {
					$(this).removeClass("planOpen")
						.find(".ocIcon").attr({
							"src":$(this).find(".ocIcon").attr("src").replace(/\/minus/,"/plus"),
							"alt":"open"
						});
				}
			});
			
			
			/*$("#print").on("click",function(){	 
				var temp = $("#ajax").html();
				$("#ajax").html("");
				
				$("#ajax").html(temp);
			}); */  
		
			$(".actionBtn").click(function(){
				var name = "#"+ $(this).attr("data-target"); 
				$("body, html").animate({ 
					scrollTop: $(name).offset().top
				}, 1);				
					var targetIndex = $("#accordion > div").filter( ".planTitle" );
					for(var i = 0; i < targetIndex.length; i++){
						if($(this).attr("data-target") == targetIndex[i].id){
							$("#accordion > div").removeClass("planOpen");
							$("#accordion > div > img.ocIcon").attr("src","../../images/tc/plus.png");
							$( "#accordion" ).accordion({ active:i	});
							$("#accordion > div"+name+"").addClass("planOpen");
							$("#accordion > div"+name+" > img.ocIcon").attr("src","../../images/tc/minus.png");
							break;
						}
					}
			});  
			
			$("#mmenuTitle").click(function(e, p){
				$("#sectionTab").toggle();
				if( $("#sectionTab").css("display") == 'block' ){
					$(this).children("img").attr("src", $(this).children("img").attr("src").replace(/_down/, "_up") );	
					$(this).children("span").removeClass().text("");
				} else {
					$(this).children("img").attr("src", $(this).children("img").attr("src").replace(/_up/, "_down") );	
					$("body, html").animate({ scrollTop: $("#headCaption").offset().top }, 10);
				}		
			});
			
			$(".facebook").on("click", fbShare );
			$(".email").on("click", mailShare);
			$(".startBtn, .quest").on("click", userGuide);
			$("#backToTop").on("click", mPageTop);
			$("#reset").on("click", resetQuest);
			$('#mount1').val(1);
			
	

		});
		
		//add blueline and bluepoint to steptrack and show label if hover the bluepoints
		function steptrack(num)
		{
			if(isRetire && num ==7){
			$('.step_check input:radio[name=track'+num+']')
					.attr("disabled", true).attr('checked','checked')
					.css({'display':'block','cursor':'pointer'});

			}else{
			
				$('.step_check input:radio[name=track'+num+']')
					.attr("disabled", false).attr('checked','checked')
					.css({'display':'block','cursor':'pointer'});
			}
				if($('input:radio:checked').length > 0) 
				{
					ele = $('#'+$('input:radio:checked').parents()[0].id);
					ele1 = $('#'+$('input:radio:checked').parent()[0].id);
					ele.addClass('blueline');
					ele1.addClass('blueline');
				}
			
			
			 $('.step_btn_outer .step_btn .rela').hover(
				function() {
					$('#'+ $(this)[0].id).find('.hoverele').show();
					// $('#'+($(this)[0]).name + '>div.hoverele').show(); 
				}, function() {
					// $('#'+($(this)[0]).name + '>div.hoverele').hide();
					$('#'+ $(this)[0].id).find('.hoverele').hide();
				}
			);
			
		}
		
		
		
		function popup(currentNum)
		{
			gsudosllider.goToSlide(currentNum);
			currentSlider  = currentNum; //change current slider
			var currentCount = currentNum -1;
			loadanimation(currentCount);
			
		}
		
		function prevNextSlide(uID, num, slider) {
				isRetire = $("#jobType_radio5").is( ":checked" );
			if( uID == "next" || uID == "bottomNext" ){
				if(checkAll(num-1)){

			 		if( num == 7 && isRetire){
						num+=2;
						pageAnswerTemp[7] = 1; // retirement plan this page is accessed.
						steptrack(8);
					} else {
						num++;		
					}		
					slider.goToSlide(num);
					currentSlider  = num;
					if(currentSlider == 2)
					{
						pageAnswerTemp[0] = 1;
					}
					
					pageAnswerTemp[num-1] = 1;	
								
					if( num == 8 && isRetire){
							var nums = num - 2;
							
						} else { 
							var nums = num - 1;
						}
					loadanimation(nums);
				}
				else
				{
					notcompleteReminder();
				}
				
			} else {
				if((checkAll(num-1)) || num ==10){
					if( num == 9 && isRetire){
						num-=2;
					} else {
						num--;
					}
					
					slider.goToSlide(num);
					currentSlider  = num;
					
					//var nums = num - 1;
					
					if( num == 10 && isRetire){
						var nums = num - 2;
					} else { 
						var nums = num - 1;
					}
					loadanimation(nums);
				}else if(num != 10)
				{
					notcompleteReminder();
				}
			}
			
			num--;
			setTimeout(function(){ $("span.sTitle").text( $("div#track"+num+" > .ele"+num+"").text() ); },1000);
		}	
		

		function checkAll(pageCount)
			{
				if(pageCount == 0)
				{
					previousPage = match[pageCount];
					if($('.'+ match[0] + ' .qAnsContainer').eq(3).find('div.radioGroup').find('input[type=radio]:checked').length != 0)
						return true;
					else 
						return false;
				}else if(pageCount > 0 && pageCount <= 8)
				{
					previousPage = match[pageCount];
					if($('.' + previousPage + ' .successresult').hasClass('allowNext') == true)
						return true;
					else 
						return false;
				}
			}
		
		function firstSlide(type, sPage){
		
			if( type == "init" ){
				if( sPage == 1 ) {
					$("#previous").css("visibility","hidden");
				} else {
					$("#previous").css("visibility","visible");
				}
			}
			
			if( type == "afterAnimate" ){
				if( sPage == 1 ) {
					$("#previous").css("visibility","hidden");
				} else {
					$("#previous").css("visibility","visible");
				}
			}
		}
		
		function numberWithCommas(x) {
			var parts = x.toString().split(".");
			parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			return parts.join(".");
		}
			
		function plus_minus_inputBox(uid) {
			var number = uid.substring(uid.length-1,uid.length);
			if( uid == "mount"+number) {
					$("#sliderBar"+number).slider("option", "value", Math.round($("#"+uid).val()) );		
			} else {
				var value = $("#sliderBar"+number).slider("option","value"),
					step = $("#sliderBar"+number).slider("option", "step");
					if(number == 0)
					{
						if ( uid == "addBtn"+number) {
							$("#sliderBar"+number).slider("value", value + step);
							$( "#mount"+number).val( numberWithCommas($("#sliderBar"+number).slider("value")) );
						} else {
							$("#sliderBar"+number).slider("value", value - step);
							$( "#mount" +number ).val( numberWithCommas($("#sliderBar"+number).slider("value")) );
						}

						showMaxMessage(0);						
					}
					else if(number == 1 && status == 'yes')
					{
						if ( uid == "addBtn"+number) {
							$("#sliderBar"+number).slider("value", value + step);
							$( "#mount"+number).val( numberWithCommas($("#sliderBar"+number).slider("value")) );
						} else {
							$("#sliderBar"+number).slider("value", value - step);
							$( "#mount" +number ).val( numberWithCommas($("#sliderBar"+number).slider("value")) );
						} 	
						questHandle($('input[name=loan_radio]'));
						showMaxMessage(1);
					}		
					else if(number == 2 && enablesidertwoBtnstatus == 'on')
					{
						if ( uid == "addBtn"+number) {
							$("#sliderBar"+number).slider("value", value + step);
							$( "#mount"+number).val( numberWithCommas($("#sliderBar"+number).slider("value")) );
						} else {
							$("#sliderBar"+number).slider("value", value - step);
							$( "#mount" +number ).val( numberWithCommas($("#sliderBar"+number).slider("value")) );
						} 
						
						showMaxMessage(2);
					}
							
			}				
			
		}
		
		function notcompleteReminder()
		{
			$.fancybox({
							width: '500px', 
							height:'auto', 
							'href':'#notcompleteReminder',  
							'autoSize' : false,		
							closeBtn:false,
							helpers : {
								overlay : {
									locked : true
								}
							}
						});
		}
		
		function retireSlideReminder()
		{
				$.fancybox({
							width: '500px', 
							height:'auto', 
							'href':'#retireSlideReminder',  
							'autoSize' : false,		
							closeBtn:false,
							helpers : {
								overlay : {
									locked : true
								}
							}
						});
		
		}
		
		function insuranceReminder()
		{
				$.fancybox({
							width: '500px', 
							height:'auto', 
							'href':'#insuranceReminder',  
							'autoSize' : false,		
							closeBtn:false,
							helpers : {
								overlay : {
									locked : true
								}
							}
						});
		}
		
		function retireReminder()
		{
				$.fancybox({
							width: '500px', 
							height:'auto', 
							'href':'#retireReminder',  
							'autoSize' : false,		
							closeBtn:false,
							helpers : {
								overlay : {
									locked : true
								}
							}
						});
		}

		function showMaxMessage(num)
		{
			if($( "#sliderBar"+num ).slider( "option", "value") == $( "#sliderBar"+num ).slider( "option", "max"))
			{
				$('.maxMessage'+num+' span').eq(0).show();
			}
		}

		
		function resultSetting(){
			$("#slideMenu, .track").hide();
			$("#content .paddtxtC, #content .main").css("background-color","#FFF");

			if(screenMode == 3){
				$("#bottomBtn").appendTo("body");
				$("#backToTop").css("display","inline-block");
				$("#footer").css("padding-bottom","60px");
				$("#footer .mfooterLine").hide();
			}
			//$("#slider").css("height","auto");
			
			$(window).resize(function(){
				//$("#slider").css("height","auto");
				var d = $(".track").css("display");
				if(screenMode == 3 && d == "none"){
					$("#bottomBtn").appendTo("body");
					$("#backToTop").css("display","inline-block");
					$("#footer").css("padding-bottom","60px");
					$("#footer .mfooterLine").hide();
				} else {
					$("#bottomBtn").appendTo(".tabs_Container");
					$("#backToTop").hide();
					$("#footer").css("padding-bottom","0");
				}
			});
		}
		
		
		function sliderdisappear()
		{
			$(".income_and_expense .questionContainer input:radio").click(function(){
				var classname = $("#"+$(this)[0].id).siblings().find('span')[0].className;
				status = classname;
				if(classname == 'no')
				{
					disable();				
				}else if(classname == 'yes')
				{
					$(".income_and_expense .silderContainer").css('opacity','1');	
					$(".income_and_expense #mount1").prop("disabled", false);
					$("#sliderBar1").slider({ disabled: false });
					isasked($(this)); 
				}
				enableslider2();				
			});				
		}
		
		function disable()
		{
			$(".income_and_expense .silderContainer").css('opacity','0.5');
			$(".income_and_expense #mount1").prop("disabled", true);
			$("#sliderBar1").slider({ disabled: true });
		}
			
		//enable #sliderBar2
		
		function enableslider2()
		{
			$(".income_and_expense .sliderWidget2").css('opacity','1');
			$(".income_and_expense #mount2").prop("disabled", false);
			$("#sliderBar2").slider({ disabled: false });
			enablesidertwoBtnstatus = "on";	
		}

		
	
	
		//return result if all checked boxes are clicked except for income_and_expense and about ' pages 
		var name;
		var store = [];
		var i = 0;
		var count = 0; //The number of elements that still not be counted
		var num = 0;
		var presub = "";
		var sub;
		var index = -1;
		function checkEmpty(slider)
		{		
			$(".questionContainer input:radio").click(function(){

					var id = $(this).closest('form')[0].id;
					if(id !== "aboutCon" && id !== "income_and_expenseCon")
					{
						$("form#"+ id +" .qAnsContainer").each(function(){
							for(var k = 0;k < $(this).find('input:radio').length;k++)
							{
								name = $(this).find('input:radio').attr("name");
							}
							store.push(name);
						});	
						$.unique(store);
						for(var j = 0;j < store.length;j++)
						{
							if(typeof store[j] !== 'object' && typeof store[j] === 'string')
							{
								if($("input:radio[name="+store[j]+"]:checked").length == 0)
								{
									count++;
								}
							}	
						}	
						if(count == 0)
						{
							//produce the result	
							sub = id.substring(0,id.length-3);
							if($("." + sub + " .successresult").hasClass('allowNext') == false)
							{
								increasesliderheight(sub);
								for(var h = 0;h < match.length;h++)
								{
									if(match[h] == sub)
									{
										index = h;
									}
								}
								// if(insuranceFlag == false)
								// {
									// insuranceFlag = true;
								// }
								
							}
							
						}	
					}
						count = 0; //clear each count
						store = [];//clear array

					
			});
			
		}
		$(function(){
			$("#mount2").change(function(){
				incomeandexpenseresult(sideBar0,sideBar1,btn0,btn1);
			});
		});
		
		//return result if three questions have input from user (for income_and_expense only)

		function incomeandexpenseresult(sideBar0,sideBar1,btn0,btn1)
		{
			//check question one and two whether have user input or not
			
			//question one 
				var value = parseInt($("input:text[name=mount0]").val());
				var classname = "income_and_expense";
				
				//question two 
				var question = $('.income_and_expense input:radio[name=loan_radio]:checked');
				var clicklength = question.length;

				var value1 = parseInt($("input:text[name=mount1]").val());
				
				//question three
				var value2 = parseInt($("input:text[name=mount2]").val());
				
				//Q1
				if(sideBar0 == true || value >= 0 || btn0 == true)
				{
					complete++;
				}
				//Q2
				
				if(clicklength > 0)
				{

					var choice = question.siblings().find('span').attr('class');
					if(choice == 'yes')
					{
						if(sideBar1 == true || value1 >= 0 || btn1 == true) 
						{
							complete++;
						}
							
					}else
					{
						complete++;
					}
				}
				if(complete >= 2)
				{
				
					if($('.income_and_expense .successresult').hasClass('allowNext') == false)
					{
						increasesliderheight(classname);
					}

				}

		}
		
		
		//clear blur in next question if current is asked (For income_and_expense)
		function checkincome_and_expenseEmpty()
		{
			$('#mount0').change(function(){

				if($('.income_and_expense input:radio[name=loan_radio]:checked').length == 0) 
				{
					isasked($("#mount0"));
					disable();
					sliderdisappear();
					$(".income_and_expense #mount1").prop("disabled", true);
				}		
				
				//handle empty value
				var value = $(this).val();
					if(value == "" || value == null)	
					{
						$(this).val(0);
					}	
			});	
		}
		
		function isasked(ele)
		{
			var ownquescontainer = ele.parents('div.flag'); // must have 'div'
			var nextquestion = ownquescontainer.next(); //find next element which contains div.flag too
			var exsist = nextquestion.length;
			if(exsist != 0) //if next question exists
			{
				nextquestion.find('input').prop('disabled',false);
				nextquestion.find('.qAnsContainer').css('opacity','1');
				nextquestion.find('.qTitle').removeClass('dimblue');
				nextquestion.find('.qTitle p').css({'background-color':'#0066b3','color':'#FFF'});
				nextquestion.find('.qTitle .qTitledimImg').removeClass('qTitledimImg').addClass('qTitleImg');
				nextquestion.find('.qTitle p span').css('opacity',0); // remove hints
			}
		}
		
		//clear blur in next question if current is asked(except for income_and expense)
		function prequestionisasked()
		{
			$(".questionContainer input:radio").click(function(){
			
				var formId = $("#"+$(this)[0].id).parents('form')[0].id;
				var divId = formId.substring(0,formId.length-3);
				if(divId == 'income_and_expense'){
					var className = $("#"+$(this)[0].id).siblings().find('span')[0].className; 
					if(className == 'no')
					{
						isasked($(this));
					}
					else if(className == 'yes')
					{
						$('#mount2').parents('.flag').css('opacity','1');
		
					}
					
				}else if(divId != 'income_and_expense')
				{
					isasked($(this));	
				}
			});
		}
		


		//handle retirement only
	$(document).ready(function(){
		$('.retirement input:radio[name=radiot]').click(function(){
			var d = $('#re_radio5').is(':checked');
			var classname = "retirement";
			if(d == true)
			{	
				isnotasked($(this));
				$('.retirement .qAnsContainer').eq(1).find('.qTitle p span').css('opacity',1);
				$('.retirement .qAnsContainer').eq(1).css('opacity','0.5');
				$('.retirement input:radio[name=retiremoney_radio]').prop("disabled", true);		
				if($('.retirement .successresult').hasClass('allowNext') == false)
				{
					increasesliderheight(classname);
				}
			
				$('input:radio[name=retiremoney_radio]').removeAttr('checked'); 
			}else if(d == false)
			{
				$('.retirement .qBox').eq(1).css('opacity','1');
				$('.retirement input:radio[name=retiremoney_radio]').prop("disabled", false);
				if($('.retirement .successresult').hasClass('allowNext') == true && $('.retirement input:radio[name=retiremoney_radio]:checked').length == 0)
				{
					reducesliderheight(classname);			
				}else if($('.retirement .successresult').hasClass('allowNext') == false && $('.retirement input:radio[name=retiremoney_radio]:checked').length > 0)
				{
					increasesliderheight(classname);

				}
			}
			
		});
	
		$('input[name=needHelp_radio]').click(function(){
			insuaranceHandle($(this));
		});
		
		$('input[name=insuranceenough_radio]').click(function(){
			var elements = $(this);
			if(assistothers) // true
			{
				isasked(elements);
			}else//false
			{
				isnotasked(elements);
				var classname = "insurance";
				increasesliderheight(classname);
			}

		});
		
		//handle financial planning
		var radioname1 = 'fiancialgoal_radio';
		var classname1 = 'financialgoal';
		var nextradioname1 = 'howgoal_radio';
		var siblings1 = '';
		yesorno(radioname1,classname1,nextradioname1,siblings1);
		
		//handle investment planning
		var radioname = 'radiottq';
		var classname = 'investment';
		var nextradioname = 'investdescribe_radio';
		var siblings = 'div';
		yesorno(radioname,classname,nextradioname,siblings);
		
		//Handle insurance form checking
		$('.needHelplabel').click(function(){
			var radiobtn = 'needHelp_radio';
			var labelEle = $(this);
			var inputradio = labelEle.siblings('input');
			if(pageAnswerTemp[6] == 1)
			{
				
				changeAndSlide(7,radiobtn,inputradio);
			}
		});	
		
		//Handle Retirement 
		$('.careerlabel').click(function(){
			var radiobtn = 'jobType_radio';
			if(pageAnswerTemp[7] == 1)
			{
				retirechange(radiobtn);	
				
				
			}
		});
		
		$('.carLabel').click(function(){
			var radiobtn = 'jobType_radio';
			var labelEle = $(this);
			var inputradio = labelEle.siblings('input');
			if(pageAnswerTemp[7] == 1)
			{
				if(($('input:radio[name=radiot]:checked').length == 0 && $('input:radio[name=retiremoney_radio]:checked').length == 0)||($('input:radio[name=radiot]:checked').length == 0))
				{

					retireslidechange(8,radiobtn,inputradio);
	
				}
				
			}
		});
		

	});
	
	function insuaranceHandle(ele)
	{
		var name = ele.siblings().find('span').attr('class');
		assistothers = (name == "no")? false : true;
		var question = $('input[name=insuranceenough_radio]');
		var nextquestion = $('input[name=protectinsurance_radio]');
		isnotasked(question);
		if(assistothers == false)
		{
			nextquestion.parents('.qAnsContainer').siblings('.qTitle').find('p span').css('opacity',1);
		}
		else if(assistothers == true)
		{
			nextquestion.parents('.qAnsContainer').siblings('.qTitle').find('p span').css('opacity',0);
		}
		$('input[name=insuranceenough_radio]').removeAttr('checked');
		$('input[name=protectinsurance_radio]').removeAttr('checked');
		$('.insurance .successresult').removeClass('allowNext');
	}
	
	function changeAndSlide(num,radiobtn,inputradio)
	{
		insuranceReminder();
		$('input[name='+radiobtn+']').attr('disabled',true);
		$('.isureBtn,.icancelBtn').click(function(){
			var btnId = $(this).attr('class');
			if(btnId == 'isureBtn')
			{
				$('input[name='+radiobtn+']').attr('disabled',false);
				inputradio.attr('checked',true);
				popup(num);
				var pagenumber = num -1;
				setTimeout(function(){ $("span.sTitle").text( $("div#track"+pagenumber+" > .ele"+pagenumber+"").text() ); },1000); //change page title
				insuaranceHandle($('input[name=needHelp_radio]:checked'));
			}	
		});
	}
	
	function retireslidechange(num,radiobtn,inputradio)
	{
		retireSlideReminder();
		$('input[name='+radiobtn+']').attr('disabled',true);
		$('.rssureBtn,.rscancelBtn').click(function(){
			var btnId = $(this).attr('class');
			if(btnId == 'rssureBtn')
			{
				$('input[name='+radiobtn+']').attr('disabled',false);
				inputradio.attr('checked',true);
				popup(num);
				var pagenumber = num -1;
				setTimeout(function(){ $("span.sTitle").text( $("div#track"+pagenumber+" > .ele"+pagenumber+"").text() ); },1000); //change page title
				$('.track7').attr('disabled',false);//enable track7 again
			}	
		});
	}

	
	function retirechange(radiobtn)
	{
		
		retireReminder();
		$('input[name='+radiobtn+']').attr('disabled','true');
			$('.rsureBtn,.rcancelBtn').click(function(){
			var btnId = $(this).attr('class');
			if(btnId == 'rsureBtn')
			{	
				$('input[name='+radiobtn+']').attr('disabled',false);
				$('#jobType_radio5').attr('checked',true);		
				$('input:radio[name=radiot]:checked').attr('checked',false);
				$('input:radio[name=retiremoney_radio]:checked').attr('checked',false);
				$('.retirement .successresult').removeClass('allowNext');
				$('.track7').attr('disabled',true);
			}else if(btnId == 'rcancelBtn')
			{
				$('input[name='+radiobtn+']').attr('disabled',false); //disable track7 again
			}
					
		});
	}
	


	
	function yesorno(radioname,classname,nextradioname,siblings)
	 {
		$('input[name='+radioname+']').click(function(){

					handleyesorno($(this),radioname,classname,nextradioname,siblings);
				
		});
	 } 
	 
	 function handleyesorno(ele,radioname,classname,nextradioname,siblings)
	 {
		var radiobutton = ele;
		var hints = $('input[name='+nextradioname+']').parents('.qAnsContainer').siblings('div').find('p span');
		var name = radiobutton.siblings(siblings).find('span').attr('class');
		if(name == "no")
		{
			isnotasked(radiobutton);
			increasesliderheight(classname);
			$('input[name='+nextradioname+']').removeAttr('checked');
		}else 
		{
			if($('input[name='+nextradioname+']:checked').length == 0)
			{
				$('input[name='+nextradioname+']').parents('.qAnsContainer').siblings('div').find('p span').show();
				reducesliderheight(classname);			
			}
			hints.css('opacity',0); //remove hints
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
				mailTo = "mailto:?",
				body_line =  escape("\n"),
				mailSubject = "subject=Financial Health Check",
				body = "";
			body = "&body=This financial health check helps you plan and review your finance."+ 
					"You will be asked some simple questions about your personal finance of all aspects."+
					"The financial health check will conduct analysis based on your information provided."+
					"It will provide you with a report on your financial health and suggest an action plan for improving your situation."+ 
					body_line + encodeURIComponent(targetLink);
			mailTo += mailSubject + body;
			$(".email").attr('href', mailTo);
		}			
		
		function feedBack(){
			var mail = 'mailto:info@hkiec.hk?',
				msubject = "subject=Feedback on Financial Health Check",
				mbody = "";
			mail += msubject + mbody;
			$("#mail_suggest").attr('href', mail);
		}
		
		function userGuide(){
			$.fancybox({
				width: '877px', 
				height:'80%', 
				'href':'#useExplain',  
				'autoSize' : false,		
				closeBtn:true,
				helpers : {
					overlay : {
					locked : true
					}
				}
			});
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
		
	function init_mMenuTitle(type){
		if(type == "block"){ 
			$("#sectionTab").css("display","block");
		} else {
			$("#sectionTab").css("display","none");
			if( currentSlider == 10 ){
				var isExist = $("#mmenuTitle #sTitle").length,
					className = $("#sectionTab li.tabActive a").attr("class").split(" ")[0],
					textName = $("#sectionTab li.tabActive").text();
				if( isExist == 0 ){
					$("<span />",{ 'id': 'sTitle', 'class': className, 'text': textName }).appendTo("#mmenuTitle");
				} else {
					$("#mmenuTitle #sTitle").attr("class",className).text(textName);
				}
			}
		}	
	}
	
	//blur next question
			function isnotasked(ele)
			{
				var ownquescontainer = ele.parents('div.flag'); // must have 'div'
				var nextquestion = ownquescontainer.next(); //find next element which contains div.flag too
				var exsist = nextquestion.length;
				if(exsist != 0) //if next question exists
				{
					nextquestion.find('input').prop('disabled',true);
					nextquestion.find('.qAnsContainer').css('opacity','0.5');
					nextquestion.find('.qTitle').addClass('dimblue');
					nextquestion.find('.qTitle p').css({'background-color':'#888','color':'#c6c6c6'});
					nextquestion.find('.qTitle .qTitleImg').removeClass('qTitleImg').addClass('qTitledimImg');
					nextquestion.find('.qTitle p span').css('opacity',1); // add hints
				}
			}
			//increase slider height
			function increasesliderheight(classname)
			{
				$("."+classname+" .successresult").addClass('allowNext');
			}
			//reduce silder height
			function reducesliderheight(classname)
			{	
				$("."+classname+" .successresult").removeClass('allowNext');
			}
			
			function resTab(obj)
			{
				currLI = obj;
				var ul_Ele = document.getElementById( currLI.parentNode.id ),
					tabs_Ele = document.querySelector( '#tabs' ),
					div_Node = tabs_Ele.children,
					node = ul_Ele.getElementsByTagName('li');
					//console.log(div_Node);
				for(var i = 0; i < node.length; i++){
					//var isNull = node[i].classList.toString();
					//if(isNull.indexOf("tabActive") > -1 ){
						node[i].classList.remove('tabActive');
					//}
				}
				
				currLI.classList.add('tabActive');
				
				for(var k = 1; k < div_Node.length; k++){
					
					// var active = currLI.childNodes[0].href;
					var active =  $(currLI.childNodes[0]).attr('data-tname');
					var num = active.search('#') + 1
					active = active.substring(num);
					
					if(div_Node[k].id == active){
						div_Node[k].style.display = "block";
					} else {
						div_Node[k].style.display = "none";
					}
				}
				

				if(screenMode == 3) {
					var getName = currLI.childNodes[0].textContent;
						getClass = currLI.childNodes[0].getAttribute("class");
					getClass = getClass.split(" ")[0];
					var set_mTitle = document.getElementById('sTitle');
					set_mTitle.setAttribute('class',getClass);
					set_mTitle.innerHTML = getName;
					//$("#sTitle").attr("class", getClass).text(getName);
					//$("#mmenuTitle").trigger("click");
					var mEle = document.getElementById('mmenuTitle');
					//mEle.onclick();
					$("#mmenuTitle").trigger("click");
				}
			}
		
		
		
	