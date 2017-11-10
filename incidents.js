
var exports = module.exports = {};

var Coordinate = function(lat, lon) {
    return {
        lat: lat,
        lon: lon
    }
}

var Incident = function(id, coordinate, date, type) {
    return {
        id: id,
        coordinate: coordinate,
		date: date,
		type: type
    }
}

var IncidentType = function(id, description, delay) {
    return {
        id: id,
        description: description,
		delay: delay		
    }
}


var incidents = [
    new Incident(18, new Coordinate(-34.522110, -58.715965), Date.now(), 2),
    new Incident(09, new Coordinate(-34.532497, -58.701834), Date.now(), 3),
    new Incident(81, new Coordinate(-34.527909, -58.707766), Date.now(), 1)
	]

var incidentstypes = [
    new IncidentType(1, "accident", 10),
    new IncidentType(2, "congestion", 15),
    new IncidentType(3, "massive protest", 30)
	]
	
exports.list = function() {
    return incidents;
}

exports.get = function(id) {
    return incidents.filter(incident => incident.id == id)[0];
}

exports.types = function() {
    return incidentstypes;
}
exports.gettype = function(id) {
    return incidentstypes.filter(incidenttype => incidenttype.id == id)[0];
}