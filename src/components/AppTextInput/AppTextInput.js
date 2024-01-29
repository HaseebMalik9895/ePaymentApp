import {View, Text, TextInput} from 'react-native';
import React from 'react';

const AppTextInput = ({name,keyboardType,onChangeText,value}) => {
  return (
    <View
      style={{
        maxWidth: '100%',
        marginVertical: 15,
        paddingHorizontal: 15,
      }}>
      <Text
        style={{
          color: 'black',
          fontWeight: 'bold',
          fontSize: 14,
          paddingVertical: 10,
        }}>
        {name}
      </Text>
      <TextInput
      value={value}
      keyboardType={keyboardType} 
      onChangeText={onChangeText}
        style={{
          width: '100%',
          height: 50,
          padding: 10,
          borderWidth: 0.3,
          borderRadius: 5,
          fontSize: 16,
        }}/>
    </View>
  );
};

export default AppTextInput;
