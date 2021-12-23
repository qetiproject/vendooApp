import axios from "axios"
import { useEffect, useState } from "react"
import { Button, TextInput, View, StyleSheet, Picker, Text } from "react-native"

const Register = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [user, setUser]= useState([])
    const [error, setError] = useState('')
    const [genderValue, setGenderValue] = useState(1);
    const [errorFirstName, setErrorFirstName] = useState('')
    const [errorLastName, setErrorLastName] = useState('')
    const [errorPhone, setErrorPhone] = useState('')
    const [errorUsername, setErrorUsername] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('')
    const [checked, setChecked] = useState('first');

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

    const formValidate = () => {
      firstName == '' ? setErrorFirstName('შეიყვანეთ სახელი') :setErrorFirstName('')
      lastName == '' ? setErrorLastName('შეიყვანეთ გვარი') : setErrorLastName('')
      username == '' ? setErrorUsername('შეიყვანეთ მომხმარებლის სახელი') : setErrorUsername('')
      phone == '' ? setErrorPhone('შეიყვანეთ ნომერი') : setErrorPhone('')
      password == '' ? setErrorPassword('შეიყვანეთ მინიმუმ 8 სიმბოლო') :setErrorPassword('')
      confirmPassword == '' ? setErrorConfirmPassword('გაიმეორეთ პაროლი') :setErrorConfirmPassword('')
      password !== confirmPassword ? setErrorConfirmPassword('პაროლები ერთმანეთს უნდა ემთხვეოდეს') : setErrorConfirmPassword('')
    }

    const Register = async () => {
      formValidate();
        try{
            const response = await axios.post(
              'https://cms.vendoo.ge/api/customer/registration',
              {
                firstname:firstName,
                lastname: lastName,
                username:username,
                phone: phone,
                password: password,
                confirm_password: confirmPassword,
                gender: genderValue,
                terms:true,
              },
            {
              headers: {
                // 'accept': 'application/json',
                // 'content-type': 'application/json',
                // 'access-control-allow-headers': 'Authorization, Origin, X-Requested-With, Content-Type, Accept',
                // 'access-control-allow-methods': '*',
                // 'access-control-allow-origin': '*',
                // 'sec-fetch-site': 'cross-site'
                'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8',
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
            // setError(e.response.data)
          }
    }

    useEffect(() => {

    }, [])

    return(
        <View  style={{
          margin: 20,
          marginTop: 100,
        }}>
            <Picker
              style={styles.select}
              selectedValue={genderValue}
              onValueChange={(itemValue) => setGenderValue(itemValue)}
            >
              <Picker.Item label="მდედრობითი" value="1" />
              <Picker.Item label="მამრობითი" value="2" />
            </Picker>
            
              <TextInput 
                  style = {styles.input}
                  value={firstName} 
                  placeholder="სახელი"
                  onChangeText={(e) => setFirstName(e)}
              />
               <Text style={styles.error}>{errorFirstName}</Text>
              <TextInput 
                  style = {styles.input}
                  value={lastName} 
                  placeholder="გვარი"
                  onChangeText={(e) => setLastName(e)}
              />
              <Text style={styles.error}>{errorLastName}</Text>
              <TextInput 
                  style = {styles.input}
                  value={username} 
                  placeholder="ელ.ფოსტა"
                  onChangeText={(e) => setUsername(e)}
              />
              <Text style={styles.error}>{errorUsername}</Text>
              <TextInput 
                  style = {styles.input}
                  value={phone} 
                  placeholder="მობილური"
                  keyboardType="numeric"
                  maxLength={9}
                  onChangeText={(e) => setPhone(e)}
              />
              <Text style={styles.error}>{errorPhone}</Text>
              <TextInput 
                  style = {styles.input}
                  secureTextEntry = {true} 
                  value={password} 
                  placeholder="პაროლი"
                  onChangeText={(e) => setPassword(e)}
              />
              <Text style={styles.error}>{errorPassword}</Text>
              <TextInput 
                  style = {styles.input}
                  secureTextEntry = {true} 
                  value={confirmPassword} 
                  keyboardType="numeric"
                  placeholder="დაადასტურეთ პაროლი"
                  onChangeText={(e) => setConfirmPassword(e)}
              />
              <Text style={styles.error}>{errorConfirmPassword}</Text>
              <Button 
                  title = "რეგისტრაცია"
                  color = '#7ca039'
                  onPress={() => Register()}
              />
          </View>
    )
}

export default Register

const styles = StyleSheet.create({
  input: {
      fontSize: 18,
      borderWidth: 2,
      borderColor: '#d5d5d5',
      margin: 2
  },
  select: {
    marginBottom: 7,
    width: '100%',
  },
  error: {
    color: 'red',
    fontSize: 16,
    marginBottom: 5
  }
})