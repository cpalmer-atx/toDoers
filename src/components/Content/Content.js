import Todos from '../Todos/Todos';
import Users from '../Users/Users';
import './Content.scss'

const Content = () => {
    return(
        <div className='content'>
            <h1>Reserved for Content</h1>
            <div className='content-components'>
                <Users />
                <Todos />
            </div>
        </div>
    );
};

export default Content;