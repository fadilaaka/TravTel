import {LogBox} from 'react-native';
import React from 'react';
import {Provider, useSelector} from 'react-redux';
import store from './redux/store';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import {Loading} from './components';
import FlashMessage from 'react-native-flash-message';

const MainApp = () => {
  const stateGlobal = useSelector(state => state);
  LogBox.ignoreLogs(['Setting a timer']);
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
        <FlashMessage position={'top'} />
        {stateGlobal.loading && <Loading />}
      </Provider>
    </>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}
