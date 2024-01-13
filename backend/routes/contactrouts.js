const express = require('express');
const router = express.Router();
const controller = require('../controller/contactcontroller')

//route to the controller with specific exercise
router.get('/', controller.getContacts);

router.get('/:id', controller.getContact)

router.post('/', controller.createContact)

router.put('/:id', controller.changeContact)

router.delete('/:id', controller.deleteContact)

module.exports = router;