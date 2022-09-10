import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Login,
  Splash,
  Register,
  Home,
  Favourite,
  Profile,
  DetailHotel,
  ListKamar,
  DetailPemesanan,
  Pembayaran,
  SuccessPayment,
  ListBooking,
  PreviewTicket,
} from '../pages';
import {BottomNavigator} from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Favorit"
        component={Favourite}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default function Router() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailHotel"
        component={DetailHotel}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ListKamar"
        component={ListKamar}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailPemesanan"
        component={DetailPemesanan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pembayaran"
        component={Pembayaran}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SuccessPayment"
        component={SuccessPayment}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ListBooking"
        component={ListBooking}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PreviewTicket"
        component={PreviewTicket}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
