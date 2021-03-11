import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunk from "redux-thunk"
import { weatherReducer } from "./weather/reducer"
import { reducer as appReducer } from './app/reducer'
const rootReducer = combineReducers({
    weather:weatherReducer,
    app: appReducer
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
