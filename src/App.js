import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from './screen/login/Login';
import Register from './screen/register/Register';
import Beranda from './screen/beranda/Beranda';
import SplashScreen from './screen/splashscreen/SplashScreen'

export default function App() {
  const Stack = createNativeStackNavigator();

  return ( 
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          statusBarColor: '#1e42a0',
          // statusBarTranslucent: true,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Beranda" component={Beranda} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

