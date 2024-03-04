import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo } from "./actions/actions";

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state);

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            onClick={() => handleToggleTodo(todo.id)}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <input type="text" placeholder="Add Todo" onKeyDown={(e) => {if (e.key === 'Enter') { handleAddTodo(e.target.value); e.target.value = ''; }}} />
      
    </div>
  );
};

export default App;
