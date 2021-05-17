import React, {useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import Box from './src/components/box';
import Title from './src/components/title';
import Subtitle from './src/components/subtitle';
import Input from './src/components/input';
import Btn from './src/components/button';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [useAlcool, setAlcool] = useState();
  const [useGaso, setGaso] = useState();
  const [useResult, setResult] = useState(null);

  const handleCalculate = () => {
    const alcool = parseFloat(useAlcool.replace('R$', '').replace(',', '.'));
    const gaso = parseFloat(useGaso.replace('R$', '').replace(',', '.'));
    const result = parseFloat(alcool / gaso) < 0.7 ? 'alcool' : 'gaso';
    setResult(result);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Box bgColor="#CCCCCC" size="100%">
        <Title>Calculadora de combustível</Title>
        <Subtitle>
          Digite os valores abaixo e saiba o que compensa mais para abastecer
        </Subtitle>
        <View style={styles.boxWrapper}>
          <Box bgColor="#00ff15" size="48%">
            <Title>Alcool</Title>
            <Input
              autoFocus
              value={useAlcool}
              onChangeText={valor => setAlcool(valor)}
              placeholder="R$ 0,000"
            />
          </Box>
          <Box bgColor="#ffb700" size="48%">
            <Title>Gasolina</Title>
            <Input
              placeholder="R$ 0,000"
              value={useGaso}
              onChangeText={valor => setGaso(valor)}
            />
          </Box>
        </View>
        <Btn text="Calcular" onPress={handleCalculate} />
        {useResult !== null && (
          <View style={styles.resultWrapper}>
            <Box
              bgColor={useResult === 'alcool' ? '#00ff15' : '#ffb700'}
              size="100%">
              <Title>
                Compensa mais abastecer com{' '}
                {useResult === 'alcool' ? 'Álcool' : 'Gasolina'}
              </Title>
            </Box>
          </View>
        )}
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f4f4f4',
  },
  boxWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  resultWrapper: {
    width: '100%',
    marginTop: 20,
  },
});

export default App;
