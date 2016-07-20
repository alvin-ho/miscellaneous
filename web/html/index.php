<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="zh-hk">
	<head>
		<meta charset="UTF-8">
		<meta name="author" content="" />
		<meta name="description" />
		<meta name="keywords" />
		<meta name="robots" content="all" />

		<title></title>

		<?php include"include/include-css.html" ?>

	</head>
	<body class="preload" ontouchstart="">

		<!-- walkin, vvip, vip -->
		<div class="wrapper thankyou walkin">

			<div class="loadingWrapper">
				<div class="loader"></div>
			</div>

			<div class="mainContentWrapper">

				<div class="contentWrapper">

					<div class="headerLogo"></div>

					<div class="thankyouContent">
						<p>
							We have sent you a confirmation email at your address
							<br/>
							<br/>
							<a href="mailto:amy.can@landmark.hk">amy.can@landmark.hk</a>
							<br/>
							<br/>
							Explore over 40 cocktails available exclusively at LANDMARK’s<br/>
							refined bars and restaurants this summer!
						</p>
					</div>

					<div class="thankyouKV">
						<img class="img100 onlyD" src="../images/common/thankyou_walkin_kv.png"/>
						<img class="img100 onlyM" src="../images/common/thankyou_walkin_kv_M2X.png"/>
						<a href="javascript:void(0);" class="btnKV">
							<span class="ghost">
							</span><span class="text">
								Mixologists in Their Own Words
							</span>
						</a>
					</div>

					<div class="footerLogo"></div>

					<?php include"include/footer.html" ?>
				</div>

			</div>

			<?php include"include/popup.html" ?>
		</div>

		<?php include"include/include-js.html" ?>

		<script type="text/javascript">
			$(document).ready(init_fn);

			function init_fn(pEvent)
			{
				common_fn();
			}


		</script>
	</body>
</html>
