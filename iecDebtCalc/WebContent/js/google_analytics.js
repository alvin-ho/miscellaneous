
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
var _gaq = [];
/*Download Pdf*/
function downloadCreditCardPDFTracking(_langIdx) {
	var lang = ['English', 'Traditional Chinese'];
	/*
	ga('uat.send', 'event', 'Debt Tools', 'Download Credit Card PDF', lang[_langIdx]);
	ga('production.send', 'event', 'Debt Tools', 'Download Credit Card PDF', lang[_langIdx]);
	*/
	_gaq.push(['_trackEvent', 'Debt Tools', 'Download PDF', lang[_langIdx] ]);
}
function downloadPersonalLoanPDFTracking(_langIdx) {
	var lang = ['English', 'Traditional Chinese'];
	/*
	ga('uat.send', 'event', 'Debt Tools', 'Download Personal Loan PDF', lang[_langIdx]);
	ga('production.send', 'event', 'Debt Tools', 'Download Personal Loan PDF', lang[_langIdx]);
	*/
	_gaq.push(['_trackEvent', 'Debt Tools', 'Download PDF', lang[_langIdx] ]);
}
function downloadOtherLoanPDFTracking(_langIdx) {
	var lang = ['English', 'Traditional Chinese'];
	/*
	ga('uat.send', 'event', 'Debt Tools', 'Download Other Loan PDF', lang[_langIdx]);
	ga('production.send', 'event', 'Debt Tools', 'Download Other Loan PDF', lang[_langIdx]);
	*/
	_gaq.push(['_trackEvent', 'Debt Tools', 'Download PDF', lang[_langIdx] ]);
}
function downloadOverviewPDFTracking(_langIdx) {
	var lang = ['English', 'Traditional Chinese'];
	/*
	ga('uat.send', 'event', 'Debt Tools', 'Download Overview PDF', lang[_langIdx]);
	ga('production.send', 'event', 'Debt Tools', 'Download Overview PDF', lang[_langIdx]);
	*/
	_gaq.push(['_trackEvent', 'Debt Tools', 'Download PDF', lang[_langIdx] ]);
}

/*Print Pdf*/
function printCreditCardPDFTracking(_langIdx) {
	var lang = ['English', 'Traditional Chinese'];
	/*
	ga('uat.send', 'event', 'Debt Tools', 'Print Credit Card PDF', lang[_langIdx]);
	ga('production.send', 'event', 'Debt Tools', 'Print Credit Card PDF', lang[_langIdx]);
	*/
	_gaq.push(['_trackEvent', 'Debt Tools', 'Print PDF', lang[_langIdx] ]);
}
function printPersonalLoanPDFTracking(_langIdx) {
	var lang = ['English', 'Traditional Chinese'];
	/*
	ga('uat.send', 'event', 'Debt Tools', 'Print Personal Loan PDF', lang[_langIdx]);
	ga('production.send', 'event', 'Debt Tools', 'Print Personal Loan PDF', lang[_langIdx]);
	*/
	_gaq.push(['_trackEvent', 'Debt Tools', 'Print PDF', lang[_langIdx] ]);
}
function printOtherLoanPDFTracking(_langIdx) {
	var lang = ['English', 'Traditional Chinese'];
	/*
	ga('uat.send', 'event', 'Debt Tools', 'Print Other Loan PDF', lang[_langIdx]);
	ga('production.send', 'event', 'Debt Tools', 'Print Other Loan PDF', lang[_langIdx]);
	*/
	_gaq.push(['_trackEvent', 'Debt Tools', 'Print PDF', lang[_langIdx] ]);
}
function printOverviewPDFTracking(_langIdx) {
	var lang = ['English', 'Traditional Chinese'];
	/*
	ga('uat.send', 'event', 'Debt Tools', 'Print Overview PDF', lang[_langIdx]);
	ga('production.send', 'event', 'Debt Tools', 'Print Overview PDF', lang[_langIdx]);
	*/
	_gaq.push(['_trackEvent', 'Debt Tools', 'Print PDF', lang[_langIdx] ]);
}

function ratingTracking(_langIdx, rate) {
	var lang = ['English', 'Traditional Chinese'];
	/*
	ga('uat.send', 'event', 'Debt Tools', 'Rating of '+rate, lang[_langIdx]);
	ga('production.send', 'event', 'Debt Tools', 'Rating of '+rate, lang[_langIdx]);
	*/
	_gaq.push(['_trackEvent', 'Debt Tools', 'Rating '+rate, lang[_langIdx] ]);
}

/*Calculate*/
function calculateCreditCardTracking(_langIdx){
	var lang = ['English', 'Traditional Chinese'];
	/*
	ga('uat.send', 'event', 'Debt Tools', 'Click Credit Card Calculate', lang[_langIdx]);
	ga('production.send', 'event', 'Debt Tools', 'Click Credit Card Calculate', lang[_langIdx]);
	*/
	
	_gaq.push(['_trackEvent', 'Debt Tools', 'Click Credit Card Calculate', lang[_langIdx] ]);
}
//function calculatePersonalLoanTracking(_langIdx){
//	var lang = ['English', 'Traditional Chinese'];
//	/*
//	ga('uat.send', 'event', 'Debt Tools', 'Click Personal Loan Calculate', lang[_langIdx]);
//	ga('production.send', 'event', 'Debt Tools', 'Click Personal Loan Calculate', lang[_langIdx]);
//	*/
//	_gaq.push(['_trackEvent', 'Debt Tools', 'Click Personal Loan Calculate', lang[_langIdx] ]);
//}
//function calculateOtherLoanTracking(_langIdx){
//	var lang = ['English', 'Traditional Chinese'];
//	/*
//	ga('uat.send', 'event', 'Debt Tools', 'Click Other Loan Calculate', lang[_langIdx]);
//	ga('production.send', 'event', 'Debt Tools', 'Click Other Loan Calculate', lang[_langIdx]);
//	*/
//	_gaq.push(['_trackEvent', 'Debt Tools', 'Click Other Loan Calculate', lang[_langIdx] ]);
//}

