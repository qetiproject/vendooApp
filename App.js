import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import allReducers from './src/reducers'
import Menu from './src/components/sidebar/menu';

 const App = () => {

  const store  = createStore(
    allReducers,
  )

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
     <NavigationContainer>
       <Menu />
      </NavigationContainer>
    </Provider>
    
  );
}

export default App