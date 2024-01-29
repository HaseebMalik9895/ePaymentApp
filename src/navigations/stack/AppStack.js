import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/App/Home/Home';
import Transfer from '../../screens/App/Transfer/Transfer';
import MyTabs from './BottomTab/Bottomtab';
import Merchant from '../../screens/App/Merchant/Merchant';
import History from '../../screens/App/History/History';
import Profile from '../../screens/App/Profile/Profile';
import AccountSetting from '../../screens/App/Profile/AccountSetting';
import Notification from '../../screens/App/Profile/Notification';
import Emoney from '../../screens/App/Home/Emoney';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
    initialRouteName="MyTabs"
    screenOptions={{
      headerShown: false,
    }}>
       <Stack.Screen name={'MyTabs'} component={MyTabs}/>
       <Stack.Screen name={'AccountSetting'} component={AccountSetting}/>
       <Stack.Screen name={'Notification'} component={Notification}/>
       <Stack.Screen name={'Emoney'} component={Emoney}/>
    </Stack.Navigator>
  );
};

export {AppStack};
