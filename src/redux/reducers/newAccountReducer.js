import { NEW_USER_ACCOUNT_FAIL, NEW_USER_ACCOUNT_REQUEST, NEW_USER_ACCOUNT_SUCCESS } from "../constants/newAccountConstant"

export const newAccountReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case NEW_USER_ACCOUNT_REQUEST: return { ...state, loading: true }
        case NEW_USER_ACCOUNT_SUCCESS: return { ...state, loading: false, user: payload }
        case NEW_USER_ACCOUNT_FAIL: return { ...state, loading: false, error: payload }
        default: return state
    }
}