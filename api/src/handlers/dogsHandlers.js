const { getAllDogs, getDogById, getDogByQuery, createDog } = require("../controllers/dogsControllers")


const getDogs = async (req, res) => {
    try {
        const { name } = req.query
        if (name) {
            const dog = await getDogByQuery(name)
            return res.json(dog)
        }
        const dogs = await getAllDogs()
        res.json(dogs)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

const getDogsId = async (req, res) => {
    const { idRaza } = req.params
    try {
        const dog = await getDogById(idRaza)
        res.json(dog)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

const postDog = async (req, res) => {
    try {
        const newDog = await createDog(req.body)
        res.json(newDog)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

module.exports = {
    getDogs,
    getDogsId,
    postDog
}