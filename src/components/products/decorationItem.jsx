import { useNavigation } from "@react-navigation/native"
import { Text, View, Image, ScrollView, Button } from "react-native"
import { useDispatch, useSelector } from "react-redux"

const DecorationItem = ({decoration }) => {
    
    const {name, final_price} = decoration
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()
    const navigation = useNavigation()

    const addToCardItem = (value) => {
        dispatch({
            type: 'SUCCESS',
            data: value
        })
    }
    return(
        <ScrollView>
            <View>
                <Text>{JSON.stringify(counter)}</Text>
                <Text>{name}</Text>
                {/* <Image 
                    style={{width: 300, height: 300}}    
                    source={decoration?.thumb_img?.files?.file}
                    accessibilityLabel={name}
                /> */}
                <Text>{final_price}ლ</Text>
                <Button
                    title="კალათაში დამატება"
                    onPress={() => addToCardItem(decoration)}
                />

                <Button 
                    title="click"
                    color = "red"
                    onPress = {() => navigation.navigate('კალათა')}
                />
            </View>
        </ScrollView>
    )
}

export default DecorationItem