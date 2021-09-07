
import {
    INPUT_PLACE_NAME_REQUEST,
    INPUT_PLACE_NAME_SUCCESS,
    INPUT_PLACE_NAME_FAILURE
} from './InputActionType';

const initialState = {
    address: '',
    error: '',
    loader: true,
    historyLatLng: [{
        lat: 3.1579602,
        lng: 101.7117648,
    }, {
        lat: 1.1579603,
        lng: 121.7117668,
    }]

}

const inputReducer = (state = initialState, action) => {

    switch (action.type) {
        case INPUT_PLACE_NAME_REQUEST:
            return {
                ...state,
                loader: true
            }
        case INPUT_PLACE_NAME_SUCCESS:
            return {
                ...state,
                address: action.payload,
                error: '',
                loader: false,
                historyLatLng: [...state.historyLatLng, ...action.historyAddress]
            }
        case INPUT_PLACE_NAME_FAILURE:
            return {
                ...state,
                address: '',
                error: action.payload,
                loader: false

            }
        default: return state
    }
}

export default inputReducer