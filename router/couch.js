const express = require('express');
const router = express.Router();

const coachController = require('../controller/couchcontroller');

router.post('/newcoach', coachController.create);
router.get('/allcouch', coachController.getAll);
router.put('/updatecouch/:id', coachController.updatedata);
router.get('/onecouch/:id', coachController.getone);
router.delete('/deletcouch/:id', coachController.delete);


module.exports = router;
