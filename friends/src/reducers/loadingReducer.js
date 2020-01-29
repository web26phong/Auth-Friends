const initialLoadingState = {
    isLoading: false,
    error: "",
    friendsList: null
}

export const loadingReducer = (state = initialLoadingState, action) => {
    switch (action.type) {
        case "GET_FRIENDS_START":
            return {
                ...state,
                isLoading: true,
                error: ""
            };
        case "GET_FRIENDS_SUCCESS":
            return {
                ...state,
                isLoading: false,
                friendsList: action.payload
            };
        case "GET_FRIENDS_FAILURE":
            return {
                ...state,
                isLoading: false,
                error: "ERROR. Unable to get friends list! Try again later..."
            };
        case "GET_FRIENDS":
            return {
                ...state, 
                isLoading: false,
                friendsList: action.payload
            }
        default:
            return state;
    }
}