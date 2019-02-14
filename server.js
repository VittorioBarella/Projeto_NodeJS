// CRIAÇÃO DE UM EXEMPLO DE SERVIDOR WEB.

const http = require('http');

const servidor  = http.createServer(function (req, resp) {

    let html = '';

    if(req.url == '/') {

        html = `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1> Testando Servidor </h1>
                </body>
            </html>
        `;
    } else if (req.url == '/testeServ2') {

        html = `
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Testando Servidor 2 </h1>
            </body>
        </html>
    `;

    }
    resp.end(html);
});
servidor.listen(3000);