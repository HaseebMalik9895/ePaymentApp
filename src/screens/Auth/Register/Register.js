import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import AppTextInput from '../../../components/AppTextInput/AppTextInput';
import {Appheader} from '../../../components/Appheader/Appheader';
import axios from 'axios';

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    axios.defaults.baseURL = 'http://192.168.1.64:4000/';
    try {
      const response = await axios.post('signup', {
        username: name,
        email: email,
        password: password,
      });
      if (response.status === 200) {
        navigation.navigate('Pin');
      }
      console.log('Login Successfully', response.data);
    } catch (error) {
      console.log('An error occurred', error);
    }
  };

  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          backgroundColor: '#F54D4D',
        }}>
        <Appheader backarrow={true} title={'Register'} />
      </View>
      <View
        style={{
          justifyContent: 'center',
          paddingHorizontal: 15,
          paddingVertical: 20,
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: '#000',
          }}>
          WELCOME ABOARD!
        </Text>
        <Text
          style={{
            fontSize: 16,
            paddingVertical: 20,
            color: '#000',
          }}>
          Please enter your valid Name & email address to using all of our
          feature
        </Text>
      </View>
      <AppTextInput
        name={'Full Name'}
        value={name}
        onChangeText={text => setName(text)}
      />
      <AppTextInput
        name={'E-Mail Address'}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <AppTextInput
        name={'Password'}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <Text
          onPress={() => navigation.navigate('Pin')}
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: '#000',
            textDecorationLine: 'underline',
          }}>
          Already have an account?
        </Text>
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
          onPress={handleSignup}
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

export default Register;
