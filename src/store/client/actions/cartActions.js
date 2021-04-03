import * as cartConstants from '../constants/cartConstants'
import axios from 'axios'


export const getData = (cart) => {
    return {
        type: cartConstants.GET_DATA,
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
        axios.get("https://6067db8898f405001728f139.mockapi.io/cart")
            .then((response) => {
                dispatch(getData(response.data))
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
        axios.put(`https://6067db8898f405001728f139.mockapi.io/cart/${id + 1}`, productUpdate)
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
        //dispatch({ type: 'Start' })

        const { cart } = getState().cartReducers;
        const idx = cart.findIndex((item) => item.productID === product.productID);

        if (idx !== -1) {
            dispatch(updateCart(idx, { ...product, quantity: parseInt(product.quantity) + 1 }))
            //dispatch(getDataRequest())
        } else {
            axios.post('https://6067db8898f405001728f139.mockapi.io/cart/', product)
                .then((response) => {
                    dispatch(getDataRequest())
                }).catch((error) => {
                    console.log(error)
                })
        }

        /* if (idx === -1) {
            axios.post('https://6067db8898f405001728f139.mockapi.io/cart/', product)
                .then((response) => {
                    dispatch(getDataRequest())
                }).catch((error) => {
                    console.log(error)
                })
        } else {
            axios.put(`https://6067db8898f405001728f139.mockapi.io/cart/${idx} `, { ...product, quantity: parseInt(product.quantity) + 1 })
                .then((response) => {
                    dispatch(getData(response.data))
                }).catch((error) => {
                    console.log(error)
                })
        } */

        return
    }
}

export const removeItem = (product) => {
    return (dispatch, getState) => {
        const { cart } = getState().cartReducers;
        const idx = cart.findIndex(item => item.productID === product.productID)

        if (idx !== -1) {
            axios.delete(`https://6067db8898f405001728f139.mockapi.io/cart/${idx + 1}`, product).then((response) => {
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
        //dispatch({ type: 'increase' })

        const { cart } = getState().cartReducers;
        const idx = cart.findIndex((item) => item.productID === product.productID);

        if (idx !== -1) {
            dispatch(updateCart(idx, { ...product, quantity: parseInt(product.quantity) + 1 }))
            //dispatch(getDataRequest())
        }
        return
    }
}

export const decreaseItem = (product) => {
    console.log('product', product)
    return (dispatch, getState) => {
        //dispatch({ type: 'decrease' })

        const { cart } = getState().cartReducers;
        const idx = cart.findIndex((item) => item.productID === product.productID);

        if (idx !== -1) {
            dispatch(updateCart(idx, { ...product, quantity: parseInt(product.quantity) - 1 }))
            //dispatch(getDataRequest())
        }
        return
    }
}


