// APP É O OBJETO DO EXPRESS QUE FOI USADO PARA CRIAR AS ROTAS.
const LivroDAO = require('../infra/livro-dao');
const db = require('../../config/database');

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

        const livroDAO = new LivroDAO(db);
        livroDAO.lista()
            .then(livros =>resp.marko(
                require('../views/livros/lista/lista.marko'),
                {
                    livros : livros
                }
            ))
            .catch(erro => console.log(erro));
        // livroDAO.lista(function(erro,resultados) {

        //     resp.marko(
        //         require('../views/livros/lista/lista.marko'),
        //         {
        //             livros : resultados
        //         }
        //     );
        // });
    });
};


