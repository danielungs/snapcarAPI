
var exports = module.exports = {};

var Coordinate = function(lat, lon) {
    return {
        lat: lat,
        lon: lon
    }
}

var requests = [
    {
        id: 42,
        coordinate: new Coordinate(-34.5213293,-58.7008651),
		availableDrivers: [600, 107, 121]
    }	, {
        id: 80,
        coordinate: new Coordinate(-34.5213293,-58.7008651),
		availableDrivers: [105, 201, 222]
    }

]

exports.list = function() {
    return requests;
}

exports.get = function(id) {
    return requests.filter(request => request.id == id)[0];
}