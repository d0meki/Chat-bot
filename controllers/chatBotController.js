const { response, request } = require('express')
require("dotenv").config();
const getWebhook = (req = request,res = response) =>{

    // const query = req.query;
    //tambien podemos desestructurar
    //const {q,nombre = 'No Name',apiKey} =req.query;
    let VERIFY_TOKEN = process.env.MY_VERIFY_FB_TOKEN
    // Parse the query params
    let mode = req.query["hub.mode"];
    let token = req.query["hub.verify_token"];
    let challenge = req.query["hub.challenge"];
  
    // Check if a token and mode is in the query string of the request
    if (mode && token) {
      // Check the mode and token sent is correct
      //config.verifyToken
      if (mode === "subscribe" && token === VERIFY_TOKEN) {
        // Respond with the challenge token from the request
        console.log("WEBHOOK_VERIFIED");
        res.status(200).send(challenge);
      } else {
        // Respond with '403 Forbidden' if verify tokens do not match
        res.sendStatus(403);
      }
    }


    // res.json({
    //     msg:'get API - Controlador',
    //     query
    // })
}

const algoPut = (req,res = response) =>{
    //res.send('hello World');

    const id = req.params.id;

    res.json({
        msg:'put API - Controlador',
        id
    })
}
const postWebhook = (req,res = response) =>{
    //res.send('hello World');
    const body = req.body;
    console.log(`\u{1F7EA} Received webhook:`);
    console.dir(body, { depth: null });
    //podemos desustructurar
   // const { nombre, edad } = req.body;
   if (body.object === "page") {
    // Returns a '200 OK' response to all requests
    body.entry.forEach(function(entry) {
        let webhook_event = entry.messaging[0];
        console.log(webhook_event);
    });

    res.status(200).send("EVENT_RECEIVED");

    // Determine which webhooks were triggered and get sender PSIDs and locale, message content and more.
  } else {
    // Return a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
  }
  
    // res.json({
    //     msg:'post API - Controlador',
    //     body
    // })
}
const algoDelete = (req,res = response) =>{
    //res.send('hello World');
    res.json({
        msg:'delete API - Controlador'
    })
}

module.exports = {
    postWebhook,
    getWebhook,
    algoPut,
    algoDelete
}