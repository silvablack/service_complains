/**
 * @author Paulo Silva
 * @description Complains Server
 * @returns listen(PORT,HOST)
 * @version 1.0.0
 */

const app = require('./app');

/**
 * @description Define host and port to server listening
 */
const PORT = process.env.PORT_SERVICE_COMPLAINS || 5000;
const HOST = process.env.URL_SERVICE_COMPLAINS || '0.0.0.0';

/**
 * @description init listening
 */
app.listen(PORT, HOST);
console.log(`Servidor rodando em http://${HOST}:${PORT}`);
