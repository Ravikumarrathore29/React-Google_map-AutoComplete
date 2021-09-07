import React from 'react';
import { connect } from 'react-redux';
import { showThisPlaceInMap } from '../redux'

function RecentSearchPlace({ historyLatLng, showThisPlaceInMap }) {

    function handleSelect(place) {
        showThisPlaceInMap(place);
    }

    return (
        <div id="recentSearched">
            <h6>Recent Search Places</h6>
            <hr />
        <div>
            {historyLatLng && historyLatLng.map(place =><p  onClick={(e)=>{handleSelect(place)}}>{place}</p>)}
        </div>
        </div>
    )
}



const mapStateToProps = state => {
    return {
        recentPlaces: state.userInput.historyLatLng
    }
}

const mapDispatchToProps = dispatch => {
    return {
        showThisPlaceInMap: () => dispatch(showThisPlaceInMap())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecentSearchPlace);
