import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors, fonts} from '../../utils';
import {Gap, Header} from '../../components';
import {auth, database} from '../../firebase.config';
import {child, get, ref, remove} from 'firebase/database';

export default function ListBooking({navigation, route}) {
  const [bookingData, setBookingData] = useState([]);

  useEffect(() => {
    const dbRef = ref(database);
    get(child(dbRef, `users/${auth.currentUser.uid}`), 'value').then(
      resultDb => {
        // console.log('Data Booking : ', resultDb.val());
        const oldData = resultDb.val();
        const data = [];
        // console.log(oldData);
        Object.keys(oldData).map(key => {
          data.push({
            id: key,
            data: oldData[key].booking,
          });
        });
        // console.log('Data Booking setelah sortir : ', data);
        setBookingData(data);
      },
    );
  });
  const DeleteDataBooking = () => {
    const dbRef = ref(database);
    remove(child(dbRef, `users/${auth.currentUser.uid}/data/booking`))
      .then(del => {
        console.log('data booking telah dihapus : ', del);
      })
      .catch(error => {
        console.log(error);
      });
  };

  // console.log(bookingData);
  return (
    <View style={styles.page}>
      <Header title={'Booking Ku'} onPress={() => navigation.goBack()} />
      <Gap height={16} />
      <View>
        {bookingData.map((item, index) => {
          if (item.data === undefined) {
            return (
              <Text key={index} style={styles.Judul}>
                Booking Kosong
              </Text>
            );
          } else {
            return (
              <View key={index} style={styles.contentList}>
                <Image
                  style={styles.image}
                  source={{uri: item.data.fotoKamar.uri.uri}}
                />
                <View style={styles.description}>
                  <Text style={styles.SubJudul}>{item.data.namaHotel}</Text>
                  <Text style={styles.contentSubTitle}>
                    {item.data.jumlahKamar}x {item.data.namaKamar}
                  </Text>
                  <Text style={styles.contentSubTitle}>
                    {item.data.jumlahMalam} Malam . {item.data.jumlahTamu} Tamu
                  </Text>
                  <Gap height={28} />
                  <View style={styles.containerTombol}>
                    <TouchableOpacity
                      style={styles.backgroundButton}
                      onPress={DeleteDataBooking}>
                      <Text style={styles.center2}>Edit/Hapus</Text>
                    </TouchableOpacity>
                    <Gap height={8} />
                    <TouchableOpacity
                      style={styles.backgroundButton}
                      onPress={() =>
                        navigation.navigate('PreviewTicket', bookingData)
                      }>
                      <Text style={styles.center2}>Lihat Tiket</Text>
                    </TouchableOpacity>
                    <Gap height={8} />
                  </View>
                </View>
              </View>
            );
          }
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.primary,
    flex: 1,
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
  SubJudul: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.primary,
    textTransform: 'capitalize',
    paddingLeft: 16,
    paddingRight: 16,
  },
  Judul: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.secondary,
    textTransform: 'capitalize',
    paddingLeft: 16,
    paddingRight: 16,
    textAlign: 'center',
  },
  contentSubTitle: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.text.secondary,
    paddingLeft: 16,
    paddingRight: 16,
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
});
