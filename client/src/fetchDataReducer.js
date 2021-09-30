// jshint ignore:start
export const fetchDataReducer = (state = {loading: true}, action) => {
  switch(action.type){
    case "FETCH_DATA_REQUEST":
      return {
        loading: true
      }
    case "FETCH_DATA_SUCCESS":
      return {
        loading: false,
        data: action.payload
      }
    case "FETCH_DATA_ERROR":
      return{
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}