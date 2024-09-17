const axios = require("axios")
const { Op } = require("sequelize")
require('dotenv').config();
const { API_KEY } = process.env;
const URL_ALL_DOGS = "https://api.thedogapi.com/v1/breeds/"
const URL_RAZA = "https://api.thedogapi.com/v1/breeds/search?q="
const { Dog, Temperament } = require("../db")

const cleanData = (array) => {
    const dogs = array.map((e) => {
        return {
            id: e.id,
            name: e.name.toLowerCase(),
            image: e.image.url,
            height: e.height.metric.split(" - "),
            weight: e.weight.metric.split(" - "),
            life_span: e.life_span,
            created: false,
            temperaments: e.temperament
        }
    })
    return dogs
}

const getAllDogs = async () => {
    const { data } = await axios(URL_ALL_DOGS + "?" + API_KEY)
    const dogsApi = cleanData(data)


    const aux = await Dog.findAll({
        include: {
            model: Temperament,
            through: {
                attributes: []
            },
            attributes: ['name']
        }
    })
    const dogsDb = aux.map((dog) => {
        const arrayTemp = dog.temperaments.map((t) => t.name)
        const temp = arrayTemp.join(", ")
        const height = dog.height.split(" - ")
        const weight = dog.weight.split(" - ")
        return { ...dog.get(), temperaments: temp, height, weight }
        //dog.get() porque es un obj sequelize
    })

    return [...dogsApi, ...dogsDb]
}

const getDogById = async (id) => {
    const aux = await getAllDogs()
    const dog = aux.filter((e) => {
        if (isNaN(id)) {
            return e.id === id
        }
        return e.id === Number(id)
    })
    if (!dog.length) throw new Error ("No existe perro con ese ID")
    return dog

}

const getDogByQuery = async (name) => {
    const dogs = await getAllDogs();
    const result = dogs.filter((e) => e.name.includes(name.toLowerCase()))
    if (!result.length) throw new Error ("No existe raza con ese nombre")
    return result
}

const createDog = async ({ name, image, minHeight, maxHeight, minWeight, maxWeight, life_span, temperaments }) => {
    const newDog = await Dog.create({
        name,
        image,
        height: `${minHeight} - ${maxHeight}`,
        weight: `${minWeight} - ${maxWeight}`,
        life_span: `${life_span} years`,
    })

    temperaments.length
        ? temperaments.map(async (name) => {
            const temp = await Temperament.findOne({
                where: { name: name },
                attributes: ["id"],
            })
            await newDog.setTemperaments(temp.id)
        })
        : []

    return newDog
}

module.exports = {
    getAllDogs,
    getDogById,
    getDogByQuery,
    createDog
}