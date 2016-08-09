<%@ page language="java" pageEncoding="UTF-8" %>
	<%@ page import="hk.hkiec.utils.SystemSettings" %>
		<!DOCTYPE html>
		<html xmlns="http://www.w3.org/1999/xhtml" lang="en">

		<head>
			<title>退休預算計算機</title>
			<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
			<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
			<meta id="viewport" name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />

			<meta property="og:description" content="你需要多少退休儲備?立刻使用退休計劃計算機制定退休預算，可獲一份免費分析報告及具體行動方案。" />
			<meta property="og:title" content="退休計劃計算機" />
			<meta property="og:type" content="website" />
			<meta property="og:url" content="<%=SystemSettings.URL_DOMAIN %>tc/main/index.html" />
			<meta property="og:image" content="https://www.thechinfamily.hk/tools/retirement/common/fbimages/fbimage.jpg" />
			<meta property="og:image:secure_url" content="https://www.thechinfamily.hk/tools/retirement/common/fbimages/fbimage.jpg" />
			<meta property="og:site_name" content="退休預算計算機" />


			<link href="../../css/common.css" rel="stylesheet" type="text/css" />
			<link href="../../css/common_desktop.css" rel="stylesheet" type="text/css" id="responsive_css" />
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


			<link href="../../css/footer/lib/bootstrap.min.css" rel="stylesheet" type="text/css" />
			<link href="../../css/footer/lib/footer.css" rel="stylesheet" type="text/css" />
			<script src="../../css/footer/lib/bootstrap.min.js" type="text/javascript"></script>


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


<link rel="stylesheet" type="text/css" href="https://cloud.typography.com/7132094/6453152/css/fonts.css" />
			<script type="text/javascript" src="http://fast.fonts.net/jsapi/c550c076-1bd6-411f-ac61-2ea18430c967.js"></script>

		</head>

		<body id="index">
			<%@ include file = "mobile_menu.jsp" %>
				<%@ include file = "header.jsp" %>
					<%@ include file = "alertBox.jsp" %>

						<div id="content">
							<div class="wrapper paddtxtC">

								<img src="../../images/tc/RP_banner_tch.gif" class="indexbanner" alt="" />

								<%@ include file = "ajax/index_animate.jsp" %>

									<div class="description">
										<div class="leftCol">
											<p>
												我們的「退休計劃計算機」助你制定退休預算。你只需回答有關退休儲蓄、投資、退休金計劃、 其他退休收入及預計退休生活方式等簡單問題，你便可獲得一份免費分析報告及具體行動方案， 讓你了解籌劃退休時需考慮的重要因素。你可儲存或列印報告。你亦可分享此工具予你的家人及朋友， 或與你的理財顧問討論有關報告結果(你認為如合適的話)。
											</p>
											<div class="gotomain">
												<a href="javascript:void(0);" title="假設及計算方法" class="startBtn"></a>
												<a href="http://www.thechinfamily.hk/web/tc/tools-and-resources/calculators/index.html" title="理財計算機" class="calBtn" target="_blank"></a>
											</div>
										</div>

										<div class="rightCol">
											<a href="main.jsp" title="開始計算" class="analysisBtn"></a>
										</div>
									</div>

							</div>
						</div>

						<%@ include file = "footer.jsp" %>
		</body>

		</html>
