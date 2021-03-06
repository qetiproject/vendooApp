import React from 'react'
import { Text, View, Image } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import Icon from 'react-native-vector-icons/FontAwesome5';

const DecorationItem = ({decoration }) => {
    
    const {name, final_price} = decoration
    const dispatch = useDispatch()
    const item = useSelector(state => state.price)

    const image  = decoration.thumb_img
                    ? {uri: `${decoration?.thumb_img?.files.file}`}
                    : require('../../../../assets/images/image-not-found.png')

    const addToCardItem = (value) => {
        if(item.length > 0){
            item.forEach((x) => {
                if(x.id != value.id){
                    dispatch({
                        type: 'SUCCESS',
                        data: value
                    })  
                } else {
                    return
                }
            })
        }else {
            dispatch({
                type: 'SUCCESS',
                data: value
            })  
        }
          
    }

    return(
            <View >
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
            </View>
    )
}

export default DecorationItem