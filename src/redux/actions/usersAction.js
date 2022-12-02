import axios from "axios";
import { GET_ALL_USERS_FAIL, GET_ALL_USERS_REQUEST, GET_ALL_USERS_SUCCESS } from "../constants/usersConstant";

export const getAllUsers = () => async dispatch => {
    try {
        dispatch({ type: GET_ALL_USERS_REQUEST })
        const config = {
            headers: { authorization: process.env.REACT_APP_TOKEN }
        }
        const { data: { data } } = await axios.get('https://luck-admin.luckyroofs.com/api/social-users?populate=*', config)
        console.warn(data);
        dispatch({ type: GET_ALL_USERS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_ALL_USERS_FAIL, payload: error })
    }
}