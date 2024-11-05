const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const tarefas = [
    {
        id: 1, nome: 'Criar sessão de login' 
    },
    {
        id: 2, nome: 'Criar API Java com Spring Framework'
    },
    {
        id: 3, nome: 'Estruturar banco de dados'
    }
]

const desenvolvedores = [
    {
        id: 1, nome: 'Eduardo'
    },
    {
        id: 2, nome: 'Gustavo'
    },
    {
        id: 3, nome: 'Lucas'
    }
]

app.get('/tarefas', (req, res) => {
    res.json(tarefas);
});

app.listen(port, () => {
    console.log(`Aplicação sendo executada em: http://localhost:${port}`);
});
