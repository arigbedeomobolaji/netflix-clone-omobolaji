import { SAVE_EMAIL_ERROR, SAVE_EMAIL_REQUEST, SAVE_EMAIL_SUCCESS } from "../constants/signup"

export const saveEmailReducer = (state = {loading: true}, action) => {
  switch(action.type){
    case SAVE_EMAIL_REQUEST:
      return {
        loading: true
      }
    case SAVE_EMAIL_SUCCESS:
      return {
        loading: false,
        email: action.payload
      }
    case SAVE_EMAIL_ERROR:
      return {
        loading: false,
        error: action.payload
      }
    default: 
      return state
  }
}