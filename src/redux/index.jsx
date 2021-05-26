import { createStore, combineReducers, applyMiddleware } from 'redux'

import authReducer from './reducer/authReducer'

let reducer = combineReducers({

    auth: authReducer
})

const middleware = store => next => action => {
    if (typeof action === 'function') {
        return action(store.dispatch)
    } else {
        next(action)
    }
}

let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(applyMiddleware(middleware)),)
export default store