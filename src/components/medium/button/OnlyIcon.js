import {TouchableOpacity} from 'react-native';
import React from 'react';
import {IcBackHeader} from '../../../assets';

export default function OnlyIcon({onPress, icon}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <IcBackHeader />
    </TouchableOpacity>
  );
}
