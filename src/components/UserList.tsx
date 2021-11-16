import React, {useEffect} from 'react';
import {useTypeSelectors} from "../hooks/UseTypeSelectors";
import {fetchUsers} from "../store/action-creators/user";
import {useActions} from "../hooks/useAction";

const UserList = () => {
    const {users, error, loading} = useTypeSelectors(state => state.user)
    const {fetchUsers} = useActions()
    
    
    useEffect(() => {
        fetchUsers()
    }, []);
    
    if (loading) {
        return <h1>Издет загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    
    return (
        <div>
            {users.map(user =>
                <div key={user.id}>{user.name}</div>
            )}
        </div>
    );
};

export default UserList
