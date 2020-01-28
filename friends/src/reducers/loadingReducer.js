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
                pokemonlist: action.payload
            };
        case "GET_FRIENDS_FAILURE":
            return {
                ...state,
                isLoading: false,
                error: "OOPS! SOMETHING WENT WRONG. TRY AGAIN LATER"
            };
        default:
            return state;
    }
}