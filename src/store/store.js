import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import adminReducers from './admin/reducers/adminReducers'
import clientReducers from './client/reducers/clientReducers'
import cartReducers from './client/reducers/cartReducers'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    aRed: adminReducers,
    cRed: clientReducers,
    cartReducers: cartReducers
});

//const middleware = [thunk]

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;