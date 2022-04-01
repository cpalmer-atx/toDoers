import { useState } from 'react';
import UserForm from '../UserForm/UserForm';
import UserList from '../UserList/UserList';
import './Users.scss'

const Users = ({ viewModal, toggleModal }) => {
    const [ visible, setVisible ] = useState(false);
    const [ users, setUsers ] = useState([]);
    
    const handleClick = (e) => { setVisible(!visible) }

    return(
        <div className='users'>
            <button className='btn add-user-btn' onClick={ handleClick }>Add new user</button>
            { visible && <UserForm addUser={setUsers} users={users} /> }
            <UserList users={users} viewModal={viewModal} toggleModal={toggleModal} />
        </div>
    );
};

export default Users;