import { useState } from 'react';
import UserForm from '../UserForm/UserForm';
import UserList from '../UserList/UserList';
import './Users.scss'

// Temporary users while user cards are built out.
const tempState = [
    { name: 'Chad', email: 'chad.n.palmer@gmail.com' }, 
    { name: 'John', email: 'j@email.com' }
];

const Users = () => {
    const [ visible, setVisible ] = useState(false);
    const [ users, setUsers ] = useState(tempState);
    
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