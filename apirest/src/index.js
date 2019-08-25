// Carga de modulos necesarios y creación de nueva aplicacion.
var express = require("express");
var app = express();
var bodyParser = require('body-parser');


//middlewares
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

//rutas
app.post('/', function (req, res) {

	let dato1 = req.body.dato1;
	let dato2 = parseInt(req.body.dato2);
	let hora = (dato1.split(':'))

//validacion de datos
	hora[0] = parseInt(hora[0]) - dato2
	if (hora[0]>24){
		hora[0] = hora[0]-24
	}else if (hora[0]<0){
		hora[0] = hora[0]+24
	}
	let time = hora.join(':')

	
//respuesta a la peticion
	if ((dato2 < -12) || (dato2 > 12)) {
		res.send('ERROR paramentro invalido')
	} else {
		res.send(
			{
				"response": {
					"time": time,
					"timezone": "utc"
				}
			}
		)
	}

});

//inicio del servidor
app.listen(8888, function () {
	console.log('Server is running..');
});
