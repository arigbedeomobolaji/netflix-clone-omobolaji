import { SAVE_EMAIL_ERROR, SAVE_EMAIL_REQUEST, SAVE_EMAIL_SUCCESS } from "../constants/signup"

export const saveEmailAction = (email) => {
  return (dispatch) => {
    dispatch({type: SAVE_EMAIL_REQUEST})
    if(email){
      dispatch({type: SAVE_EMAIL_SUCCESS, payload: email})
    }else{
      dispatch({type: SAVE_EMAIL_ERROR, payload: "invalid Email Address."})
    }
  }
}