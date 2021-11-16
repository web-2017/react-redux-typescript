import {UserAction, UserActionType} from "../../types/user";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionType.FETCH_USER})
            const response = await axios('https://jsonplaceholder.typicode.com/users')
            dispatch({type: UserActionType.FETCH_USER_SUCCESS, payload: response.data})
            
        } catch (e) {
            dispatch({
                type: UserActionType.FETCH_USER_ERROR, payload: 'Произошла ошибка'
            })
        }
    }
}
