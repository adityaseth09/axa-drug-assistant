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

export function getUserID() {
    return state.userid
}

export function setIsDoctor(x) {
    state.isDoctor = x
}

export function getIsDoctor() {
    return state.isDoctor
}
