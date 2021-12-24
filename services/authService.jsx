import axios from "axios"
import { environment } from "../environments/environment"

export const login = (username, password) => {
    const mainUrl = environment.MainUrl

    return axios.get(`${mainUrl}/login`),
            {username, password},
            {
                headers: {
                    'accept': 'application/json',
                    'content-type': 'application/json'
                }
            }
}