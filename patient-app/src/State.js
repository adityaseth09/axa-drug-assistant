var state = { access_token: null }  // 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MzcwNDU3MzUsImlhdCI6MTUzNzA0NTQzNSwibmJmIjoxNTM3MDQ1NDM1LCJpZGVudGl0eSI6MX0.HcyQ-cTlt_TBqM4jLNhpUyIc1FnXbYBFMy3_OawxQF0'

export function getState() {
    return state;
}

export function setAccessToken(text) {
    state.access_token = text
}

export function getAccessToken() {
    return state.access_token
}
