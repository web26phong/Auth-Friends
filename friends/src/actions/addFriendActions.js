import {axiosWithAuth} from "../utils/axiosWithAuth";

export const addFriend = async (friend) => {
    try{
        const res = await axiosWithAuth()
        .post(`/friends`, friend);
        return {type: "GET_FRIENDS", payload: res.data}
    } catch (err){
        console.log(err)
        return {type: "GET_FRIENDS_FAILURE"};
    }
    
}