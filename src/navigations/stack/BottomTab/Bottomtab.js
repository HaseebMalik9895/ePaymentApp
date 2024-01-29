import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Transfer from '../../../screens/App/Transfer/Transfer';
import Home from '../../../screens/App/Home/Home';
import {Image, TouchableOpacity, View, Text} from 'react-native';
import Merchant from '../../../screens/App/Merchant/Merchant';
import History from '../../../screens/App/History/History';
import Profile from '../../../screens/App/Profile/Profile';
import Scanner from '../../../screens/App/Scanner/Scanner';

const Tab = createBottomTabNavigator();

const CustomTab = () => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <View
      style={{
        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor: '#F54D4D',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={require('../../../assets/images/scanner.png')}
        resizeMode="contain"
        style={{
          height: 40,
          width: 40,
        }}
      />
      <Text
        style={{
          color: 'white',
          fontSize: 14,
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        SCAN
      </Text>
    </View>
  </TouchableOpacity>
);

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarStyle: {
          height: 80,
          backgroundColor: 'white',
          bottom:5,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../../../assets/images/Homeicon.png')}
              resizeMode="contain"
              style={{
                height: 30,
                width: 30,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Merchant"
        component={Merchant}
        options={{
          // tabBarLabel: 'Merchant',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../../../assets/images/Merchant.png')}
              resizeMode="contain"
              style={{
                height: 30,
                width: 30,
                tintColor: color,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="f"
        component={Scanner}
        options={{
          tabBarButton: () => <CustomTab />,
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../../../assets/images/History.png')}
              resizeMode="contain"
              style={{
                height: 30,
                width: 30,
                tintColor: color,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          // tabBarLabel: 'Merchant',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../../../assets/images/Profile.png')}
              resizeMode="contain"
              style={{
                height: 30,
                width: 30,
                tintColor: color,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
