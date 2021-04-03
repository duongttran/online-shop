import * as actionType from '../constants/cartConstants'

const initialState = {
    cart: [],
    error: false
}

const cartReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionType.GET_DATA:
            state.cart = action.cart;
            return { ...state }

        case actionType.GET_DATA_FAILED:
            return {
                ...state,
                error: true
            }

        case actionType.ADD_ITEM:
            const cartUpdate = [...state.cart];
            state.cart = cartUpdate;
            console.log("cartUpdate after add", cartUpdate)
            return { ...state }

        case actionType.CLEAR_ALL_ITEMS:
            state.cart = []
            return { ...state }

        default: return state
    }

}

export default cartReducer