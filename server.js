var express    = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var help = require("./help.js");
var requests = require("./requests.js");
var drivers = require("./drivers.js");
var positions = require("./positions.js");
var incidents = require("./incidents.js");
//var webcams = require("./webcams.js");

var version = {
    id: '0.1',
    name: 'snapcar',
    lastupdate: Date.now()
}

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//http://enable-cors.org/server_expressjs.html
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// routes will be /api/whatever
app.use('/api', router);

// Home -> Help
router.get('/', function(req, res) {
    console.log("GET /");
    res.json(help.list());
});

// requests
var urlRequest = '/requests/';
router.route(urlRequest)
    .get(function(req, res) {
        console.log("GET: " + urlRequest);
        console.log("Getting requests list...");

        var response = {
            requests: requests.list(),
            version: version
        }
        res.json(response);
    });

router.route(urlRequest + ':request_id')
    .get(function(req, res) {
        console.log("GET: " + urlRequest + ':request_id');

        var id = req.params.request_id;
        console.log(id);

        var request = requests.get(id);
        console.log(request);

        if (!request) {
            // http://stackoverflow.com/questions/8393275/how-to-programmatically-send-a-404-response-with-express-node
            res.status(404)
               .send('Request inexistente.');

            return;
        }

        var response = {
            request: request,
            version: version
        }
        res.json(response);
    });

// Driver
var urlDriver = '/drivers/';
router.route(urlDriver)
    .get(function(req, res) {
        console.log("GET: " + urlDriver);
        console.log("Getting drivers list...");

        var response = {
            drivers: drivers.list(),
            version: version
        }
        res.json(response);
    });

router.route(urlDriver + ':driver_id')
    .get(function(req, res) {
        console.log("GET: " + urlDriver + ':driver_id');

        var id = req.params.driver_id;
        console.log(id);

        var driver = drivers.get(id);
        console.log(driver);

        if (!driver) {
            // http://stackoverflow.com/questions/8393275/how-to-programmatically-send-a-404-response-with-express-node
            res.status(404)
               .send('Driver inexistente.');

            return;
        }

        var response = {
            driver: driver,
            version: version
        }
        res.json(response);
    });

/*
//
var urlWebcam = '/webcams/';
router.route(urlWebcam + ':request_id')
    .get(function(req, res) {
        console.log("GET: " + urlWebcam + ':request_id');

        var requestId = req.params.request_id;
        console.log(requestId);

        var webcamByRequest = webcams.list(requestId);
        console.log(webcamByRequest);

        if (!webcamByRequest) {
            // http://stackoverflow.com/questions/8393275/how-to-programmatically-send-a-404-response-with-express-node
            res.status(404)
               .send('Cámaras inexistentes.');

            return;
        }

        var response = {
            request_id: webcamByRequest.requestId,
            webcams: webcamByRequest.webcams,
            version: version
        }
        res.json(response);
    });

router.route(urlWebcam + ':request_id' + "/" + ":webcam_id")
    .get(function(req, res) {
        console.log("GET: " + urlWebcam + ':request_id' + "/" + ":webcam_id");

        var requestId = req.params.request_id;
        var webcamId = req.params.webcam_id;
        console.log(requestId);
        console.log(webcamId);

        var webcam = webcams.get(requestId, webcamId);
        console.log(webcam);

        if (!webcam) {
            // http://stackoverflow.com/questions/8393275/how-to-programmatically-send-a-404-response-with-express-node
            res.status(404)
               .send('Driver inexistente.');

            return;
        }

        var response = {
            webcam: webcam,
            version: version
        }
        res.json(response);
    });
*/
// Positions
var urlPositions = '/positions/';
router.route(urlPositions)
    .get(function(req, res) {
        console.log("GET: " + urlPositions);
        console.log("Getting positions list...");

        var response = {
            positions: positions.list(),
            version: version
        }
        res.json(response);
    });

router.route(urlPositions + ':driver_id')
    .get(function(req, res) {
        console.log("GET: " + urlPositions + ':driver_id');

        var id = req.params.driver_id;
        console.log(id);

        var position = positions.get(id);
        console.log(position);

        if (!position) {
            // http://stackoverflow.com/questions/8393275/how-to-programmatically-send-a-404-response-with-express-node
            res.status(404)
               .send('Positions inexistente.');

            return;
        }

        var response = {
            position: position,
            version: version
        }
        res.json(response);
    });

// Incident
var urlIncident = '/incidents/';
router.route(urlIncident)
    .get(function(req, res) {
        console.log("GET: " + urlIncident);
        console.log("Getting incidents list...");

        var response = {
            incidents: incidents.list(),
            version: version
        }
        res.json(response);
    });

router.route(urlIncident + ':incident_id')
    .get(function(req, res) {
        console.log("GET: " + urlIncident + ':incident_id');

        var id = req.params.incident_id;
        console.log(id);

        var incident = incidents.get(id);
        console.log(incident);

        if (!incident) {
            // http://stackoverflow.com/questions/8393275/how-to-programmatically-send-a-404-response-with-express-node
            res.status(404)
               .send('Incident inexistente.');

            return;
        }

        var response = {
            incident: incident,
            version: version
        }
        res.json(response);
    });

var urlIncidentTypes = '/incidentstypes/';
router.route(urlIncidentTypes)
    .get(function(req, res) {
        console.log("GET: " + urlIncidentTypes);
        console.log("Getting incidents types list...");

        var response = {
            incidenttypes: incidents.types(),
            version: version
        }
        res.json(response);
    });
	
router.route(urlIncidentTypes + ':incidenttype_id')
    .get(function(req, res) {
        console.log("GET: " + urlIncidentTypes + ':incidenttype_id');

        var id = req.params.incidenttype_id;
        console.log(id);

        var incidenttype = incidents.gettype(id);
        console.log(incidenttype);

        if (!incidenttype) {
            // http://stackoverflow.com/questions/8393275/how-to-programmatically-send-a-404-response-with-express-node
            res.status(404)
               .send('Incident type inexistente.');

            return;
        }

        var response = {
            incidenttype: incidenttype,
            version: version
        }
        res.json(response);
    });
	
	
// Server up!
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Server started at port ' + port);
});


//limitless-falls-59407