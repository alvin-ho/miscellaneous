var current_Slide = 0, 
	totalSlide = 0,
	tmpTips = "",
	sudoSlider = "";
	beforeSlider = 1;

var sliders = [{"min":18,"max":70,"defaultValue":0,"step":1,"inputMin":18,"inputMax":110}, //sliderbar0
	           {"min":30,"max":80,"defaultValue":0,"step":1,"inputMin":18,"inputMax":110}, //sliderbar1
	           {"min":30,"max":100,"defaultValue":0,"step":1,"inputMin":18,"inputMax":110}, //sliderbar2
	           {"min":0,"max":100000,"defaultValue":0,"step":1000,"inputMin":0,"inputMax":9999999}, //sliderbar3
			   {"min":0.1,"max":10.1,"defaultValue":3.3,"step":0.1,"inputMin":0,"inputMax":30},//sliderbar4
			   {"min":0.1,"max":10.1,"defaultValue":5.5,"step":0.1,"inputMin":0,"inputMax":30},//sliderbar5
	           {"min":0,"max":100000,"defaultValue":0,"step":1000,"inputMin":1,"inputMax":999999},//sliderbar6
	           {"min":0,"max":500000,"defaultValue":0,"step":1000,"inputMin":1,"inputMax":9999999},//sliderbar7
	           {"min":0,"max":10,"defaultValue":3.9,"step":0.1,"inputMin":0,"inputMax":30},//sliderbar8
	           {"min":0,"max":10,"defaultValue":0,"step":0.1,"inputMin":0,"inputMax":999},//9
			   {"min":0,"max":10,"defaultValue":0,"step":0.1,"inputMin":0,"inputMax":999},//10
	           {"min":0,"max":100000,"defaultValue":0,"step":1000,"inputMin":1,"inputMax":999999},//11
	           {"min":0,"max":1000000,"defaultValue":0,"step":5000,"inputMin":1,"inputMax":9999999},//12
			   {"min":0,"max":10,"defaultValue":4.4,"step":0.1,"inputMin":0,"inputMax":30},//13
			   {"min":0,"max":100000,"defaultValue":0,"step":1000,"inputMin":0,"inputMax":999999},//14
			   {"min":0,"max":500000,"defaultValue":0,"step":1000,"inputMin":0,"inputMax":9999999},//15
			   {"min":0,"max":10000000,"defaultValue":0,"step":50000,"inputMin":0,"inputMax":99999999},//16
			   {"min":0,"max":500000,"defaultValue":0,"step":5000,"inputMin":0,"inputMax":999999},//17
			   {"min":0,"max":2000000,"defaultValue":0,"step":10000,"inputMin":0,"inputMax":99999999},//18
			   {"min":0,"max":100000,"defaultValue":0,"step":1000,"inputMin":0,"inputMax":999999},//19
			   {"min":0,"max":30,"defaultValue":5.5,"step":0.1,"inputMin":0.1,"inputMax":10},//20
			   {"min":0,"max":100000,"defaultValue":0,"step":1000,"inputMin":0,"inputMax":999999},//21
			   {"min":0.1,"max":10.1,"defaultValue":0,"step":0.1,"inputMin":0,"inputMax":30},//22,
			   {"min":0,"max":999999,"defaultValue":0},//23  itemcount
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
			   
	          ];


			  
var nearestGroups = ['0','1','2','3','6','7','8','11','12','14','15','16','17','18','19','21','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48'];
var roundToones = ['9','10'];
var roundTotwos = ['22','13'];
var roundToThrees = ['4','5','20'];


