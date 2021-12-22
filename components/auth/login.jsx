import axios from "axios"
import { useEffect, useState } from "react"
import { Text, TextInput, View, StyleSheet, Button } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLogged, setIsLogged] = useState(false)

    const storeToken = async (value) => {
        try {
            await AsyncStorage.setItem('token', JSON.stringify(value))
        } catch (e) {
            // saving error
        }
    }

    const Login = async () => {
        try{
            const response = await axios.post(
                'https://cms.vendoo.ge/api/customer/login', 
                {
                    username: username,
                    // password: password
                    password: '12345678'
                },
                {
                    headers: {
                        'accept': 'application/json',
                        'content-type': 'application/json'
                    }
                }
            )
    
            const token = response.token;

            await storeToken(token)
            setIsLogged(() => true)
            navigation.navigate('პროდუქტები')
        }
        catch(e){
            setError(e.message)
        }
    }

    const checkToken = async () => {
        try {
          const value = await AsyncStorage.getItem('token')
          if(value !== null) {
           setIsLogged(true)
          }
        } catch(e) {
          // error reading value
        }
    }

    useEffect(async () => {
        await checkToken()
    }, [])

    return(
        <View style={{
            marginTop: 20,
        }}>
            <Text>{error}</Text>
            <TextInput 
                style = {styles.input}
                type="text" 
                value={username} 
                onChangeText={(e) => setUsername(e)}
            />
            <TextInput 
                style = {styles.input}
                type="password" 
                value={password} 
                onChangeText={(e) => setPassword(e)}
            />
            <Button 
                title = "ავტორიზაცია"
                color = 'green'
                onPress={() => Login()}
            />
            <View>
                <Text>ახალი ხარ ვენდუზე? </Text>
                <Text
                    onPress={() => navigation.navigate('რეგისტრაცია')}
                >დარეგისტრირდი</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
})

export default Login