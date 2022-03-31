import { useState } from 'react';
import UserForm from '../UserForm/UserForm';
import UserList from '../UserList/UserList';
import './Users.scss'

const Users = () => {
    const [ visible, setVisible ] = useState(false);
    const [ users, setUsers ] = useState([]);
    
    const handleClick = (e) => { setVisible(!visible) }

    return(
        <div className='users'>
            <h2>Reserved for Users</h2>
            <button className='btn' onClick={ handleClick }>Add new user</button>
            { visible && <UserForm addUser={setUsers} users={users} /> }
            <UserList users={users} />
        </div>
    );
};

export default Users;