//adjustStyle($(window).width());
$(function(){
	$(window).resize(function(){
		//adjustStyle($(window).width());
	});

	if(window.location.href.indexOf("/index") > -1){
		fancyBox_remind("#opening", "auto", false, false);
	}

	
	sudoSlider = $("#slider").sudoSlider({
		prevNext: false,
		updateBefore:true,
		autoHeight:true,
		afterAnimation:function(slide){
			current_Slide = slide;
			showHide_prevNext_Btn("afterAnimate", current_Slide);
		},
		initCallback: function() {
			totalSlide = this.getValue("totalslides");
			current_Slide = this.getValue("currentslide");
			showHide_prevNext_Btn("init", current_Slide);
			enable_StepTrack( this.getValue("currentslide") - 1 );
		},beforeAnimation:function(slide){ 	 	
				beforeSlider = slide; 	 	
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
		$(tmpTips).css({'top':mY+15,'left':mX-70}).show();
	}).mouseout(function(e) { 
		$(tmpTips).hide();
	});
	
	
	for(var i = 0; i < 23; i++){
		$('#sliderBar'+i).slider({
			range:"min",
			min:sliders[i].min,
			max:sliders[i].max,
			animate: "fast",
			step:sliders[i].step,
			value: sliders[i].defaultValue,
			start:function(){},
			slide: function( event, ui ) {
				var tempID = this.id;
				var tempNum = tempID.replace(/sliderBar/,"");
				if($(this).attr('class').indexOf('sbPercentImg') > -1)
				{
					$( "#mount" + tempNum ).val( numberWithCommas(ui.value) + "%");
				}else
				{
					$( "#mount" + tempNum ).val( numberWithCommas(ui.value));
				}	
			}
		});
		var percentValue = toPercent(i);
		$('#mount'+ i).val(sliders[i].defaultValue + percentValue);
	}
	
	$(".silderBtn").click(function() {
		plus_minus_inputBox(this.id);
	});
	
	$(".more_box_details").click(function(){
		var t = $(this).attr("data-tOpen");
		$('.moreboxLabel').children(".boxContainer").hide();
		$(t).show();
		sudoSlider.adjust();
	});
	
	$(".facebook").on("click", fbShare );
	$(".email").on("click", mailShare);
	$("#backToTop").on("click", mPageTop);
	$("#reset").on("click", resetQuest);
	$("#edit").on("click", editValue);

	$(".startBtn, .quest").click(function(e){ 
		fancyBox_remind("#useExplain", "80%", true, true);
	});
	
	$('.planTitle').click(function(){
		slideToggle(this);
	});
	
	$('input[name=checkBoxType_retireSchemes]').click(function(){
		var checkBoxId = this.id;
		var checkBoxNum = checkBoxId.substring(checkBoxId.length-1,checkBoxId.length);
		var schemesNum = checkBoxNum - 1;	
		var isCheck1 = $("#checkbox1").is(":checked"),
			isCheck2 = $("#checkbox2").is(":checked"),
			isCheck3 = $("#checkbox3").is(":checked");
	
		if ( $(this).is(":checked") ){
			if( this.id != "checkbox3" && !isCheck3 ){
				var target = $(this).attr("data-openTarget");
				$(target).find("p").removeClass('dimTxt');
				dimLayer("undim", target);
				$(target).addClass('schemesOpen');
				$(".schemesOpen").trigger("click");
			} else {
				if( isCheck3 &&  ( isCheck1 || isCheck2 ) ){
					alert( $("#winAlert01").html() );
					$(this).prop( "checked", false );
				}else
				{
					var retire = $('#retirement_Plan').find('input');
					backToDefault(retire);
				}
			}
		} else {
			var target = $(this).attr("data-openTarget");
			$(target).find("p").addClass('dimTxt');
			
			if( $(target).next("div").css('display') != 'none'){
				$(".schemesOpen").trigger("click");
			}
			$(target).removeClass('schemesOpen');
			dimLayer("dim", target);

		}
		
		if(!$('#checkbox1').attr('checked'))
		{
			var mandate = $('#schemes_c0').find('input');
			backToDefault(mandate);
		}
		if(!$('#checkbox2').attr('checked'))
		{
			var orso = $('#schemes_c1').find('input');
			backToDefault(orso);
		}
	});
	
	
	for(var k = 23;k<=48;k++)
	{
		if($("#itemMount"+k).attr('class').indexOf('categoryThree') > -1)
		{
			$("#itemMount"+k).val(sliders[k].defaultValue + "%");
		}
		else 
		{
			$("#itemMount"+k).val(sliders[k].defaultValue);
		}
	}
	
	$('.itemMount').on({
		keypress:function(){
			var id = this.id.replace("itemMount","");
			validate(this);
		},
		focusout:function(){
			var id = this.id.replace('itemMount',"");
				var groupOne = $.inArray(id, nearestGroups);
			if(groupOne!==-1)
				this.value = nearestGroup(this.value);
		
		},keyup:function(){
			var id = this.id.replace("itemMount","");
				validate(this);
		}, focusin:function(){
		}
		
	});
	
	$('.categoryOne').on({
		focusout:function(){
			var value = this.value;
			var maxMessage = $('#winAlert05').html();
			var id = this.id.replace("itemMount","");
			if(value < sliders[id].min || value > sliders[id].max)
			{
				alert(maxMessage);
			}
			if($(this).val() == "" || $(this).val() == "NaN")
			{	
				this.value = sliders[id].defaultValue;

			}
			
		}
	});
	
	$('.categoryTwo').on({
		focusout:function(){
		var value = this.value;
		var maxMessage = $('#winAlert04').html();
		var id = this.id.replace("itemMount","");
		if(value < sliders[id].min || value > sliders[id].max)
		{
			alert(maxMessage);
		}
		if($(this).val() == "" || $(this).val() == "NaN")
		{	
			this.value =  sliders[id].defaultValue;
		}
		
		}
	});
	
	$('.categoryThree').on({
		focusout:function(){
		var value = this.value.replace(/%/,"");
		var maxMessage = $('#winAlert04').html();
		var id = this.id.replace("itemMount","");
		if(value < sliders[id].min || value > sliders[id].max)
		{
			alert(maxMessage);
		}
		if($(this).val() == "" || $(this).val() == "NaN")
		{	
			this.value =  sliders[id].defaultValue;
		}
		$(this).val(this.value + "%");
		//$(this).val(this.value + "%");
		},focusin:function()
		{
			var val = this.value.replace("%","");
			$(this).val(val);
		}
	});

	
	$(".mount").on({
		keyup:function() {
			var id = this.id.replace(/mount/,"");
			plus_minus_inputBox(this.id);		
			validate(this);
		}, focusin:function(){
			$(this).val( $(this).val().replace(/[,]/g,"") );
			var id = this.id.replace(/mount/,"");
		},keypress:function() {
			var id = this.id.replace(/mount/,"");
			validate(this);
			
		},focusout:function(){
			var id = this.id.replace(/mount/,"");
			if($(this).val() == "")
			{
				$(this).val(sliders[id].defaultValue);
			}
			var wrongmessage =  $('#winAlert04').html();
			if(sliders[id].min > this.value)
			{
				alert(wrongmessage);
			}
			else if(sliders[id].max < this.value)
			{
				alert(wrongmessage);
			}
			var groupOne = $.inArray(id, nearestGroups);
			var groupTwo = $.inArray(id, roundToones);
			var groupThree = $.inArray(id, roundTotwos);
			var groupFour = $.inArray(id, roundToThrees);
			if(groupOne!==-1)
				this.value = nearestGroup(this.value);
			else if(groupTwo!==-1)
				this.value = roundToone(this.value);
			else if(groupThree!==-1)
				this.value = roundTotwo(this.value);
			else if(groupFour!==-1)
				this.value = roundToThree(this.value);

			
		}
	});
	
		$('#mount0,#mount1,#mount2').on({
		focusout:function(){
			var age = parseInt($('#mount0').val());
			var expectedRetirement = parseInt($('#mount1').val());
			var expectedLife = parseInt($('#mount2').val());
			var alert1 = $('#winAlert02').html();
			var alert2 = $('#winAlert03').html();
			if(age > expectedRetirement)
			{
				alert(alert1);
			}
			else if(expectedRetirement > expectedLife)
			{
				alert(alert2);
			}
		}
	});

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
		
		if(!$("#radio1").attr('checked'))
		{
			$('#mount3').val(sliders[3].defaultValue);
		}
		else if(!$("#radio2").attr('checked'))
		{
			var expense = $('#Form_Expense').find('input');
			backToDefault(expense);
		}
		
		
	});
	
	$("#checkbox4").click(function(){
		if(!$("#checkbox4").attr('checked'))
		{
			var saving = $('#Form_SavInvest').find('input');
			backToDefault(saving);
		}
	});
	
	$('.sbPercentImg').parents('.questContainer').find('.mountContainer input').on({
		focusout:function(){
			this.value = this.value + "%";
		},focusin:function(){
			this.value = this.value.replace("%","");
		}
	});
	
	for(var k = 0; k < $(".point_container > div").length - 1; k++) {
		$("#track"+k+" > label").click(function(e){ 
			var sNum = $(this).parent().attr("id"),
				sNum = sNum[sNum.length-1];
			sNum++;
			prevNextSlide("", sNum, sudoSlider, true) 
		});
	}
	
	// For Slide 3 Detection expand tab
	$(document).on('click', '.schemesOpen', function(){
		slideToggle(this);
	});
	
	$(".lassst, .threeee").click(function(e){ 
		if(this.className =="threeee"){
			sudoSlider.goToSlide(3);	
		} else {
			sudoSlider.goToSlide(totalSlide);
		}
	});			
});

		function nearestGroup(value)
		{
			return Math.round(value);
		}
		
		function roundToone(value)
		{
			return Math.round(value*10)/10;
		}
		
		function roundTotwo(value)
		{
			return Math.round(value*100)/100;
		}
		
		function roundToThree(value)
		{
			return Math.round(value*1000)/1000;
		}
		function plus_minus_inputBox(uid) {
			//var number = uid.substring(uid.length-1,uid.length);
			var number = uid.replace(/[a-zA-Z]*/,"");
			if( uid == "mount"+number) {
					$("#sliderBar"+number).slider("option", "value", Math.round($("#"+uid).val()) );		
			} else {
				
				var value = $("#sliderBar"+number).slider("option","value");
				
					step = $("#sliderBar"+number).slider("option", "step");
					if ( uid == "addBtn"+number) {
						$("#sliderBar"+number).slider("value", value + step);
					} else {
						$("#sliderBar"+number).slider("value", value - step);
					}		
					var percentValue = toPercent(number);
					$( "#mount" +number ).val( numberWithCommas($("#sliderBar"+number).slider("value")) + percentValue);
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
		
		function numberWithCommas(x) {
			var parts = x.toString().split(".");
			parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			return parts.join(".");
		}

		function prevNextSlide(uID, curr, slider, directClick) {
			if( !directClick ){
				if( uID == "next" || uID == "bottomNext" ){
					if(curr == 2)
				{
					if(checkSlideTwo() == "")
					{
						curr++;	
						if( curr == 6 ){	
							resultSet();	
						}
						slider.goToSlide(curr);
					}else
					{
						alert(checkSlideTwo());
					}
				}else if(curr == 3)
				{
					if(checkSlideThree() == "")
					{
						curr++;	
						if( curr == 6 ){	
							resultSet();	
						}
						slider.goToSlide(curr);
					}else
					{
						alert(checkSlideThree());
					}
				}else if (curr == 4)
				{
					if(checkSlideFour() == "")
					{
						curr++;	
						if( curr == 6 ){	
							resultSet();	
						}
						slider.goToSlide(curr);
					}else
					{
						alert(checkSlideFour());
					}
					
				}else
				{
					curr++;	
					if( curr == 6 ){	
						resultSet();	
					}
					slider.goToSlide(curr);
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
				slider.goToSlide(curr);
				curr--;
				setTimeout(function(){ $("span.sTitle").text( $("div#track"+curr+" > .ele"+curr+"").text() ); },1000);
			}
		}	

		function fancyBox_remind( rID, rh, rClose, rClick ) {
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
		
		function resetQuest() {
			var isConfirm = confirm($('#winAlert00').html());
			if( isConfirm ){
				window.location.href = "main.jsp";
				//window.location.href = "index.jsp";
			}
		}
		
		function resultSet(){
			$(".main").addClass("resetResult_Padd");
			$(".step_check, a#previous, a#next").hide();
		}
		
		function editValue(){
			$(".accordion").slideToggle("slow", function(){
				sudoSlider.adjust();
			});	
		}
		
		function validate(thisValue)
		{	
			var digit = /^\d*?\.?\d*?$/;
				
			if(!thisValue.value.match(digit))
			{
				thisValue.value=thisValue.t_value;
			}
			else 
			{
				thisValue.t_value=thisValue.value;
			}
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
			
			$("#"+in_id).find(".ocIcon").attr("src", tmp)
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
			$('.step_check input:radio[name=track'+curr+']').attr('checked','checked');
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
		
		function checkSlideTwo()
		{
			var wrongMessage = $('#winAlert09').html();
			if($('input[name=radioType_retireExpense]:checked').length > 0)
			{
				if($('#radio2').attr("checked"))
				{
					if($('.categoryOne').val() != "" && $('.categoryOne').val() != "Nan")
					{
						return "";
					}
					else
					{
						return wrongMessage;
					}
				}
				if($('#radio1').attr("checked"))
				{
					return "";
				}
			}else
			{
				return wrongMessage;
			}
				
		}
		
		function checkSlideThree()
		{
			var wrongMessage = $('#winAlert10').html();
			if($('input[name=checkBoxType_retireSchemes]:checked').length > 0)
			{
				if($('#checkbox1').attr("checked"))
				{
					if($('input[name=personalType_retireSchemes]:checked').length > 0)
					{
						return "";
					}else 
					{
						return wrongMessage;
					}
				}else
				{
					return "";
				}	
			}else
			{
				return wrongMessage;
			}
		}
		
		function checkSlideFour()
		{
			var wrongMessage = $("#winAlert11").html();
			if($('input[name=checkBoxType_savingInvest]:checked').length > 0)
			{
				if(($('.categoryOne').val() != "" && $('.categoryOne').val() != "Nan")&&($('.categoryTwo').val() != "" && $('.categoryTwo').val() != "Nan"))
				{
					return "";
				}
				else
				{
					return wrongMessage;
				}
			}else
			{
				return "";
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
					if(ele[i].id.indexOf('itemMount') > -1){
						if(ele[i].className.indexOf('categoryThree') > -1)
						{
							ele[i].value = sliders[ele[i].id.replace(/itemMount/,"")].defaultValue + "%";
						}
						else
						{
							ele[i].value = sliders[ele[i].id.replace(/itemMount/,"")].defaultValue;
						}
					}
					else
					{
						var id = ele[i].id.replace(/mount/,"");
						ele[i].value = sliders[id].defaultValue;
						$("#sliderBar"+id).slider( "option", "value", ele[i].value);
					}
				}	
			}	
		}