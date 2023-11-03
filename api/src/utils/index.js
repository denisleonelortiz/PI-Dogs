const getTemperaments = require("../controllers/temperamentController")
const {Temperament} = require ("../db")

const chargeTemperamentsDb = async() => {
    const temperaments = await getTemperaments()
    Temperament.bulkCreate(temperaments)
}

module.exports ={
    chargeTemperamentsDb
}