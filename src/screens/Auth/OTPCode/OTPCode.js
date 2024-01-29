import {
  View,
  Text,
  Button,
  Alert,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Appheader} from '../../../components/Appheader/Appheader';

const OTPCode = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {otpcode} = route.params;
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Appheader title={'Enter OTP Code'} />
      <Text
        style={{
          fontSize: 16,
          color: 'black',
          marginTop: 15,
          paddingHorizontal: 20,
          fontFamily: 'Roboto-Medium',
        }}>
        OTP code has been sent to {otpcode}, enter the code below to continue.
      </Text>
      <View
        style={{
          width: '100%',
          marginVertical: 30,
          flexDirection: 'row',
        }}>
        <TextInput
          keyboardType={'numeric'}
          maxLength={1}
          style={{
            width: '10%',
            height: '100%',
            borderRadius: 4,
            borderColor: '#929292',
            borderWidth: 1,
            fontSize: 20,
            marginLeft: 60,
            textAlign: 'center',
          }}
        />
        <TextInput
          keyboardType={'numeric'}
          maxLength={1}
          style={{
            width: '10%',
            height: '100%',
            borderRadius: 4,
            borderColor: '#929292',
            borderWidth: 1,
            fontSize: 20,
            marginLeft: 30,
            textAlign: 'center',
          }}
        />
        <TextInput
          keyboardType={'numeric'}
          maxLength={1}
          style={{
            width: '10%',
            height: '100%',
            borderRadius: 4,
            borderColor: '#929292',
            borderWidth: 1,
            fontSize: 20,
            marginLeft: 30,
            textAlign: 'center',
          }}
        />
        <TextInput
          keyboardType={'numeric'}
          maxLength={1}
          style={{
            width: '10%',
            height: '100%',
            borderRadius: 4,
            borderColor: '#929292',
            borderWidth: 1,
            fontSize: 20,
            marginLeft: 30,
            textAlign: 'center',
          }}
        />
      </View>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 18,
            textDecorationLine: 'underline',
          }}>
          Resend code
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
          onPress={() => navigation.navigate('AppStack', {screen: 'MyTabs'})}
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

export default OTPCode;
