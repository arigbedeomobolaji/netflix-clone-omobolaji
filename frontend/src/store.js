import { createStore, compose, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import { fetchDataReducer } from "./fetchDataReducer"
import { saveEmailReducer } from "./reducers/signupReducers"

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 

const initialState = {}

const reducer = combineReducers({
  fetchData: fetchDataReducer,
  saveEmail: saveEmailReducer
})

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store