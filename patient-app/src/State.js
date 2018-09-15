var state = { access_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MzcwNDc0MDYsImlhdCI6MTUzNzA0NzEwNiwibmJmIjoxNTM3MDQ3MTA2LCJpZGVudGl0eSI6MX0.k089PwN5Nn8edZhbbwXbckvmHtpxtPieBe3ODWqo8g4' }

export function getState() {
    return state;
}

export function setAccessToken(text) {
    state.access_token = text
}

export function getAccessToken() {
    return state.access_token
}
