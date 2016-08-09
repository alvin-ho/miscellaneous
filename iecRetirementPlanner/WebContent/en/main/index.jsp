<%@ page language="java" pageEncoding="UTF-8" %>
	<%@ page import="hk.hkiec.utils.SystemSettings" %>
		<!DOCTYPE html>
		<html xmlns="http://www.w3.org/1999/xhtml" lang="en">

		<head>
			<title>Retirement Planner</title>
			<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
			<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
			<meta id="viewport" name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />

			<meta property="og:description" content="How much do you need for retirement? Use the Retirement Planner to work out your retirement budget and take home our free analysis report and action plan now!" />
			<meta property="og:title" content="Retirement Planner" />
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://www.thechinfamily.hk/tools/retirement/en/main/index.html" />
			<meta property="og:image" content="https://www.thechinfamily.hk/tools/retirement/common/fbimages/fbimage.jpg" />
			<meta property="og:image:secure_url" content="https://www.thechinfamily.hk/tools/retirement/common/fbimages/fbimage.jpg" />
			<meta property="og:site_name" content="Investor Education Centre" />


			<link href="../../css/common.css" rel="stylesheet" type="text/css" />
			<link href="../../css/common_en.css" rel="stylesheet" type="text/css" />
			<link href="../../css/common_desktop.css" rel="stylesheet" type="text/css" id="responsive_css" />
			<link href="../../css/common_desktop_en.css" rel="stylesheet" type="text/css" id="responsive_css_en" />
			<link href="../../css/jquery.fancybox.css" rel="stylesheet" type="text/css" />



			<script src="../../js/jquery-1.11.2.min.js" type="text/javascript"></script>
			<script src="../../js/jquery-ui.min.js"></script>
			<script src="../../js/jquery.ui.touch-punch.min.js" type="text/javascript"></script>
			<script src="../../js/responsive_frame.js" type="text/javascript"></script>
			<script src="../../js/jquery.sudoSlider.js" type="text/javascript"></script>
			<script src="../../js/jquery.fancybox.pack.js" type="text/javascript"></script>
			<script src="../../js/rpProperties.js" type="text/javascript"></script>
			<script src="../../js/fieldValidation.js" type="text/javascript"></script>
			<script src="../../js/calculation.js" type="text/javascript"></script>
			<script src="../../js/rp.js" type="text/javascript"></script>
			<script src="../../js/common.js" type="text/javascript"></script>
			<script src="../../js/runtime.js" type="text/javascript"></script>

			<script src="../../js/dc.js" type="text/javascript"></script>
			<!--<script src = "../../js/google_analytics.js" type="text/javascript" ></script>-->
			<script src="../../js/cal.rp.js" type="text/javascript"></script>
			<script type="text/javascript">
				var _gaq = _gaq || [];
				_gaq.push(['_setAccount', '<%=SystemSettings.GA_AC %>']);
				//_gaq.push(['_setDomainName', 'static.me.hk']);
				_gaq.push(['_trackPageview']);
			</script>


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


			<link href="../../css/footer/lib/bootstrap.min.css" rel="stylesheet" type="text/css" />
			<link href="../../css/footer/lib/footer.css" rel="stylesheet" type="text/css" />
			<script src="../../css/footer/lib/bootstrap.min.js" type="text/javascript"></script>


			<!-- Google Code for Remarketing Tag -->
			<!--------------------------------------------------
Remarketing tags may not be associated with personally identifiable information or placed on pages related to sensitive categories. See more information and instructions on how to setup the tag on: https://google.com/ads/remarketingsetup
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

			<link rel="stylesheet" type="text/css" href="https://cloud.typography.com/7132094/6453152/css/fonts.css" />
			<script type="text/javascript" src="https://fast.fonts.net/jsapi/c550c076-1bd6-411f-ac61-2ea18430c967.js"></script>


		</head>

		<body id="index">
			<%@ include file = "mobile_menu.jsp" %>
				<%@ include file = "header.jsp" %>
					<%@ include file = "alertBox.jsp" %>

						<div id="content">
							<div class="wrapper paddtxtC">

								<img src="../../images/en/RP_banner_eng.gif" class="indexbanner" alt="" />

								<%@ include file = "ajax/index_animate.jsp" %>

									<div class="description">
										<div class="leftCol">
											<p>
												This Retirement Planner helps you plan for your retirement. Simply answer some questions about your savings and investments, retirement schemes, other retirement income and the lifestyle you expect to lead during retirement, you will be provided a free analysis report and an action plan outlining key considerations for your retirement. You can save or print your report and action plan. You can also share this tool with your family and friends, or discuss the result with your financial advisers as appropriate.
											</p>
											<div class="gotomain">
												<a href="javascript:void(0);" title="Assumptions and methodology" class="startBtn"></a>
												<a href="https://www.thechinfamily.hk/web/en/tools-and-resources/calculators/index.html" title="Calculators" class="calBtn" target="_blank"></a>
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
