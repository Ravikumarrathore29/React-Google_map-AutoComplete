
import { SHOW_GOOGLE_MAP } from "./MapActionType"

const initialState = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    mapCenter: {
        lat: 3.1579603,
        lng: 101.7117668,
    }
}

const mapReducer = (state = initialState, action) => {

    switch (action.type) {
        case SHOW_GOOGLE_MAP:
            return {
                ...state,
                mapCenter: {
                    mapCenter: action.placeLatLng
                }
            }
        default: return state
    }
}

export default mapReducer