import { useState } from 'react';
import './UserForm.scss'

const UserForm = () => {
    const [ newUser, setNewUser ] = useState({ name: '', email: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Success!  ${newUser.name} submitted!`);
    };

    const handleNameField = (e) => {
        setNewUser({ ...newUser, name: e.target.value });
    };

    const handleEmailField = (e) => {
        setNewUser({ ...newUser, email: e.target.value });
    };

    return(
        <form className='user-form' onSubmit={ handleSubmit }>
            <input
                className='form-name'
                value={ newUser.name }
                onChange={ handleNameField }
                placeholder='Name'
            />
            <input
                className='form-email'
                value={ newUser.email }
                onChange={ handleEmailField }
                placeholder='Email'
            />
            <button
                className='btn form-btn'
                type='submit'
                >Submit
            </button>
        </form>
    );
};

export default UserForm;