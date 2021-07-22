import {
  GET_POST_DATA,
  SET_NAME,
  GET_ALL_USERS
} from "../actions/types";
import axios from 'axios'
import {baseURL} from '../../common/constant';

export const getData = () => dispatch =>{
      // Initial action dispatched
      // Return promise with success and failure actions
      return axios.get(`${baseURL}posts`).then(  
        user => dispatch({ type: GET_POST_DATA,  payload: user.data }),
        // err => dispatch({ type: GET_CURRENT_USER_FAILURE, err })
      );
};
  
export const setName = (payload) => {
  return (dispatch)=>{
    dispatch({type:SET_NAME,payload})
  }
}

export const getAllUsers = () => dispatch => {
  return axios.get(`${baseURL}users`).then(
    users => {
      console.log(users, `users in action`);
      return dispatch({ type: GET_ALL_USERS, payload: users} )
    }
  )
}