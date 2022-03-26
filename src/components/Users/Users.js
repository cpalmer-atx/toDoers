import UserForm from '../UserForm/UserForm';
import UserList from '../UserList/UserList';
import './Users.scss'

const Users = () => {
    return(
        <div className='users'>
            <h2>Reserved for Users</h2>
            <UserForm />
            <UserList />
        </div>
    );
};

export default Users;