import {
    GET_POST_DATA,
    SET_NAME,
    GET_ALL_USERS,
    SET_SELECTED_PRODUCT
} from "../actions/types";

const initialState = {
    postsList: {},
    name: 'john',
    allUsers: [],
    selectedProduct: {},
}
const DataReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POST_DATA:
            return {
                ...state,
                postsList: action.payload
            }
        case SET_NAME:
            return {
                ...state,
                name: action.payload
            }
        case GET_ALL_USERS:
            return {
                ...state,
                allUsers: action.payload
            }
        case SET_SELECTED_PRODUCT:
            return {
                ...state,
                selectedProduct: action.payload
            }
        default:
            return state
    }
}

export default DataReducer