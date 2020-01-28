import axios from "axios";

export const getFriends = () => dispatch => {
    dispatch({type: "GET_FRIENDS_START"})
    axios
    .get(``)
    .then(res => {
        console.log(res)
        dispatch({type: "GET_FRIENDS_SUCCESS", payload: res.data.results})
    })
    .catch(err => {
        dispatch({type: "GET_FRIENDS_FAILURE"})
    })
}