import { getAccessToken, setAccessToken } from './State.js'
import axios from 'axios'

axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.post['Content-Type'] = 'application/json'

function get(url, data) {
    return axios.get("http://localhost:5001" + url, {
        body: data,
        crossdomain: true,
        method: 'POST',
    }).then(function (res) {
        console.log("fetchedit", res)
        return res
    }).then(res => res.json())
        .catch(function(error) {
            console.log(url, error);
        });
}

function get_patient(url, data) {
    return get("/patient/" + getAccessToken() + url, data)
}

function login(username, password) {
    console.log("auth")
    return get("/auth", {
        "username": username,
        "password": password
    }).then(function (res) {
        console.log("oauth:",res)
        setAccessToken(res.access_token)
    })
}

export default {login: login, get: get, get_patient: get_patient}
