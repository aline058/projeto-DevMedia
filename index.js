import express from 'express';
import {retornaFato, verificaAno} from './servico.js';

const app = express();


app.get('/', (req, res)=>{
    let ano = req.query.ano

    if(verificaAno(ano)){
        let fato = retornaFato(ano)
        res.json({fato: fato});
    }else{
        res.status(400).json({'atenção': 'ano inválido'})
    }
   
    
    
});

app.listen(8080, ()=>{
    let data = new Date();
    console.log(`servidor iniciado em ${data}`)
});

