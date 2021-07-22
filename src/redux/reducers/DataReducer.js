import {
    GET_POST_DATA,
    SET_NAME,
    GET_ALL_USERS} from "../actions/types";

const initialState={
    postsList: {},
    name: 'john',
    allUsers:[],
}
const DataReducer = (state = initialState,action) =>{
    switch(action.type){
        case GET_POST_DATA :
             return{
                ...state,
                postsList:action.payload
             }
             case SET_NAME :
             return{
                ...state,
                name:action.payload
             }
             case GET_ALL_USERS :
                 return{
                     ...state,
                     allUsers:action.payload
                 }
        default:
            return state
    }
}

export default DataReducer