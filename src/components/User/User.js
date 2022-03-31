import avatar from "../../images/stock/avatar.jpg"  // temporary avatar to build out user card
import './User.scss'

const User = ({ user: { name, email } }) => {
    
    return(
        // <div className='user'>
        //     <h4>{name}</h4>
        //     <h6>{email}</h6>
        // </div>
        <div className='user'>
            <div className='avatar'>
                <img src={avatar} alt="portrait" />
                {/* <h5>avatar</h5> */}
            </div>
            <div className='user-name'>
                <h3>{name}</h3>
                <h6>{email}</h6>
            </div>
            <div className='todo-count'>
                <h3>5</h3>
            </div>
        </div>
    );
};

export default User;