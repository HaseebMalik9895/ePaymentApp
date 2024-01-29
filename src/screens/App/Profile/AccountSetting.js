import {View, TouchableOpacity, Text, Image} from 'react-native';
import React from 'react';
import {Appheader} from '../../../components/Appheader/Appheader';

const AccountSetting = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Appheader
        onPress={() => navigation.navigate('Profile')}
        title={'Account & Security'}
        backarrow={true}
      />
      <View
        style={{
          height: '50%',
          paddingHorizontal: 10,
        }}>
        <TouchableOpacity
          style={{
            height: 50,
            width: '100%',
            flexDirection: 'row',
            borderBottomWidth: 0.3,
            borderColor: 'grey',
          }}>
          <View
            style={{
              width: '90%',
              height: 50,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Username
            </Text>
          </View>
          <View
            style={{
              height: 48,
              width: '10%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../../../assets/images/Rightarrow.png')}
              resizeMode="contain"
              style={{height: 20, width: 20}}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,
            width: '100%',
            flexDirection: 'row',
            borderBottomWidth: 0.3,
            borderColor: 'grey',
          }}>
          <View
            style={{
              width: '90%',
              height: 50,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Email
            </Text>
          </View>
          <View
            style={{
              height: 48,
              width: '10%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../../../assets/images/Rightarrow.png')}
              resizeMode="contain"
              style={{height: 20, width: 20}}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,
            width: '100%',
            flexDirection: 'row',
            borderBottomWidth: 0.3,
            borderColor: 'grey',
          }}>
          <View
            style={{
              width: '90%',
              height: 50,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Phone Number
            </Text>
          </View>
          <View
            style={{
              height: 48,
              width: '10%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../../../assets/images/Rightarrow.png')}
              resizeMode="contain"
              style={{height: 20, width: 20}}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,
            width: '100%',
            flexDirection: 'row',
            borderBottomWidth: 0.3,
            borderColor: 'grey',
          }}>
          <View
            style={{
              width: '90%',
              height: 50,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'black',
              }}>
              PIN
            </Text>
          </View>
          <View
            style={{
              height: 48,
              width: '10%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../../../assets/images/Rightarrow.png')}
              resizeMode="contain"
              style={{height: 20, width: 20}}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,
            width: '100%',
            flexDirection: 'row',
            borderBottomWidth: 0.3,
            borderColor: 'grey',
          }}>
          <View
            style={{
              width: '90%',
              height: 50,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Address
            </Text>
          </View>
          <View
            style={{
              height: 48,
              width: '10%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../../../assets/images/Rightarrow.png')}
              resizeMode="contain"
              style={{height: 20, width: 20}}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,
            width: '100%',
            flexDirection: 'row',
            borderBottomWidth: 0.3,
            borderColor: 'grey',
          }}>
          <View
            style={{
              width: '90%',
              height: 50,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Touch ID
            </Text>
          </View>
          <View
            style={{
              height: 48,
              width: '10%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../../../assets/images/Rightarrow.png')}
              resizeMode="contain"
              style={{height: 20, width: 20}}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AccountSetting;
