import Login from "../auth/login"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useState} from "react";
import DecorationCategory from "../products/decoration/decorationCategory";
import Card  from '../products/card'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { createStackNavigator } from '@react-navigation/stack';

const Menu = () => {
    const Tab = createBottomTabNavigator();
    const [isLogged, setIsLogged] = useState(false)

    const logged = async () => {
        const value = await AsyncStorage.getItem('token')
        value !== null ? setIsLogged(true) : setIsLogged(false)
    }

    const Stack = createStackNavigator()

    useEffect(() => {
       logged()
      }, [])

    return(
        <Tab.Navigator
            screenOptions={({ route }) => ({
             tabBarIcon: () => {
                if (route.name === 'Auth') {
                return (
                    <Icon
                        name={'user-astronaut'}
                        size={25}
                        color="green"
                    />  
                );
                } else if (route.name === 'Products') {
                return (
                    <Icon
                        name={'product-hunt'}
                        size={25}
                        color="green"
                    />  
                );
                } else if (route.name === 'Card') {
                    return (
                        <Icon
                            name={'id-card'}
                            size={25}
                            color="green"
                        />  
                    );
                }
            },
            tabBarInactiveTintColor: 'green',
            tabBarActiveTintColor: 'red',
        })}
      >
          <Tab.Group>
            <Tab.Screen 
                name="Auth" 
                component={Login} 
                options={{ title: 'ავტორიზაცია' }}
            />
            <Tab.Screen 
                name="Products" 
                component={DecorationCategory} 
                options={{ title: 'საახალწლო დეკორაციები' }}
            />
            <Tab.Screen 
                name="Card" 
                component={Card} 
                options={{ title: 'კალათა' }}
            />
          </Tab.Group>
            
        </Tab.Navigator>
       
    )
}

export default Menu