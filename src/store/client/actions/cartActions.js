import * as cartConstants from '../constants/cartConstants'
import axios from 'axios'


export const getDataSuccess = (cart) => {
    return {
        type: cartConstants.GET_DATA_SUCCESS,
        cart
    }
}

export const getDataFailed = () => {
    return {
        type: cartConstants.GET_DATA_FAILED
    }
}

export const getDataRequest = () => {
    
    return dispatch => {
        dispatch({type: cartConstants.GET_DATA_REQUEST})
        axios.get("https://6067db8898f405001728f139.mockapi.io/cart")
            .then((response) => {
                dispatch(getDataSuccess(response.data))
                console.log("cart from getDataRequest", response.data)
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
    console.log('product', product)
    return (dispatch, getState) => {

        const { cart } = getState().cartReducers;
        const object = cart.find((item) => item.productID === product.productID);

        if (object === undefined) {
            console.log("didn't found object, product added")
            axios.post('https://6067db8898f405001728f139.mockapi.io/cart/', product)
                .then((response) => {

                    dispatch(getDataRequest())
                }).catch((error) => {
                    console.log(error)
                })
        } else {
            console.log("object found! increase quantity!")
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
    console.log('product', product)
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
    console.log('product', product)
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


