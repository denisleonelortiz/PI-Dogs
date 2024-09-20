import axios from 'axios'
import {dogIns} from '../api/apiInstance.js'


export const GET_DOGS = "GET_DOGS"
export const GET_DOGS_BY_NAME = "GET_DOGS_BY_NAME"
export const GET_DOG_BY_ID = "GET_BY_ID"
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS"
export const SET_TEMPERAMENTS = "SET_TEMPERAMENTS"
export const FILTER_DOGS = "FILTER_DOGS"
export const ORDER_DOGS = "ORDER_DOGS"
export const CHANGE_PAGE = "CHANGE_PAGE"
export const CLEAN_STATE = "CLEAN_STATE"



export function getAllDogs() {
    return async function (dispatch) {
        try {
            const { data } = await dogIns.get("/dogs")
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
            const { data } = await dogIns.get(`/dogs?name=${name}`)
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

export function getDogById(dog) {
    return async function (dispatch) {
        try {
            // const { data } = await axios(`http://localhost:3001/dogs/${id}`)
            return dispatch({
                type: GET_DOG_BY_ID,
                payload: dog
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function getTemperaments() {
    return async function (dispatch) {
        try {
            const { data } = await dogIns.get(`/temperaments`)
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

export function changePage(numPage) {
    return {
        type: CHANGE_PAGE,
        payload: numPage
    }
}

export function cleanState () {
    return {
        type: CLEAN_STATE,
    }
}
