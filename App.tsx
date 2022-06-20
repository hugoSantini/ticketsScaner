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
import ScanView from './src/views/ScanView';

const App = () => {
  return(
    <ScanView/>
  );
};

const styles = StyleSheet.create({
});

export default App;
