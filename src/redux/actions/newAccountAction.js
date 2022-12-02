import axios from "axios"
import { NEW_USER_ACCOUNT_FAIL, NEW_USER_ACCOUNT_REQUEST, NEW_USER_ACCOUNT_SUCCESS } from "../constants/newAccountConstant"

export const newUserAdd = userData => async dispatch => {
    try {
        dispatch({ type: NEW_USER_ACCOUNT_REQUEST })
        const config = {
            headers: { authorization: process.env.REACT_APP_TOKEN }
        }
        const { data } = await axios.post('https://luck-admin.luckyroofs.com/api/social-users', { data: userData }, config)
        dispatch({ type: NEW_USER_ACCOUNT_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: NEW_USER_ACCOUNT_FAIL, payload: error })
    }
}