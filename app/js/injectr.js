/**
 * Here is the main script executed in the player
 * 
 */

(function(global) {
	var XHR = global.XMLHttpRequest;
	var overwriter = function () {
		window.arte_geoip_zone_codes = function () {
			return ['default','EUR_DE_FR','DE_FR','SAT','ALL'];
		};
		window.arte_time_protection = function () {
			return 'adult';
		};
		if (!window.dlLink) {
			window.dlLink = document.querySelector('meta[name="twitter:player:stream"]').attributes.content.value;
			console.log('Download link (right click, then save link as): ' + window.dlLink);
		}
	};

	global.XMLHttpRequest = function(){
		var myRequest = new XHR();
		myRequest.onload = overwriter;
		myRequest.onloadstart = overwriter;
		return myRequest;
	};
})(window);