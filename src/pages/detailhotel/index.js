import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {colors, fonts} from '../../utils';
import {Button, Gap, Header, Loading} from '../../components';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import {IcAddPhoto, IcMinusButton} from '../../assets';

export default function DetailHotel({navigation, route}) {
  const itemDetail = route.params;
  console.log('Data dari Home : ', itemDetail);
  // const [loading, setLoading] = useState(false);

  const [dateCheckIn, setDateCheckIn] = useState(new Date());
  const [dateCheckOut, setDateCheckOut] = useState(new Date());

  const onChangeCheckIn = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDateCheckIn(currentDate);
  };
  const onChangeCheckOut = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDateCheckOut(currentDate);
  };

  const showModeCheckIn = currentMode => {
    DateTimePickerAndroid.open({
      value: dateCheckIn,
      onChange: onChangeCheckIn,
      mode: currentMode,
      is24Hour: true,
      locale: 'id-ID',
    });
  };
  const showModeCheckOut = currentMode => {
    DateTimePickerAndroid.open({
      value: dateCheckOut,
      onChange: onChangeCheckOut,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDateCheckIn = () => {
    showModeCheckIn('date');
  };

  const showDateCheckOut = () => {
    showModeCheckOut('date');
  };

  const [countKamar, setCountKamar] = useState(1);
  const [countTamu, setCountTamu] = useState(1);

  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  function dateDiffInDays(a, b) {
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  }
  const a = new Date(dateCheckIn.toLocaleDateString());
  const b = new Date(dateCheckOut.toLocaleDateString());
  const diffDate = dateDiffInDays(a, b);
  console.log(diffDate);

  const form = {
    id: itemDetail.id,
    namaHotel: itemDetail.namaHotel,
    checkIn: dateCheckIn.toDateString(),
    checkOut: dateCheckOut.toDateString(),
    jumlahKamar: countKamar,
    jumlahTamu: countTamu,
    jumlahMalam: diffDate,
    ruanganKamar: itemDetail.ruanganKamar,
    uid: itemDetail.uid,
  };

  // console.log('Data tadi dikirim : ', itemDetail);
  return (
    <>
      <View style={styles.page}>
        <Header
          title={'Detail'}
          type={'detail'}
          onPress={() => navigation.goBack()}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image style={styles.image} source={{uri: itemDetail.photoHotel}} />
          <View style={styles.content}>
            <Text style={styles.contentTitle}>{itemDetail.namaHotel}</Text>
            <View style={styles.containerKotaStar}>
              <Image
                style={styles.starHotel}
                source={itemDetail.bintangHotel}
              />
              <Text style={styles.contentKota}>{itemDetail.kotaHotel}</Text>
            </View>
            <Text style={styles.desc}>{itemDetail.deskripsiHotel}</Text>
            <Gap height={16} />
            <View>
              <Text style={styles.contentSubTitle}>Fasilitas Umum</Text>
              {itemDetail.fasilitasUmum.map((item, index) => {
                return (
                  <Text key={index} style={styles.contentList}>
                    {'\u2B24' + ' '}
                    {item}
                  </Text>
                );
              })}
            </View>
            <Gap height={16} />
            <View>
              <Text style={styles.contentSubTitle}>Pelayanan</Text>
              {itemDetail.layananHotel.map((item, index) => {
                return (
                  <Text key={index} style={styles.contentList}>
                    {'\u2B24' + ' '}
                    {item}
                  </Text>
                );
              })}
            </View>
            <Gap height={16} />
            <View>
              <Text style={styles.contentSubTitle}>Olahraga Spa Rekreasi</Text>
              {itemDetail.olahragaSpaRekreasi.map((item, index) => {
                return (
                  <Text key={index} style={styles.contentList}>
                    {'\u2B24' + ' '}
                    {item}
                  </Text>
                );
              })}
            </View>
            <Gap height={16} />
            <Text style={styles.contentSubTitle}>Pemesanan Kamar</Text>
            <View style={styles.checkInOut}>
              <Button
                type={'secondary'}
                onPress={showDateCheckIn}
                title="Check-In"
              />
              <Gap width={16} />
              <Text style={styles.contentDate}>
                {dateCheckIn.toDateString()}
              </Text>
            </View>
            <Gap height={16} />
            <View style={styles.checkInOut}>
              <Button
                type={'secondary'}
                onPress={showDateCheckOut}
                title="Check-Out"
              />
              <Gap width={16} />
              <Text style={styles.contentDate}>
                {dateCheckOut.toDateString()}
              </Text>
            </View>
            <Gap height={8} />
            <View style={styles.contentKamarTamu}>
              <Text style={styles.contentSubTitle}>{countKamar} Kamar</Text>
              <Gap width={16} />
              <TouchableOpacity
                onPress={() =>
                  setCountKamar(prevCount => Math.max(prevCount - 1, 1))
                }>
                <Image style={styles.addMinusButton} source={IcMinusButton} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setCountKamar(prevCount => prevCount + 1)}>
                <Image style={styles.addMinusButton} source={IcAddPhoto} />
              </TouchableOpacity>
            </View>
            <Gap height={8} />
            <View style={styles.contentKamarTamu}>
              <Text style={styles.contentSubTitle}>{countTamu} Tamu</Text>
              <Gap width={16} />
              <TouchableOpacity
                onPress={() =>
                  setCountTamu(prevCount => Math.max(prevCount - 1, 1))
                }>
                <Image style={styles.addMinusButton} source={IcMinusButton} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setCountTamu(prevCount => prevCount + 1)}>
                <Image style={styles.addMinusButton} source={IcAddPhoto} />
              </TouchableOpacity>
            </View>
            <Gap height={16} />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ListKamar', form);
              }}
              style={styles.containerButtonKetersediaan}>
              <Text style={styles.center}>Cek Ketersediaan Kamar</Text>
            </TouchableOpacity>
            <Gap height={16} />
          </View>
        </ScrollView>
      </View>
      {/* {loading && <Loading />} */}
    </>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
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
  contentList: {
    fontFamily: fonts.primary.normal,
    fontSize: 12,
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
    width: 260,
    alignContent: 'center',
    alignSelf: 'center',
    padding: 8,
  },
  center: {
    textAlign: 'center',
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
    fontSize: 20,
  },
});
