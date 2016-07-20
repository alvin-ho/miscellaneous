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
		<div class="wrapper form walkin">

			<div class="loadingWrapper">
				<div class="loader"></div>
			</div>

			<div class="mainContentWrapper">

				<div class="contentWrapper">

					<div class="headerLogo"></div>

					<div class="mainFormContent">
						<div class="title">
							<h1>Registration form</h1>
							<p class="leadin">Fill in the below registration form to receive a BUY-1-GET-1 Free offer on our special cocktail. </p>
						</div>

						<form class="innerFormWrapper" onsubmit="return false;">
							<div class="formRow radioRow">
								<label class="inputLabel">
									Title :
								</label>
								<div class="formContent left">
									<label for="mr" class="radioLabel">
										<input id="mr" class="radioItem" type="radio" name="title" value="mr"/>
										<span class="checkIco">
											<span class="icon"></span>
										</span>
										<span class="radioContent">Mr</span>
									</label><label for="mrs" class="radioLabel">
										<input id="mrs" class="radioItem" type="radio" name="title" value="mrs"/>
										<span class="checkIco">
											<span class="icon"></span>
										</span>
										<span class="radioContent">Mrs</span>
									</label><label for="ms" class="radioLabel">
										<input id="ms" class="radioItem" type="radio" name="title" value="ms"/>
										<span class="checkIco">
											<span class="icon"></span>
										</span>
										<span class="radioContent">Ms</span>
									</label>
								</div>
							</div>

							<div class="formRow">
								<label class="inputLabel" for="name">
									Name :
								</label>
								<div class="formContent">
									<div class="coGrid-1-2 np left">
										<input id="name" type="text" maxlength="100" name="firstname" placeholder="First Name"/>
									</div><div class="coGrid-1-2 np right">
										<input id="name" type="text" maxlength="100" name="lastname" placeholder="Last Name"/>
									</div>
								</div>
							</div>

							<div class="formRow">
								<label class="inputLabel" for="email">
									Email :
								</label>
								<div class="formContent">
									<input id="email" type="email" name="email" maxlength="100"/>
								</div>
							</div>

							<div class="content">
								<p class="remark">* All fields are mandatory</p>
								<p class="caption">For the purpose of this registration, Hongkong Land will need to collect personal data from the registrants. Failure to provide personal data as requested will prohibit Hongkong Land from processing or accepting entries. In this respect, each registrant confirms that he/she has fully read, understood and agrees to the legal and privacy policy of Hongkong Land in the form provided on <a href="http://www.landmark.com" target="_blank">www.landmark.com</a></p>
							</div>

							<div class="formRow checkBoxRow">
								<span class="inputItem">
									<label for="checkbox" class="checkboxLabel">
										<input id="checkbox" class="checkItem" type="checkbox" name="tnc" />
										<span class="checkIco">
											<span class="icon-form-check-tick"></span>
										</span>
										<span class="checkboxContent">I agree to provide my personal data for the purpose of this registration.</span>
									</label>
								</span>
							</div>
						</form>

						<div class="btnWrapper">
							<a href="javascript:void(0);" class="btnStyle btnSubmit">
								<span class="ghost">
								</span><span class="text">
									redeem offer
								</span>
							</a>
						</div>


					</div>

					<div class="thankyouKV">
						<img class="img100 onlyD" src="../images/common/thankyou_walkin_kv.png"/>
						<img class="img100 onlyM" src="../images/common/thankyou_walkin_kv_M2X.png"/>
					</div>

					<div class="footerLogo"></div>

					<?php include"include/footer.html"; ?>
				</div>

			</div>

			<?php include"include/popup.html"; ?>
		</div>

		<?php include"include/include-js.html"; ?>

		<script src="../js/form.js" charset="utf-8"></script>
		<script type="text/javascript">

			$(document).ready(init_fn);

			function init_fn(pEvent)
			{
				common_fn();
				checkbox_fn();
				events.init();
			}

			function checkbox_fn()
			{
				$('.checkboxLabel').on('change',function(){
					$(this).find('.checkIco').toggleClass('selected');
				});

				$('.radioLabel').on('change',function(){
					$(this).find('.checkIco').toggleClass('selected');
					$(this).siblings('.radioLabel').find('.checkIco').removeClass('selected');
				});
			}

		</script>
	</body>
</html>
