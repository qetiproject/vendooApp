import Login from "../auth/login"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useEffect } from "react";
import { useState } from "react";
import DecorationCategory from "../products/decoration/decorationCategory";
import Card  from '../products/card'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Menu = () => {
    const Tab = createBottomTabNavigator();
    const [isLogged, setIsLogged] = useState(false)

    useEffect( async () => {
        const value = await AsyncStorage.getItem('token')
        value !== null ? setIsLogged(true) : setIsLogged(false)
      }, [])

    return(
    
        <Tab.Navigator>
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
            {/* <Tab.Screen 
                name="Logout" 
                component={LogOut} 
                options={{ title: 'გასვლა' }}
            /> */}
        </Tab.Navigator>
    )
}

export default Menu