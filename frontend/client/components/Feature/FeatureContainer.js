import Relay from 'react-relay';
import Feature from './FeatureComponent';

export default Relay.createContainer(Feature, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Feature {
            id
            name
            description
            url
      }`
  }
});
