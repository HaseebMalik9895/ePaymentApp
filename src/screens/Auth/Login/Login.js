import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import AppTextInput from '../../../components/AppTextInput/AppTextInput';
import {useNavigation} from '@react-navigation/native';
import {Appheader} from '../../../components/Appheader/Appheader';
const Login = () => {
  const navigation = useNavigation();
  const OTPCode = () => {
    navigation.navigate('OTPCode', {otpcode});
  };
  const [otpcode, setOtpcode] = useState('');
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Appheader title={'Login or Register'} />
      <Text
        style={{
          fontSize: 20,
          color: 'black',
          marginTop: 20,
          paddingHorizontal: 20,
          fontFamily: 'Roboto-Medium',
        }}>
        Just need phone number to login or{'\n'} created a new account
      </Text>
      <AppTextInput
        value={otpcode}
        onChangeText={text => setOtpcode(text)}
        keyboardType={'numeric'}
        name={'Phone number'}
      />
      <Text
        style={{
          fontSize: 14,
          marginTop: 10,
          paddingHorizontal: 20,
          fontFamily: 'Roboto-Medium',
        }}>
        With Login or Register, you accept of the term of use and our
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: 'black',
          paddingHorizontal: 20,
          fontFamily: 'Roboto-Medium',
          textDecorationLine: 'underline',
        }}>
        privacy policy.
      </Text>
      <View
        style={{
          height: '7%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: 80,
        }}>
        <TouchableOpacity
          onPress={OTPCode}
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
            Send OTP to Whatsapp
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 50,
          left: 10,
        }}>
        <Text
          style={{
            fontSize: 14,
            paddingHorizontal: 20,
            fontFamily: 'Roboto-Medium',
            textDecorationLine: 'underline',
          }}>
          Send code to SMS ?
        </Text>
      </View>
    </View>
  );
};

export default Login;
