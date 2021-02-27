import React, { useState } from 'react';
import * as Font from 'expo-font';
import Home from './screens/home';
import AppLoading from 'expo-app-loading';

const getFonts = () => Font.loadAsync({
  'futura-book': require('./assets/fonts/Futura Book font.ttf'),
  'futura-medium': require('./assets/fonts/futura medium condensed bt.ttf')
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return (
      <Home />
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onError={() => { console.log('error!!') }}
        onFinish={() => setFontsLoaded(true)} />
    );
  }
}

