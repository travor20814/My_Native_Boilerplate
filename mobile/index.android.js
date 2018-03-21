// @flow
import {
  AppRegistry,
  AsyncStorage,
} from 'react-native';
import App, { store } from './App.js';


AsyncStorage.getItem('gcmToken', (err: {
  toString: Function,
}, gcmToken: ?string) => {
  if (err) {
    console.log('Fetch gcmToken from AsyncStorage failed:', err.toString);
  } else if (gcmToken) {
    console.log('Got gcmToken from AsyncStorage.');

    // store.dispatch({
    //   type: SET_GCM_TOKEN,
    //   token: gcmToken,
    // });
  }
});

AppRegistry.registerComponent('mobile', () => App);

export default App;
