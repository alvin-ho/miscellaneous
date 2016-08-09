<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
	<%@page import="hk.hkiec.utils.SystemSettings"%>
		<!DOCTYPE html>
		<html xmlns="http://www.w3.org/1999/xhtml" lang="en">

		<head>
			<title>Financial Health Check</title>
			<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
			<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
			<meta id="viewport" name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0" />

			<meta property="og:description" content="Assess your financial health and get a free analysis report and an action plan for improving it." />
			<meta property="og:title" content="Financial Health Check" />
			<meta property="og:type" content="website" />
			<meta property="og:image" content="https://www.thechinfamily.hk/tools/fhc/common/fbimages/fbimage.jpg" />
			<meta property="og:image:secure_url" content="https://www.thechinfamily.hk/tools/fhc/common/fbimages/fbimage.jpg" />
			<meta property="og:url" content="https://www.thechinfamily.hk/tools/fhc/en/main/index.html" />

			<link href="../../share/css/common.css" rel="stylesheet" type="text/css" />
			<link href="../../share/css/common_en.css" rel="stylesheet" type="text/css" />
			<link href="../../share/css/common_desktop.css" rel="stylesheet" type="text/css" id="responsive_css" />
			<link href="../../share/css/jquery.fancybox.css" rel="stylesheet" type="text/css" />

			<!--
	<link href="../../share/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
	<link href="../../share/css/footer.css" rel="stylesheet" type="text/css" />
	<script src="../../share/js/bootstrap.min.js" type="text/javascript" ></script>
	<script src="../../share/js/npm.js" type="text/javascript" ></script>
-->

			<script src="../../share/js/jquery-1.8.3.min.js" type="text/javascript"></script>
			<script src="../../share/js/jquery-ui.min.js" type="text/javascript"></script>
			<script src="../../share/js/jquery.ui.touch-punch.min.js" type="text/javascript"></script>
			<script src="../../share/js/responsive_frame.js" type="text/javascript"></script>
			<script src="../../share/js/jquery.sudoSlider.js" type="text/javascript"></script>
			<script src="../../share/js/jquery.fancybox.pack.js" type="text/javascript"></script>
			<script src="../../share/js/common.js" type="text/javascript"></script>
			<script src="../../share/js/runtime.js" type="text/javascript"></script>

			<script src="../../share/js/dc.js" type="text/javascript"></script>
			<script src="../../share/js/cal.budget.js" type="text/javascript"></script>

			<script type="text/javascript">
				var _gaq = _gaq || [];
				_gaq.push(['_setAccount', '<%=SystemSettings.PSI %>']);
				_gaq.push(['_setDomainName', '<%=SystemSettings.PDN %>']);
				_gaq.push(['_trackPageview']);
			</script>


			<link href="../../share/css/footer/lib/bootstrap.min.css" rel="stylesheet" type="text/css" />
			<link href="../../share/css/footer/lib/footer.css" rel="stylesheet" type="text/css" />
			<script src="../../share/css/footer/lib/bootstrap.min.js" type="text/javascript"></script>
<!--<script type="text/javascript" src="https://www.gstatic.com/swiffy/v7.4/runtime.js"></script>-->

			<!-- <a href="javascript:fbShare('https://www.thechinfamily.hk/tools/networth/en/index.html', 'IEC Net worth calculator', 'Check out how good you are at managing your wealth! Use our calculator to work out if what you own outweighs what you owe.', 'http://www.thechinfamily.hk/web/images/tc/tools-and-resources/tools/tools-head-banner_tc.jpg', 520, 350)" class="icoFb"></a>-->



			<!-- Google Code for Remarketing Tag -->
			<!--------------------------------------------------
Remarketing tags may not be associated with personally identifiable information or placed on pages related to sensitive categories. See more information and instructions on how to setup the tag on: http://google.com/ads/remarketingsetup
--------------------------------------------------->
			<script type="text/javascript">
				/* <![CDATA[ */
				var google_conversion_id = 926048988;
				var google_custom_params = window.google_tag_params;
				var google_remarketing_only = true;
				/* ]]> */
			</script>
			<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
			</script>
			<noscript>
				<div style="display:inline;">
					<img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/926048988/?value=0&amp;guid=ON&amp;script=0" />
				</div>
			</noscript>




			<!-- Facebook Pixel Code -->
			<script>
				! function (f, b, e, v, n, t, s) {
					if (f.fbq) return;
					n = f.fbq = function () {
						n.callMethod ?
							n.callMethod.apply(n, arguments) : n.queue.push(arguments)
					};
					if (!f._fbq) f._fbq = n;
					n.push = n;
					n.loaded = !0;
					n.version = '2.0';
					n.queue = [];
					t = b.createElement(e);
					t.async = !0;
					t.src = v;
					s = b.getElementsByTagName(e)[0];
					s.parentNode.insertBefore(t, s)
				}(window,
					document, 'script', '//connect.facebook.net/en_US/fbevents.js');

				fbq('init', '1666299540302495');
				fbq('track', "PageView");
			</script>
			<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1666299540302495&ev=PageView&noscript=1" /></noscript>
			<!-- End Facebook Pixel Code -->


			<!-- font-->
			<link rel="stylesheet" type="text/css" href="https://cloud.typography.com/7132094/6453152/css/fonts.css" />
			<script type="text/javascript" src="https://fast.fonts.net/jsapi/c550c076-1bd6-411f-ac61-2ea18430c967.js"></script>
			<!--font-->

		</head>

		<body id="index">
			<%@ include file = "mobile_menu.jsp" %>
				<%@ include file = "header.jsp" %>
					<%@ include file = "userGuide.jsp" %>
						<%@ include file = "opening.jsp" %>

							<div id="content">
								<div class="wrapper paddtxtC">

									<img src="../../images/en/indexbanner_en.gif" class="indexbanner" alt="" />

									<%@ include file = "ajax/index_animate.jsp" %>

										<div class="description">
											<div class="leftCol">
												<p>
													This Financial Health Check helps you plan and review your finance. Simply answer some questions about your personal finance of different aspects, you will be provided a free analysis report and an action plan outlining key areas which may help you improve your situation. You can save or print your report and action plan, and you can also share this tool with your family and friends.
												</p>
												<div class="gotomain">
													<a href="javascript:void(0);" title="User guide" class="startBtn"></a>
													<a href="https://www.thechinfamily.hk/web/en/tools-and-resources/calculators/index.html" title="Calculator" class="calBtn"></a>
												</div>
											</div>

											<div class="rightCol">
												<a href="main.jsp" title="Start" class="analysisBtn"></a>
											</div>
										</div>

								</div>
							</div>

							<%@ include file = "footer.jsp" %>
		</body>

		</html>