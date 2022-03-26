import Todo from '../Todo/Todo';
import './Todos.css'

const Todos = () => {
    return(
        <div className='todos'>
            <h2>Reserved for todos</h2>
            <Todo />
            <Todo />
            <Todo />
        </div>
    );
};

export default Todos;