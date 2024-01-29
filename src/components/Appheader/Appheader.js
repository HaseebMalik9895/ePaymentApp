import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const Appheader = ({subtitle, backarrow, title,onPress}) => {
  return (
    <View
      style={{
        maxWidth: '100%',
        padding: '3%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F54D4D',
      }}>
      {backarrow ? (
        <TouchableOpacity onPress={onPress}
          style={{
            width: '10%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../assets/icons/arrow.png')}
            resizeMode={'contain'}
            style={{
              width: 25,
              height: 25,
            }}
          />
        </TouchableOpacity>
      ) : (
        <View
          style={{
            width: '10%',
          }}></View>
      )}
      <View
        style={{
          width: '78%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 30,
            color: '#fff',
            fontWeight: '600',
          }}>
          {title}
        </Text>
      </View>
      <View
        style={{
          width: '10%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontWeight: '500',
            fontSize: 16,
            color: '#5DB075',
          }}>
          {subtitle}
        </Text>
      </View>
    </View>
  );
};

export {Appheader};
