import axios from 'axios'

import { fetchDataRequest } from '../../client/actions/clientActions'

export const updateProductList = (id, productUpdate) => {
    return dispatch => {
        axios.put(`https://6067db8898f405001728f139.mockapi.io/product/${id}`, productUpdate)
            .then(res => {
                dispatch(fetchDataRequest())
            }).catch(err => {
                console.log(err)
            })
    }
}

export const increaseItem = (product) => {
 
    return (dispatch, getState) => {

        const { products } = getState().cRed;
        const object = products.find((item) => item.productID === product.productID);

        if (object !== undefined) {
            const idx = object.id
            dispatch(updateProductList(idx, { ...product, quantity: parseInt(object.quantity) + 1 }))
        }
        return
    }
}

export const decreaseItem = (product) => {
  
    return (dispatch, getState) => {
        //dispatch({ type: 'increase' })
        const { products } = getState().cRed;
        const object = products.find((item) => item.productID === product.productID);

        if (object !== undefined) {
            const idx = object.id
            dispatch(updateProductList(idx, { ...product, quantity: parseInt(object.quantity) - 1 }))
        }
        return
    }
}

export const removeItem = (product) => {
    return (dispatch, getState) => {
        const { products } = getState().cRed;
        const object = products.find((item) => item.productID === product.productID);

        if (object !== undefined) { 
            const idx = object.id
            axios.delete(`https://6067db8898f405001728f139.mockapi.io/product/${idx}`, product).then((response) => {
                dispatch(fetchDataRequest())
            }).catch((error) => {
                console.log(error)
            })
        }
        return
    }
}

export const addNewProduct = (newProduct) => {
    return (dispatch, getState) => {
        const { products } = getState().cRed;
        const object = products.find((item) => item.productID === newProduct.productID);

        if (object === undefined) {
            axios.post('https://6067db8898f405001728f139.mockapi.io/product/', newProduct)
            .then((response) => {
                dispatch(fetchDataRequest())
                alert(`A product has been added`)
            })
            .catch((error) => {
                console.log(error)
            })
        } else {
            alert("Please put another product ID. This product has already been in the list.")
        }
    }
}

// export const addNewProduct = (newProduct) => {
//     return dispatch => {
//         axios.post('https://6067db8898f405001728f139.mockapi.io/product/', newProduct)
//             .then((response) => {
//                 dispatch(fetchDataRequest())
//                 alert(`${newProduct.name} has been added`)
//             })
//             .catch((error) => {
//                 console.log(error)
//             })
//     }
// }

export const editProduct = (product) => {

    return (dispatch, getState) => {
        const { products } = getState().cRed;
        const object = products.find((item) => item.productID === product.productID);

        if (object !== undefined) {
            const idx = object.id
           
            dispatch(updateProductList(idx, 
                { ...product, 
                    name: product.name, 
                    image: product.image,
                    price: product.price,
                    quantity: product.quantity,
                    }))
        }
        return
    }
}

