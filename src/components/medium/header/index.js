import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../button';
import {Gap} from '../../small';
import {colors, fonts} from '../../../utils';
import {icBackHeader} from '../../../assets';

export default function Header({onPress, title, type, photo, desc}) {
  return (
    <View style={styles.container(type)}>
      <Button type="icon-only" icon={icBackHeader} onPress={onPress} />
      <Text style={styles.text(type)}>{title}</Text>
      <Gap width={24} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: type => ({
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: type === 'dark' ? colors.secondary : colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: type === 'dark' ? 30 : 0,
    borderBottomRightRadius: type === 'dark' ? 30 : 0,
  }),
  text: type => ({
    textAlign: 'center',
    flex: 1,
    fontSize: 22,
    fontFamily: fonts.primary[700],
    color: type === 'dark' ? colors.white : colors.text.primary,
    textTransform: 'capitalize',
  }),
});
