app_user = { id: '' };
props = properities || {};

console = window.console || { log: function(){} };
trace = function(response){ console.log(response); };

function FBsdk()
{

	this.appid						= props.appid	|| '';
	this.scope						= props.scope || '';
	this.version					= props.version || '';
	this.app_root					=	props.root_path || '';
	this.app_domain 			=	props.domain || '';

	this.ready						= function(){};
	this.error						=	function( ex ){ console.log( ex ) };
	this.authSuccess			= function(){};
	this.authFail					= function(){};
	this.onLike					= function(){};
};

FBsdk.prototype.init = function( configs )
{

	var _self = this;
	var _configs = configs || {};

	_self.ready						= _configs.ready || function(){};
	_self.error						=	_configs.error	|| _self.error;
	_self.authSuccess			= _configs.authSuccess	|| function(){};
	_self.authFail				= _configs.authFail	|| function(){};
	_self.onLike				= _configs.onLike	|| function(){};

	(function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s); js.id = id;
		js.src = "//connect.facebook.net/en_US/sdk.js";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));

	window.fbAsyncInit = function()
	{

		FB.init({
			appId      								: _self.appid,
			cookie     								: true,
			xfbml      								: true,
			frictionlessRequests			: true,
			version    								: _self.version
		});

		var initTimeout = setTimeout( function() {
			_self.error( "Facebook SDK init failure" );
		}, 5000 );

		FB.getLoginStatus( function( response ){
			window.clearTimeout( initTimeout );
			_self.ready( response );
		});

	};

};

FBsdk.prototype.bindEvents = function()
{

	var _self = this;


};

FBsdk.prototype.login = function( opt )
{
	var _self = this;

	opt = opt || {};
	var cb = opt.callback || function(){};
	var redirect_url = opt.redirect || window.location.href;

	try {

		if( isMobile.any() ){
			var url = "https://www.facebook.com/dialog/oauth/?"
				+ "client_id=" + _self.appid
				+ "&redirect_uri=" + redirect_url
				+ "&state=true"
				+	"&scope=" + _self.scope;

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

		FB.login( function( response ){

			if( response.authResponse && response.status == 'connected' ){
				_self.authSuccess( response );
			}else{
				_self.authFail( response );
			}
		}, {
			scope: _self.scope
		});

	} catch ( ex ) {
		_self.error( ex );
	}

};

FBsdk.prototype.uninstall = function()
{
	FB.api('/me/permissions', 'DELETE', function(){
		window.location.reload();
	});
};

FBsdk.prototype.me = function( callback )
{
	var meCallback = callback || function( response ){ console.log( response ); };
	FB.api('/me?fields=id,name,link,first_name,last_name,gender,email,locale,timezone,verified,updated_time,age_range', function( response ){
		meCallback( response );
	});
};

FBsdk.prototype.isMobile = {
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
