/**
 * retrieve_download_link.js
 * script to get the http download link for the video
 * 
 */

function plussept_dl () {
	if (!!arte_vp_sources && arte_vp_sources.length) {

		var fileName;
		for (var i in arte_vp_sources) {
			fileName = arte_vp_sources[i].file;
			if (/^http.+mp4$/.test(fileName)) {
				console.log('Download link (right click, then save link as): '+fileName);
				return;
			}
		}
	}

	// Counter
	// there's probably a better way, but I'm too lazy
	// to make a dirty 'mock'
	plussept_counter--;
	if (plussept_counter > 0) {
		setTimeout(plussept_dl,3000);
	}
}

var plussept_counter = 10;
plussept_dl();