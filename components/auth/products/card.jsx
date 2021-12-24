import { Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"

const Card = () => {

    const counter = useSelector(state => state.counter)
    // const dispatch = useDispatch()

    return(
        <View>
            <Text>card</Text>
        </View>
    )
}

export default Card