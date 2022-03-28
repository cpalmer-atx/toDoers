import './UserForm.scss'

const UserForm = () => {
    return(
        <form className='user-form'>
            <div className='form-name'>
                <label htmlFor='name'>Name</label>
                <input id='name' type="text" />
            </div>
            <div className='form-email'>
                <label htmlFor='email'>Email</label>
                <input id='email' type="text" />
            </div>
            <button className='btn form-btn' type='submit' onClick={ ()=>{} }>Submit</button>
        </form>
    );
};

export default UserForm;