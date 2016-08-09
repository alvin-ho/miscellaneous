<%@ page language="java" pageEncoding="UTF-8" %>
	<%@ page import="hk.hkiec.utils.SystemSettings" %>
		<!DOCTYPE html >
		<html xmlns="http://www.w3.org/1999/xhtml" lang="zh-Hant">

		<head>
			<title>退休計劃計算機</title>
			<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
			<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
			<meta id="viewport" name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />

			<meta property="og:description" content="你需要多少退休儲備?立刻使用投資者教育中心的退休計劃計算機制定退休預算，可獲一份免費分析報告及具體行動方案。" />
			<meta property="og:title" content="退休計劃計算機" />
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://www.thechinfamily.hk/tools/retirement/tc/main/index.html" />
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
			<script type="text/javascript" src="https://fast.fonts.net/jsapi/c550c076-1bd6-411f-ac61-2ea18430c967.js"></script>


		</head>

		<body>
			<%@ include file = "alertBox.jsp" %>
				<%@ include file = "mobile_menu.jsp" %>
					<%@ include file = "header.jsp" %>

						<div id="slideMenu">
							<div class="wrapper paddtxtC">
								<div class="slideContainer">
									<a href="javascript:void(0);" class="arrowSet" id="previous" title="上一頁"></a>
									<span class="sTitle">個人資料</span>
									<a href="javascript:void(0);" class="arrowSet" id="next" title="下一頁"></a>
								</div>
							</div>
						</div>

						<div id="content" class="aboutData">
							<div class="wrapper paddtxtC section">
								<div class="main fixed">
									<div id="slider">
										<div class="about_slide1">
											<%@ include file = "about.jsp" %>
										</div>
										<div class="retireNeed_slide2">
											<%@ include file = "retire_need.jsp" %>
										</div>
										<div class="retireSchemes_slide3">
											<%@ include file = "retire_schemes.jsp" %>
										</div>
										<div class="sai_slide4">
											<%@ include file = "saving_and_invest.jsp" %>
										</div>
										<div class="other_slide5">
											<%@ include file = "other_retire.jsp" %>
										</div>
										<div class="result_slide6">
											<%@ include file = "result.jsp" %>
										</div>
									</div>
								</div>
							</div>
							<div class="track">
								<div class="wrapper paddtxtC">
									<%@ include file = "steptrack.jsp" %>
								</div>
							</div>
						</div>

						<%@ include file = "footer.jsp" %>

		</body>

		</html>
