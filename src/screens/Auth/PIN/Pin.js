import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import AppTextInput from '../../../components/AppTextInput/AppTextInput';
import {Appheader} from '../../../components/Appheader/Appheader';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Pin = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    axios.defaults.baseURL = 'http://192.168.1.44:4000/';
    try {
      await AsyncStorage.setItem('login', "true");
      console.log('Data successfully saved');
      const response = await axios.post('login', {
        email: email,
        password: password,
      });
      if (response.status === 200) {
        navigation.navigate('AppStack', {screen: 'MyTabs'});
      }
      console.log('Login successful', response.data);
    } catch (error) {
      console.log('An error occurred', error);
    }
  };

 

  return (
    <View
      style={{
        flex: 1,
      }}>
      <Appheader title={'Login'} />

      <View
        style={{
          width: '100%',
          marginTop: 10,
        }}>
        <AppTextInput
          name={'Email'}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <AppTextInput
          name={'Password'}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Register')}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: '#000',
              textDecorationLine: 'underline',
            }}>
            Don't have an account?
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: '7%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: 40,
        }}>
        <TouchableOpacity
          onPress={handleLogin}
          style={{
            width: '90%',
            backgroundColor: '#F54D4D',
            height: '100%',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: '#fff',
            }}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Pin;
