import { Text, View } from "react-native"
import { useSelector } from "react-redux"

const Card = () => {

    const counter = useSelector(state => state.counter)
    
    return(
        <View>
            <Text>card</Text>
        </View>
    )
}

export default Card