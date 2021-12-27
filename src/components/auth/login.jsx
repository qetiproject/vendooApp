import { useEffect, useState } from "react"
import { Text, TextInput, View, StyleSheet, Button } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login } from '../../../services/authService'
import Icon from 'react-native-vector-icons/FontAwesome5';

const Login = ({navigation}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLogged, setIsLogged] = useState(false)
    const [error, setError] = useState('')
    const [errorUsername, setErrorUsername] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [hidePass, setHidePass] = useState(true);

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

    const Login = async (username, password) => {
        formValidate()
        try{
            const response = await login(username, password)
            await localStorage.removeItem('token')
            const token = response;
            await storeToken(token)
            setIsLogged(() => true)

            isLogged ? navigation.navigate('პროდუქტები') : ''
        }
        catch(e){
            setError('')
            e.response.status == 422 ? setError('შეყვანილი ინფორმაცია არასწორია') : setError('')
            e.response.status == 500 ? setError(e.response.data.message) : setError('')
        }
    }

    const checkToken = async () => {
        try {
          const value = await AsyncStorage.getItem('token')
          if(value !== null) {
           setIsLogged(true)
          }
        } catch(e) {}
    }

    const usernameValidate = (username) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(username) === false) {
            setUsername(username)
            return false;
        }
        else {
            setUsername(username)
        }
    }
    
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
                        onChangeText={(e) => usernameValidate(e)}
                    />
                    <Text style={styles.error}>{errorUsername}</Text>
                    <View style={styles.password}>
                        <TextInput 
                            style = {styles.input}
                            autoCompleteType="password"
                            secureTextEntry={hidePass ? true : false}
                            placeholder="პაროლი"
                            value={password} 
                            onChangeText={(e) => setPassword(e)}
                        />
                        <Icon
                            name={hidePass ? 'eye-slash' : 'eye'}
                            size={15}
                            color="grey"
                            onPress={() => setHidePass(!hidePass)}
                        />               
                    </View>
                    <Text style={styles.error}>{errorPassword}</Text>
                    <Button 
                        title = "ავტორიზაცია"
                        color = 'green'
                        disabled={!username || !password}
                        onPress={() => Login(username, password)}/>
               
              </View>
    )
}

export default Login

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 2,
        borderColor: '#d5d5d5',
        margin: 2,
        width: '100%'
    },
    password: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flexStart',
        alignItems: 'center',
    },
    error: {
      color: 'red',
      fontSize: 16,
      marginBottom: 5
    }
})