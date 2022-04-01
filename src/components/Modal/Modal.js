import './Modal.scss'

const Modal = ({ viewModal, toggleModal }) => {

    const closeModal = (e) => { toggleModal(!viewModal) }
    const handleSubmit = (e) => {
        alert('New to-do added!'); 
        toggleModal(!viewModal)
    }
    return (
        <div className='modal'>
            <div className='modal-container'>
                <div className='modal-header'>
                    <button className='btn modal-close-btn' onClick={closeModal}> X </button>
                </div>
                <div className='modal-body'>
                    <h1>Reserved for to-do input text field</h1>
                </div>
                <div className='modal-footer'>
                    <button className='btn submit-btn' onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;