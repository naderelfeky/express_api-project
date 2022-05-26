const express = require('express');
const router = express.Router();

const sessioncontroller = require('../controller/sessioncontroller');

router.post('/newsession', sessioncontroller.create);
router.get('/allsession', sessioncontroller.getAll);
router.put('/updatesession/:id', sessioncontroller.updatedata);
router.get('/onesession/:id', sessioncontroller.getone);
router.delete('/deletsession/:id', sessioncontroller.delete);

module.exports = router;