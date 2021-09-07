import {SHOW_GOOGLE_MAP} from './MapActionType';

export const showGoogleMap = placeLatLng =>{
    return {
        type: SHOW_GOOGLE_MAP,
        payload: placeLatLng
    }
}


export const showThisPlaceInMap = ({ placeLatLng }) => {
    return (dispatch) => {
        dispatch(showGoogleMap(placeLatLng))  
    }
}


