const express = require('express');
const app = express();

/*app.get('/', (req, res) => {
    res.send("<div style=background-color:red;>Teste</div>");
})*/

app.get('/', (req, res) => {
    res.send("Teste");
})

let user = {
    name:'Ana',
    idade: 38,
    ativo: true
};

app.post('/create', (req, res) => {
    
    console.log(req.body);

    res.send({mensagem:"O usuário foi enviado!"});
});

app.put('/update', (req,res) => {
    res.send("PUT request");
});

app.delete('/delete', (req,res) => {
    res.send("DELETE request");
});

app.delete('/deletedUser/:id', (req, res) => {


    if(typeof req.params.id != "number") {
        res.status(415).send("Não é um número");
    }

    let users = [
        {id: 1, nome: "Ana"},
        {id: 2, nome: "Paula"},
        {id: 3, nome: "Marianni"}
    ];

    let achou = users.filter((usuario) => {
        return usuario.id == req.params.id;
});

if(achou.length) {
    res.status(200).send('Usuário deletado');
}else{
    res.status(400).send('Usuário não encontrado');
}
});


app.listen(3336,()=>{
    console.log('listening on');
});

