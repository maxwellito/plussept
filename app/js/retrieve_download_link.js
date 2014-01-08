/**
 * retrieve_download_link.js
 * script to get the http download link for the video
 * 
 */

if (!!arte_vp_sources && arte_vp_sources.length) {

	var fileName;
	for (var i in arte_vp_sources) {
		fileName = arte_vp_sources[i].file;
		if (/^http.+mp4$/.test(fileName)) {
			console.log('Download link: '+fileName);
		}
	}
}
