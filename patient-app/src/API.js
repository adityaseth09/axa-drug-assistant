import { getAccessToken, setAccessToken } from './State.js'
import axios from 'axios'

axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.post['Content-Type'] = 'application/json'

function api_get(url, data) {
    return axios.get("http://localhost:5001" + url, {
        body: data,
        crossdomain: true,
        method: 'POST',
    }).then(console.log("fetchedit")).then(res => res.json())
}

function login(username, password) {
    console.log("auth")
    return api_get("/auth", {
        "username": username,
        "password": password
    }).then(function (res) {
        console.log("oauth:",res)
        setAccessToken(res.access_token)
    })
}

export default {login: login}
