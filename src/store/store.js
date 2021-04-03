import { createStore, combineReducers, applyMiddleware } from 'redux';
//import reducer from './store/client/reducers/reducer.js'
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