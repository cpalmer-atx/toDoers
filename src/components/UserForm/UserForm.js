import { useState } from 'react';
import './UserForm.scss'

const UserForm = ({ addUser, users }) => {
    const [ newUser, setNewUser ] = useState({ name: '', email: '' });

    const handleSubmit = (e) => {
        e.preventDefault();

        const validation = {
            name: String,
            email: String,
        };

        newUser.name === '' ? 
            validation.name = 'missing field' : 
            validation.name = newUser.name;

        // Regex RFC 2822 validation for email
        /* eslint-disable-next-line */
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(newUser.email) ? 
            validation.email = newUser.email : 
            validation.email = 'invalid email';

        setNewUser({ name: '', email: '' });

        if (!(validation.name === 'missing field') && !(validation.email === 'invalid email')) {
            if (users.some(user => user.email === newUser.email)) {
                console.log('User with that email already exists.');
            } else {
                console.log(`adding ${newUser.name}...`);
                addUser([ newUser, ...users ]);
            }
        } else {
            console.log(validation);
        }
    };

    const handleNameField = (e) => {
        setNewUser({ ...newUser, name: e.target.value });
    };

    const handleEmailField = (e) => {
        setNewUser({ ...newUser, email: e.target.value });
    };

    return(
        <div className='user-form'>
            <form className='form-body' onSubmit={ handleSubmit }>
                <input
                    id='form-name'
                    className='form-input-field'
                    type='text'
                    value={ newUser.name }
                    onChange={ handleNameField }
                    placeholder='Name'
                /><br />
                <input
                    id='form-email'
                    className='form-input-field'
                    type='text'
                    value={ newUser.email }
                    onChange={ handleEmailField }
                    placeholder='Email'
                /><br />
                <button
                    id='btn'
                    className='form-submit btn'
                    type='submit'
                    >Submit
                </button>
            </form>
        </div>
    );
};

export default UserForm;