import React from 'react';

const MomenterContext = React.createContext(null);

export const withMomenter = Component => props => (
  <MomenterContext.Consumer>
    {momenter => <Component {...props} momenter={momenter} />}
  </MomenterContext.Consumer>
);
export default MomenterContext;