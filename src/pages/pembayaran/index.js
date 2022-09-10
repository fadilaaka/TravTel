import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../utils';
import {Gap} from '../../components';
import {ref, set} from 'firebase/database';
import {database} from '../../firebase.config';

export default function Pembayaran({navigation, route}) {
  const itemDetail = route.params;
  console.log('Data dari detail pemesanan : ', itemDetail);
  const randomCode = length => {
    return Math.floor(
      Math.pow(10, length - 1) + Math.random() * Math.pow(10, length),
    );
  };
  const patentCode = randomCode(16).toString();

  const randomIDBooking = randomCode(9).toString();

  const writeUserData = () => {
    set(ref(database, `users/${itemDetail.uid}/data/booking/`), {
      idBooking: randomIDBooking,
      checkIn: itemDetail.checkIn,
      checkOut: itemDetail.checkOut,
      fotoKamar: {uri: itemDetail.fotoKamar},
      jumlahKamar: itemDetail.jumlahKamar,
      jumlahMalam: itemDetail.jumlahMalam,
      jumlahTamu: itemDetail.jumlahTamu,
      namaHotel: itemDetail.namaHotel,
      namaKamar: itemDetail.namaKamar,
      hargaKamar: itemDetail.hargaKamar,
      kodebayar: patentCode,
    });
    navigation.replace('SuccessPayment');
    console.log('Data sudah masuk ke firebase');
  };

  return (
    <View style={styles.page}>
      <Gap height={40} />
      <View>
        <Text style={styles.center3}>Kode Bayar</Text>
        <Text style={styles.center4}>Pembayaran via bank</Text>
      </View>
      <Gap height={40} />
      <Text style={styles.center}>{patentCode}</Text>
      <Gap height={40} />
      <TouchableOpacity style={styles.backgroundButton} onPress={writeUserData}>
        <Text style={styles.center2}>Konfirmasi Pembayaran</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  center: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: fonts.primary[600],
    fontSize: 28,
    padding: 16,
    margin: 16,
    color: colors.quartiary,
    borderWidth: 1,
    borderColor: colors.secondary,
  },
  backgroundButton: {
    backgroundColor: colors.secondary,
    width: 200,
    borderRadius: 8,
    alignItems: 'center',
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
    fontSize: 20,
    color: colors.secondary,
  },
  center4: {
    textAlign: 'center',
    fontFamily: fonts.primary[600],
    fontSize: 12,
    color: colors.secondary,
  },
});
