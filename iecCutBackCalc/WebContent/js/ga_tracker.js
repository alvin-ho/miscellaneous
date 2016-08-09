
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
var _gaq = _gaq || [];
/*
var _gaq = _gaq || [];
if(/(www.thechinfamily.hk)/i.test(window.location.href)){
  _gaq.push(['_setAccount', 'UA-34416257-1']);		//live ga code
  _gaq.push(['_setDomainName', 'www.thechinfamily.hk']); 	//live domain
}else if(/(thechinfamily.intra.hksfc.org.hk)/i.test(window.location.href)){
  _gaq.push(['_setAccount', 'UA-36354635-1']);		//uat ga code
  _gaq.push(['_setDomainName', 'thechinfamily.intra.hksfc.org.hk']);  	//uat domain
} else {
	_gaq.push(['_setAccount', 'UA-58886843-1']);		//uat ga code
}
_gaq.push(['_trackPageview']);
(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
*/

//2015.2.18 start
//GA event tracking code

function downloadPDFTracking(_langIdx) {
	var lang = ['English', 'Traditional Chinese'];
	_gaq.push(['_trackEvent', 'Cutback Tools', 'Download PDF', lang[_langIdx] ]);
}
function printPDFTracking(_langIdx) {
	var lang = ['English', 'Traditional Chinese'];
	_gaq.push(['_trackEvent', 'Cutback Tools', 'Print PDF', lang[_langIdx] ]);
}
function downloadExcelTracking(_langIdx) {
	var file = ['../excel/cutback_en.xls', '../excel/cutback_tc.xls'];
	var lang = ['English', 'Traditional Chinese'];
	_gaq.push(['_trackEvent', 'Cutback Tools', 'Download Excel', lang[_langIdx] ]);
	setTimeout(function() { // to allow time for the hit request to process before taking the user by _self
		window.open( file[_langIdx], '_self');
	}, 500);
}
function ratingTracking(_langIdx, rate) {
	var lang = ['English', 'Traditional Chinese'];
	_gaq.push(['_trackEvent', 'Cutback Tools', 'Rating '+rate, lang[_langIdx] ]);
}
function disclaimerTracking(_langIdx){
	var lang = ['English', 'Traditional Chinese'];
	_gaq.push(['_trackEvent', 'Cutback Tools', 'Click Disclaimer', lang[_langIdx] ]);
}
function calculateTracking(_langIdx){
	var lang = ['English', 'Traditional Chinese'];
	_gaq.push(['_trackEvent', 'Cutback Tools', 'Click Calculate', lang[_langIdx] ]);
}
function fbShareTracking(_langIdx){
	var lang = ['English', 'Traditional Chinese'];
	_gaq.push(['_trackEvent', 'Cutback Tools', 'Facebook Share', lang[_langIdx] ]);
}
function emailShareTracking(_langIdx){
	var lang = ['English', 'Traditional Chinese'];
	_gaq.push(['_trackEvent', 'Cutback Tools', 'Email Share', lang[_langIdx] ]);
}

//2015.2.18 ended

