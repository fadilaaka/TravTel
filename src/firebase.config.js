import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAl0VqLhGn_EvYNYVA--dOBlD3pd75m4ug',
  authDomain: 'travtel-b9afe.firebaseapp.com',
  databaseURL:
    'https://travtel-b9afe-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'travtel-b9afe',
  storageBucket: 'travtel-b9afe.appspot.com',
  messagingSenderId: '169316631316',
  appId: '1:169316631316:web:022fd5ddc348a306a3f801',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export {auth, database};
