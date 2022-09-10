import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';

export default function Loading() {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size="large" color={colors.text.primary} />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.text.secondary,
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 20,
    color: colors.text.primary,
  },
});
