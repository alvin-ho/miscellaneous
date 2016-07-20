<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<script src="../resources/jssdk/Fbsdk.js" charset="utf-8"></script>
</head>
<body>

	<div class="fb-like" data-href="https://developers.facebook.com/docs/plugins/" data-layout="standard" data-action="like" data-size="small" data-show-faces="false" data-share="false"></div>

	<br /><br />

	<button type="button" name="login">Login</button>

	<br /><br />

	<button type="button" name="share">Share</button>


	<script src="//code.jquery.com/jquery-3.0.0.min.js" charset="utf-8"></script>

	<script>
	$( document ).ready( function(){

		fbsdk = new Fbsdk();
		fbsdk.init({

			ready: function( response )
			{

				if( typeof response.status != 'undefined' && response.status == 'connected' ){
					app_user.id = response.authResponse.userID;
					console.log( 'connected' );
				}else{
					console.log( 'not yet connected' );
				}

			},

			authSuccess: function( response )
			{

				this.me( function( me ){
					app_user.id = me.id;
					console.log( me );
				})

			},

			authFail: function( response )
			{
				console.log( response );
			},

			onLike: function( response ){
				console.log( 'like event' );
			},

			onUnLike: function( response ){
				console.log( 'unLike event' );
			}

		});

		$('button[name=login]').click(function(e){
			e.preventDefault();
			fbsdk.login({
				next: window.location.href + '?redirect=1'
			});
		});

		$('button[name=share]').click(function(e){
			e.preventDefault();
			fbsdk.share({
				title: "Kiehl’s特效清爽保濕啫喱乳霜體驗",
				link: "https://kiehls.digitalcampaignasia.com/UFOF/index.php?s=share",
				image: "https://kiehls.digitalcampaignasia.com/UFOF/images/share200x200.jpg", caption: "",
				description: "立即填寫及遞交換領表格，即可換領可換取特效保濕三部曲體驗裝:特效清爽保濕潔面啫喱3ML ,特效清爽保濕爽膚水3ML及特效清爽保濕啫喱乳霜3ML試用裝各一份!"
			});
		});

	});

	</script>

</body>
</html>
