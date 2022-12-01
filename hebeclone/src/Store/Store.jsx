import {legacy_createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { reducer } from "../reducer/reducer"

let rootreducer=combineReducers({
    auth:reducer
})

export  const  store=legacy_createStore(rootreducer,applyMiddleware(thunk))