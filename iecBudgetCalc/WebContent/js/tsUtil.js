function removejscssfile(filename, filetype)
{
	//alert("[removejscssfile]");
	var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none" //determine element type to create nodelist from
	var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none" //determine corresponding attribute to test for
	var allsuspects=document.getElementsByTagName(targetelement)
	for (var i=allsuspects.length; i>=0; i--)
	{ //search backwards within nodelist for matching elements to remove	
		if (allsuspects[i])
		{
			if(allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
			{
				//alert("Remove " + allsuspects[i].href + " successful.");
				allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()				
			}
		}
	}
	
	//setTimeout(function (){ts_removeVPreview()}, 1000);
}

function ts_removeVPreview()
{
	var vpreviewObj = document.getElementById("iw-vpreview");
	if(vpreviewObj)
	{
		vpreviewObj.parentNode.removeChild(vpreviewObj);
		//alert("[vpreviewObj removed]");
	}
}

/*
function ts_loadInclude(targetDiv, urlPath, callBack) {
		$( document ).ready(function() {
		$(targetDiv).load(urlPath, callBack());
		});   

$("#bdiv").load("bosses.php #icc10n",function(data){
});



}
*/

function ts_loadInclude(targetDiv, urlPath, callBack)
{
	//alert("[ts_loadInclude]");
	var targetDivObj = document.getElementById(targetDiv);
	//alert("[ts_loadInclude] targetDivObj = " + targetDivObj);
	if(targetDivObj)
	{
		var reqhttp;
		var ret="";

		if (window.XMLHttpRequest)
		{	// code for IE7+, Firefox, Chrome, Opera, Safari
			reqhttp=new XMLHttpRequest();
		}
		else
		{	// code for IE6, IE5
			reqhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		reqhttp.onreadystatechange=function()
			{
				if (reqhttp.readyState==4 && reqhttp.status==200)
				{
					//alert("[ts_loadInclude] URL Found! callBack = " + callBack);
					var tempText = reqhttp.responseText;
					//alert(tempText.length);
					/*
					var dummyTag = "<body id='dummyBody'>";
					var index1 = tempText.indexOf(dummyTag);
					var index2 = tempText.indexOf("</body>");
					if(index1 > 0 && index2 > 0)
					{
						tempText = tempText.substring(index1+dummyTag.length, index2);
						//alert("Processed = " + tempText);				
					}
					*/					
					targetDivObj.innerHTML = tempText;
					if(callBack)
					{
						callBack();
					}
				}
				else
				{
					//alert("??? reqhttp.readyState = " + reqhttp.readyState + ", reqhttp.status = " + reqhttp.status);
				}
			}
		urlPath = urlPath + "?Rannum=" +(new Date()).getTime();

		//alert("[ts_loadInclude] urlPath = " + urlPath);
		reqhttp.open("GET", urlPath, true);
		reqhttp.send(null);	
	}
}
