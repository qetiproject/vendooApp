import axios from "axios"
import { useEffect, useState } from "react"
import { ScrollView, View } from "react-native"
// import { getDecorationData } from "../../../services/categoryService"
import DecorationItem from "./decorationItem"
import LogOut from '../sidebar/logOut'
import SkeletonContent from 'react-native-skeleton-content';

const DecorationCategory = () => {

    const [decoration, setDecoration] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    const getDecoryCategory = async () => {
        try{
            const response = await axios.get('https://cms.vendoo.ge/api/beta/catalog?url=saaxalwlo-nivtebi%2Fsaaxalwlo-dekoracia-aksesuarebi%2Fsaaxalwlo-satamashoebi')
            setDecoration(response.data.products)
            setIsLoading(false)
        }
        catch(e){}
    }
    
    useEffect( () => {
        getDecoryCategory()
    },[])

    return(
        // <View>
        //     <LogOut />
        //     {decoration.map((decor, ind) => {
        //         return <DecorationItem decoration={decor} key={ind} />
        //     })}
        // </View>
        <ScrollView>
            <SkeletonContent
                containerStyle={{ flex: 1, width: '100%' }}
                animationDirection="horizontalLeft"
                animationType="shiver"
                isLoading={isLoading}
                layout={[
                    { width: '100%', height: 20, marginTop: 100 },
                    { width: '100%', height: 20, marginBottom: 20 },
                    { width: '100%', height: 100, marginBottom: 20 },
                    { width: '100%', height: 100, marginBottom: 20 },
                ]}
            >
                 <LogOut />
               <View>
                {decoration.map((decor, ind) => {
                        return <DecorationItem decoration={decor} key={ind} />
                    })}
               </View>
            </SkeletonContent>
        </ScrollView>
    )
}

export default DecorationCategory