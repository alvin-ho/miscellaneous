app_user 	=	{ id: '' };

console 	=	window.console || { log: function(){} };
trace 		=	function(response){ console.log(response); };

function Fbsdk()
{

	this.appid				=	'<?php echo $SYSCONFIG['FB']['appid']; ?>';
	this.scope				=	'<?php echo $SYSCONFIG['FB']['scope']; ?>';
	this.version			=	'<?php echo $SYSCONFIG['FB']['ver']; ?>';
	this.app_root			=	'<?php echo $SYSCONFIG['SERVER']['root']; ?>';
	this.app_domain			=	'<?php echo $SYSCONFIG['SERVER']['baseUrl']; ?>';

	this.ready				=	function(){};
	this.error				=	function( ex ){ console.log( ex ) };

	this.authSuccess		=	function(){};
	this.authFail			=	function(){};

	this.onLike				=	function(){};
	this.onUnLike			=	function(){};
	this.onAuthChange		= 	function( response ){ console.log( 'auth change', response ) };

	this.shareConfirmed		=	function( response ){ console.log( 'share confirmed', response ); };
	this.shareCancelled		=	function( response ){ console.log( 'share cancelled', response ); };
	this.wallPost			=	function( response ){ console.log( 'wall post', response ); };

	this.invite				=	function( response ){ console.log( 'invite', response ); };
};

Fbsdk.prototype.init = function( configs )
{

	var _self = this;
	var _configs = configs || {};

	// $.extend( _self, _configs );
	for ( var attrname in _configs ) {
		_self[ attrname ] = _configs[ attrname ];
	}

	if( !$('script#facebook-jssdk').length ){

		(function(d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s); js.id = id;
			js.src = "//connect.facebook.net/en_US/sdk.js";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));

	}

	window.fbAsyncInit = function()
	{

		FB.init({
			appId      					: _self.appid,
			cookie     					: true,
			xfbml      					: true,
			frictionlessRequests		: true,
			version    					: _self.version
		});

		var initTimeout = setTimeout( function() {
			_self.error( "Facebook SDK init failure" );
		}, 5000 );

		_self.getLoginStatus( function( response ){
			window.clearTimeout( initTimeout );
			_self.bindEvents();
			_self.ready( response );
		});

	};

};

Fbsdk.prototype.bindEvents = function()
{

	var _self = this;

	_self.like();
	_self.unLike();
	_self.authChange();
};

Fbsdk.prototype.login = function( options )
{
	var _self = this;
	var opt = options || {};

	var return_url = opt.next || window.location.href;
	var cb = opt.callback || function(){};

	// redirect login
	if( _self.isMobile.any() ){

		top.location.replace(
			"https://www.facebook.com/dialog/oauth/?"
			+ "client_id=" + _self.appid
			+ "&redirect_uri=" + return_url
			+ "&state=true"
			+ "&scope=" + _self.scope
		);

	} else {

		// check login status
		_self.getLoginStatus( function( auth ){

			// if not yet authorized
			if( auth.status != 'connected' ){

				FB.login( function( response ){

					var _status = response.status || null;
					if( response.status == 'connected' ){
						_self.authSuccess( response );
					}else{
						_self.authFail( response );
					}
				}, {
					scope: _self.scope
				});

			}else{
				_self.authSuccess( auth );
			}

		});
	}
};

Fbsdk.prototype.uninstall = function()
{
	FB.api('/me/permissions', 'DELETE', function(){
		window.location.reload();
	});
};

Fbsdk.prototype.me = function( callback )
{
	var meCallback = callback || function( response ){ console.log( response ); };
	FB.api('/me?fields=id,name,link,first_name,last_name,gender,email,locale,timezone,verified,updated_time,age_range', function( response ){
		meCallback( response );
	});
};

Fbsdk.prototype.like = function()
{
	var _self = this;
	FB.Event.subscribe( 'edge.create', _self.onLike );
};

Fbsdk.prototype.unLike = function()
{
	var _self = this;
	FB.Event.subscribe( 'edge.remove', _self.onUnLike );
};

Fbsdk.prototype.authChange = function()
{
	var _self = this;
	FB.Event.subscribe( 'auth.statusChange', _self.onAuthChange );
};


Fbsdk.prototype.inviteFriends = function( invite_msg, exclude_list ) {

	var _self = this;

	FB.ui({
		method: 'apprequests',
		message: ( invite_msg || '' ),
		app_id: _self.appid,
		exclude_ids: ( exclude_list || [] )
	}, _self.invite	);

};

Fbsdk.prototype.share = function( options )
{

	var _self = this;
	var opt = options || {};

	var return_url = opt.next || window.location.href;

	// redirect login
	if( _self.isMobile.any() ){

		window.location.href = 'https://www.facebook.com/dialog/feed'
			+ '?app_id=' + _self.appid
			+ '&display=popup'
			+ '&caption=' + opt.caption
			+ '&link=' + opt.link
			+ '&redirect_uri=' + return_url;

	} else {

		var	prefs = {
			method: opt.method || 'feed',
			name: opt.title || '',
			link: opt.link || '',
			picture: opt.image || '',
			caption: opt.caption || '',
			description : opt.description || '',
			display: opt.display || 'iframe',
			to: opt.toUser || null	//**
		};

		FB.ui( prefs, function( response ){

			if( typeof response != 'undefined' && typeof response.post_id != 'undefined' ){
				_self.shareConfirmed( response );
			}else{
				_self.shareCancelled( response );
			}

		});

	}

};

Fbsdk.prototype.autoWallPost = function( options )
{

	var _self = this;
	var opt = options || {};

	var prefs = {
		name: opt.name || "",
		link: opt.link || "",
		picture: opt.picture || "",
		caption: opt.caption || "",
		description : opt.description || ""
	};

	FB.api( '/me/feed', 'post', prefs, function( response ){
		_self.wallPost( response );
	});
};

Fbsdk.prototype.checkLoginStatus = function( callback )
{
	var cb = callback || function(){};
	FB.getLoginStatus( cb );
};

Fbsdk.prototype.getAccessToken = function()
{
	return FB.getAccessToken();
};

Fbsdk.prototype.getProfilePic = function( width, height, type )
{
	var w = w || 100;
	var h = h || 100;
	id = id || app_user.id;
	return 'https://graph.facebook.com/' + id + '/picture?width=' + w + '&height=' + h;  //type=large|small
};

Fbsdk.prototype.setCanvas = function( width, height )
{
	FB.Canvas.setSize({
		width: width || window.innerWidth,
		height: height || window.innerHeight
	});
};

Fbsdk.prototype.parse = function( element )
{
	FB.XFBML.parse( element || null );
};

Fbsdk.prototype.installTab = function()
{
	window.location.href = 'https://www.facebook.com/dialog/pagetab'
		+ '?next=https://www.facebook.com&app_id=' + _self.appid;
};

Fbsdk.prototype.isMobile = {
	Windows: function() {
		return /IEMobile/i.test( navigator.userAgent );
	},
	Android: function() {
		return /Android/i.test( navigator.userAgent );
	},
	BlackBerry: function() {
		return /BlackBerry/i.test( navigator.userAgent );
	},
	iOS: function() {
		return /iPhone|iPad|iPod/i.test( navigator.userAgent );
	},
	any: function() {
		return ( this.Android() || this.BlackBerry() || this.iOS() || this.Windows() );
	}
};
