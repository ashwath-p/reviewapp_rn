import React, { useState } from 'react';
import * as Font from 'expo-font';
import Home from './screens/home';
import AppLoading from 'expo-app-loading';

const getFonts = () => Font.loadAsync({
  'Nunito-Regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf'),
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

