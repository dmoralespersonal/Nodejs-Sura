const express = require('express');
const app = express();
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
const morgan=require('morgan');
 
//Configuraciones
app.set('port', process.env.PORT || 3000);
 
//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Routes
app.use(require('./routes/Movilidad/individuales/claseVehiculos'));
app.use(require('./routes/Movilidad/individuales/tiposDocumento'));
app.use(require('./routes/Movilidad/individuales/inspeccion'));


//Iniciando el servidor
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});