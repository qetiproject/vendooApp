import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './components/auth/register';
import Login from './components/auth/login';
import ProductList from './components/auth/products/productsList';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ავტორიზაცია" component={Login} />
        <Stack.Screen name="რეგისტრაცია" component={Register} />
        <Stack.Screen name="პროდუქტები" component={ProductList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}