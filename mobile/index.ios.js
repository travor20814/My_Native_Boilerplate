// @flow
import {
  AppRegistry,
  AsyncStorage,
} from 'react-native';
import App, { store } from './App.js';


AsyncStorage.getItem('apnToken', (err: {
  toString: Function,
}, apnToken: ?string) => {
  if (err) {
    console.log('Fetch apnToken from AsyncStorage failed:', err.toString);
  } else if (apnToken) {
    console.log('Got apnToken from AsyncStorage.');

    // store.dispatch({
    //   type: SET_GCM_TOKEN,
    //   token: apnToken,
    // });
  }
});

AppRegistry.registerComponent('mobile', () => App);

export default App;
