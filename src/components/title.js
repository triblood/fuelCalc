import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Title = ({children, color}) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    marginBottom: 15,
    fontFamily: 'RobotoBold',
    fontSize: 18,
    color: '#333',
  },
});

export default Title;
