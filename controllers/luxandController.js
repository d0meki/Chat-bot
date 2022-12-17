const { response, request } = require('express')

const algoGet = (req = request,res = response) =>{

    const query = req.query;
    //tambien podemos desestructurar
    //const {q,nombre = 'No Name',apiKey} =req.query;

    res.json({
        msg:'get API - Controlador',
        query
    })
}

const algoPut = (req,res = response) =>{
    //res.send('hello World');

    const id = req.params.id;

    res.json({
        msg:'put API - Controlador',
        id
    })
}
const algoPost = (req,res = response) =>{
    //res.send('hello World');
    const body = req.body;
    //podemos desustructurar
   // const { nombre, edad } = req.body;
    res.json({
        msg:'post API - Controlador',
        body
    })
}
const algoDelete = (req,res = response) =>{
    //res.send('hello World');
    res.json({
        msg:'delete API - Controlador'
    })
}

module.exports = {
    algoGet,
    algoPost,
    algoPut,
    algoDelete
}