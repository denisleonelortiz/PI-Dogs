import axios from 'axios'

export const GET_DOGS = "GET_DOGS"
export const GET_DOGS_BY_NAME = "GET_DOGS_BY_NAME"
export const GET_DOG_BY_ID = "GET_BY_ID"
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS"
export const SET_TEMPERAMENTS = "SET_TEMPERAMENTS"
export const FILTER_DOGS = "FILTER_DOGS"
export const ORDER_DOGS = "ORDER_DOGS"
export const HOME = "HOME"


export function getAllDogs() {
    return async function (dispatch) {
        try {
            const { data } = await axios("http://localhost:3001/dogs")
            return dispatch({
                type: GET_DOGS,
                payload: data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function getDogsByName(name) {
    return async function (dispatch) {
        try {
            const { data } = await axios(`http://localhost:3001/dogs?name=${name}`)
            return dispatch({
                type: GET_DOGS_BY_NAME,
                payload: data
            })
        } catch (error) {
            console.log(error);
            alert("No existe raza con ese nombre")
        }
    }
}

export function getDogById(id) {
    return async function (dispatch) {
        try {
            const { data } = await axios(`http://localhost:3001/dogs/${id}`)
            return dispatch({
                type: GET_DOG_BY_ID,
                payload: data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function getTemperaments() {
    return async function (dispatch) {
        try {
            const { data } = await axios(`http://localhost:3001/temperaments`)
            return dispatch({
                type: GET_TEMPERAMENTS,
                payload: data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function filterDogs(filter) {
    return {
        type: FILTER_DOGS,
        payload: filter
    }
}

export function orderDogs(order) {
    return {
        type: ORDER_DOGS,
        payload: order
    }
}

export function home() {
    return {
        type: HOME
    }
}