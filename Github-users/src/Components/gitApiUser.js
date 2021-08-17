import axios from "axios"

function getApiUser(query) {
    const config = {
        method: "get",
        url: "https://api.github.com/search/users",
        params: {
            q: query
        }
    }
    return axios(config)
}

export {getApiUser}