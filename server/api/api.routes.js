const express = require('express');
const v3Routes = require('./v3/v3.routes');

const router = express.Router();
router.use('/v3', v3Routes);
module.exports = router;