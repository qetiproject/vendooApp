import axios from "axios"
import { useState } from "react"
import { Button, TextInput, View, StyleSheet } from "react-native"
import Select from 'react-select'

const Register = () => {

    const [firstName, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [phone, setPhone] = useState(0)
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [terms, setTerms] = useState(false)
    const [user, setUser]= useState([])
    const [isLogged, setIsLogged] = useState(false)
    const [error, setError] = useState('')

    const storeToken = async (value) => {
        try {
          await AsyncStorage.setItem('token', JSON.stringify(value))
        } catch (e) {
          // saving error
        }
      }
    
      const storeUser = async (value) => {
        try {
          await AsyncStorage.setItem('user', JSON.stringify(value))
        } catch (e) {
          // saving error
        }
      }

    const Register = async () => {
        try{
            const response = await axios.post(
              'https://cms.vendoo.ge/api/customer/registration',
            //   {
            //     confirm_password: confirmPassword,
            //     firstname: firstName,
            //     gender: "2",
            //     lastname: lastname,
            //     password: password,
            //     phone: 55555555,
            //     terms: true,
            //     username: username
            //   },
            {
                code: "",
                confirm_password: "11111111",
                firstname: "keti",
                gRecaptchaResponse: "03AGdBq24ykNrRzkib8MKVswofT7BxBevTgIO3UVCh9f5StjVd7ulLbCmB8RV5nd8sMCRZWPQlbdRznn2NKr0L3AWyGtujaRB9TfFCN5MORWGBhwkZlB9sAQ47KWIRcDijuXElnLZh1xvF8JlEKA20_I7fqwLyw4-4krt5xqPn4wtvYhMCnOHgS8gBPtVEcUIxlrYUEdJBo4TG8UB9DlfFqpnapw98Ji1DFixh3vf7c391G2Fqya7At9exu-E3jzUfZr05Cdp4KhQkisi9mMw1tzWujS3-fppYSDvuSgmsG_sQO6qXUjRv0NEPIFzy32Lz5SOdwyP7Dtl8FJqtNLNaUEWiZ_RPRutTbcTM8CkK3sV44zDQ769NlLcPg3bFaqPFXXfIwzU6Q9TCWZPGMmv7DlSEXjB_IRu9IFoLS7YIpZIwx5M0WUN-ouaCoz8aQ0g4YQqlCDqEZ1sk",
                gender: "2",
                lastname: "dfdf",
                password: "11111111",
                phone: "555222555",
                terms: true,
                token: false,
                username: "s@gmail.com",
            },
              {
                headers: {
                  'accept': 'application/json',
                  'content-type': 'application/json',
                  'access-control-allow-headers': 'Authorization, Origin, X-Requested-With, Content-Type, Accept',
                  'access-control-allow-methods': '*',
                  'access-control-allow-origin': '*'
                }
              }
            )
      
            // const token = response.data.accessToken;
            // const user = response.data.user
      
            // await storeToken(token)
            // await storeUser(user)
            // setIsLogged(() => true)
      
            console.log(response)
          }
          catch(e) {
            // console.log(e.response.data)
            // setError(e.response.data)
          }
        }

    return(
        <View style={{
            marginTop: 20,
        }}>
            <TextInput 
                style = {styles.input}
                type="text" 
                value={firstName} 
                placeholder="სახელი"
                onChangeText={(e) => setFirstName(e)}
            />
            <TextInput 
                style = {styles.input}
                type="text" 
                value={lastname} 
                placeholder="გვარი"
                onChangeText={(e) => setLastName(e)}
            />
            <TextInput 
                style = {styles.input}
                type="text" 
                value={username} 
                placeholder="ელ.ფოსტა"
                onChangeText={(e) => setUsername(e)}
            />
            {/* <TextInput 
                style = {styles.input}
                type="number" 
                value={phone} 
                placeholder="მობილური"
                onChangeText={(e) => setPhone(e)}
            /> */}
            <TextInput 
                style = {styles.input}
                type="password" 
                value={password} 
                placeholder="პაროლი"
                onChangeText={(e) => setPassword(e)}
            />
            <TextInput 
                style = {styles.input}
                type="password" 
                value={confirmPassword} 
                placeholder="დაადასტურეთ პაროლი"
                onChangeText={(e) => setConfirmPassword(e)}
            />
            <Button 
                title = "რეგისტრაცია"
                color = 'green'
                onPress={() => Register()}
            />
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
export default Register