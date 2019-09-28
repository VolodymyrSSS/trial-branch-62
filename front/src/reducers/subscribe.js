import { ADD_SUBSCRIBER, CLOSE_MODAL } from '../actions/action';

export const initialState = {
    subscriber: {},
    loading: false,
    isModalOpen: false
};

export function subscribeReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_SUBSCRIBER:
            return {
                ...state,
                subscriber: {
                    ...state.subscriber,
                    ...action.payload
                },
                isModalOpen: true
            }
        case CLOSE_MODAL:
            return {
                ...state,
                isModalOpen: false
            }
        default:
            return state
    }
}