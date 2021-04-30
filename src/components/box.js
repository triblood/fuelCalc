import React from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';

const Box = ({bgColor, size, children}) => {
  return (
    <View style={[styles.wrapper, {backgroundColor: bgColor, width: size}]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 25,
    padding: 15,
    marginBottom: 15,
  },
});

Box.propTypes = {
  bgColor: PropTypes.string,
  size: PropTypes.any,
  children: PropTypes.element,
};

Box.defaultProps = {
  bgColor: '#ffffff',
  size: '100%',
  children: null,
};

export default Box;
