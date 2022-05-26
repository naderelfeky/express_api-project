const express = require('express');
const router = express.Router();

const experencecontroller = require('../controller/experencecontroller');

router.post('/newexperence', experencecontroller.create);
router.get('/allexperence', experencecontroller.getAll);
router.put('/updatexperence/:id', experencecontroller.updatedata);
router.get('/oneexperence/:id', experencecontroller.getone);
router.delete('/deletexperence/:id', experencecontroller.delete);

module.exports = router;