/*Sort*/
function sortRepaymentPeriodTracking(_langIdx){
	var lang = ['English', 'Traditional Chinese'];
	/*
	ga('uat.send', 'event', 'Debt Tools', 'Click Sort Repayment Period', lang[_langIdx]);
	ga('production.send', 'event', 'Debt Tools', 'Click Sort Repayment Period', lang[_langIdx]);
	*/
	_gaq.push(['_trackEvent', 'Debt Tools', 'Click Sort Repayment Period', lang[_langIdx] ]);
}
function sortAPRTracking(_langIdx){
	var lang = ['English', 'Traditional Chinese'];
	/*
	ga('uat.send', 'event', 'Debt Tools', 'Click Sort APR', lang[_langIdx]);
	ga('production.send', 'event', 'Debt Tools', 'Click Sort APR', lang[_langIdx]);
	*/
	_gaq.push(['_trackEvent', 'Debt Tools', 'Click Sort APR', lang[_langIdx] ]);
}
function sortDebtAmountTracking(_langIdx){
	var lang = ['English', 'Traditional Chinese'];
	/*
	ga('uat.send', 'event', 'Debt Tools', 'Click Sort Debt Amount', lang[_langIdx]);
	ga('production.send', 'event', 'Debt Tools', 'Click Sort Debt Amount', lang[_langIdx]);
	*/
	_gaq.push(['_trackEvent', 'Debt Tools', 'Click Sort Debt Amount', lang[_langIdx] ]);
}
function sortYourInputOrderTracking(_langIdx){
	var lang = ['English', 'Traditional Chinese'];
	/*
	ga('uat.send', 'event', 'Debt Tools', 'Click Sort Your Input Order', lang[_langIdx]);
	ga('production.send', 'event', 'Debt Tools', 'Click Sort Your Input Order', lang[_langIdx]);
	*/
	_gaq.push(['_trackEvent', 'Debt Tools', 'Click Sort Your Input Order', lang[_langIdx] ]);
}
/*other*/
function checkComparisonTracking(_langIdx){
	var lang = ['English', 'Traditional Chinese'];
	/*
	ga('uat.send', 'event', 'Debt Tools', 'Click Check Comparison', lang[_langIdx]);
	ga('production.send', 'event', 'Debt Tools', 'Click Check Comparison', lang[_langIdx]);
	*/
	_gaq.push(['_trackEvent', 'Debt Tools', 'Click Check Comparison', lang[_langIdx] ]);
}
function changeRepaymentAmountTracking(_langIdx){
	var lang = ['English', 'Traditional Chinese'];
	/*
	ga('uat.send', 'event', 'Debt Tools', 'Click Change Repayment Amount', lang[_langIdx]);
	ga('production.send', 'event', 'Debt Tools', 'Click Change Repayment Amount', lang[_langIdx]);
	*/
	_gaq.push(['_trackEvent', 'Debt Tools', 'Click Change Repayment Amount', lang[_langIdx] ]);
}
function changeRepaymentPeriodTracking(_langIdx){
	var lang = ['English', 'Traditional Chinese'];
	/*
	ga('uat.send', 'event', 'Debt Tools', 'Click Change Repayment Period', lang[_langIdx]);
	ga('production.send', 'event', 'Debt Tools', 'Click Change Repayment Period', lang[_langIdx]);
	*/
	_gaq.push(['_trackEvent', 'Debt Tools', 'Click Change Repayment Period', lang[_langIdx] ]);
}

function clickOverviewTabTracking(_langIdx){
	var lang = ['English', 'Traditional Chinese'];
	/*
	ga('uat.send', 'event', 'Debt Tools', 'Click Overview Tab', lang[_langIdx]);
	ga('production.send', 'event', 'Debt Tools', 'Click Overview Tab', lang[_langIdx]);
	*/
	_gaq.push(['_trackEvent', 'Debt Tools', 'Click Overview Tab', lang[_langIdx] ]);
}

function fbShareTracking(_langIdx){
	var lang = ['English', 'Traditional Chinese'];
	/*
	ga('uat.send', 'event', 'Debt Tools', 'Facebook Share', lang[_langIdx]);
	ga('production.send', 'event', 'Debt Tools', 'Facebook Share', lang[_langIdx]);
	*/
	_gaq.push(['_trackEvent', 'Debt Tools', 'Facebook Share', lang[_langIdx] ]);
}
function emailShareTracking(_langIdx){
	var lang = ['English', 'Traditional Chinese'];
	/*
	ga('uat.send', 'event', 'Debt Tools', 'Email Share', lang[_langIdx]);
	ga('production.send', 'event', 'Debt Tools', 'Email Share', lang[_langIdx]);
	*/
	_gaq.push(['_trackEvent', 'Debt Tools', 'Email Share', lang[_langIdx] ]);
}

function clickDisclaimerTracking(_langIdx){
	var lang = ['English', 'Traditional Chinese'];
	/*
	ga('uat.send', 'event', 'Debt Tools', 'Click Disclaimer', lang[_langIdx]);
	ga('production.send', 'event', 'Debt Tools', 'Click Disclaimer', lang[_langIdx]);
	*/
	_gaq.push(['_trackEvent', 'Debt Tools', 'Click Disclaimer', lang[_langIdx] ]);
}