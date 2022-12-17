const  { Router } = require('express');
const { getWebhook,postWebhook } = require('../controllers/chatBotController');


const router = Router();

router.get('/webhook',getWebhook);
//router.put('/:id',algoPut );
router.post('/webhook',postWebhook);
//router.delete('/',algoDelete);

module.exports = router;