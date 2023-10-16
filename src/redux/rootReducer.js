import { combineReducers } from "redux"
import { operationReducer } from "./todoapp/reducers/operations"

export const rootReducer =  combineReducers({
    operationReducer,
    // more reducers can be added here
})