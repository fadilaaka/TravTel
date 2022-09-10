import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import {
  IcFavouriteActive,
  IcFavouriteInactive,
  IcHomeActive,
  IcHomeInactive,
  IcProfileActive,
  IcProfileInactive,
} from '../../../assets';

export default function TabItem({title, active, onPress, onLongPress}) {
  const Icon = () => {
    if (title === 'Home') {
      return active ? <IcHomeActive /> : <IcHomeInactive />;
    }
    if (title === 'Favorit') {
      return active ? <IcFavouriteActive /> : <IcFavouriteInactive />;
    }
    if (title === 'Profile') {
      return active ? <IcProfileActive /> : <IcProfileInactive />;
    }
    return <IcHomeInactive />;
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  text: {
    color: colors.primary,
    fontFamily: fonts.primary[600],
    fontSize: 12,
    marginTop: 2,
  },
});
