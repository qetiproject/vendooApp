import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import allReducers from './src/reducers'
import { Card, DecorationCategory } from './src/components/products/index';
import Login from './src/components/auth/login'

 const App = () => {

  const store  = createStore(
    allReducers,
  )

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
     <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Auth" 
            component={Login} 
            options={{ title: 'ავტორიზაცია' }}
          />
          <Stack.Screen 
            name="Products" 
            component={DecorationCategory} 
            options={{ title: 'საახალწლო დეკორაციები' }}
          />
          <Stack.Screen 
            name="Card" 
            component={Card} 
            options={{ title: 'კალათა' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    
  );
}

export default App