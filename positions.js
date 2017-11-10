	
var driverService = require("./drivers.js");
//
var drivers = driverService.list();

var DriverPosition = function(driverId, latlon) {
    return {
        driverId: driverId,
        coordinate: {lat: latlon[0], lon: latlon[1]}
    }
}

// Build Reality
var moments = {

    00: [new DriverPosition(600, [-34.5315387,-58.7031964]),
        new DriverPosition(107, [-34.5208342,-58.7173721]),
		new DriverPosition(121, [-34.516597,-58.706859]),

		new DriverPosition(105, [-34.5315387,-58.7031964]),
        new DriverPosition(201, [-34.5208342,-58.7173721]),
		new DriverPosition(222, [-34.516597,-58.706859])],
		
	01: [new DriverPosition(600, [-34.5321615,-58.7023373]),
        new DriverPosition(107, [-34.5211955,-58.7171759]),
		new DriverPosition(121, [-34.516115,-58.706387]),

		new DriverPosition(105, [-34.5321615,-58.7023373]),
        new DriverPosition(201, [-34.5211955,-58.7171759]),
		new DriverPosition(222, [-34.516115,-58.706387])],
		
	02: [new DriverPosition(600, [-34.5326769,-58.7015995]),
        new DriverPosition(107, [-34.521443,-58.7168755]),
		new DriverPosition(121, [-34.515744,-58.705979]),

		new DriverPosition(105, [-34.5326769,-58.7015995]),
        new DriverPosition(201, [-34.521443,-58.7168755]),
		new DriverPosition(222, [-34.515744,-58.705979])],
		
	03: [new DriverPosition(600, [-34.5320479,-58.7005193]),
        new DriverPosition(107, [-34.521717,-58.7164893]),
		new DriverPosition(121, [-34.515599,-58.7056591]),

		new DriverPosition(105, [-34.5320479,-58.7005193]),
        new DriverPosition(201, [-34.521717,-58.7164893]),
		new DriverPosition(222, [-34.515599,-58.7056591])],
		
	04: [new DriverPosition(600, [-34.5316151,-58.6999995]),
        new DriverPosition(107, [-34.521991,-58.716146]),
		new DriverPosition(121, [-34.515599,-58.7056591]),

		new DriverPosition(105, [-34.5316151,-58.6999995]),
        new DriverPosition(201, [-34.521991,-58.716146]),
		new DriverPosition(222, [-34.515599,-58.7056591])],
		
	05: [new DriverPosition(600, [-34.5312452,-58.69959]),
        new DriverPosition(107, [-34.5222739,-58.7157705]),
		new DriverPosition(121, [-34.5157402,-58.7054787]),

		new DriverPosition(105, [-34.5312452,-58.69959]),
        new DriverPosition(201, [-34.5222739,-58.7157705]),
		new DriverPosition(222, [-34.5157402,-58.7054787])],
		
	06: [new DriverPosition(600, [-34.5307696,-58.6990938]),
        new DriverPosition(107, [-34.5225214,-58.7154379]),
		new DriverPosition(121, [-34.5160078,-58.7051268]),

		new DriverPosition(105, [-34.5307696,-58.6990938]),
        new DriverPosition(201, [-34.5225214,-58.7154379]),
		new DriverPosition(222, [-34.5160078,-58.7051268])],
		
	07: [new DriverPosition(600, [-34.5302917,-58.6985825]),
        new DriverPosition(107, [-34.5228308,-58.7149873]),
		new DriverPosition(121, [-34.5162309,-58.7048652]),

		new DriverPosition(105, [-34.5302917,-58.6985825]),
        new DriverPosition(201, [-34.5228308,-58.7149873]),
		new DriverPosition(222, [-34.5162309,-58.7048652])],

	08: [new DriverPosition(600, [-34.5298479,-58.6981285]),
        new DriverPosition(107, [-34.5231402,-58.7145903]),
		new DriverPosition(121, [-34.5163721,-58.7046396]),

		new DriverPosition(105, [-34.5298479,-58.6981285]),
        new DriverPosition(201, [-34.5231402,-58.7145903]),
		new DriverPosition(222, [-34.5163721,-58.7046396])],
		
	09: [new DriverPosition(600, [-34.5294742,-58.6977455]),
        new DriverPosition(107, [-34.5231755,-58.7145259]),
		new DriverPosition(121, [-34.5165877,-58.704396]),

		new DriverPosition(105, [-34.5294742,-58.6977455]),
        new DriverPosition(201, [-34.5231755,-58.7145259]),
		new DriverPosition(222, [-34.5165877,-58.704396])],
		
	10: [new DriverPosition(600, [-34.5290388,-58.6972869]),
        new DriverPosition(107, [-34.5231755,-58.7145259]),
		new DriverPosition(121, [-34.5165877,-58.704396]),

		new DriverPosition(105, [-34.5290388,-58.6972869]),
        new DriverPosition(201, [-34.5231755,-58.7145259]),
		new DriverPosition(222, [-34.5165877,-58.704396])],
		
	11: [new DriverPosition(600, [-34.5286285,-58.6968662]),
        new DriverPosition(107, [-34.5231755,-58.7145259]),
		new DriverPosition(121, [-34.5168255,-58.7040893]),

		new DriverPosition(105, [-34.5286285,-58.6968662]),
        new DriverPosition(201, [-34.5231755,-58.7145259]),
		new DriverPosition(222, [-34.5168255,-58.7040893])],
	
	12: [new DriverPosition(600, [-34.5282163,-58.6964091]),
        new DriverPosition(107, [-34.5231755,-58.7145259]),
		new DriverPosition(121, [-34.5170411,-58.7038998]),
	
		new DriverPosition(105, [-34.5282163,-58.6964091]),
        new DriverPosition(201, [-34.5231755,-58.7145259]),
		new DriverPosition(222, [-34.5170411,-58.7038998])],

	13: [new DriverPosition(600, [-34.5277181,-58.695842]),
        new DriverPosition(107, [-34.5239563,-58.7135244]),
		new DriverPosition(121, [-34.5172121,-58.7037014]),

		new DriverPosition(105, [-34.5277181,-58.695842]),
        new DriverPosition(201, [-34.5239563,-58.7135244]),
		new DriverPosition(222, [-34.5172121,-58.7037014])],

	14: [new DriverPosition(600, [-34.5271487,-58.695228]),
        new DriverPosition(107, [-34.5250285,-58.7120189]),
		new DriverPosition(121, [-34.5173778,-58.7034888]),

		new DriverPosition(105, [-34.5271487,-58.695228]),
        new DriverPosition(201, [-34.5250285,-58.7120189]),
		new DriverPosition(222, [-34.5173778,-58.7034888])],
		
	15: [new DriverPosition(600, [-34.5268173,-58.6948632]),
        new DriverPosition(107, [-34.5260797,-58.7106154]),
		new DriverPosition(121, [-34.5177347,-58.7030919]),

		new DriverPosition(105, [-34.5268173,-58.6948632]),
        new DriverPosition(201, [-34.5260797,-58.7106154]),
		new DriverPosition(222, [-34.5177347,-58.7030919])],
		
	16: [new DriverPosition(600, [-34.5264062,-58.6944555]),
        new DriverPosition(107, [-34.5271519,-58.7091864]),
		new DriverPosition(121, [-34.5177347,-58.7030919]),

		new DriverPosition(105, [-34.5264062,-58.6944555]),
        new DriverPosition(201, [-34.5271519,-58.7091864]),
		new DriverPosition(222, [-34.5177347,-58.7030919])],

	17: [new DriverPosition(600, [-34.5261543,-58.6939673]),
        new DriverPosition(107, [-34.5279928,-58.707885]),
		new DriverPosition(121, [-34.5182401,-58.7025686]),

		new DriverPosition(105, [-34.5261543,-58.6939673]),
        new DriverPosition(201, [-34.5279928,-58.707885]),
		new DriverPosition(222, [-34.5182401,-58.7025686])],

	18: [new DriverPosition(600, [-34.525536,-58.6938592]),
        new DriverPosition(107, [-34.5279928,-58.707885]),
		new DriverPosition(121, [-34.5185523,-58.7020995]),

		new DriverPosition(105, [-34.525536,-58.6938592]),
        new DriverPosition(201, [-34.5279928,-58.707885]),
		new DriverPosition(222, [-34.5185523,-58.7020995])],

	19: [new DriverPosition(600, [-34.524901,-58.6946012]),
        new DriverPosition(107, [-34.5274252,-58.7072981]),
		new DriverPosition(121, [-34.518955,-58.701602]),

		new DriverPosition(105, [-34.524901,-58.6946012]),
        new DriverPosition(201, [-34.5274252,-58.7072981]),
		new DriverPosition(222, [-34.518955,-58.701602])],

	20: [new DriverPosition(600, [-34.5246074,-58.6949503]),
        new DriverPosition(107, [-34.5264791,-58.7063795]),
		new DriverPosition(121, [-34.5196079,-58.7008725]),

		new DriverPosition(105, [-34.5246074,-58.6949503]),
        new DriverPosition(201, [-34.5264791,-58.7063795]),
		new DriverPosition(222, [-34.5196079,-58.7008725])],
		
	21: [new DriverPosition(600, [-34.5241885,-58.6954812]),
        new DriverPosition(107, [-34.5253859,-58.7052312]),
		new DriverPosition(121, [-34.5196079,-58.7008725]),

		new DriverPosition(105, [-34.5241885,-58.6954812]),
        new DriverPosition(201, [-34.5253859,-58.7052312]),
		new DriverPosition(222, [-34.5196079,-58.7008725])],
		
	22: [new DriverPosition(600, [-34.5235134,-58.6962398]),
        new DriverPosition(107, [-34.524524,-58.7043381]),
		new DriverPosition(121, [-34.5197714,-58.7007101]),
		
		new DriverPosition(105, [-34.5235134,-58.6962398]),
        new DriverPosition(201, [-34.524524,-58.7043381]),
		new DriverPosition(222, [-34.5197714,-58.7007101])],
		
	23: [new DriverPosition(600, [-34.5227509,-58.6972261]),
        new DriverPosition(107, [-34.5240194,-58.7037001]),
		new DriverPosition(121, [-34.5200368,-58.7003813]),
		
		new DriverPosition(105, [-34.5227509,-58.6972261]),
        new DriverPosition(201, [-34.5240194,-58.7037001]),
		new DriverPosition(222, [-34.5200368,-58.7003813])],

	24: [new DriverPosition(600, [-34.5219008,-58.6981971]),
        new DriverPosition(107, [-34.5234518,-58.7031643]),
		new DriverPosition(121, [-34.520297,-58.7000926]),

		new DriverPosition(105, [-34.5219008,-58.6981971]),
        new DriverPosition(201, [-34.5234518,-58.7031643]),
		new DriverPosition(222, [-34.520297,-58.7000926])],
		
	25: [new DriverPosition(600, [-34.5214132,-58.698804]),
        new DriverPosition(107, [-34.5234518,-58.7031643]),
		new DriverPosition(121, [-34.520297,-58.7000926]),

		new DriverPosition(105, [-34.5214132,-58.698804]),
        new DriverPosition(201, [-34.5234518,-58.7031643]),
		new DriverPosition(222, [-34.520297,-58.7000926])],
		
	26: [new DriverPosition(600, [-34.5210382,-58.6991834]),
        new DriverPosition(107, [-34.5228841,-58.7026029]),
		new DriverPosition(121, [-34.520624,-58.7001107]),

		new DriverPosition(105, [-34.5210382,-58.6991834]),
        new DriverPosition(201, [-34.5228841,-58.7026029]),
		new DriverPosition(222, [-34.520624,-58.7001107])],


	27: [new DriverPosition(600, [-34.5207382,-58.6995627]),
        new DriverPosition(107, [-34.5218539,-58.701378]),
		new DriverPosition(121, [-34.5208099,-58.700255]),

		new DriverPosition(105, [-34.5207382,-58.6995627]),
        new DriverPosition(201, [-34.5218539,-58.701378]),
		new DriverPosition(222, [-34.5208099,-58.700255])],
		
	28: [new DriverPosition(600, [-34.5208204,-58.7003111]),
        new DriverPosition(107, [-34.5214965,-58.7010208]),
		new DriverPosition(121, [-34.5212633,-58.7007873]),

		new DriverPosition(105, [-34.5208204,-58.7003111]),
        new DriverPosition(201, [-34.5214965,-58.7010208]),
		new DriverPosition(222, [-34.5212633,-58.7007873])],
		
	29: [new DriverPosition(600, [-34.5213293,-58.7008651]),
		new DriverPosition(107, [-34.5213293,-58.7008651]),
		new DriverPosition(121, [-34.5213293,-58.7008651]),
		
		new DriverPosition(105, [-34.5213293,-58.7008651]),
		new DriverPosition(201, [-34.5213293,-58.7008651]),
		new DriverPosition(222, [-34.5213293,-58.7008651])]
        
}

var driversPositions = {};
var receivePosition = function(driverposition) {
    var rp = driversPositions[driverposition.driverId];
    if(!rp) {
        rp = {
            driver: driverposition.driverId,
            positions: []
        }
        driversPositions[driverposition.driverId] = rp;
    }
    rp.positions.push(driverposition.coordinate);
}

for(var ix in moments) {
    var moment = moments[ix];
    for(var j=0; j<moment.length; j++) {
        receivePosition(moment[j]);
    }
}
//

/******************************************************************************
 * API
 */
exports.list = function() {
    var positions = []
    for(var driverId in driversPositions) {
        positions.push(driversPositions[driverId]);
    }

    return positions;
}

exports.get = function(driverId) {
    return driversPositions[driverId];
    //return positions.filter(position => position.driver == driverId)[0];
    //return positions[driverId];
}