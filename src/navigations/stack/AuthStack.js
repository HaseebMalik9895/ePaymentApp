import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Pin from '../../screens/Auth/PIN/Pin';
import Register from '../../screens/Auth/Register/Register';
import Congratulation from '../../screens/Auth/Congratulation/Congratulation';
import Login from '../../screens/Auth/Login/Login';
import OTPCode from '../../screens/Auth/OTPCode/OTPCode';
import OnboardingScreen from '../../screens/Auth/Onboarding/OnboardingScreen';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="OnboardingScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'OnboardingScreen'} component={OnboardingScreen} />
      <Stack.Screen name={'Pin'} component={Pin} />
      <Stack.Screen name={'Register'} component={Register} />
      <Stack.Screen name={'Congratulation'} component={Congratulation} />
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen name={'OTPCode'} component={OTPCode} />
    </Stack.Navigator>
  );
};

export default AuthStack;
