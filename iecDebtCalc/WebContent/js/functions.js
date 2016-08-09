//WHEN THE DOCUMENT IS READY
$(document).ready(function(){
	calculatorTab();
	calculatorExpand();
	closeAllTab();
});

function calculatorTab(){
	$('.calculator .calculator-wrapper ul.tab li a, .debt .debt-wrapper ul.tab li a').click(function(e){
		e.preventDefault();
		var _this = $(this),
			formWrapper = $('.form-wrapper'),
			thisIndex = _this.parent().index();

		if (!_this.parents('li').hasClass('tab-assumption')){

			$('.calculator .calculator-wrapper ul.tab li a, .debt .debt-wrapper ul.tab li a').removeClass('active');
			_this.addClass('active');
			formWrapper.children().removeClass('active');
			formWrapper.children().eq(thisIndex).addClass('active');
			
			
			if($('div.summary_panel').length > 0) {
				$('div.summary_panel').remove();
				$('div.panel_wrapper').css('display', 'block');
				$('div.chart_wrapper').css('display', 'none');
			}
		}
		
	});
}

function calculatorExpand(){
	$('ul.expand-list li>a').click(function(e){
		e.preventDefault();
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
	$('.close-all').click(function(e){
		e.preventDefault();
		var _this = $(this);
		_this.next().children().removeClass('open');
	});
}