function api_get(url) {
    console.log("url")
    return fetch("http://localhost:5001" + url, {
                 mode: "cors",
                 cache: "no-cache",
                 credentials: "same-origin",
    }).then(res => res.json())
}

export default api_get
