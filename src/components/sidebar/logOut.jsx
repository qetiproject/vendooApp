import { Button, View } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const LogOut = () => {
    const navigation = useNavigation()

    const [isLogged, setIsLogged] = useState(true)
    
    const LogOut = async() => {
        await AsyncStorage.removeItem('token')
        setIsLogged(false)
        navigation.navigate('ავტორიზაცია')
    }

    return(
        <View>
            <Button 
                title="გასვლა"
                color ="red"
                onPress={() => LogOut()}
            />
        </View>
    )
}

export default LogOut