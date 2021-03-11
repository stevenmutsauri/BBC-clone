<<<<<<< HEAD
//test
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { reducer as appReducer } from './app/reducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    app: appReducer
})

const logger = (store) => (next) => (action) => {
    // console.log("Dispatching Action Logger1", action, store.getState())
    const value = next(action)

    // console.log("Now State in Logger1", store.getState());
    return value
}

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer,
    createComposer( applyMiddleware(logger, thunk))
    
)

export {store}
=======
import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunk from "redux-thunk"
import { newsReducer } from "./news/reducer";
import { weatherReducer } from "./weather/reducer"

const rootReducer = combineReducers({
    weather:weatherReducer,
    news:newsReducer
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
>>>>>>> 0fe528076295294978b8f7356ce657322eafcec5
