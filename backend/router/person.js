const {
    Router
} = require('express');



const router = new Router();


const personController = require('../Controller/person')


router.get('/person/:name', personController.personGet)
router.get('/Professors', personController.getpeople)
router.get('/Professor/:id', personController.getProfile)


module.exports = router;