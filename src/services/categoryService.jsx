import axios from "axios"

export const getDecorationData = async (category) => {
    const decorationCategory = environment.DecorationCategoryUrl
    return await axios.get(`${decorationCategory}?url=${category}`)
}