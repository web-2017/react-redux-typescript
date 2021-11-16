import {UserState, UserAction, UserActionType} from "../../types/user";

const initialState: UserState = {
    users: [],
    loading: false,
    error: null
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionType.FETCH_USER:
            return {users: [], loading: true, error: null}
        case UserActionType.FETCH_USER_SUCCESS:
            return {users: action.payload, loading: false, error: null}
        case UserActionType.FETCH_USER_ERROR:
            return {users: [], loading: false, error: action.payload}
        default:
            return state
    }
}
