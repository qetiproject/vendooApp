import { useEffect, useState } from "react"
import { Image, Text, View } from "react-native"
import { useSelector } from "react-redux"

const Card = () => {

    const item = useSelector(state => state.price)
    const [sum, setSum] = useState(0)

    const priceSum = () => {
        let totalPrice = 0
        item.forEach(x => {
            totalPrice += x.original_price 
            setSum(totalPrice.toFixed(2))
        })
    }

    useEffect(() => [
        priceSum()
    ], [item])

    return(
       <View>
            {
                item.map((x) => {
                    return <View>
                        <View style={{flexDirection: 'row'}}>
                            <Image
                                style={{
                                    width: 70,
                                    height: 80,
                                }}
                                source={ x?.thumb_img
                                    ? {uri: `${x?.thumb_img?.files.file}`}
                                    : require('../../../assets/images/image-not-found.png')
                                }
                            />
                            <View style={{flexDirection: 'column', marginLeft: 5, width: '80%'}}>
                                <Text style={{fontSize: 15}}>{x.original_price}ლ</Text>
                                <Text style={{fontSize: 15}}>{x.name}</Text>
                            </View>
                        </View>
                    </View>
                    
                })
            }
            <Text style={{fontSize: 15}}>სულ: {sum}ლ</Text>
       </View>
    )
}

export default Card