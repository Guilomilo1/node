const express = require('express');
const app = express();
//Rota principal
app.get('/', (req,res)=>{
    res.send('Servidor Express...');
});
//Rota sobre
app.get('/sobre', (req,res)=>{
    res.send('Pagina Sobre');
});
//Rota produtos
app.get('/sobre', (req,res)=>{
    res.send('Pagina Produtos');
});

//API REST
app.get('/api/produtos', (req,res)=>{
    const produtos = [
        {id: 1, nome: "Mouse"},
        {id: 2, nome: "Teclado"}
    ];
    res.json(produtos);
});

//Inicia o servidor na porta 3000
app.listen(3000, ()=>{
    console.log('https://localhost:3000&#39');
}); 