import "./styles.css";
import TodoList from './container/TodoList'
import UserList from './container/UserList'
export default function App() {
  return (
    <div className="App">
      <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <TodoList/>
        </div>
        <div className="col-6">
          <UserList/>
        </div>
      </div>
      </div>
    </div>
  );
}
