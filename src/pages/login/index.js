import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {ILLogoGambarPNG} from '../../assets';
import {colors, fonts, storeData} from '../../utils';
import {Gap, Input, Link} from '../../components';
import {useDispatch} from 'react-redux';
import useForm from '../../utils/useForm';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth, database} from '../../firebase.config';
import {get, child, ref} from 'firebase/database';
import {showError} from '../../utils/showMessage';

export default function Login({navigation}) {
  const [form, setForm] = useForm({email: '', password: ''});
  const dispatch = useDispatch();

  const login = () => {
    console.log('form : ', form);
    dispatch({type: 'SET_LOADING', value: true});
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then(res => {
        dispatch({type: 'SET_LOADING', value: false});
        const dbRef = ref(database);
        console.log(res.user.uid);
        get(child(dbRef, `users/${res.user.uid}/`), 'value').then(resultDB => {
          console.log('data user: ', resultDB.val().data);
          if (resultDB.val().data) {
            storeData('user', resultDB.val().data);
            navigation.replace('MainApp');
          }
        });
        console.log('success : ', res);
      })
      .catch(error => {
        dispatch({type: 'SET_LOADING', value: false});
        showError(error.code);
        console.log('error : ', JSON.stringify(error));
      });
  };

  return (
    <ScrollView style={styles.page} showsVerticalScrollIndicator={false}>
      <Image source={ILLogoGambarPNG} style={styles.image} />
      <Gap height={24} />
      <Text style={styles.title}>Selamat Datang</Text>
      <Gap height={16} />
      <Input
        label="Email"
        value={form.email}
        onChangeText={value => setForm('email', value)}
      />
      <Gap height={16} />
      <Input
        label="Password"
        value={form.password}
        onChangeText={value => setForm('password', value)}
        secureTextEntry
      />
      <Gap height={16} />
      <View style={styles.sizeAlign}>
        <TouchableOpacity onPress={login} style={styles.backgroundButton}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </View>
      <Gap height={16} />
      <Link
        title="Belum mempunyai akun? Register"
        onPress={() => {
          navigation.navigate('Register');
          setForm('reset');
        }}
        align={'center'}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 52,
    backgroundColor: colors.primary,
    flex: 1,
  },
  image: {
    marginTop: 16,
    width: 160,
    height: 160,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  title: {
    fontFamily: fonts.primary[500],
    fontSize: 20,
    color: colors.secondary,
    textAlign: 'center',
  },
  sizeAlign: {
    width: 120,
    alignSelf: 'center',
  },
  backgroundButton: {
    backgroundColor: colors.button.secondary.background,
    paddingVertical: 5,
    borderRadius: 12,
    width: 120,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: fonts.primary[600],
    color: colors.button.primary.text,
  },
});
