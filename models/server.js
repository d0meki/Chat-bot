const express = require('express')
const cors = require('cors')
class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.luxandPath = '/api/luxand';
        this.chatBotPath = '/api/chatbot'
        //Middlewares
        this.middlewares();
        //ritas de mi aplicaion

        this.routes();
    }

    middlewares(){
        //CORS
        this.app.use(cors())

        // lectura y parseo del body
        this.app.use(express.json());

        //directorio publico
        this.app.use( express.static('public'));
    }

    routes(){
        this.app.use(this.luxandPath,require('../routes/luxand'));
        this.app.use(this.chatBotPath,require('../routes/chatBot'));
    }

    listen (){
        this.app.listen( this.port, ()=>{
            console.log('servidor corriendo en puerto',this.port);
        })
    }
}

module.exports = Server
