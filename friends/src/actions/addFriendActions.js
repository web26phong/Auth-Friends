import {axiosWithAuth} from "../utils/axiosWithAuth";

export const addFriend = (friend) => {

    axiosWithAuth()
        .post(`/friends`, friend)
        .then(res => {
            
        })
        .catch(err => {
        console.log(err);
        })
}