import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';

const Btn = ({onPress, text}) => {
  return (
    <Pressable style={styles.btn} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    color: '#333',
    borderRadius: 25,
    width: '100%',
    backgroundColor: '#1e3470',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  text: {
    color: '#fff',
    fontFamily: 'RobotoBlack',
    fontSize: 16,
    textTransform: 'uppercase',
  },
});

export default Btn;
