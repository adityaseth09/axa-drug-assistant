var state = { access_token: null }

export function getState() {
    return state;
}

export function setAccessToken(text) {
    state.access_token = text
}

export function getAccessToken() {
    return state.access_token
}

export function setUserID(id) {
    state.userid = id
}

export function getUserID(id) {
    return state.userid
}

export function setRole(id) {
    state.userid = id
}

export function getUserRole(id) {
    return state.userid
}
