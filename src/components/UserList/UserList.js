import User from '../User/User';
import './UserList.scss'

const UserList = () => {
    return(
        <div className='user-list'>
            <h3>UserList</h3>
            <User />
            <User />
            <User />
        </div>
    );
};

export default UserList;