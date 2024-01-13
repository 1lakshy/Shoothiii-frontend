/**
 * @format
 */

import TrackPlayer from 'react-native-track-player';
import { AppRegistry,StatusBar } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { store } from './store/store.js';
import { Provider } from 'react-redux';
import { playBackService } from './src/AudioSetup/MusicPlayerServices.js';

const RootComponent = () => (
  <Provider store={store}>
    <StatusBar translucent backgroundColor={'transparent'} />
    <App />
  </Provider>
);
TrackPlayer.registerPlaybackService(()=> playBackService)
AppRegistry.registerComponent(appName, () => RootComponent);


