const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let tarefas = [
    {
        id: 1, nome: "Criar sessão de login"
    },
    {
        id: 2, nome: "Criar API Java com Spring Framework"
    },
    {
        id: 3, nome: "Estruturar banco de dados"
    }
];

let desenvolvedores = [
    {
        id: 1, nome: 'Eduardo'
    },
    {
        id: 2, nome: 'Gustavo'
    },
    {
        id: 3, nome: 'Lucas'
    }
];

app.get('/tarefas', (req, res) => {
    if (tarefas.length > 0) {
        res.status(200).json(tarefas);
    } else {
        res.status(404).json({error: "Nenhuma tarefa na lista"});
    }
});

app.put('/tarefas/:id/:valor', (req, res) => {
    const idUrl = req.params.id;
    const valorUrl = req.params.valor;

    for (const dados in tarefas) {
        if (tarefas.at(dados).id == idUrl) {
            tarefas.at(dados).nome = valorUrl;
            res.status(201).json(tarefas.at(dados));
        }
    }
});

app.post('/tarefas/:id/:valor', (req, res) => {
    const idUrl = parseInt(req.params.id);
    const valorUrl = req.params.valor;
    let idExistente = false;

    for (const dados in tarefas) {
        if (tarefas.at(dados).id == idUrl) {
            idExistente = true;
        }
    }

    if (idExistente) {
        res.status(406).send("Id existente...")
    } else {
        tarefas.push({id: idUrl, nome: valorUrl});
        res.status(201).json(tarefas);
    }
});

app.delete('/tarefas/:id', (req, res) => {
    const idUrl = parseInt(req.params.id);

    for (const dados in tarefas) {
        if (tarefas.at(dados).id == idUrl) {
            tarefas.splice(dados, 1);
            res.status(200).send("Deletado");
        }
    }
});


app.get('/desenvolvedores', (req, res) => {
    if (desenvolvedores.length > 0) {
        res.status(200).json(desenvolvedores);
    } else {
        res.status(404).json({error: "Nenhuma tarefa na lista"});
    }
});

app.put('/desenvolvedores/:id/:valor', (req, res) => {
    const idUrl = req.params.id;
    const valorUrl = req.params.valor;

    for (const dados in desenvolvedores) {
        if (desenvolvedores.at(dados).id == idUrl) {
            desenvolvedores.at(dados).nome = valorUrl;
            res.status(201).json(desenvolvedores.at(dados));
        }
    }
});

app.post('/desenvolvedores/:id/:valor', (req, res) => {
    const idUrl = parseInt(req.params.id);
    const valorUrl = req.params.valor;
    let idExistente = false;

    for (const dados in desenvolvedores) {
        if (desenvolvedores.at(dados).id == idUrl) {
            idExistente = true;
        }
    }

    if (idExistente) {
        res.status(406).send("Id existente...")
    } else {
        desenvolvedores.push({id: idUrl, nome: valorUrl});
        res.status(201).json(desenvolvedores);
    }
});

app.delete('/desenvolvedores/:id', (req, res) => {
    const idUrl = parseInt(req.params.id);

    for (const dados in desenvolvedores) {
        if (desenvolvedores.at(dados).id == idUrl) {
            desenvolvedores.splice(dados, 1);
            res.status(200).send("Deletado");
        }
    }
});

app.listen(port, () => {
    console.log(`Aplicação rodando em https://localhost:${port}...`);
});
