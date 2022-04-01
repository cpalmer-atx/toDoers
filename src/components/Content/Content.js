import Todos from '../Todos/Todos';
import Users from '../Users/Users';

import './Content.scss'

const Content = ({ viewModal, toggleModal }) => {

    return(
        <div className='content'>
            <div className='content-components'>
                <Users viewModal={viewModal} toggleModal={toggleModal} />
                <Todos />
            </div>
        </div>
    );
};

export default Content;