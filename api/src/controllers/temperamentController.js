const { getAllDogs } = require("./dogsControllers")


const getTemperaments = async() => {
    const allDogs = await getAllDogs()
    const aux = allDogs.map((e) =>e.temperaments?.split(", "));
    const aux2 = aux.flat().filter(Boolean)
    const aux3 =  [...new Set(aux2)].sort()
    const temperaments = aux3.map((e) => {return {name: e}})
    return temperaments
}

module.exports = getTemperaments