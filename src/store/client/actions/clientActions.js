import * as clientConstants from '../constants/clientConstants'
import axios from 'axios'

export const fetchData = (products) => {
    return {
        type: clientConstants.FETCH_DATA,
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
        axios.get("https://6067db8898f405001728f139.mockapi.io/product")
            .then((response) => {
                console.log('fetch data from clientActions', response.data)
                dispatch(fetchData(response.data))
            }).catch((error) => {
                console.log('Duongs message from clientActions', error)
                dispatch(fetchDataFailed(error))
            })
    }
}



