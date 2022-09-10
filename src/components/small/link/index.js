import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

export default function Link({title, size, align, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text(size, align)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: (size, align) => ({
    fontSize: size,
    fontFamily: fonts.primary.normal,
    color: colors.text.tertiary,
    textDecorationLine: 'underline',
    textAlign: align,
  }),
});
