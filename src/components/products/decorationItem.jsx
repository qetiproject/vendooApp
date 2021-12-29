import { useNavigation } from "@react-navigation/native"
import { Text, View, Image, Button } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useState } from "react";

const DecorationItem = ({decoration }) => {
    
    const {name, final_price} = decoration
    const price = useSelector(state => state.price)
    const dispatch = useDispatch()
    // const [item, setItem] = useState([])

    const navigation = useNavigation()

    const image  = decoration.thumb_img
                    ? {uri: `${decoration?.thumb_img?.files.file}`}
                    : require('../../../assets/images/image-not-found.png')

    const addToCardItem = (value) => {
        dispatch({
            type: 'SUCCESS',
            data: value
        })
    }

    return(
            <View >
                {/* <Text>{JSON.stringify(price)}</Text> */}
                <Image
                    style={{
                        width: '100%',
                        height: 300,
                    }}
                    source={image}
                />
                <Text style={{margin: 5}}>{name}</Text>
                <View style={{flexDirection: 'row', margin: 5}}>
                    <Text style={{margin: 5}}>{final_price}ლ</Text>
                    <Icon
                        style={{margin: 5}}
                        name={'cart-plus'}
                        size={25}
                        color="#1d41dc"
                        onPress={() => addToCardItem(decoration)}
                    /> 
                </View>
                <Button 
                    title="კალათა"
                    color = "red"
                    onPress = {() => navigation.navigate('კალათა')}
                />
            </View>
    )
}

export default DecorationItem