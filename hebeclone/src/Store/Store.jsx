import {legacy_createStore} from "redux"
import { reducer } from "../reducer/reducer"

export  const  store=legacy_createStore(reducer)