import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Gap, Header, Input, Loading} from '../../components';
import {colors, fonts, storeData} from '../../utils';
import {launchImageLibrary} from 'react-native-image-picker';
import {IcAddPhoto, IcNullPhotoProfile} from '../../assets';
import useForm from '../../utils/useForm';
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signOut,
} from 'firebase/auth';
import {auth, database} from '../../firebase.config';
import {ref, set} from 'firebase/database';
import {showError} from '../../utils/showMessage';

export default function Register({navigation}) {
  const [photoToDB, setPhotoToDB] = useState('');
  const [photo, setPhoto] = useState(IcNullPhotoProfile);
  const [form, setForm] = useForm({
    fullName: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const getImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: true,
        quality: 0.75,
        maxWidth: 150,
        maxHeight: 150,
      },
      response => {
        console.log('response : ', response);
        if (response.didCancel || response.error) {
          showError('Tidak memilih foto');
        } else {
          console.log('respons getImage: ', response);
          const source = {uri: response.assets[0].uri};

          setPhotoToDB(
            `data:${response.assets[0].type};base64, ${response.assets[0].base64}`,
          );
          setPhoto(source);
        }
      },
    );
  };

  const onRegister = async () => {
    console.log(form);
    if (form.password.length > 0 && form.password.length < 8) {
      showError('Password kurang dari 8 karakter');
    } else {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, form.email, form.password)
        .then(async success => {
          console.log(success.user);
          await sendEmailVerification(success.user);
          setLoading(false);
          setForm('reset');
          const data = {
            fullName: form.fullName,
            email: form.email,
            uid: success.user.uid,
            photo: photoToDB,
          };
          set(ref(database, `users/${success.user.uid}/`), {data}).then(
            console.log('Data has been stored to realtime database'),
          );
          storeData('user', data);
          navigation.navigate('Login', data);
          console.log('Register Success : ', success);
          signOut(auth)
            .then(() => {
              console.log('Automatic Sign Out from Register');
            })
            .catch(error => {
              showError(error.code);
            });
        })
        .catch(error => {
          setLoading(false);
          showError(error.code);
          console.log('error : ', error);
        });
    }
  };

  return (
    <>
      <View style={styles.page}>
        <Header onPress={() => navigation.goBack()} title="Register" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <TouchableOpacity style={styles.avatarContainer} onPress={getImage}>
              <Image style={styles.avatar} source={photo} />
              <Image style={styles.addPhoto} source={IcAddPhoto} />
            </TouchableOpacity>
            <Gap height={16} />
            <Input
              type={'register'}
              label="Nama"
              value={form.fullName}
              onChangeText={value => setForm('fullName', value)}
            />
            <Gap height={16} />
            <Input
              type={'register'}
              label="Email"
              value={form.email}
              onChangeText={value => setForm('email', value)}
            />
            <Gap height={16} />
            <Input
              type={'register'}
              label="Password"
              value={form.password}
              onChangeText={value => setForm('password', value)}
              secureTextEntry
            />
            <Gap height={20} />
            <View style={styles.sizeAlign}>
              <TouchableOpacity onPress={onRegister} style={styles.backgroundButton}>
                <Text style={styles.text}>Register</Text>
              </TouchableOpacity>            
            </View>
          </View>
        </ScrollView>
      </View>
      {loading && <Loading />}
    </>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  content: {
    padding: 40,
    paddingTop: 0,
    width: '85%',
    alignSelf: 'center',
  },
  avatarContainer: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
  },
  sizeAlign: {
    width: 120,
    alignSelf: 'center',
  },
  addPhoto: {
    position: 'absolute',
    bottom: 1,
    right: 1,
    width: 40,
    height: 40,
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
