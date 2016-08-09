var ONLOADED = window.onload || function() {};
var temp = [0,0,0,0,0,0,0];
var actiontemp = [0,0,0,0,0,0,0,0];
var ratingtemp = [0,0,0,0,0];
var actionCount =[0,0,0,0,0];
//2014.1.30 start
//GA event tracking code


function printPDFTracking(_langIdx) 
{
	var lang = ['English', 'Traditional Chinese'];
	_gaq.push(['_trackEvent', 'Retirement Planner', 'Print', lang[_langIdx] ]);
}

function savePDFTracking(_langIdx) 
{
	var lang = ['English', 'Traditional Chinese'];
	_gaq.push(['_trackEvent', 'Retirement Planner', 'PDF', lang[_langIdx] ]);
}

function reset(_langIdx)
{
	var lang = ['English', 'Traditional Chinese'];
	_gaq.push(['_trackEvent', 'Retirement Planner', 'Reset', lang[_langIdx] ]);	
}

function email(_langIdx)
{
	var lang = ['English', 'Traditional Chinese'];
	_gaq.push(['_trackEvent', 'Retirement Planner', 'Email', lang[_langIdx] ]);	
}

function facebook(_langIdx)
{
	var lang = ['English', 'Traditional Chinese'];
	_gaq.push(['_trackEvent', 'Retirement Planner', 'Facebook', lang[_langIdx] ]);	
}

/***************************************************************
*	For Step Track
****************************************************************/
function pageCountAll(_langIdx,pageNum)
{
	var lang = ['English', 'Traditional Chinese'];
	if(pageNum == 0)
	{
		_gaq.push(['_trackEvent','Retirement Planner','Homepage',lang[_langIdx]]);
	}
	else if(pageNum == 1)
	{
		_gaq.push(['_trackEvent','Retirement Planner','Step 1 – About you',lang[_langIdx]]);
	}
	else if(pageNum == 2)
	{
		_gaq.push(['_trackEvent','Retirement Planner','Step 2 – How much do you need for retirement',lang[_langIdx]]);
	}
	else if(pageNum == 3)	
	{
		_gaq.push(['_trackEvent','Retirement Planner','Step 3 – Retirement schemes',lang[_langIdx]]);
	}
	else if(pageNum == 4)
	{
		_gaq.push(['_trackEvent','Retirement Planner','Step 4 – Your savings and investments',lang[_langIdx]]);
	}
	else if(pageNum == 5)
	{
		_gaq.push(['_trackEvent','Retirement Planner','Step 5 – Other retirement income',lang[_langIdx]]);
	}
	else if(pageNum == 6)
	{
		_gaq.push(['_trackEvent','Retirement Planner','Result – Your retirement budget',lang[_langIdx]]);
	}
}

/***************************************************************
*	For Action Plan
****************************************************************/
function count_ActionPlan(_langIdx, actionnum)
{
	var lang = ['English', 'Traditional Chinese'];
	switch(actionnum){
		case 1:
			_gaq.push(['_trackEvent','Retirement Planner','Action 1 – Save more for retirement',lang[_langIdx]]);
			break;
		case 2:
			_gaq.push(['_trackEvent','Retirement Planner','Action 2 – Review investment strategy and improve investment outcome',lang[_langIdx]]);
			break;
		case 3:
			_gaq.push(['_trackEvent','Retirement Planner','Action 3 – Generate income',lang[_langIdx]]);
			break;
		case 4:
			_gaq.push(['_trackEvent','Retirement Planner','Action 4 – Manage expenses during retirement',lang[_langIdx]]);
			break;
		case 5:
			_gaq.push(['_trackEvent','Retirement Planner','Action 5 – Review target retirement age',lang[_langIdx]]);
			break;
	}
}

/***************************************************************
*	For Result Page Rating
****************************************************************/
function rating(_langIdx,ratingnum)
{
	var lang = ['English', 'Traditional Chinese'];
	switch(ratingnum){
		case 0:
			_gaq.push(['_trackEvent','Retirement Planner', 'Rating 1',lang[_langIdx]]);
			break;
		case 1:
			_gaq.push(['_trackEvent','Retirement Planner', 'Rating 2',lang[_langIdx]]);
			break;
		case 2:
			_gaq.push(['_trackEvent','Retirement Planner', 'Rating 3',lang[_langIdx]]);
			break;
		case 3:
			_gaq.push(['_trackEvent','Retirement Planner', 'Rating 4',lang[_langIdx]]);
			break;
		case 4:
			_gaq.push(['_trackEvent','Retirement Planner', 'Rating 5',lang[_langIdx]]);
			break;
		}
}



$(document).ready(function() {

	var lang = (window.location.href.search('/en/') > -1) ? 0 : 1; // en & tch
	
	//Detect  go to which page when page load
	if(window.location.href.search('index.jsp') > -1) 
	{
		temp[0]++; //count index.jsp when the first page is loaded.
		pageCountAll(lang,0);
	}else
	{
		temp[1]++; //count main.jsp's profile when it is loaded.
		pageCountAll(lang,1);
	}
	
	$('a#bottomNext, a#bottomPrev, a#previous, a#next, input.trackstep').click(function(){
		//var sliderIndex = currentSlider - 1;
		temp[current_Slide]++;
		if(temp[current_Slide] == 1)
		{
			pageCountAll(lang,current_Slide); 
		}

	});
	
	
	$('#print').click(function(){
		printPDFTracking(lang);
	});
	
	$('#download').click(function(){
		savePDFTracking(lang);
	});
	
	/*$('#back').click(function(){
		temp[8]++;
		if(temp[8] == 1)
		{
			pageCountAll(lang,8);
		}
		
	});*/
	
	
	$('a.email').click(function(){
		email(lang);

	});
	
	$('a.facebook').click(function(){
		facebook(lang);
	});
	
	/*
	$('span.titleimg,#reset').click(function(){ //index page is count
		temp[0]++;
		if(temp[0] == 1)
		{
			pageCountAll(lang,0);
		}
		//when indexpage(0) is accessed,then temp[0] is added by one ,then input 0 
	});
	*/
	$('#reset').click(function(){
		reset(lang);
	});
	
	/*
	$('.description a.analysisBtn').click(function(){
		temp[1]++;
		if(temp[1] == 1)
		{
			pageCountAll(lang,1); //when profile(1) is accessed ,then temp[1] is added by one,then input 1 
		}
	});*/
	
	
	// Result Page Action Plan
	$('.more_box_details').click(function(){
		var data_target = $(this).attr('data-topen');
		data_target = parseInt(data_target.slice(-1));
		actionCount[data_target-1]++;
		if(actionCount[data_target-1] == 1)
		{
			count_ActionPlan(lang, data_target);
		}
	});
	
	$('.rateIcon-option').click(function(){
		var ratingId = this.id;
		var ratingNum = parseInt(ratingId.substring(ratingId.length-1,ratingId.length))-1;
		ratingtemp[ratingNum]++;
		if(ratingtemp[ratingNum] == 1)
		{
			rating(lang,ratingNum);
		}
	});
	
});