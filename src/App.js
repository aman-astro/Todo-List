import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Form } from './components/Form';
import { Todos } from './components/Todos';
import { deleteAll } from './redux/todoapp/actions';
import { useState } from 'react';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.operationReducer);
  const [editFormVisibility, setEditFormVisibility] = useState(false);
  const [editTodo, setEditTodo] = useState('');
  const handleEditClick = (todo) => {
    setEditFormVisibility(true);
    setEditTodo(todo);
  }
  const cancelUpdate = () => {
    setEditFormVisibility(false);
  }
  return (
    <div>
      <div className="Wrapper">
        <br></br>
        <h1 className="text-center">TODO-APP USING REACT-REDUX</h1>
        <Form editFormVisibility={editFormVisibility} editTodo={editTodo} cancelUpdate={cancelUpdate} />
        <Todos handleEditClick={handleEditClick} editFormVisibility={editFormVisibility} />
        {todos.length > 0 && (
          <div className='text-center'>
            <button className='btn btn-danger btn-md delete-all'
              onClick={() => dispatch(deleteAll())}>Delete All</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
