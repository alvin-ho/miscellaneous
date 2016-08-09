<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@page import="hk.hkiec.utils.SystemSettings"%>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=Edge"/>
	<meta id="viewport" name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"/>
	
	<meta property="og:description" content="Assess your financial health and get a free analysis report and an action plan for improving it." />
	<meta property="og:title" content="IEC Financial Health Check"/>
	<meta property="og:type" content="website"/>
	<meta property="og:url" content="<%=SystemSettings.OG_DOMAIN %>/tools/fhc/index.jsp"/>
	<meta property="og:image" content="<%=SystemSettings.OG_DOMAIN %>/tools/fhc/images/en/fb_thumbnail.jpg"/>
	<meta property="og:site_name" content="Investor Education Centre"/>
	
	<link href="/tools/fhc/share/css/common.css" rel="stylesheet" type="text/css" />
	<link href="/tools/fhc/share/css/common_en.css" rel="stylesheet" type="text/css" />
	<link href="/tools/fhc/share/css/common_desktop.css" rel="stylesheet" type="text/css" id="responsive_css" />
	<link href="/tools/fhc/share/css/jquery.fancybox.css" rel="stylesheet" type="text/css" />
	
	<script src="/tools/fhc/share/js/jquery-1.8.3.min.js" type="text/javascript" ></script>
	<script src="/tools/fhc/share/js/jquery-ui.min.js" type="text/javascript" ></script>
	<script src="/tools/fhc/share/js/jquery.ui.touch-punch.min.js" type="text/javascript" ></script>
	<script src="/tools/fhc/share/js/responsive_frame.js" type="text/javascript" ></script>
	<script src="/tools/fhc/share/js/jquery.sudoSlider.js" type="text/javascript" ></script>
	<script src="/tools/fhc/share/js/jquery.fancybox.pack.js" type="text/javascript" ></script>
	<script src="/tools/fhc/share/js/common.js" type="text/javascript" ></script>
	<script src="/tools/fhc/share/js/runtime.js" type="text/javascript" ></script>
	
	<script src = "/tools/fhc/share/js/dc.js" type="text/javascript" ></script>
	<script src="/tools/fhc/share/js/cal.budget.js" type="text/javascript" ></script>
	
	<script type="text/javascript">
		var _gaq = _gaq || [];
	_gaq.push(['_setAccount', '<%=SystemSettings.PSI %>']);
	_gaq.push(['_setDomainName', '<%=SystemSettings.PDN %>']);
	_gaq.push(['_trackPageview']);
	</script>
