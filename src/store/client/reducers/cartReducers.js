import * as actionType from '../constants/cartConstants'

const initialState = {
    cart: [],
    loading: false,
    error: false
}

const cartReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionType.GET_DATA_REQUEST:
            return {
                ...state,
                loading: true
            }

        case actionType.GET_DATA_SUCCESS:
            state.cart = action.cart;
            return {
                ...state,
                loading: false
            }

        case actionType.GET_DATA_FAILED:
            return {
                ...state,
                loading: false,
                error: true
            }

        case actionType.ADD_ITEM:
            const cartUpdate = [...state.cart];
            state.cart = cartUpdate;
          
            return {
                ...state,
                loading: true
            }


        case actionType.CLEAR_ALL_ITEMS:
            state.cart = []
            return { ...state }

        default: return state
    }

}

export default cartReducer