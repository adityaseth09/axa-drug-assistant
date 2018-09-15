import { getAccessToken, setAccessToken } from './State.js'
import axios from 'axios'

axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.post['Content-Type'] = 'application/json'

function get(url) {
    return axios.get("http://129.213.156.32:5005" + url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'JWT ' + getAccessToken(),
        },
        crossdomain: true,
    }).then(res => JSON.parse(res))
        .catch(function(error) {
            console.log(url, error);
        });
}

function get_patient(url) {
    return get("/patient" + url)
}

function login(username, password) {
    return axios.post("http://129.213.156.32:5005/auth",
                      { "username": username,
                        "password": password
                      }, {
                          headers: { 'Content-Type': 'application/json' },
                          crossdomain: true,
                      }
                     ).catch(function(error) {
                         console.log("auth error:", error)
                     }).then(function (res) {
                         console.log("oauth:",res)
                         setAccessToken(res.data.access_token)
                     })
}

export default {login: login, get: get, get_patient: get_patient}
