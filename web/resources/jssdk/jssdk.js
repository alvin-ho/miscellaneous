console = window.console || { log: function(){} };
trace = function(response){ console.log(response); };
app_user = { id:'' };

(function(window, document){
	var ns = 'pp';
	return window[ns] = {
		app_channel	: app_settings.domain,
		app_folder	: app_settings.path,
		init: function(callback){

			window.fbAsyncInit = function(callback){
				return function(){
					FB.init({
						appId      								: app_settings.appid,
						cookie     								: true,
						xfbml      								: true,
						frictionlessRequests			: true,
						version    								: app_settings.ver
					});

					FB.getLoginStatus( function(auth) {
						if( auth.authResponse && auth.status == 'connected' && !!auth ){
							app_user.id = auth.authResponse.userID;
							if(!!callback){ callback(true); }
						}else{
							if(!!callback){ callback(false); }
						}
					});

				}
			}(callback);

			(function(d, s, id) {
				var js, fjs = d.getElementsByTagName(s)[0];
				if (d.getElementById(id)) return;
				js = d.createElement(s); js.id = id;
				js.src = "//connect.facebook.net/en_US/sdk.js";
				fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk'));
		},
		uninstall: function(){
			FB.api('/me/permissions', 'DELETE', function(response){
				window.location.reload();
			});
		},
		login: function( callback, redirect ){

			this.loginCallback = callback || function(){};
			this.redirect_url = redirect || window.location.href;

			if( isMobile.any() ){
				var url = "https://www.facebook.com/dialog/oauth/?"
					+ "client_id=" + app_settings.appid
					+ "&redirect_uri=" + this.redirect_url
					+ "&state=true"
					+	"&scope=" + app_settings.scope;

				top.location.replace( url );
			}else{
				FB.getLoginStatus( function( auth ) {

					if( !auth.authResponse && !!auth  ){
						FB.login( function( auth ){
							if( auth.authResponse && auth.status == 'connected' ){
								app_user.id = auth.authResponse.userID;
								window[ns].loginCallback(true);
							}else{
								window[ns].loginCallback(false);
							}
						}, {scope: app_settings.scope })
					}else{
						app_user.id = auth.authResponse.userID;
						window[ns].loginCallback( true );
					}
				});
			}
		},
		mobileLogin: function( redirect_uri ){
			redirect_uri = redirect_uri || "";
			var url = "".concat(
				"https://www.facebook.com/dialog/oauth/?",
				"client_id=", app_settings.appid,
				"&redirect_uri=", ( app_settings.domain + app_settings.path ), redirect_uri,
				"&state=true",
				"&scope=", app_settings.scope
			);

			top.location.replace(url);
		},
		logout: function(){
			FB.logout(function(){
				window.location.reload();
			});
		},
		me: function(callback){
			this.meCallback = callback || function(response){ console.log(response); };
			FB.api('/me?fields=id,name,link,first_name,last_name,gender,email,locale,timezone,verified,updated_time,age_range', function(response){
				window[ns].meCallback(response);
			});
		},
		update: function(callback){
			this.updateCallback = callback || function(response){ console.log( response ); };
			FB.api('/me?fields=id,name,first_name,last_name,gender,email,locale', function(response){
				$.post( window[ns].app_folder + '/api/fbstat.php', response )
				.done( function( response ){
					window[ns].updateCallback( response );
				});
			});
		},
		getUserIcon: function(id, w, h){
			var w = w || 100;
			var h = h || 100;
			id = id || app_user.id;
			return 'https://graph.facebook.com/' + id + '/picture?width=' + w + '&height=' + h;  //type=large|small
		},
		invite: function(callback, invitedList){
			this.inviteCallback = callback || function(){};
			this.invitedList = invitedList || [];
			FB.ui({
				method: 'apprequests',
				message: app_settings.invite_msg,
				app_id: app_settings.appid,
				exclude_ids: window[ns].invitedList
			},
			function(response) {
				if(response && response.request){
					//window[ns].inviteCallback(response);
				}else{
					console.log('invite cancelled');
				}
				window[ns].inviteCallback(response);
			});
		},
		autoWall: function( callback, option ){
			this.autoWallCallback = callback || function(){};
			this.opt = option || {};
			// var option = {
			// 	name: "",
			// 	link: "",
			// 	picture: "",
			// 	caption: "",
			// 	description : ""
			// };
			FB.api('/me/feed', 'post', option, function(response){
				if(!!response){
					console.log('Post ID: ' + response.id);
				}else{

				}
				window[ns].autoWallCallback(response);
			});
		},
		customShare: function(message, callback){
			this.shareCallback = callback || function(){};
			var option = {
				method: 'feed',
				name: message.name,
				link: message.link,
				picture: message.picture,
				caption: message.caption,
				description : message.description,
				display: 'iframe'
			}
			FB.ui(option, function(response){
				if(!!response){
					//window[ns].shareCallback(response);
				}else{
					console.log('Cancelled by user');
				}
				window[ns].shareCallback(response);
			});
		},
		share: function( callback, return_url ){

			if( isMobile.any() ){
				var redirect_uri = return_url || window.location.href;
				var url = 'https://www.facebook.com/dialog/feed'
					+ '?app_id=' + app_settings.appid
					+ '&display=popup'
					+ '&caption=' + app_settings.share_generic.caption
					+ '&link=' + app_settings.share_generic.link
					+	'&redirect_uri=' + redirect_uri;
				window.location.href = url;
			}else{
				this.shareCallback = callback || function(){};
				var option = {
					method: 'feed',
					name: app_settings.share_generic.title,
					link: app_settings.share_generic.link,
					picture: app_settings.share_generic.image+"?ts="+(+new Date()),
					caption: app_settings.share_generic.caption,
					description : app_settings.share_generic.description,
					display: 'iframe'
				};
				FB.ui(option, function(response){
					if(!!response){
						//window[ns].shareCallback(response);
					}else{
						console.log('Cancelled by user');
					}
					window[ns].shareCallback(response);
				});
			}
		},
		shareTo: function(id, callback){
			this.shareToCallback = callback || function(){};
			var option = {
				method: 'feed',
				name: '',
				link: '',
				picture: '',
				caption: '',
				description : '',
				to: id || null
			}
			FB.ui(option, function(response){
				if(!!response){
					window[ns].shareToCallback(response);
				}else{
					console.log('Cancelled by user');
				}
			});
		},
		shareResult: function( id, result, callback, option ){

			if( isMobile.any() ){

				var url = 'https://www.facebook.com/dialog/share'
					+ '?app_id=' + app_settings.appid
					+ '&href=' +	app_settings.share_url
					+	'&redirect_uri=' + window.location.href + '?s=share';
				window.location.href = url;
			}else{

				this.shareResultCallback = callback || function(){};
				var result = result || '';
				var opt = option || {};
				// var option = {
				// 	method: 'feed',
				// 	name: '',
				// 	link: '',
				// 	picture: '',
				// 	caption: '',
				// 	description : '',
				// 	display: 'iframe',
				// 	to: id || null
				// }
				// option.description = option.description.replace('[s]', result);
				FB.ui( opt, function(response){
					if(!!response){
						//window[ns].shareResultCallback(response);
					}else{
						console.log('Cancelled by user');
					}
					window[ns].shareResultCallback(response);
				});
			}
		},
		installTab: function(){
			var url = 'https://www.facebook.com/dialog/pagetab'
				+ '?next=https://www.facebook.com'
				+	'&app_id=' + app_settings.appid;
			window.location.href = url;
		},
		getAccessToken: function(){
			return FB.getAccessToken();
		},
		extendAccessToken: function(){
			$.post('../include/getAccessToken.php', {atk:this.getAccessToken()}).done(trace);
		},
		parse: function(element){
			FB.XFBML.parse(element || null);
		},
		onLike: function(callback){
			this.onLikeCallback = callback || function(){}
			FB.Event.subscribe('edge.create', window[ns].onLikeCallback);
		},
		onUnLike: function(callback){
			this.onUnLikeCallback = callback || function(){}
			FB.Event.subscribe('edge.remove', window[ns].onUnLikeCallback);
		},
		setCanvas: function(width, height){
			width = width || window.innerWidth;
			height = height || window.innerHeight;
			FB.Canvas.setSize({width:width,height:height});
		},
		checkLoginStatus: function(callback){
			this.checkLoginStatusCallback = callback || function(){}
			FB.getLoginStatus(window[ns].checkLoginStatusCallback);
		}
	}
})(window, document);

var isMobile = {
	Windows: function() {
		return /IEMobile/i.test(navigator.userAgent);
	},
	Android: function() {
		return /Android/i.test(navigator.userAgent);
	},
	BlackBerry: function() {
		return /BlackBerry/i.test(navigator.userAgent);
	},
	iOS: function() {
		return /iPhone|iPad|iPod/i.test(navigator.userAgent);
	},
	any: function() {
		return ( this.Android() || this.BlackBerry() || this.iOS() || this.Windows() );
	}
};
