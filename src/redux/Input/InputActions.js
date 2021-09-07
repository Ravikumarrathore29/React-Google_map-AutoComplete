import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import {
    INPUT_PLACE_NAME_REQUEST,
    INPUT_PLACE_NAME_SUCCESS,
    INPUT_PLACE_NAME_FAILURE
} from './InputActionType';

export const inputPlaceNameRequest = () => {
    return {
        type: INPUT_PLACE_NAME_REQUEST
    }
}

//action creator will return an action
export const inputPlaceNameSuccess = (address,latLng ) => {
    return {
        type: INPUT_PLACE_NAME_SUCCESS,
        payload: address,
        historyAddress: latLng
    }
}

export const inputPlaceNameFailure = error => {
    return {
        type: INPUT_PLACE_NAME_FAILURE,
        payload: error
    }
}

// action creator will return another function 

export const fetchGooglePlaceAddress = ({ address }) => {
    return (dispatch) => {
        dispatch(inputPlaceNameRequest)
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                console.log('Success', latLng);
                dispatch(inputPlaceNameSuccess(address,latLng))
            })
            .catch(error => {
                console.error('Error', error);
                dispatch(inputPlaceNameFailure(error));
            });
    }
}
