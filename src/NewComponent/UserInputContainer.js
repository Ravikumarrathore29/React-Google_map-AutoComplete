import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchGooglePlaceAddress } from '../redux';
import PlacesAutocomplete from 'react-places-autocomplete';

function UserInputContainer({ updatedAddress, fetchGooglePlaceAddress }) {


    const [address, setAddress] = useState('');


    function handleChange() {
        console.log('handleChang')
        let valueEnterByUser = document.getElementById('inputSearch').value
        setAddress(valueEnterByUser);
    }

    function handleSelect() {
        fetchGooglePlaceAddress(address);
    }

    // Log error status and clear dropdown when Google Maps API returns an error.
    function onError(status, clearSuggestions){
        console.log('Google Maps API returned error with status: ', status);
        var node = document.createElement("ol");
        var textnode = document.createTextNode(status);
        node.appendChild(textnode);
        document.getElementsByClassName("autocomplete-dropdown-container")[0].appendChild(node);
        clearSuggestions()
    }

    return (
        
        <PlacesAutocomplete
            value={address}
            onChange={handleChange}
            onSelect={handleSelect}
            onError={onError}
            clearItemsOnError={true}

        >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div>
                    <input id="inputSearch"
                        {...getInputProps({
                            placeholder: 'Search Places ...',
                            className: 'location-search-input',
                        })}
                    />
                    <div className="autocomplete-dropdown-container">
                        {loading && <div>Loading...</div>}
                        {suggestions.map(suggestion => {
                            const className = suggestion.active
                                ? 'suggestion-item--active'
                                : 'suggestion-item';
                            // inline style for demonstration purpose
                            const style = suggestion.active
                                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                : { backgroundColor: '#ffffff', cursor: 'pointer' };
                            return (
                                <div
                                    {...getSuggestionItemProps(suggestion, {
                                        className,
                                        style,
                                    })}
                                >
                                    <span>{suggestion.description}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </PlacesAutocomplete>
    )
}

const mapStateToProps = state => {
    return {
        updatedAddress: state.userInput.address
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchGooglePlaceAddress: () => dispatch(fetchGooglePlaceAddress())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInputContainer);