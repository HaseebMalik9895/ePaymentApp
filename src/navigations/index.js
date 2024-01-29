import React, {useEffect, useState} from 'react';
import AuthStack from './stack/AuthStack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {AppStack} from './stack/AppStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActivityIndicator, View} from 'react-native';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  const [login, setLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLoginStatus = async () => {
      try {
        const storedLogin = await AsyncStorage.getItem('login');
        if (storedLogin !== null) {
          setLogin(JSON.parse(storedLogin));
        }
      } catch (error) {
        console.error(
          'Error retrieving login status from AsyncStorage:',
          error,
        );
      } finally {
        // Set isLoading to false once the login status has been fetched
        setIsLoading(false);
      }
    };

    fetchLoginStatus();
  }, []);

  // Render loading indicator or the appropriate navigator based on login status
  if (isLoading) {
    // Render a loading indicator or splash screen
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={login ? 'AppStack' : 'AuthStack'}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="AppStack" component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const LoadingScreen = () => {
  // Customize this component to show a loading indicator or splash screen
  return (
    // Example: <ActivityIndicator size="large" color="#0000ff" />
    <View
      style={{
        backgroundColor: '#F54D4D',
        height: '100%',
        width: '100%',
      }}
    />
  );
};

export default MainStack;
