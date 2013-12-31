/**
 * plusSept 
 * geolocalisation breaker
 * no proxy required, just this chrome extansion
 * 
 * 
 * @type {String}
 */

/**
 * Custom script to override geolocalisation.js
 * 
 * this is an uglified version of js/geolocalisation_custom.js
 * the reason why we don't insert the script link directly
 * is because the arte player page got cross origin resctrictions
 */
var customScript = 'function arte_geoip_ip(){return plussept_tools.generate_fake_ip()}function arte_geoip_country_code(){return"FR"}function arte_geoip_country_name(){return"France"}function arte_geoip_zone_codes(){return new Array("default","EUR_DE_FR","DE_FR","SAT","ALL")}function arte_time_time(){return plussept_tools.date.toGMTString()}function arte_time_timestamp(){return plussept_tools.date.getTime()}function arte_time_protection(){return"adult"}var plussept_tools={date:new Date,generate_fake_ip:function(){var e;do{e=Math.floor(Math.random()*256)}while([10,127,192].indexOf(e)!=-1);e+="."+Math.floor(Math.random()*256);e+="."+Math.floor(Math.random()*256);e+="."+Math.floor(Math.random()*256);return e}};console.log("geolocalisation.js overwriten")';

// Let's get all script tags
var scriptTag,
	scriptTags = document.getElementsByTagName('script');

// Now we have to find the geolocalisation.js tag
// to inject the custom code just after
for (var i in scriptTags) {
	scriptTag = scriptTags[i];
	if (!!scriptTag.attributes && !!scriptTag.attributes.src && !!scriptTag.attributes.src.value) {
		if (scriptTag.attributes.src.value.indexOf('www-secure.arte.tv') != -1) {

			// We found the tag, let inject our code just after him, mouhouhahaha
			var s = document.createElement('script');
			s.textContent = customScript;
			scriptTag.insertAdjacentElement('afterEnd', s);
		}
	}
}