const config = {
    serverIp: 'localhost',  // Poner tu IP
    serverPort: '5000',
    SECRET_TOKEN: 'token'
};

config.baseUrl = `http://${config.serverIp}:${config.serverPort}`;