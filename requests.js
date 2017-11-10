
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
        coordinate: new Coordinate(-34.524309,-58.695315),
		availableDrivers: [600, 107, 121]
    }	, {
        id: 80,
        coordinate: new Coordinate(-34.520388, -58.699936),
		availableDrivers: [105, 201, 222]
    }

]

exports.list = function() {
    return requests;
}

exports.get = function(id) {
    return requests.filter(request => request.id == id)[0];
}