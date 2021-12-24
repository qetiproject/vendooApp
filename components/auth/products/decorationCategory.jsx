import axios from "axios"
import { useEffect, useState } from "react"
import { Button, Text, View } from "react-native"
// import { getDecorationData } from "../../../services/categoryService"
import DecorationItem from "./decorationItem"

const DecorationCategory = ({navigation}) => {

    const [isLogged, setIsLogged] = useState(true)
    const [decoration, setDecoration] = useState([])

    const LogOut = async() => {
        await localStorage.removeItem('token')
        setIsLogged(false)
        navigation.navigate('ავტორიზაცია')
    }

    const getDecoryCategory = async () => {
        try{
            const response = await axios.get('https://cms.vendoo.ge/api/beta/catalog?url=saaxalwlo-nivtebi%2Fsaaxalwlo-dekoracia-aksesuarebi%2Fsaaxalwlo-satamashoebi')
            setDecoration(response.data.products)
        }
        catch(e){}
    }


    useEffect( () => {
        getDecoryCategory()
    },[])

    return(
        <View>
            <Button 
                title="Log Out"
                color ="red"
                onPress={() => LogOut()}
            />
            {decoration.map((decor, ind) => {
                return <DecorationItem decoration={decor} key={ind} />
            })}
        </View>
    )
}

export default DecorationCategory