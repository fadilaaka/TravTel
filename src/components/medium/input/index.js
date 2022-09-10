import {StyleSheet, View, TextInput, Text} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

export default function Input({
  label,
  value,
  onChangeText,
  secureTextEntry,
  disable,
  type,
  placeholderCenter,
}) {
  if (type === 'register') {
    return (
      <View>
        <Text style={styles.labelregister}>{label}</Text>
        <TextInput
          style={styles.inputregister}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          selectTextOnFocus={!disable}
          editable={!disable}
        />
      </View>
    );
  }
  return (
    <View>
      <TextInput
        style={styles.input(placeholderCenter)}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        selectTextOnFocus={!disable}
        editable={!disable}
        placeholder={label}
        placeholderTextColor={colors.text.secondary}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: placeholderCenter => ({
    fontFamily: fonts.primary.normal,
    borderRadius: 10,
    padding: 8,
    width: 240,
    height: 40,
    backgroundColor: colors.input.primary,
    includeFontPadding: false,
    fontSize: 12,
    alignSelf: 'center',
    textAlign: placeholderCenter === 'center' ? 'center' : 'left',
  }),
  label: {
    fontFamily: fonts.primary.normal,
    fontSize: 20,
    color: colors.text.primary,
    marginBottom: 6,
  },
  inputregister: {
    borderRadius: 10,
    padding: 8,
    backgroundColor: colors.input.primary,
  },
  labelregister: {
    fontFamily: fonts.primary.normal,
    fontSize: 16,
    color: colors.text.primary,
  },
});
