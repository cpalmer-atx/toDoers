import { useState } from 'react';
import './Modal.scss'

const Modal = ({ viewModal, toggleModal }) => {

    const [ task, setTask ] = useState('');

    const closeModal = (e) => { 
        toggleModal(!viewModal) 
    }

    const handleSubmit = (e) => {
        alert(`"${task}" submitted to to-do list!`);
        toggleModal(!viewModal)
    }

    const handleTextField = (e) => {
        setTask( e.target.value );
    };

    return (
        <div className='modal'>
            <div className='modal-container'>
                <div className='modal-header'>
                    <button 
                        className='btn modal-close-btn' 
                        onClick={closeModal}
                        > X 
                    </button>
                </div>
                <div className='modal-body'>
                    <label className='modal-label'>New to-do:
                        <input
                            className='modal-input-field'
                            type='text'
                            onChange={ handleTextField }
                        />
                    </label>
                </div>
                <div className='modal-footer'>
                    <button className='btn submit-btn' onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;