import axios from "axios"
import { environment } from "../environments/environment"

export const login = async (username, password) => {
    const mainUrl = environment.MainUrl

    return await axios.post(`${mainUrl}/login`, {username: username, password: password},
                {
                    headers: {
                        'accept': 'application/json',
                        'content-type': 'application/json'
                    }
                }
            )
}