import './User.scss'

const gravatar = require('gravatar');

const User = ({ user: { name, email }, viewModal, toggleModal }) => {

    
    
    const gravatarURL = gravatar.url(email, { s: '200', r: 'pg', d: 'retro'} );

    const handleClick = (e) => { toggleModal(!viewModal) };
    
    return(
        <>
            <div className='user' onClick={ handleClick } >
                <div className='avatar'>
                    <img src={ gravatarURL } alt="portrait" />
                </div>
                <div className='user-name'>
                    <h3>{name}</h3>
                    <h6>{email}</h6>
                </div>
                <div className='todo-count'>
                    <h3>5</h3>
                </div>
            </div>
        </>
    );
};

export default User;