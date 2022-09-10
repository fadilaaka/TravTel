import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors, fonts, getData} from '../../utils';
import {IcMaps, IcNullPhotoProfile} from '../../assets';
import {Gap, Input} from '../../components';
import {DataHotel} from '../../datadummy';
import {auth} from '../../firebase.config';

export default function Home({navigation}) {
  const [profile, setProfile] = useState({
    photo: IcNullPhotoProfile,
    fullName: '',
  });

  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      data.photo = {uri: res.photo};
      setProfile(res);
    });
  });

  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topBar}>
          <Image source={profile.photo} style={styles.avatar} />
          <View>
            <Text style={styles.name}>{profile.fullName}</Text>
          </View>
        </View>
        <Gap height={8} />
        <Input label="Search" placeholderCenter={'center'} />
        <Gap height={16} />
        <Text style={styles.SubJudul}>Top Hotel</Text>
        <Gap height={8} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.topHotel}>
            {DataHotel.map(item => {
              return (
                <TouchableOpacity
                  key={item.id}
                  style={styles.card}
                  onPress={() =>
                    navigation.navigate('DetailHotel', {
                      ...item,
                      uid: auth.currentUser.uid,
                    })
                  }>
                  <Image
                    source={{uri: item.photoHotel}}
                    style={styles.imageCard}
                  />
                  <View style={styles.cardContent}>
                    <Text style={styles.cardTitle}>{item.namaHotel}</Text>
                    <View style={styles.lokasiKota}>
                      <IcMaps height={16} width={16} />
                      <Text style={styles.cardKota}>{item.kotaHotel}</Text>
                    </View>
                    <Text style={styles.cardHarga}>Rp{item.hargaHotel}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
        <Gap height={16} />
        <Text style={styles.SubJudul}>Nearby Hotel</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  topBar: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 20,
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    marginRight: 12,
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary.normal,
    color: colors.tertiary,
    textTransform: 'capitalize',
  },
  SubJudul: {
    fontSize: 24,
    fontFamily: fonts.primary[600],
    color: colors.tertiary,
    textTransform: 'capitalize',
    paddingLeft: 16,
    paddingRight: 16,
  },
  topHotel: {
    flexDirection: 'row',
    paddingLeft: 16,
    paddingRight: 8,
  },
  card: {
    backgroundColor: colors.secondary,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 16,
    width: 180,
    height: 288,
  },
  imageCard: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardContent: {
    padding: 8,
  },
  cardTitle: {
    fontFamily: fonts.primary[700],
    fontSize: 12,
    marginBottom: 8,
  },
  cardKota: {
    fontFamily: fonts.primary.normal,
    fontSize: 8,
  },
  lokasiKota: {
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: fonts.primary.normal,
    fontSize: 8,
    marginBottom: 8,
  },
  cardHarga: {
    fontFamily: fonts.primary[600],
    fontSize: 12,
    marginBottom: 8,
  },
});
