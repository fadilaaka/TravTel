import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../utils';
import {Gap, Header} from '../../components';

export default function DetailPemesanan({navigation, route}) {
  const itemDetail = route.params;
  console.log('Data dari list kamar : ', itemDetail);
  return (
    <View style={styles.page}>
      <View style={styles.contentPemesanan}>
        <Header
          title={'Detail Pemesanan'}
          onPress={() => navigation.goBack()}
        />
        <View style={styles.contentList}>
          <Image style={styles.image} source={itemDetail.fotoKamar} />
          <View style={styles.description}>
            <Text style={styles.SubJudul}>{itemDetail.namaHotel}</Text>
            <Text style={styles.contentSubTitle}>
              {itemDetail.jumlahKamar} {itemDetail.namaKamar}
            </Text>
            <Text style={styles.contentSubTitle}>
              {itemDetail.jumlahMalam} Malam . {itemDetail.jumlahTamu} Tamu
            </Text>
          </View>
        </View>
        <Gap height={16} />
        <View style={styles.containerCheckInOut}>
          <Text style={styles.contentCheckInOut}>Check-in</Text>
          <Text style={styles.contentTanggal}>{itemDetail.checkIn}</Text>
        </View>
        <View style={styles.containerCheckInOut}>
          <Text style={styles.contentCheckInOut}>Check-out</Text>
          <Text style={styles.contentTanggal}>{itemDetail.checkOut}</Text>
        </View>
        <Gap height={16} />
        <View style={styles.containerCheckInOut}>
          <Text style={styles.SubJudul2}>Total</Text>
          <Text style={styles.contentHarga}>Rp{itemDetail.hargaKamar}</Text>
        </View>
        <Gap height={16} />
        <Text style={styles.center}>Pilih Metode Pembayaran</Text>
        <Gap height={8} />
        <View style={styles.containerMetode}>
          <TouchableOpacity
            style={styles.backgroundButton}
            onPress={() => navigation.navigate('Pembayaran', itemDetail)}>
            <Text style={styles.center2}>Bank</Text>
          </TouchableOpacity>
          <Gap height={8} />
          <TouchableOpacity
            style={styles.backgroundButton}
            onPress={() => navigation.navigate('Pembayaran', itemDetail)}>
            <Text style={styles.center2}>DANA</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  contentList: {
    flexDirection: 'row',
    color: colors.text.primary,
    borderBottomColor: colors.secondary,
    backgroundColor: colors.tertiary,
    borderRadius: 8,
  },
  image: {
    width: '40%',
    height: undefined,
    aspectRatio: 1,
    borderRadius: 8,
  },
  description: {
    flex: 1,
    flexDirection: 'column',
  },
  contentPemesanan: {
    margin: 16,
  },
  SubJudul: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.primary,
    textTransform: 'capitalize',
    paddingLeft: 16,
    paddingRight: 16,
  },
  SubJudul2: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.secondary,
    textTransform: 'capitalize',
    paddingLeft: 16,
    paddingRight: 16,
  },
  contentTitle: {
    fontFamily: fonts.primary[700],
    fontSize: 20,
    marginBottom: 8,
    color: colors.text.primary,
  },
  contentSubTitle: {
    fontFamily: fonts.primary[600],
    fontSize: 12,
    color: colors.text.secondary,
    paddingLeft: 16,
    paddingRight: 16,
  },
  contentCheckInOut: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.secondary,
    paddingLeft: 16,
    paddingRight: 16,
  },
  containerCheckInOut: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentTanggal: {
    fontFamily: fonts.primary.normal,
    fontSize: 16,
    color: colors.secondary,
    paddingLeft: 16,
    paddingRight: 16,
  },
  contentHarga: {
    fontFamily: fonts.primary[500],
    fontSize: 20,
    color: colors.secondary,
    paddingLeft: 16,
    paddingRight: 16,
  },
  center: {
    textAlign: 'center',
    fontFamily: fonts.primary[600],
    fontSize: 28,
    color: colors.quartiary,
  },
  center2: {
    textAlign: 'center',
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.primary,
  },
  containerMetode: {
    alignItems: 'center',
    alignSelf: 'center',
    width: '50%',
  },
  backgroundButton: {
    backgroundColor: colors.secondary,
    width: 280,
    borderRadius: 8,
  },
});
