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
		var i, command;
		var stream, data = JSON.parse(dataRaw);
		var streams = data.videoJsonPlayer.VSR;
		console.log('%cHTTP links (right click, then save link as)', 'background-color: #333; color: #FFF; font-weight: bold;');
		for (i in streams) {
			stream = streams[i];
			if (stream.url.substr(-4) == '.mp4')
				console.log('['+stream.versionLibelle+'/'+stream.quality+']', stream.url);
		}
		console.log('%cRTMP links (rtmpdump commands)', 'background-color: #333; color: #FFF; font-weight: bold;');
		console.log('%cWarning, Google Chrome truncate long urls in the console. So if you make a copy paste, it might not work. Think to copy url via right click then Copy Link Address. Sorry about that.', 'background-color: #B00; color: #FFF; font-weight: bold;');
		for (i in streams) {
			stream = streams[i];
			if (stream.mediaType == 'rtmp') {
				command = 'rtmpdump -r \"' + stream.streamer + 'mp4:' + stream.url +'\" ';
				command += '--swfUrl \"http://www.arte.tv/player/v2/jwplayer6/mediaplayer.6.6.swf?height='+stream.height+'&system-bitrate='+stream.bitrate+'000&width='+stream.width+'\" -X 0 -o output.mp4';
				console.log('%c['+stream.versionLibelle+'/'+stream.quality+']', 'background-color: #bbb; font-weight: bold;');
				console.log(command);
			}
		}
	};

	global.XMLHttpRequest = function(){
		var myRequest = new XHR();
		myRequest.onload = overwriter;
		myRequest.onloadstart = overwriter;
		return myRequest;
	};
})(window);