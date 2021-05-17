import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';

const Input = ({onChangeText, value, placeholder, autoFocus}) => {
  return (
    <TextInputMask
      style={styles.input}
      type={'money'}
      options={{
        precision: 3,
        separator: ',',
        delimiter: '.',
        unit: 'R$',
        suffixUnit: '',
      }}
      {...{onChangeText, value, placeholder, autoFocus}}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 15,
    fontFamily: 'RobotoBold',
    fontSize: 18,
    color: '#333',
    borderRadius: 25,
    width: '100%',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
});

export default Input;
