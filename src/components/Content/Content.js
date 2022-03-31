import Todos from '../Todos/Todos';
import Users from '../Users/Users';
import './Content.scss'

const Content = () => {
    return(
        <div className='content'>
            <div className='content-components'>
                <Users />
                <Todos />
            </div>
        </div>
    );
};

export default Content;