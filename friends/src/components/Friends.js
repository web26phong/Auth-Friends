import React, {useState, useEffect} from "react";
import Loader from "react-loader-spinner";

import {getFriends} from "../actions/getFriendsActions";
import {addFriend} from "../actions/addFriendActions";
import {useSelector, useDispatch} from "react-redux";

const Friends = (props)=> {
    const isLoading = useSelector(state => state.loadingReducer.isLoading);
    const error = useSelector(state => state.loadingReducer.error);
    const friendsList = useSelector(state => state.loadingReducer.friendsList);
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");

    useEffect(()=>{
        dispatch(getFriends());
    },[dispatch])

    const handleNameChanges = e =>{
        setName(e.target.value);
    }

    const handleAgeChanges = e =>{
        setAge(parseInt(e.target.value));
    }

    const handleEmailChanges = e =>{
        setEmail(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const id = friendsList.length+1;
        const friend = {id, name, age, email}
        addFriend(friend);
        dispatch(getFriends());
    }
    
    return (
        <div>
            <div className="form">
                <input type="text" placeholder="name" value={name} onChange={handleNameChanges}/>
                <input type="number" placeholder="age" value={age} onChange={handleAgeChanges}/>
                <input type="email" placeholder="email" value={email} onChange={handleEmailChanges}/>
                <button onClick={handleSubmit}>Add Friend</button>
            </div>
            {error !== "" && (
                <div>ERROR! Please try again later...</div>
            )}
            {isLoading && (
                <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={10000} //10 secs
              />
            )}
            {!isLoading && friendsList &&(<div className="friendsContainer">
                {friendsList.map((friend, index) => (
                    <div key={index} className="eachFriend">
                        <p>Name: {friend.name}</p>
                        <p>Age: {friend.age}</p>
                        <p>Email: {friend.email}</p>
                    </div>
                ))}
            </div>)}
            
        </div>
    )
}

export default Friends;