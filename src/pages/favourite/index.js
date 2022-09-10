import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../utils';

export default function Favourite() {
  return (
    <View style={styles.page}>
      <Text style={styles.center3}>Favourite</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  center3: {
    textAlign: 'center',
    fontFamily: fonts.primary[600],
    fontSize: 40,
    color: colors.secondary,
  },
});
