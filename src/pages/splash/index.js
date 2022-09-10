import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {ILLogo} from '../../assets';
import {colors} from '../../utils';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from '../../firebase.config';

export default function Splash({navigation}) {
  useEffect(() => {
    const noTumpangTindih = onAuthStateChanged(auth, user => {
      setTimeout(() => {
        if (user) {
          //Lagi Login
          console.log('user : ', user);
          navigation.replace('MainApp');
        } else {
          navigation.replace('Login');
        }
      }, 3000);
    });
    return () => noTumpangTindih();
  }, [navigation]);

  return (
    <View style={styles.page}>
      <ILLogo width={300} height={100} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.primary,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
