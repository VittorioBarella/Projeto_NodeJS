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
    });

    app.get('/livros/form', function(req,resp) {
        resp.marko(require('../views/livros/form/form.marko'));
    });

    // OS DADOS SERÃO ENVIADOS NO CORPO DA REQUISIÇÃO, ATENDENDO ASSIM O MÉTODO POST.
    app.post('/livros', function(req,resp) {
        console.log(req.body);

        const livroDAO = new LivroDAO(db);
        livroDAO.adiciona(req.body)
            .then(resp.redirect('/livros'))
            .catch(erro => console.log(erro));

    });

    app.delete('/livros/:id' , function(req,resp) {
        const id = req.params.id;

        const livroDao = new LivroDAO(db);
        livroDao.remove(id)
            .then(() => resp.status(200).end)
            .catch(erro => console.log(erro));


    });

};


