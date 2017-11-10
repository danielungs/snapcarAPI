
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
    new Incident(18, new Coordinate(-34.522977, -58.696872), Date.now(), 2),
    new Incident(09, new Coordinate(-34.521147, -58.699050), Date.now(), 3),
    new Incident(81, new Coordinate(-34.521359, -58.700927), Date.now(), 1)
	]

var incidentstypes = [
    new IncidentType(1, "accident", 20),
    new IncidentType(2, "congestion", 30),
    new IncidentType(3, "massive protest", 60)
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