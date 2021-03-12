
import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunk from "redux-thunk"
import { newsReducer } from "./news/reducer";
import { weatherReducer } from "./weather/reducer"
import { reducer as appReducer } from './app/reducer'

import {loginDataSet} from './Auth/Reducer'
import {reducer as searchReducer} from "./Search/reducer"
import { reducer } from "./worklife/reducer";

const rootReducer = combineReducers({
    weather:weatherReducer,
    search:searchReducer,
    app: appReducer,
    news:newsReducer,
    work:reducer,
    login:loginDataSet

  

})

let composeEnhancers = compose;

if (process.env.NODE_ENV !== "production") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
}

const enhancer = composeEnhancers(applyMiddleware(thunk));

// const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer,enhancer)

