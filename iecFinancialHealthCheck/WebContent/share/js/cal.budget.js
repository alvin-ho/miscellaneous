var ONLOADED = window.onload || function() {};
var temp = [0,0,0,0,0,0,0,0,0,0,0];
var actiontemp = [0,0,0,0,0,0,0,0];
var ratingtemp = [0,0,0,0,0];
//2014.1.30 start
//GA event tracking code


function printPDFTracking(_langIdx) 
{
	var lang = ['English', 'Traditional Chinese'];
	_gaq.push(['_trackEvent', 'Financial Health Check', 'Print PDF', lang[_langIdx] ]);
}

function savePDFTracking(_langIdx) 
{
	var lang = ['English', 'Traditional Chinese'];
	_gaq.push(['_trackEvent', 'Financial Health Check', 'Download PDF', lang[_langIdx] ]);
}

function reset(_langIdx)
{
	var lang = ['English', 'Traditional Chinese'];
	_gaq.push(['_trackEvent', 'Financial Health Check', 'Reset', lang[_langIdx] ]);	
}

function email(_langIdx)
{
	var lang = ['English', 'Traditional Chinese'];
	_gaq.push(['_trackEvent', 'Financial Health Check', 'Email Share', lang[_langIdx] ]);	
}

function facebook(_langIdx)
{
	var lang = ['English', 'Traditional Chinese'];
	_gaq.push(['_trackEvent', 'Financial Health Check', 'Facebook Share', lang[_langIdx] ]);	
}

function pageCountAll(_langIdx,pageNum)
{
	var lang = ['English', 'Traditional Chinese'];
	if(pageNum == 0)
	{
		_gaq.push(['_trackEvent','Financial Health Check','FHC section 1: homepage',lang[_langIdx]]);
	}
	else if(pageNum == 1)
	{
		_gaq.push(['_trackEvent','Financial Health Check','FHC section 2: profile',lang[_langIdx]]);
	}
	else if(pageNum == 2)	
	{
		_gaq.push(['_trackEvent','Financial Health Check','FHC section 3: income and expense',lang[_langIdx]]);
	}
	else if(pageNum == 3)
	{
		_gaq.push(['_trackEvent','Financial Health Check','FHC section 4: credit management',lang[_langIdx]]);
	}
	else if(pageNum == 4)
	{
		_gaq.push(['_trackEvent','Financial Health Check','FHC section 5 : financial goal',lang[_langIdx]]);
	}
	else if(pageNum == 5)
	{
		_gaq.push(['_trackEvent','Financial Health Check','FHC section 6 : investment planning',lang[_langIdx]]);
	}
	else if(pageNum == 6)
	{
		_gaq.push(['_trackEvent','Financial Health Check','FHC section 7 : reserving money',lang[_langIdx]]);
	}
	else if(pageNum == 7)
	{
		_gaq.push(['_trackEvent','Financial Health Check','FHC section 8 : insurance planning',lang[_langIdx]]);
	}
	else if(pageNum == 8)	
	{
		_gaq.push(['_trackEvent','Financial Health Check','FHC section 9 : retirement planning',lang[_langIdx]]);
	}
	else if(pageNum == 9)
	{
		_gaq.push(['_trackEvent','Financial Health Check','FHC section 10 : estate planning',lang[_langIdx]]);
	}
	else if(pageNum == 10)
	{
		_gaq.push(['_trackEvent','Financial Health Check','FHC section 11 :  result page',lang[_langIdx]]);
	}

}

function actioncountAll(_langIdx,actionnum)
{
	var lang = ['English', 'Traditional Chinese'];
	switch(actionnum){
		case 2:
			_gaq.push(['_trackEvent','Financial Health Check','FHC action plan: income and expense',lang[_langIdx]]);
			break;
		case 3:
			_gaq.push(['_trackEvent','Financial Health Check','FHC action plan: credit management',lang[_langIdx]]);
			break;
		case 4:
			_gaq.push(['_trackEvent','Financial Health Check','FHC action plan: financial goal',lang[_langIdx]]);
			break;
		case 5:
			_gaq.push(['_trackEvent','Financial Health Check','FHC action plan: investment planning',lang[_langIdx]]);
			break;
		case 6:
			_gaq.push(['_trackEvent','Financial Health Check','FHC action plan: saving emergency',lang[_langIdx]]);
			break;
		case 7:
			_gaq.push(['_trackEvent','Financial Health Check','FHC action plan: insurance planning',lang[_langIdx]]);
			break;
		case 8:
			_gaq.push(['_trackEvent','Financial Health Check','FHC action plan: retirement planning',lang[_langIdx]]);
			break;
		case 9:
			_gaq.push(['_trackEvent','Financial Health Check','FHC action plan: estate planning',lang[_langIdx]]);
			break;
		}
}

function rating(_langIdx,ratingnum)
{
	var lang = ['English', 'Traditional Chinese'];
	switch(ratingnum){
		case 0:
			_gaq.push(['_trackEvent','Financial Health Check','FHC satisfaction: score 1',lang[_langIdx]]);
			break;
		case 1:
			_gaq.push(['_trackEvent','Financial Health Check','FHC satisfaction: score 2',lang[_langIdx]]);
			break;
		case 2:
			_gaq.push(['_trackEvent','Financial Health Check','FHC satisfaction: score 3',lang[_langIdx]]);
			break;
		case 3:
			_gaq.push(['_trackEvent','Financial Health Check','FHC satisfaction: score 4',lang[_langIdx]]);
			break;
		case 4:
			_gaq.push(['_trackEvent','Financial Health Check','FHC satisfaction: score 5',lang[_langIdx]]);
			break;
		}
		
}



$(document).ready(function() {

	var lang = (window.location.href.search('/en/') > -1) ? 0 : 1; // en & tch
	if(window.location.href.search('index.jsp') > -1) 
	{
		temp[0]++; //count index.jsp when the first page is loaded.
		pageCountAll(lang,0);
	}else
	{
		temp[1]++; //count main.jsp's profile when it is loaded.
		pageCountAll(lang,1);
	}
	
	$('a#bottomNext,a#bottomPrev,a#previous,a#next,input.trackstep').click(function(){
		//var sliderIndex = currentSlider - 1;
		temp[currentSlider]++;
		if(temp[currentSlider] == 1)
		{
			pageCountAll(lang,currentSlider); 
		}

	});
	
	
	$('#print').click(function(){
		printPDFTracking(lang);
	});
	
	$('#download').click(function(){
		savePDFTracking(lang);
	});
	
	
	
	$('a.email').click(function(){
		email(lang);

	});
	
	$('a.facebook').click(function(){
		facebook(lang);
	});
	

	$('#reset').click(function(){
		reset(lang);
	});
	
	
	$('.actionBtn').click(function(){
		var data_target = $(this).attr('data-target');
		var value = parseInt(data_target.substring(data_target.length-1,data_target.length));
		actiontemp[value-2]++; 
		if(actiontemp[value-2] == 1)
		{
			actioncountAll(lang,value);
		}	//when s2 is clicked , then actiontemp[0] is added by one
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