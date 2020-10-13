import {InitialStateType, PeopleType} from "../HW8";

type SortActionType = {
    type: "sort"
    payload: "up" | "down"
}
type CheckAgeActionType = {
    type: "check"
    payload: number
}
type ActionType = SortActionType | CheckAgeActionType


export const homeWorkReducer = (state: InitialStateType, action: ActionType): any => {
    switch (action.type) {
        case "sort": {
            const newState = [...state]
            const compare = (a: PeopleType, b: PeopleType) => {
                if (a.name < b.name)
                    return -1;
                if (a.name > b.name)
                    return 1;
                return 0;
            }
            if (action.payload === "up") {
                return newState.sort(compare)
            }
            if (action.payload === "down") {
                return newState.sort(compare).reverse()
            }
            return state
        }
        case "check": {
            return state.filter(p => p.age > action.payload)
        }
        default:
            return state
    }
};