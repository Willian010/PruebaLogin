//Unificación de código con BACKEND
//Iniciar serv NODE.js
const app = require('./config/server');

require('./app/routes/datos')(app);

//starting server

app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'));
});

//FIN

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

 