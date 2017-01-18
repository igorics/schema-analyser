import Relay from 'react-relay';

export default {
  viewer: Component => Relay.QL`
    query {
      Feature {
        edges{
          node{
            ${Component.getFragment('viewer')}        
          }
        }
            
      }
    }
  `
};
