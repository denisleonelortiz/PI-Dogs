const { Router } = require('express');
const {getDogs, getDogsId, postDog} = require("../handlers/dogsHandlers.js")

const router = Router();

router.get("/", getDogs)
router.get("/:idRaza", getDogsId)
router.post("/", postDog)


module.exports = router