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
