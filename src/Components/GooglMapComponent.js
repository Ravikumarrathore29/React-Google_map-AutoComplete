// import React, { Component } from 'react';
// import './CSS/GoogleMapComponent.css';
// import { MY_GOOGLE_API_KEY } from '../API/AllApi';
// import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
// import PlacesAutocomplete, {
//     geocodeByAddress,
//     getLatLng,
// } from 'react-places-autocomplete';

// export class MapContainer extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             address: '',
//             showingInfoWindow: false,
//             activeMarker: {},
//             selectedPlace: {},
//             mapCenter: {
//                 lat: 3.1579603,
//                 lng: 101.7117668,
//             }
//         };
//     }

  
//     handleChange = address => {
//         this.setState({ address });
//     };

//     handleSelect = address => {
//         geocodeByAddress(address)
//             .then(results => getLatLng(results[0]))
//             .then(latLng =>{
//                 console.log('Success', latLng);
//                 this.setState({
//                     address
//                 })
//                 this.setState({
//                     mapCenter:latLng
//                 })
//             })
//             .catch(error => console.error('Error', error));
//     };

//     onError = (status, clearSuggestions) => {
    
//         console.log('Google Maps API returned error with status: ', status)
//         clearSuggestions()
//       }
       

//     render() {
//         return (
//             <div id="mapAndInput">
//                 <div className="flex-container">
//                     {/* <div style={{ flexGrow: '1' }}> */}
//                         <PlacesAutocomplete
//                             value={this.state.address}
//                             onChange={this.handleChange}
//                             onSelect={this.handleSelect}
//                             onError={this.handleSelect}
//                         >
//                             {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
//                                 <div>
//                                     <input id="inputSearch"
//                                         {...getInputProps({
//                                             placeholder: 'Search Places ...',
//                                             className: 'location-search-input',
//                                         })}
//                                     />
//                                     <div className="autocomplete-dropdown-container">
//                                         {loading && <div>Loading...</div>}
//                                         {suggestions.map(suggestion => {
//                                             const className = suggestion.active
//                                                 ? 'suggestion-item--active'
//                                                 : 'suggestion-item';
//                                             // inline style for demonstration purpose
//                                             const style = suggestion.active
//                                                 ? { backgroundColor: '#fafafa', cursor: 'pointer' }
//                                                 : { backgroundColor: '#ffffff', cursor: 'pointer' };
//                                             return (
//                                                 <div
//                                                     {...getSuggestionItemProps(suggestion, {
//                                                         className,
//                                                         style,
//                                                     })}
//                                                 >
//                                                     <span>{suggestion.description}</span>
//                                                 </div>
//                                             );
//                                         })}
//                                     </div>
//                                 </div>
//                             )}
//                         </PlacesAutocomplete>
//                     </div>
//                     <div style={{ flexGrow: '9' }}>
//                         <Map google={this.props.google}
//                             initialCenter={{
//                                 lat: this.state.mapCenter.lat,
//                                 lng: this.state.mapCenter.lng
//                             }}
//                             center={{
//                                 lat: this.state.mapCenter.lat,
//                                 lng: this.state.mapCenter.lng
//                             }}
//                         >
//                             <Marker position={{
//                                 lat: this.state.mapCenter.lat,
//                                 lng: this.state.mapCenter.lng
//                             }} />
//                         </Map>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }



// export default GoogleApiWrapper({
//     apiKey: (MY_GOOGLE_API_KEY)
// })(MapContainer)
