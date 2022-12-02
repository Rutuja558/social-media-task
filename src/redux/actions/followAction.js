import axios from "axios";
import { FOLLOW_FAIL, FOLLOW_REQUEST, FOLLOW_SUCCESS } from "../constants/followConstants";

export const handleFollow = (IDs) => async dispatch => {
    try {
        dispatch({ type: FOLLOW_REQUEST })
        const config = {
            headers: { authorization: process.env.REACT_APP_TOKEN }
        }
        const { data } = await axios.put(`https://luck-admin.luckyroofs.com/api/social-users/${IDs[0]}`, {
            data: { following: IDs[1] }
        }, config)
        dispatch({ type: FOLLOW_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: FOLLOW_FAIL, payload: error })
    }
}
