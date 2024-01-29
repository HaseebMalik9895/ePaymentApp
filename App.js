import React from 'react';
import MainStack from './src/navigations';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={'#F54D4D'} />
      <MainStack />
    </>
  );
};

export default App;
