import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { CalculatorScreen } from './src/screens/CalculatorScreen';
import { styles } from './src/theme/appTheme';

const App = () => (
  <SafeAreaView style={styles.background}>
    <StatusBar barStyle="light-content" />
    <CalculatorScreen />
  </SafeAreaView>
);

export default App;
