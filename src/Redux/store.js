import { createStore,combineReducers,applyMiddleware,compose } from "redux";
import { reducer } from "./Search/reducer";
const middleWare=(store)=>(next)=>(action)=>{
    if(typeof action == "function"){
      return  action(store.dispatch,store.getState)
    }
    else{
        return next(action)
    }
}

export const store=createStore(reducer,applyMiddleware(middleWare))

console.log(store.getState())