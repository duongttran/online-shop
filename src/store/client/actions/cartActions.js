import * as cartConstants from '../constants/cartConstants'
import axios from 'axios'

export const getDataSuccess = (cart) => {
    return {
        type: cartConstants.GET_DATA_SUCCESS,
        cart
    }
}

export const getDataFailed = (error) => {
    return {
        type: cartConstants.GET_DATA_FAILED, 
        error
    }
}

export const getDataRequest = () => {
    return dispatch => {
        dispatch({type: cartConstants.GET_DATA_REQUEST})
        axios.get("https://6067db8898f405001728f139.mockapi.io/cart")
            .then((response) => {
                dispatch(getDataSuccess(response.data))
            }).catch((error) => {
                dispatch(getDataFailed())
            })
    }
}

export const clearAllItems = () => {
    return {
        type: cartConstants.CLEAR_ALL_ITEMS,
    }
}

export const updateCart = (id, productUpdate) => {
    return dispatch => {
        axios.put(`https://6067db8898f405001728f139.mockapi.io/cart/${id}`, productUpdate)
            .then(res => {
                dispatch(getDataRequest())
            }).catch(err => {
                console.log(err)
            })
    }
}

export const addItem = (product) => {
    return (dispatch, getState) => {
        const { cart } = getState().cartReducers;
        const object = cart.find((item) => item.productID === product.productID);

        if (object === undefined) {
            axios.post('https://6067db8898f405001728f139.mockapi.io/cart/', product)
                .then((response) => {
                    dispatch(getDataRequest())
                    //alert(`${product.name} has been added to the cart`)
                }).catch((error) => {
                    console.log(error)
                })
        } else {
            const idx = object.id
            dispatch(updateCart(idx, { ...product, quantity: object.quantity + 1 }))
        }
        return
    }
}

export const removeItem = (product) => {
    return (dispatch, getState) => {
        const { cart } = getState().cartReducers;
        const object = cart.find(item => item.productID === product.productID)

        if (object !== undefined) { 
            const idx = object.id
            axios.delete(`https://6067db8898f405001728f139.mockapi.io/cart/${idx}`, product).then((response) => {
                dispatch(getDataRequest())
            }).catch((error) => {
                console.log(error)
            })
        }
        return
    }

}

export const increaseItem = (product) => {
    return (dispatch, getState) => {
        const { cart } = getState().cartReducers;
        const object = cart.find((item) => item.productID === product.productID);

        if (object !== undefined) {
            const idx = object.id
            dispatch(updateCart(idx, { ...product, quantity: object.quantity + 1 }))
            //dispatch(getDataRequest())
        }
        return
    }
}

export const decreaseItem = (product) => {
    return (dispatch, getState) => {
        const { cart } = getState().cartReducers;
        const object = cart.find((item) => item.productID === product.productID);

        if (object !== undefined) {
            const idx = object.id
            dispatch(updateCart(idx, { ...product, quantity: object.quantity - 1 }))
        }
        return
    }
}


