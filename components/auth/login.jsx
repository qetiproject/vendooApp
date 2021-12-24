import axios from "axios"
import { useEffect, useState } from "react"
import { Text, TextInput, View, StyleSheet, Button } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLogged, setIsLogged] = useState(false)
    const [error, setError] = useState('')
    const [errorUsername, setErrorUsername] = useState('')
    const [errorPassword, setErrorPassword] = useState('')

    const storeToken = async (value) => {
        try {
            await AsyncStorage.setItem('token', JSON.stringify(value))
        } catch (e) {
            console.log(e.message)
            // saving error
        }
    }

    const formValidate = () => {
        username == '' ? setErrorUsername('ველის შევსება აუცილებელია') : setErrorUsername('')
        password == '' ? setErrorPassword('ველის შევსება აუცილებელია') : setErrorPassword('')
      }

    const Login = async () => {
        formValidate()
        try{
            const response = await axios.post(
                'https://cms.vendoo.ge/api/customer/login', 
                {
                    username: username,
                    password: password
                },
                {
                    headers: {
                        'accept': 'application/json',
                        'content-type': 'application/json'
                    }
                }
            )
    
            const token = response;

            await storeToken(token)
            setIsLogged(() => true)
            if(isLogged) {
                navigation.navigate('პროდუქტები')
            }
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
        }
    }

    // const LogOut = async() => {
    //     await localStorage.removeItem('token')
    //     setIsLogged(false)
    // }

    useEffect(async () => {
        await checkToken()
    }, [])

    return(
        <View style={{
                margin: 20,
                marginTop: 100,
            }}>
            
                    <Text style={styles.error}>{error}</Text>
                    <TextInput 
                        style = {styles.input}
                        type="text" 
                        value={username} 
                        placeholder="ელ.ფოსტა ან მობილური"
                        onChangeText={(e) => setUsername(e)}
                    />
                    <Text style={styles.error}>{errorUsername}</Text>
                    <TextInput 
                        style = {styles.input}
                        secureTextEntry = {true} 
                        placeholder="პაროლი"
                        value={password} 
                        onChangeText={(e) => setPassword(e)}
                    />
                    <Text style={styles.error}>{errorPassword}</Text>
                    <Button 
                        title = "ავტორიზაცია"
                        color = 'green'
                        onPress={() => Login()}
      />
            
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 2,
        borderColor: '#d5d5d5',
        margin: 2
    },
    error: {
      color: 'red',
      fontSize: 16,
      marginBottom: 5
    }
})
