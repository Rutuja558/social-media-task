import { FOLLOW_FAIL, FOLLOW_REQUEST, FOLLOW_SUCCESS } from "../constants/followConstants"

export const followReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case FOLLOW_REQUEST: return { ...state }
        case FOLLOW_SUCCESS: return { ...state, follow: payload }
        case FOLLOW_FAIL: return { ...state, error: payload }
        default: return state
    }
}