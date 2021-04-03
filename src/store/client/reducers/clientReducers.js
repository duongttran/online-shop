import * as actionType from '../constants/clientConstants'

const initialState = {
    products: [],
    error: '',
    loading: false
}

const clientReducers = (state = initialState, action) => {
    //console.log("action from clientReducers>>>", action);

    switch (action.type) {
        // case actionType.FETCH_DATA:
        //     state = action.products
        //     return [...state]
        case actionType.FETCH_DATA:
            return {
                ...state,
                products: action.products,
                error: false
            };

        case actionType.FETCH_DATA_FAILED:
            return {
                ...state,
                error: true
            }
        default:
            return state;
    }

}

export default clientReducers;

