import Relay from 'react-relay';

export default {
  viewer: Component => Relay.QL`
    query {
      User{
        edges{
          node{
            ${Component.getFragment('viewer')}
          }
        }
        
      }
        
    }
  `
};
