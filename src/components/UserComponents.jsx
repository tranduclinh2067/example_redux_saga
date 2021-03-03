import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../redux/acctions/users';
import Card from './CardComponents';

function UserComponents() {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);
    const loading = useSelector(state => state.users.loading);
    const error = useSelector(state => state.users.error);

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch]);

    return (
        <div>
            {users.loading && <p>Loading...</p>}
            {users.length > 0 && users.map(user => 
                <Card user_={user} key={user.id} />
            )}
            {users.length === 0 && !loading && <p>No data</p>}
            {error && !loading && <p>{error}</p>}
        </div>
    )
}

export default UserComponents;