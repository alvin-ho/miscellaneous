<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
	<%@page import="hk.hkiec.utils.SystemSettings"%>
		<% int pageCount= 0; %>
			<!DOCTYPE html>
			<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

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
<!--				<script src="../../share/js/runtime.js" type="text/javascript"></script>-->

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


<script src="https://www.gstatic.com/swiffy/v7.3.0/runtime.js"></script>



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

			<body>
				<div id="loadLay" class="hide">
					<div class="loadingMa"></div>
					<div id="loadLayerCon">
						<img src="../../images/tc/loading.gif" alt="loading.." style="height:20px; width:20px;" />
						<span>Loading content, please wait...</span>
					</div>
				</div>

				<%@ include file = "userGuide.jsp" %>

					<div id="notcompleteReminder">
						<h2>Reminder:</h2>
						<p>Please anwser all the questions and click "Next" to continue</p>

						<div class="confirmBtn">
							<a href="javascript:$.fancybox.close();" class="planBtn">Continue</a>
						</div>
					</div>

					<div id="retireSlideReminder">
						<h2>Reminder:</h2>
						<p>
							<span>If you change this answer, you will be redirected to the "Retirement planning" page to answer the relevant questions.</span>
						</p>
						<div class="rssureBtn">
							<a href="javascript:$.fancybox.close();" class="planBtn">Change</a>
						</div>
						<div class="rscancelBtn">
							<a href="javascript:$.fancybox.close();" class="planBtn">Cancel</a>
						</div>
					</div>

					<div id="insuranceReminder">
						<h2>Reminder:</h2>
						<p>
							<span>If you change this answer, you will be redirected to the “Insurance planning” page to answer the relevant questions.</span>
						</p>
						<div class="isureBtn">
							<a href="javascript:$.fancybox.close();" class="planBtn">Change</a>
						</div>
						<div class="icancelBtn">
							<a href="javascript:$.fancybox.close();" class="planBtn">Cancel</a>
						</div>
					</div>

					<div id="retireReminder">
						<h2>Reminder:</h2>
						<p>
							<span>If you change this answer, all your answers on the "Retirement planning" page will not be applicable. </span>
						</p>
						<div class="rsureBtn">
							<a href="javascript:$.fancybox.close();" class="planBtn">Change</a>
						</div>
						<div class="rcancelBtn">
							<a href="javascript:$.fancybox.close();" class="planBtn">Cancel</a>
						</div>
					</div>

					<%@ include file = "mobile_menu.jsp" %>

						<%@ include file = "header.jsp" %>

							<div id="slideMenu">
								<div class="wrapper paddtxtC">
									<div class="slideContainer">
										<a href="javascript:void(0);" class="arrowSet" id="previous" title="Previous Page"></a>
										<span class="sTitle">About you</span>

										<a href="javascript:void(0);" class="arrowSet" id="next" title="Next Page"></a>
									</div>
								</div>
							</div>

							<div id="content" class="aboutData">
								<div class="wrapper paddtxtC section">

									<div class="main fixed">
										<div id="ajax"></div>
										<div id="slider">
											<div class="about">
												<%@ include file = "about.jsp" %>
											</div>

											<div class="income_and_expense">
												<%@ include file = "income_and_expense.jsp" %>
											</div>

											<div class="loanmanage">
												<%@ include file = "loanmanage.jsp" %>
											</div>

											<div class="financialgoal">
												<%@ include file = "financialgoal.jsp" %>
											</div>

											<div class="investment">
												<%@ include file = "investment.jsp" %>
											</div>

											<div class="saving">
												<%@ include file = "saving.jsp" %>
											</div>

											<div class="insurance">
												<%@ include file = "insurance.jsp" %>
											</div>

											<div class="retirement">
												<%@ include file = "retirement.jsp" %>
											</div>

											<div class="estateplanning">
												<%@ include file = "estateplanning.jsp" %>
											</div>

											<div class="personal_result">
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

								<script type="text/javascript">
									var printResult = new Array();

									function createXmlhttp() {
										var xmlhttp;
										try {
											xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
										} catch (e) {
											try {
												xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
											} catch (e) {
												try {
													xmlhttp = new XMLHttpRequest();
													if (xmlhttp.overrideMimeType) {
														xmlhttp.overrideMimeType("text/xml");
													}
												} catch (e) {}
											}
										}
										return xmlhttp;
									}
								</script>
			</body>

			</html>
