import React from 'react';

const GeoContext = React.createContext(null);

export const withGeo = Component => props => (
  <GeoContext.Consumer>
    {geo => <Component {...props} geo={geo} />}
  </GeoContext.Consumer>
);

export default GeoContext;