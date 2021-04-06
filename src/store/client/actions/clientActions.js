import * as clientConstants from '../constants/clientConstants'
import axios from 'axios'

export const fetchDataSuccess = (products) => {
    return {
        type: clientConstants.FETCH_DATA_SUCCESS,
        products
    }
}

export const fetchDataFailed = (error) => {
    return {
        type: clientConstants.FETCH_DATA_FAILED,
        error
    }
}

export const fetchDataRequest = () => {
    return dispatch => {
        dispatch({ type: clientConstants.FETCH_DATA_REQUEST })
        axios.get("https://6067db8898f405001728f139.mockapi.io/product")
            .then((response) => {
                console.log('fetch data from clientActions', response.data)
                dispatch(fetchDataSuccess(response.data))
            }).catch((error) => {
                console.log('Duongs message from clientActions', error)
                dispatch(fetchDataFailed(error))
            })
    }
}



