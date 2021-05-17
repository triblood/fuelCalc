import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Subtitle = ({children}) => {
  return <Text style={styles.subtitle}>{children}</Text>;
};

const styles = StyleSheet.create({
  subtitle: {
    marginBottom: 15,
    fontFamily: 'RobotoLight',
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});

export default Subtitle;
