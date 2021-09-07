import React , {Suspense} from 'react';
const GoogleMapContainer = React.lazy(() => import('./GoogleMapContainer')); // Lazy-loaded

function GoogleMapContainerLazyLoad() {
    return (
      <Suspense fallback={<h1>Loading profile...</h1>}>
        <GoogleMapContainer />
      </Suspense>
    );
  }

  export default GoogleMapContainerLazyLoad