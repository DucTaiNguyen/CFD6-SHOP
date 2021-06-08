import { createStore, combineReducers, applyMiddleware } from "redux";
// import counterReducer from './reducer/counterReducer'
import authReducer from "./reducer/authReducer";
import { compose } from "redux";

let reducer = combineReducers({
    // counterReducer: counterReducer,
    auth: authReducer,
});

const middleware = (store) => (next) => (action) => {
    if (typeof action === "function") {
        return action(store.dispatch);
    } else {
        next(action);
    }
};

const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const enhancer = composeEnhancers(applyMiddleware(middleware));

let store = createStore(reducer, enhancer);
export default store;