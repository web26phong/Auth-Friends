import {axiosWithAuth} from "../utils/axiosWithAuth";

export const getFriends = () => dispatch => {
    dispatch({type: "GET_FRIENDS_START"})
    axiosWithAuth()
    .get(`/friends`)
    .then(res => {
        dispatch({type: "GET_FRIENDS_SUCCESS", payload: res.data})
    })
    .catch(err => {
        dispatch({type: "GET_FRIENDS_FAILURE"})
    })
}