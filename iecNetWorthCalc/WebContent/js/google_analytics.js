
  // (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  // (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  // m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  // })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  // ga('create', 'UA-36354635-1', 'auto');
  // ga('send', 'pageview');


// code that based on 2013.1.8 file sent by Derek
/*var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36354635-1']);
//_gaq.push(['_setAccount', 'UA-34416257-1']);
_gaq.push(['_setDomainName', 'hkiec.hk']);
_gaq.push(['_trackPageview']);
(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();*/


  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	
	var domainGa = "";
	if(/(www.thechinfamily.hk)/i.test(window.location.href)){
		 ga('create', 'UA-34416257-1', 'auto', {'name': 'production'});
		 ga('production.send', 'pageview');     //production ga 
		 domainGa = "production";
	}else if(/(thechinfamily.intra.hksfc.org.hk)/i.test(window.location.href)){
		 ga('create', 'UA-36354635-1', 'auto', {'name': 'uat'});
		 ga('uat.send', 'pageview');   			//uat ga 
		 domainGa = "uat";
	}

function unbindRatingClick(){
	$("#rating1").unbind( "click" );
	$("#rating2").unbind( "click" );
	$("#rating3").unbind( "click" );
	$("#rating4").unbind( "click" );
	$("#rating5").unbind( "click" );
}

function downloadPDFTracking(_langIdx) {
	var lang = ['English', 'Traditional Chinese'];
	if(domainGa == "production")
	{
		ga('production.send', 'event', 'Net Worth Tools', 'Download PDF', lang[_langIdx]);
	}else if(domainGa == "uat")
	{
		ga('uat.send', 'event', 'Networth calculator', 'Download PDF', lang[_langIdx]);
	}
}
function printPDFTracking(_langIdx) {
	var lang = ['English', 'Traditional Chinese'];
	if(domainGa == "production")
	{
		ga('production.send', 'event', 'Net Worth Tools', 'Print PDF', lang[_langIdx]);
	}else if(domainGa == "uat")
	{
		ga('uat.send', 'event', 'Networth calculator', 'Print PDF', lang[_langIdx]);
	}
}
function saveExcelTracking(_langIdx) {
	var lang = ['English', 'Traditional Chinese'];
	if(domainGa == "production")
	{
		ga('production.send', 'event', 'Net Worth Tools', 'Download Excel', lang[_langIdx]);
	}else if(domainGa == "uat")
	{
		ga('uat.send', 'event', 'Networth calculator', 'Download Excel', lang[_langIdx]);
	}
}
function checkWealthTracking(_langIdx) {
	var lang = ['English', 'Traditional Chinese'];
	if(domainGa == "production")
	{
		ga('production.send', 'event', 'Net Worth Tools', 'Check My Wealth', lang[_langIdx]);
	}else if(domainGa == "uat")
	{
		ga('uat.send', 'event', 'Networth calculator', 'Check My Wealth', lang[_langIdx]);
	}
}
function facebookShareTracking(_langIdx){
	var lang = ['English', 'Traditional Chinese'];
	if(domainGa == "production")
	{
		ga('production.send', 'event', 'Net Worth Tools', 'Facebook Share', lang[_langIdx]);
	}else if(domainGa == "uat")
	{
		ga('uat.send', 'event', 'Networth calculator', 'Facebook Share', lang[_langIdx]);
	}
}
function emailShareTracking(_langIdx){
	var lang = ['English', 'Traditional Chinese'];
	if(domainGa == "production")
	{
		ga('production.send', 'event', 'Net Worth Tools', 'Email Share', lang[_langIdx]);
	}else if(domainGa == "uat")
	{
		ga('uat.send', 'event', 'Networth calculator', 'Email Share', lang[_langIdx]);
	}
}

$(document).ready(function(){
	var lang = (window.location.href.search('/en/') !== -1) ? 0 : 1; // en & tc
	// GA tracking 2015.1.20
	$(".inner a.btnFancy").click(function(e) {
		if(domainGa == "production")
		{
			ga('production.send', 'event','Net Worth Tools', 'Disclaimer',  (lang == 0 ? 'English' : 'Traditional Chinese'));
		}else if(domainGa == "uat")
		{
			ga('uat.send', 'event','Networth calculator', 'Disclaimer',  (lang == 0 ? 'English' : 'Traditional Chinese'));
		}
	});

	// Result page
	$("#rating1").click(function(e) {
		if(domainGa == "production")
		{
			ga('production.send', 'event','Net Worth Tools', 'rating 1',  (lang == 0 ? 'English' : 'Traditional Chinese'));
		}else if(domainGa == "uat")
		{
			ga('uat.send', 'event','Networth calculator', 'rating 1',  (lang == 0 ? 'English' : 'Traditional Chinese'));
		}
		unbindRatingClick();
	});
	$("#rating2").click(function(e) {
		if(domainGa == "production")
		{
			ga('production.send', 'event','Net Worth Tools', 'rating 2',  (lang == 0 ? 'English' : 'Traditional Chinese'));
		}else if(domainGa == "uat")
		{
			ga('uat.send', 'event','Networth calculator', 'rating 2',  (lang == 0 ? 'English' : 'Traditional Chinese'));
		}
		unbindRatingClick();
	});
	$("#rating3").click(function(e) {
		if(domainGa == "production")
		{
			ga('production.send', 'event','Net Worth Tools', 'rating 3',  (lang == 0 ? 'English' : 'Traditional Chinese'));
		}else if(domainGa == "uat")
		{
			ga('uat.send', 'event','Networth calculator', 'rating 3',  (lang == 0 ? 'English' : 'Traditional Chinese'));
		}
		unbindRatingClick();
	});
	$("#rating4").click(function(e) {
		if(domainGa == "production")
		{
			ga('production.send', 'event','Net Worth Tools', 'rating 4',  (lang == 0 ? 'English' : 'Traditional Chinese'));
		}else if(domainGa == "uat")
		{
			ga('uat.send', 'event','Networth calculator', 'rating 4',  (lang == 0 ? 'English' : 'Traditional Chinese'));
		}
		unbindRatingClick();
	});
	$("#rating5").click(function(e) {
		if(domainGa == "production")
		{
			ga('production.send', 'event','Net Worth Tools', 'rating 5',  (lang == 0 ? 'English' : 'Traditional Chinese'));
		}else if(domainGa == "uat")
		{
			ga('uat.send', 'event','Networth calculator', 'rating 5',  (lang == 0 ? 'English' : 'Traditional Chinese'));
		}
		unbindRatingClick();
	});
	$("#feedback").click(function(e) {
		if(domainGa == "production")
		{
			ga('production.send', 'event','Net Worth Tools', 'email feedback',  (lang == 0 ? 'English' : 'Traditional Chinese'));
		}else if(domainGa == "uat")
		{
			ga('uat.send', 'event','Networth calculator', 'email feedback',  (lang == 0 ? 'English' : 'Traditional Chinese'));
		}
	});

});