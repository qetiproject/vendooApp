import axios from "axios"
import { environment } from "../environments/environment"

export const getDecorationData = (category) => {
    const decorationCategory = environment.DecorationCategoryUrl

    return axios.get(`${decorationCategory}?url=${category}`)
}
// saaxalwlo-nivtebi%2Fsaaxalwlo-dekoracia-aksesuarebi%2Fsaaxalwlo-satamashoebi