// APP É O OBJETO DO EXPRESS QUE FOI USADO PARA CRIAR AS ROTAS.

module.exports = (app) => {
    app.get('/', function (req, resp) {
        resp.send(
            `
                <html>
                    <head>
                        <meta charset="utf-8">
                    </head>
                    <body>
                        <h1> Casa do Código </h1>
                    </body>
                </html>
            `

        );
    });

    app.get('/livros', function (req, resp) {
        resp.send(
            `
                <html>
                    <head>
                        <meta charset="utf-8">
                    </head>
                    <body>
                        <h1> Listagem de Livros </h1>
                    </body>
                </html>
            `

        );
    });
}


