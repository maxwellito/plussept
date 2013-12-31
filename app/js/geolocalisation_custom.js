/**
 * geolocalisation.js
 * override version
 * 
 */

var plussept_tools = {
    date: new Date(),
    generate_fake_ip: function() {
        var output;
        do{
            output = Math.floor(Math.random() * 256);
        }
        while([10,127,192].indexOf(output) != -1);

        output += '.'+Math.floor(Math.random() * 256);
        output += '.'+Math.floor(Math.random() * 256);
        output += '.'+Math.floor(Math.random() * 256);

        return output;
    }
};

function arte_geoip_ip() {
    return plussept_tools.generate_fake_ip();
}

function arte_geoip_country_code() {
    return 'FR';
}

function arte_geoip_country_name() {
    return 'France';
}

function arte_geoip_zone_codes() {
    return new Array(
        'default',
        'EUR_DE_FR',
        'DE_FR',
        'SAT',
        'ALL'
    );
}

function arte_time_time() {
    return plussept_tools.date.toGMTString();
}

function arte_time_timestamp() {
    return plussept_tools.date.getTime();
}

function arte_time_protection() {
    return 'adult';
}

console.log('geolocalisation.js overwriten');