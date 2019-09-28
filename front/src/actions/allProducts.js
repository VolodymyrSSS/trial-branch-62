import axios from 'axios';

import {GET_ALL_PRODUCTS, GET_PRODUCTS_REQUEST} from './action';

export function getAllProducts() {
    
    return dispatch => {
        axios.get("/products/get")
        .then(res => {
            dispatch({
                type: GET_ALL_PRODUCTS,
                payload:res.data
            });
        })
        .catch(error => {
            alert(error)
        })
    };
}
