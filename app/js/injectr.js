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

		if (!!window.jsonDll) return;
		var jsonDll = new XHR();
		window.jsonDll = jsonDll;
		jsonDll.onreadystatechange = function () {
			if (jsonDll.readyState==4 && jsonDll.status==200) jsonParser(jsonDll.responseText);
		};
		jsonDll.open('GET',window.arte_vp_getURLParameter('json_url'),true);
		jsonDll.send();
	};

	var jsonParser = function (dataRaw) {
		var stream, data = JSON.parse(dataRaw);
		var streams = data.videoJsonPlayer.VSR;
		console.log('Download links (right click, then save link as)');
		for (var i in streams) {
			stream = streams[i];
			if (stream.url.substr(-4) == '.mp4')
				console.log('['+stream.versionLibelle+']', stream.url);
		}
	};

	global.XMLHttpRequest = function(){
		var myRequest = new XHR();
		myRequest.onload = overwriter;
		myRequest.onloadstart = overwriter;
		return myRequest;
	};
})(window);