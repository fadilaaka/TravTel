import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../utils';
import {Gap} from '../../components';

export default function SuccessPayment({navigation}) {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.center3}>Pembayaran Berhasil</Text>
        <Gap height={40} />
        <Image
          style={styles.image}
          source={require('../../datadummy/ic-payment.png')}
        />
        <Gap height={40} />
        <TouchableOpacity
          style={styles.backgroundButton}
          onPress={() => navigation.replace('MainApp')}>
          <Text style={styles.center2}>Oke</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  container: {
    alignContent: 'center',
    alignSelf: 'center',
    padding: 40,
  },
  image: {
    width: 160,
    height: 120,
    alignSelf: 'center',
  },
  center2: {
    textAlign: 'center',
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.primary,
  },
  center3: {
    textAlign: 'center',
    fontFamily: fonts.primary[600],
    fontSize: 40,
    color: colors.secondary,
  },
  backgroundButton: {
    backgroundColor: colors.secondary,
    width: 200,
    borderRadius: 8,
    alignItems: 'center',
    alignSelf: 'center',
  },
});
