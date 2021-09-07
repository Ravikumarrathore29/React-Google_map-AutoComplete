import React from 'react';
import { connect } from 'react-redux';
import { MY_GOOGLE_API_KEY } from '../API/AllApi';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

function GoogleMapContainer(props) {
    console.log(MY_GOOGLE_API_KEY)
    return (
        <div>
            <Map google={props.google}
                initialCenter={{
                    lat: props.mapCenter.lat,
                    lng: props.mapCenter.lng
                }}
                center={{
                    lat: props.mapCenter.lat,
                    lng: props.mapCenter.lng
                }}
            >
                <Marker position={{
                    lat: props.mapCenter.lat,
                    lng: props.mapCenter.lng
                }} />
            </Map>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        mapCenter: state.googleMapData.mapCenter
    }
}

// const mapDispatchToProps = dispatch =>{
//     return{
//         showGoogleMap : () => dispatch(showGoogleMap())
//     }
// }

const WrappedContainer = GoogleApiWrapper({
    apiKey: (MY_GOOGLE_API_KEY)
})(GoogleMapContainer)


export default connect(mapStateToProps)(WrappedContainer);