var state = { access_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MzcwMzEyNDYsImlhdCI6MTUzNzAzMDk0NiwibmJmIjoxNTM3MDMwOTQ2LCJpZGVudGl0eSI6MX0.K0vO-EoxauFHr9siLZDPOffc7BkWvlgVQe4qFxQaPxY' };

export function getState() {
    return state;
}

export function setAccessToken(text) {
    state.access_token = text
}

export function getAccessToken() {
    return state.access_token
}
