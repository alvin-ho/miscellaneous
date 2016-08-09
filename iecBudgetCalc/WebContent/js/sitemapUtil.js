function sitemap_showLeftMenu(nodeId, langId)
{	
	var lv1MenuId = "lv1_" + nodeId;
	if(langId != "en")
	{
		lv1MenuId += "_" + langId;
	}
	
	var navDiv = document.getElementById("sys_navDiv");
	if(navDiv)
	{
		navDiv.innerHTML = navA[lv1MenuId];
	}
}

function sitemap_leftMenuSelectCurrent(nodeId)
{
	var aNodeLink = document.getElementById("n_a_" + nodeId);
	if(aNodeLink)
	{
		aNodeLink.className="current";
	}
}

function sitemap_getBreadcrumb(anId, langId)
{
	var bcNodeId = "n_" + anId;
	
	if(langId != "en")
	{
		bcNodeId += "_" + langId;
	}
	
	if(bcA[bcNodeId] == null)
	{
		alert("Invalid Breadcrumb (WA) detected! (Code: " + bcNodeId + ")");
		return "";
	}
	return bcA[bcNodeId];
}

function sitemap_getLeftMenuId(anId)
{		
	if(lmA[anId] == null)
	{
		alert("Invalid Leftmenu detected! (Code: " + anId + ")");
		return "";
	}
	return lmA[anId];
}

function customization_sitemapUpdate(breadcrumbDivName, breadcrumbId, langId)
{
	var menuId = sitemap_getLeftMenuId(breadcrumbId);
	i_customization_sitemapUpdate(breadcrumbDivName, menuId, breadcrumbId, langId);
}

function i_customization_sitemapUpdate(breadcrumbDivName, menuId, breadcrumbId, langId)
{
	//alert("[i_customization_sitemapUpdate] menuId = " + menuId);
	sitemap_showLeftMenu(menuId, langId);	
	if(menuId != breadcrumbId)
		sitemap_leftMenuSelectCurrent(breadcrumbId);
	
	var tempBc = sitemap_getBreadcrumb(breadcrumbId, langId);
	//alert("[i_customization_sitemapUpdate] tempBc = " + tempBc);

	var breadcrumbDivObj = document.getElementById(breadcrumbDivName);
	//alert("[i_customization_sitemapUpdate] breadcrumbDivObj = " + breadcrumbDivObj);
	
	if (breadcrumbDivObj){
	   breadcrumbDivObj.innerHTML = tempBc;
	}
}
/*
function setCookie(name,value)
{
	var exp = new Date();
	exp.setFullYear(exp.getFullYear() + 100);
	document.cookie = name + "="+ value + ";path=/;expires=" + exp.toGMTString();
	//alert(getCookie(name));
} 

function getCookie(name)
{
	//alert(document.cookie);
	var startStr = document.cookie.indexOf(name) + name.length + 1;
	var endStr = document.cookie.indexOf(";", startStr);
	if (endStr == -1) endStr = document.cookie.length;
	return unescape(document.cookie.substring(startStr, endStr));
} 
*/
function i_sitemap_changeLang(fromLangId, langId)
{
	setCookie('selectedLanguage', langId);
	var hanhanDomain = "http://sc.hkiec.hk/TuniS/";
	
	var tempURL = document.URL.replace("\/en\/", "\/" + langId + "\/").replace("\/tc\/", "\/" + langId + "\/").replace("\/sc\/", "\/" + langId + "\/").replace("ui_lang=" + fromLangId, "ui_lang=" + langId);
	
	if (tempURL.indexOf("https://") > -1)
		hanhanDomain = "https://sc.hkiec.hk/TuniS/";
	
	if (langId == "sc")
	{		
		location.href = tempURL.replace("https://", hanhanDomain).replace("http://", hanhanDomain);
	}
	else
		location.href = tempURL;
}

function sitemap_changeLangFromEn(langId)
{	
	i_sitemap_changeLang("en", langId);
}

function sitemap_changeLangFromTc(langId)
{	
	i_sitemap_changeLang("tc", langId);
}

function sitemap_changeLangFromSc(langId)
{	
	var hanhanDomain = "http://sc.hkiec.hk/TuniS/";
	var tempURL = document.URL.replace("\/sc\/", "\/" + langId + "\/").replace("ui_lang=sc", "ui_lang=" + langId);
	if (tempURL.indexOf("https://") > -1){
		hanhanDomain = "https://sc.hkiec.hk/TuniS/";
		location.href = document.URL.replace("\/sc\/", "\/" + langId + "\/").replace("ui_lang=sc", "ui_lang=" + langId).replace(hanhanDomain, "https://");
	}
	else
	{
		location.href = document.URL.replace("\/sc\/", "\/" + langId + "\/").replace("ui_lang=sc", "ui_lang=" + langId).replace(hanhanDomain, "http://");
	}
	//alert("[sitemap_changeLangFromSc] " + document.URL);
}