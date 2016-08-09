$(document).ready(function(){
	viewportScale();
});

function mobileMode(){
			screenMode = 3;
			$("#responsive_css").attr("href", "../../css/common_mobile.css");
			$("#responsive_css_en").attr("href", "../../css/common_mobile_en.css");
			mobileFrame();
}

function tabletMode(){
			screenMode = 2;
			$("#responsive_css").attr("href", "../../css/common_tablet.css"); 	
			$("#responsive_css_en").attr("href", "../../css/common_tablet_en.css"); 	
			tabletFrame();

}

function desktopMode(){
			screenMode = 1;
			$("#responsive_css").attr("href", "../../css/common_desktop.css"); 	
			$("#responsive_css_en").attr("href", "../../css/common_desktop_en.css"); 	
			desktopFrame();	

}

//detect screen width
var screenMode= 0;
var device_width;


function adjustStyle(width) { 
			device_width = parseInt(width);
			
				 if (device_width < 649) {	//base:599
					//Mobile
					if (screenMode != 3){
						mobileMode();
					}
					
				} else if ((device_width >= 650) && (device_width < 970)) { //base:600
					//Tablet
					if (screenMode != 2){
						tabletMode();
					}
					
				} else {	
					//Desktop
					if (screenMode != 1){
						if (screenMode == 3){
							tabletFrame();
						}
						desktopMode();
					} 
				}
	}
	



	
	
// Desktop Mode
function desktopFrame() {
	$(document).ready(function(){
		//$('.result > div.content').appendTo(".result > .container");
		//viewportScale();
		//init_mMenuTitle("block");
		slideShow();
		mMenuClose();
		//$(".re1_header, .re_header").css("background-size","auto");
		$("#bottomBtn").insertBefore(".ratingCon");
	});
}


// Tablet Mode
function tabletFrame() {
	$(document).ready(function(){
		//Loadpage
		//$('.result > .container > div.content').appendTo(".result");
		//$('.result > .container').css('width','auto');
		//$('.result > .container').css('height','auto');
		//$('.result > .container > 
		//viewportScale();
		//init_mMenuTitle("block");
		/*if( nua.match(/(iPad|iPhone|android|BlackBerry|Nokia)/i) ){
			$("#print").show()
			$("#bottomBtn .planPageBtn").css("width","18%");
			$("#bottomBtn #download").css("width","20%");
		}*/
		slideShow();
		mMenuClose();
		//$(".re1_header, .re_header").css("background-size","contain");
		$("#bottomBtn").insertBefore(".ratingCon");
	});
}


// Mobile Mode
function mobileFrame() {
	$(document).ready(function(){
	
		//viewportScale();
		
		//init_mMenuTitle("none");
		if( nua.match(/(iPad|iPhone|android|BlackBerry|Nokia)/i) ){
			$("#print").hide()
			$("#bottomBtn .planPageBtn").css("width","24%");
			$("#bottomBtn #download").css("width","22%");
		
		}
		slideShow();
		//$(".re1_header, .re_header").css("background-size","contain");
		
		if(window.location.href.indexOf("/index") > -1) {	
			$(".mfooterLine").hide();	
		}
	
	});

}


	

//viewport scale change
function viewportScale(){
	var page = "", vpStr = "";
	var realWidth = $(window).width();
	
	if (screenMode == 3){ page = 320; }
	else if (screenMode == 2){ page = 760; }
	else if (screenMode == 1){ page = 970; }
	
	////var targetScale = ( screen.availWidth / page ).toFixed(2);
	//var targetDPI = ( page / screen.availWidth )*160;
		
	var targetScale = (realWidth / parseInt(page) ).toFixed(2);
	var targetDPI = ( parseInt(page) / realWidth)*160;



	vpStr = "width="+page+", initial-scale="+targetScale+", minimum-scale="+targetScale+", maximum-scale="+targetScale+", user-scalable=no";

	if(/android/i.test(navigator.userAgent))
		vpStr += ", target-densitydpi="+targetDPI;

	$("#viewport").attr({"content":vpStr});

	//$('body').trigger('touchstart');


} 


//refresh page when mobile rotate
var nua = navigator.userAgent, vpDef = "";
if( nua.match(/(iPad|iPhone|android|BlackBerry|Nokia)/i) ){
		
		window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function(e){
			//location.reload();
			//resetViewPort( viewportScale );
			
			vpDef = "width=device-width, minimum-scale=1, maximum-scale=1, initial-scale=1, user-scalable=no";
			if(/android/i.test(navigator.userAgent))	{	vpDef += ", target-densitydpi=160";	}
			
			$("#viewport").attr("content",vpDef);

			//adjustStyle( $(window).width() ); 
			
			setTimeout(function(){
				viewportScale();
			}, 1000);
			/*var myVar = setInterval(function(){
				var tmp = $("#viewport").attr("content").indexOf("device-width");
				if( tmp > -1 ){
					viewportScale();
					myStopFunction();
				}
			}, 500);*/
		}, false);
		

}
function myStopFunction() {
    clearInterval(myVar);
	alert("stop");
}

