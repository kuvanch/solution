import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import dataReducer from "./reducers/dataReducer";


const rootReducer = combineReducers({data: dataReducer})
export type RootState = ReturnType<typeof rootReducer>


export const store = createStore(rootReducer,applyMiddleware(thunk))