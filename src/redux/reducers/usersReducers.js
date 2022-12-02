import { GET_ALL_USERS_FAIL, GET_ALL_USERS_REQUEST, GET_ALL_USERS_SUCCESS } from "../constants/usersConstant"

export const userReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case GET_ALL_USERS_REQUEST: return { ...state }
        case GET_ALL_USERS_SUCCESS: return { ...state, allUsers: payload }
        case GET_ALL_USERS_FAIL: return { ...state, error: payload }
        default: return state
    }
}