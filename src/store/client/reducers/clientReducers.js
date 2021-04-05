import * as actionType from '../constants/clientConstants'

const initialState = {
    products: [],
    loading: false,
    error: ''
}

const clientReducers = (state = initialState, action) => {

    switch (action.type) {
        case actionType.FETCH_DATA_REQUEST:
            return {
                ...state,
                loading: true
            }

        case actionType.FETCH_DATA_SUCCESS:
            return {
                ...state,
                products: action.products,
                loading: false,
                error: false
            };

        case actionType.FETCH_DATA_FAILED:
            return {
                ...state,
                loading: false,
                error: true
            }


        default:
            return state;
    }

}

export default clientReducers;

