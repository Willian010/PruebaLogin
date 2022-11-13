const dbConnection = require('../../config/dbConnection');

module.exports = app => {

    const connection = dbConnection();

    app.get('/', (req, res) =>{
        
            //ROBADIN
            connection.connect(function(err) {
                if (err) {
                    console.error('Error de conexion: ' + err.stack);
                    return;
                }
                console.log('Conectado con el identificador ' + connection.threadId);
            });



        
        connection.query('SELECT * FROM Users', (err, result) => {
            console.log(result);
            res.render('datos/datos', {
                datos: result
            });

        });
    });
}