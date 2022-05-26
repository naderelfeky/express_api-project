const express = require("express");
const router = express.Router();

const learnercontroller = require('../controller/learnercontroller');

router.post('/newlearner', learnercontroller.create);
router.get('/allleaner', learnercontroller.getAll);
router.put('/updatelearner/:id', learnercontroller.updatedata);
router.get('/oneleaner/:id', learnercontroller.getone);
router.delete('/deletlearner/:id', learnercontroller.delete);

    
    module.exports = router;