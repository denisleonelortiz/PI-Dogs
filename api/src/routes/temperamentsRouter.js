const { Router } = require('express');
const allTemperaments = require('../handlers/temperamentsHandler');

const router = Router();

router.get("/", allTemperaments)

module.exports = router