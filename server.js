// CRIAÇÃO DE UM EXEMPLO DE SERVIDOR WEB.

const http = require('http');

const servidor  = http.createServer(function (req, resp) {
    resp.end(`
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Testando Servidor </h1>
            </body>
        </html>
    `);
});
servidor.listen(3000);