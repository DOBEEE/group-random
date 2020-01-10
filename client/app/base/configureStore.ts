import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import clientInitialState from "./state";
// const rootReducer = require('./reducer.js');
import thunkMiddleware from "redux-thunk"; // 可以让 dispatch接受函数作为参数
import promiseMiddleware from "redux-promise"; // 可以让 dispatch接受promise
// import createHistory from 'history/createMemoryHistory';
import { routerReducer, routerMiddleware } from "react-router-redux";
// Apply middleware here
// ...

function configureStore(serverInitialState = {}, history) {
    const routerReducers = routerMiddleware(history); //路由
    const middleware = [promiseMiddleware, thunkMiddleware, routerReducers];
    const store = createStore(
        rootReducer,
        { ...clientInitialState, ...serverInitialState },
        compose(applyMiddleware(...middleware))
    );
    return store;
}
export default configureStore;
// export default configureStore;
