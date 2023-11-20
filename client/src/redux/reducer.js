import { FILTER_DOGS, GET_DOGS, GET_DOGS_BY_NAME, GET_DOG_BY_ID, GET_TEMPERAMENTS, HOME, ORDER_DOGS } from "./action"


let inicialState = { allDogs: [], copyAllDogs: [], allTemperaments: [], copyAllTemperaments: [] }

const rootReducer = (state = inicialState, action) => {
    switch (action.type) {
        case GET_DOGS:
            return {
                ...state,
                allDogs: action.payload,
                copyAllDogs: action.payload
            }
        case GET_DOGS_BY_NAME:
            return {
                ...state,
                allDogs: action.payload
            }
        case GET_DOG_BY_ID:
            return {
                ...state,
                allDogs: action.payload
            }
        case GET_TEMPERAMENTS:
            return {
                ...state,
                allTemperaments: action.payload,
                copyAllTemperaments: action.payload
            }
        case FILTER_DOGS:
            let filtered = []
            action.payload === "Todos"
                ? filtered = state.copyAllDogs
                : action.payload === "Api"
                    ? filtered = state.copyAllDogs.filter((dog) => dog.created === false)
                    : action.payload === "Base de datos"
                        ? filtered = state.copyAllDogs.filter((dog) => dog.created === true)
                        : filtered = state.copyAllDogs.filter((dog) => dog.temperaments?.includes(action.payload))
            return {
                ...state,
                allDogs: filtered
            }
        case ORDER_DOGS:
            let order = []
            action.payload === "A-Z"
                ? order = state.allDogs.sort((a, b) => a.name.localeCompare(b.name))
                : action.payload === "Z-A"
                    ? order = state.allDogs.sort((a, b) => b.name.localeCompare(a.name))
                    : action.payload === "Menor peso"
                        ? order = state.allDogs.sort((a, b) => a.weight.split(" - ")[0] - b.weight.split(" - ")[0])
                        : order = state.allDogs.sort((a, b) => b.weight.split(" - ")[0] - a.weight.split(" - ")[0])
            return {
                ...state,
                allDogs: order
            }
            case HOME:
                return {
                    ...state,
                    allDogs:state.copyAllDogs
                }
        default:
            return state
    }
}


export default rootReducer