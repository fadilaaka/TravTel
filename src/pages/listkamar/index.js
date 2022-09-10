import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../utils';
import {Gap, Header} from '../../components';

export default function ListKamar({navigation, route}) {
  const itemDetail = route.params;
  console.log('Data dari detail hotel : ', itemDetail);
  return (
    <View style={styles.page}>
      <Header
        title={'Kamar'}
        type={'detail'}
        onPress={() => navigation.goBack()}
      />
      {itemDetail.ruanganKamar.map((item, key) => {
        return (
          <View key={key}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('DetailPemesanan', {
                  ...itemDetail,
                  namaKamar: item.namaKamar,
                  hargaKamar: item.hargaKamar,
                  fotoKamar: {uri: item.fotoKamar},
                })
              }>
              <View style={styles.contentList}>
                <Image style={styles.image} source={{uri: item.fotoKamar}} />
                <View style={styles.description}>
                  <Text style={styles.contentTitle}>{item.namaKamar}</Text>
                  <Text style={styles.contentSubTitle}>
                    Rp{item.hargaKamar}
                  </Text>
                </View>
              </View>
              <Gap height={16} />
            </TouchableOpacity>
          </View>
        );
      })}
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
    borderBottomWidth: 4,
    borderBottomColor: colors.secondary,
  },
  image: {
    width: '40%',
    height: undefined,
    aspectRatio: 1,
    marginRight: 8,
  },
  description: {
    flex: 1,
    flexDirection: 'column',
  },
  content: {
    padding: 8,
  },
  contentTitle: {
    fontFamily: fonts.primary[700],
    fontSize: 20,
    marginBottom: 8,
    color: colors.text.primary,
  },
  containerKotaStar: {
    flex: 1,
    flexDirection: 'row',
  },
  starHotel: {
    resizeMode: 'stretch',
    width: 80,
    height: 16,
    marginRight: 8,
  },
  contentKota: {
    fontFamily: fonts.primary[600],
    fontSize: 12,
    color: colors.text.primary,
  },
  desc: {
    fontFamily: fonts.primary.normal,
    fontSize: 8,
    color: colors.text.primary,
  },
  contentSubTitle: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.text.primary,
  },

  checkInOut: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  contentDate: {
    fontFamily: fonts.primary[500],
    fontSize: 20,
    marginBottom: 8,
    color: colors.text.primary,
  },
  contentKamarTamu: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTambahKurang: {
    borderRadius: 48 / 2,
    backgroundColor: colors.tertiary,
    color: 'black',
    width: 50,
    fontFamily: fonts.primary[800],
    alignItems: 'center',
    height: 50,
  },
  addMinusButton: {
    width: 40,
    height: 40,
  },
  containerButtonKetersediaan: {
    backgroundColor: colors.button.secondary.background,
    paddingVertical: 5,
    borderRadius: 12,
    width: 200,
    alignContent: 'center',
    alignSelf: 'center',
  },
  center: {
    textAlign: 'center',
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
  },
});
