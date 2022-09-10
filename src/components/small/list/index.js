import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

export default function List({desc}) {
  return (
    <View>
      <Text style={styles.contentList}>
        {'\u2B24' + ' '}
        {desc}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contentList: {
    fontFamily: fonts.primary.normal,
    fontSize: 12,
    color: colors.text.primary,
  },
});
