import {GET_POST_DATA,SET_NAME} from "../actions/types";

const initialState={
    postsList: {},
    name: 'john'
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
        default:
            return state
    }
}

export default DataReducer