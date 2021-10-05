import React, { useState, useEffect } from "react";
import { ShowDetail } from "../Reducer/Action";
import { useDispatch } from "react-redux";

const TodoList = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState([]);
  const [search, setSearch] = useState("");


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setTodo(data);
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  // search fuction
  const filterdTodo = todo.filter(title => {
    return title.title.toLowerCase().includes(search.toLowerCase())
  })
  // jsonplaceholder.typicode.com/users/:id
  return (
    <>
      <h1>Todo Details</h1>
      <hr />
      <form style={{ marginLeft: '321px', border: 'none' }} class="form-inline my-2 my-lg-0 rounded-pill">
        <input onChange={e => setSearch(e.target.value)} class="form-control rounded-pill" type="search" placeholder="Search" aria-label="Search" />
      </form>
      <table className="table shadow mt-2">
        <thead className="table-dark">
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Completed</th>
            <th>Action</th>
          </tr>
        </thead>
        {filterdTodo.map((elem) => {
          return (
            <>
              <tr>
                <td>{elem.id}</td>
                <td>{elem.title}</td>
                <td>
                  {elem.completed === false ? "incompleted" : "completed"}
                </td>
                <td>
                  <button className="btn btn-outline-primary rounded-pill " style={{ border: '1px solid' }}
                    onClick={() =>
                      dispatch(
                        ShowDetail({
                          id: elem.id,
                          title: elem.title,
                          userId: elem.id
                        })
                      )
                    }
                  >
                    View User
                  </button>
                </td>
              </tr>
            </>
          );
        })}
      </table>
    </>
  );
};
export default TodoList;
