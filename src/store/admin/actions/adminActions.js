import * as adminConstants from '../constants/adminContants'
import axios from 'axios'

import { fetchDataRequest } from '../../client/actions/clientActions'

export const updateProductList = (id, productUpdate) => {
    return dispatch => {
        axios.put(`https://6067db8898f405001728f139.mockapi.io/product/${id + 1}`, productUpdate)
            .then(res => {
                dispatch(fetchDataRequest())
            }).catch(err => {
                console.log(err)
            })
    }
}

export const increaseItem = (product) => {
    console.log('product', product)
    return (dispatch, getState) => {
        //dispatch({ type: 'increase' })

        const { products } = getState().cRed;
        const idx = products.findIndex((item) => item.productID === product.productID);

        if (idx !== -1) {
            dispatch(updateProductList(idx, { ...product, quantity: parseInt(product.quantity) + 1 }))
            //dispatch(fetchDataRequest())
        }
        return
    }
}

export const decreaseItem = (product) => {
    console.log('product', product)
    return (dispatch, getState) => {

        const { products } = getState().cRed;
        const idx = products.findIndex((item) => item.productID === product.productID);

        if (idx !== -1) {
            dispatch(updateProductList(idx, { ...product, quantity: parseInt(product.quantity) - 1 }))
            //dispatch(fetchDataRequest())
        }
        return
    }
}

export const removeItem = (product) => {
    return (dispatch, getState) => {
        const { products } = getState().cRed;
        const idx = products.findIndex((item) => item.productID === product.productID);

        if (idx !== -1) {
            axios.delete(`https://6067db8898f405001728f139.mockapi.io/product/${idx + 1}`, product).then((response) => {
                dispatch(fetchDataRequest())
            }).catch((error) => {
                console.log(error)
            })
        }

        return
    }

}


export const addNewProduct = (newProduct) => {
    return dispatch => {
        axios.post('https://6067db8898f405001728f139.mockapi.io/product/', newProduct)
            .then((response) => {
                dispatch(fetchDataRequest())
            })
            .catch((error) => {
                console.log(error)
            })
    }
}
