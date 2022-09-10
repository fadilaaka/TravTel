import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap, Header} from '../../components';
import {colors, fonts} from '../../utils';

export default function PreviewTicket({navigation, route}) {
  const itemDetail = route.params;
  console.log(itemDetail);
  return (
    <View style={styles.page}>
      <Header title={'Tiket Booking'} onPress={() => navigation.goBack()} />
      {itemDetail.map((item, index) => {
        return (
          <View key={index} style={styles.contentList}>
            <Gap height={16} />
            <Text style={styles.SubJudul2}>{item.data.namaHotel}</Text>
            <View style={styles.containerCheckInOut}>
              <Text style={styles.contentSubTitle}>Check-in</Text>
              <Text style={styles.SubJudul}>{item.data.checkIn}</Text>
            </View>
            <View style={styles.containerCheckInOut}>
              <Text style={styles.contentSubTitle}>Check-out</Text>
              <Text style={styles.SubJudul}>{item.data.checkOut}</Text>
            </View>
            <Text style={styles.kanan}>Rp{item.data.hargaKamar}</Text>
            <Image
              source={require('../../datadummy/qr.png')}
              style={styles.image}
            />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  contentList: {
    flexDirection: 'column',
    color: colors.text.primary,
    borderBottomColor: colors.secondary,
    backgroundColor: colors.tertiary,
    borderRadius: 8,
    margin: 16,
  },
  contentSubTitle: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.text.secondary,
    marginLeft: 16,
    marginTop: 16,
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
    color: colors.primary,
    textTransform: 'capitalize',
    paddingLeft: 16,
    paddingRight: 16,
  },
  image: {
    width: '40%',
    height: undefined,
    aspectRatio: 1,
    alignSelf: 'center',
    margin: 24,
  },
  containerCheckInOut: {
    justifyContent: 'space-between',
  },
  contentTanggal: {
    fontFamily: fonts.primary.normal,
    fontSize: 16,
    color: colors.secondary,
    paddingLeft: 16,
    paddingRight: 16,
  },
  kanan: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.primary,
    textTransform: 'capitalize',
    paddingLeft: 16,
    paddingRight: 16,
    textAlign: 'right',
  },
});
