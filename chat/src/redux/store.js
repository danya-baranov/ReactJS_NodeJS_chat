import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from "./reducers"

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

// const middleware = [thunk]

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
    // composeEnhancers(applyMiddleware(...middleware))
);

export default store;