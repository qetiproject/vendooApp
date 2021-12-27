import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/components/auth/login';
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import allReducers from './reducers'
import Card from './src/components/products/card';
import DecorationCategory from './src/components/products/decorationCategory';

export default function App() {

  const store  = createStore(
    allReducers,
  )

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
     <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ავტორიზაცია" component={Login} />
          <Stack.Screen name="პროდუქტები" component={DecorationCategory} />
          <Stack.Screen name="კალათა" component={Card} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    
  );
}