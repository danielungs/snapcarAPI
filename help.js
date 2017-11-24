var exports = module.exports = {};

var help = {
    welcome: 'Bienvenidos a snapcar API!',
    urls: {
        'GET': {
            '/api/requests/': {			
                "descripción": "Lista los pedidos.",
                "ejemplo": "/api/requests/"
            },
            '/api/requests/:request_id': {
                "descripción": "Obtiene un pedido con id :request_id",
                "ejemplo": "/api/requests/42"
            },
            // A partir de acá las urls dan a entender que el circuito está preseleccionado
            // y no se pasa en la URL ... INPOT!!
            '/api/drivers/': {
                "descripción": "Lista los conductores.",
                "ejemplo": "/api/drivers/"
            },
            '/api/drivers/:driver_id': {
                "descripción": "Obtiene el conductor con id :driver_id",
                "ejemplo": "/api/drivers/201"
            },
            '/api/positions/': {
                "descripción": "Lista las posiciones de todos los conductores.",
                "ejemplo": "/api/positions/"
            },
            '/api/positions/:driver_id': {
                "descripción": "Obtiene las posiciones de un conductor con id :driver_id",
                "ejemplo": "/api/positions/201"
            },
            '/api/incidents/': {
                "descripción": "Lista los incidentes reportados.",
                "ejemplo": "/api/incidents/"
            },
            '/api/incidents/:incident_id': {
                "descripción": "Obtiene el incidente con id :incident_id",
                "ejemplo": "/api/incidents/81"
            },
            '/api/incidentstypes': {
                "descripción": "Lista los tipos de incidentes.",
                "ejemplo": "/api/incidentstypes/"
            },
            '/api/incidentstypes/:incidenttype_id': {
                "descripción": "Obtiene el tipo de incidente con id :incidenttype_id",
                "ejemplo": "/api/incidentstypes/1"
            },
			'/api/cabstand/': {
                "descripción": "Lista los paradas.",
                "ejemplo": "/api/cabstand/"
            },
            '/api/cabstand/:cabstand_code': {
                "descripción": "Obtiene la parada con codigo :cabstand_code",
                "ejemplo": "/api/cabstand/HS01"
            }			
        }
    }
}

exports.list = function() {
    return help;
}

/*
            '/api/webcams/:request_id': {
                "descripción": "Lista las cámaras del circuito con id :request_id.",
                "ejemplo": "/api/webcams/42"
            },
            '/api/webcams/:request_id/:webcam_id': {
                "descripción": "Obtiene la cámara con id :webcam_id del circuito con id :request_id",
                "ejemplo": "/api/webcams/42/86"
            },

*/