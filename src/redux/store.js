import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer';
import searchReducer from './reducers/searchReducer';

const reducers = combineReducers({
    user: userReducer,
    search: searchReducer,
});

const middleware = [thunk];

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && process.env.NODE_ENV === 'development'
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : compose;

const initialState = {};
const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(...middleware)));

export default store;
