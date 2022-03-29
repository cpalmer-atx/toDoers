import User from '../User/User';
import './UserList.scss'

const UserList = ({ users }) => {

    return(
        <div className='user-list'>
            <h3>UserList</h3>
            { users.length > 0 ?
                users.map( (user) => <User key={user.email} user={user} /> ) :
                <span>No users found...</span>
            }
        </div>
    );
};

export default UserList;