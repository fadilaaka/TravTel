import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Gap} from '../../components';
import {colors, fonts} from '../../utils';
import {signOut} from 'firebase/auth';
import {auth} from '../../firebase.config';
import {showError, showSuccess} from '../../utils/showMessage';

export default function Profile({navigation}) {
  const pressSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('Success Sign Out');
        navigation.replace('Login');
        showSuccess('Sign Out Success');
      })
      .catch(error => {
        showError(error.code);
      });
  };

  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <Image style={styles.avatar} source={profile.photo} />
        <Text style={styles.name}>{profile.fullName}</Text> */}
        <TouchableOpacity
          style={styles.container}
          onPress={() => navigation.navigate('ListBooking')}>
          <View style={styles.content}>
            <Text style={styles.name}>Booking</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container} onPress={null}>
          <View style={styles.content}>
            <Text style={styles.name}>Edit Profile</Text>
          </View>
        </TouchableOpacity>
        <Gap height={16} />
        <TouchableOpacity style={styles.container} onPress={pressSignOut}>
          <View style={styles.content}>
            <Text style={styles.name}>Logout</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {flex: 1, margin: 4},
  avatar: {
    width: 160,
    height: 160,
    borderRadius: 160 / 2,
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    textAlign: 'center',
  },
});
