import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  Text,
} from 'react-native';

import Box from './src/components/box';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Box bgColor="#ff0000" size="100%">
        <Text style={styles.teste}>Teste</Text>
      </Box>
      <Box bgColor="#ffcc00" size="100%">
        <Text>Teste 2</Text>
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    padding: 15,
  },
  teste: {
    fontFamily: 'RobotoThin',
  },
});

export default App;
