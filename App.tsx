import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HomeView from './src/views/HomeView';
import LoginView from './src/views/LoginView';

const App = () => {
  return(
    <LoginView/>
  );
};

const styles = StyleSheet.create({


});

export default App;
