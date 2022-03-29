import './User.scss'

const User = ({ user: { name, email } }) => {
    
    return(
        <div className='user'>
            <h4>{name}</h4>
            <h6>{email}</h6>
        </div>
    );
};

export default User;