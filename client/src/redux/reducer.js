import { CHANGE_PAGE, CLEAN_STATE, FILTER_DOGS, GET_DOGS, GET_DOGS_BY_NAME, GET_DOG_BY_ID, GET_TEMPERAMENTS, ORDER_DOGS, POST_DOG } from "./action"


let inicialState = { allDogs: [], copyAllDogs: [], allTemperaments: [], copyAllTemperaments: [], page: 1, dogById:[], filter:"", refresh:false }

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
                dogById: action.payload
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
                allDogs: filtered,
                page: 1
            }
        case ORDER_DOGS:
            let order = []
            let arrayDogs = [...state.allDogs]
            action.payload === "A-Z"
                ? order = arrayDogs.sort((a, b) => a.name.localeCompare(b.name))
                : action.payload === "Z-A"
                    ? order = arrayDogs.sort((a, b) => b.name.localeCompare(a.name))
                    : action.payload === "Mayor peso"
                        ? order = arrayDogs.sort((a, b) => {
                            // Coloca NaN al final
                            if (isNaN(a.weight[0]) && isNaN(b.weight[0])) {
                                return 0; // Ambos son NaN, considerados iguales
                            }
                            if (isNaN(a.weight[0])) {
                                return 1; // a es NaN, b se considera mayor
                            }
                            if (isNaN(b.weight[0])) {
                                return -1; // b es NaN, a se considera mayor
                            }
                            return b.weight[0] - a.weight[0]
                        })
                        : order = arrayDogs.sort((a, b) => {
                            if (isNaN(a.weight[0]) && isNaN(b.weight[0])) {
                                return 0;
                            }
                            if (isNaN(a.weight[0])) {
                                return 1;
                            }
                            if (isNaN(b.weight[0])) {
                                return -1;
                            } return a.weight[0] - b.weight[0]
                        })
            return {
                ...state,
                allDogs: order,
                page: 1,
                filter: action.payload
            }
        case CHANGE_PAGE:
            return {
                ...state,
                page: action.payload
            }
        case CLEAN_STATE:
                return {
                    ...state,
                    dogById:[ ]
                }
        case POST_DOG:
            return {
                ...state,
                refresh: !state.refresh
            }
        default:
            return state
    }
}


export default rootReducer