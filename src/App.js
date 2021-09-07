//Gooogl map is contain 3 component 
//1st is google map only having marker for location {componenet name --GoogleMapContainerLazyLoad}
//2nd is User input , where user will search the place name ,  {compoenent name --UserInputContainer}
//by that list of place name will appear, user need to select any one of them 
//selected place name will be appear on google map 
//3rd selectd name will be save on Recent searched place {component name --RecentSearchPlace}
//on click of that again place name will appear on google map   

import './App.css';
import GoogleMapContainerLazyLoad from './NewComponent/GoogleMapContainerLazyLoad';
import UserInputContainer from './NewComponent/UserInputContainer';
import RecentSearchPlace from './NewComponent/RecentSearchPlace';
import './CSS/flex.css';
import { Provider } from 'react-redux';
import store from './redux/Store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h3>Google Map Places Auto Complete Integration</h3>
        <div className="flex-container">
          <div style={{ flexGrow: '1' }}>
            <UserInputContainer />    
            <RecentSearchPlace />        
          </div>
          <div style={{ flexGrow: '9' }}>
          <GoogleMapContainerLazyLoad />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;


