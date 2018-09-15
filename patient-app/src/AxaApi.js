import axios from 'axios'

axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.post['Content-Type'] = 'application/json'

function get(url) {
    return axios.get("https://health.axa.ch/hack/api" + url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'stupid space',
        },
        crossdomain: true,
    }).then(res => JSON.parse(res))
        .catch(function(error) {
            console.log(url, error);
        });
}

function get_drug(url) {
    return get("/drugs" + url)
}


export default {get: get, get_drug: get_drug}
