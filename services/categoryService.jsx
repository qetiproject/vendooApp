import axios from "axios"
import { environment } from "../environments/environment"

export const getDecorationData = async (category) => {
    const decorationCategory = environment.DecorationCategoryUrl
    return await axios.get(`${decorationCategory}?url=${category}`)
}