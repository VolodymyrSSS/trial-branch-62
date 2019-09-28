import axios from 'axios';

import { ADD_SUBSCRIBER, CLOSE_MODAL } from './action';
import { popupValidatorOn } from './popup';

//ADD SUBSCRIBE
export function addSubscriber(email) {

    return dispatch => {
        axios.post("/subscribe/add-subscriber", { email })
            .then(res => {
                if (res.status === 200) {
                    dispatch({
                        type: ADD_SUBSCRIBER,
                        payload: res.data
                    });

                }
                //show message res.data.message
            })
            .catch((error) => {
                console.log(error);
                // if (error.response.data.message) {
                //     dispatch(popupValidatorOn(error.response.data.message));
                // } else {
                //     dispatch(popupValidatorOn(error.message));
                // }
            })
    }
}

export function closeModal() {
    return dispatch => {
        dispatch({
            type: CLOSE_MODAL,
        })
    }

}


