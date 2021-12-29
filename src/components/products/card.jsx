import { useEffect } from "react"
import { useState } from "react"
import { Button, Image, Text, View } from "react-native"
import { useSelector } from "react-redux"

const Card = () => {

    const item = useSelector(state => state.price)
    const {original_price, name, id} = item
    const [sum, setSum] = useState(0)

    const priceSum = () => {
        setSum(original_price)
    }
    const deleteItem = (id) => {
        console.log(id)
    }

    useEffect(() => [
        priceSum()
    ], [])

    return(
       <View>
            <View style={{flexDirection: 'row'}}>
                <Image
                    style={{
                        width: 50,
                        height: 50,
                    }}
                    source={{uri: `${item?.thumb_img?.files.file}`}}
                />
                <View style={{flexDirection: 'column', marginLeft: 5, width: '80%'}}>
                    <Text>{original_price}ლ</Text>
                    <Text>{name}</Text>
                </View>
            </View>
            <View>
                <Button 
                    title="წაშლა"    
                    color = "red"
                    onPress={() => deleteItem(id)}
                />
            </View>
            <Text>სულ: {sum}ლ</Text>
       </View>
    )
}

export default Card