import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Congratulation = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          height: '60%',
          width: '100%',
          //   backgroundColor:'red',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../../../assets/images/Group.png')}
          resizeMode="contain"
          style={{
            height: 230,
            width: 230,
          }}
        />
        <Text
        style={{
            fontSize: 16,
            color: 'black',
            marginTop: 20,
            fontFamily:'Roboto-Medium'
  
        }}>CONGRATULATIONS !</Text>
        <Text
        style={{
            fontSize: 16,
            color: 'black',
            fontFamily:'Roboto-Medium'
        }}>Your account has been created successfully.</Text>
      </View>
      <View
        style={{
          height: '7%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          position:'absolute',
          bottom:40,
        }}>
        <TouchableOpacity  onPress={()=>navigation.navigate('Login')}
          style={{
            width: '90%',
            backgroundColor: '#F54D4D',
            height:'100%',
            borderRadius:10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#fff',
              }}>
            EXPLORE
            </Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

export default Congratulation;
