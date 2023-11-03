const getTemperaments = require("../controllers/temperamentController")


const allTemperaments = async (req, res) => {
    try {
        const temperaments = await getTemperaments()
        res.json(temperaments)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = allTemperaments
