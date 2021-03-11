import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunk from "redux-thunk"
import { reducer } from "./app/reducer";
import { newsReducer } from "./news/reducer";
import { weatherReducer } from "./weather/reducer"

const rootReducer = combineReducers({
    weather:weatherReducer,
    news:newsReducer, 
    app: reducer,
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
