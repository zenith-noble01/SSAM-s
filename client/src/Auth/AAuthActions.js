export const LoginStart = (parent) => ({
    type: "LOGIN_START",
})
export const LoginSuccess = (parent) => ({
    type: "LOGIN_SUCCESS",
    payload: parent
})
export const LoginFailure = (error) => ({
    type: "LOGIN_FAILURE",
    payload: error
})