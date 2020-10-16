const initState: LoadingType = {
    loading: false
};
export type LoadingType = {
    loading: boolean
}
type LoadingActionType = {
    type: "START_LOADING"
    loading: boolean
}

export const loadingReducer = (state: LoadingType = initState, action: LoadingActionType): LoadingType => {
    switch (action.type) {
        case "START_LOADING": {
            return {...state, loading: action.loading};
        }
        default:
            return state;
    }
};

export const loadingAC = (loading: boolean): LoadingActionType => {
    return {type: "START_LOADING", loading}
}