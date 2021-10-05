import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
const UserList = () => {
  const UserData = useSelector((state) => state.Data);
  const { id, title, userId } = UserData.data;
  const [userid, setUserId] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      method: "GET"
    })
      .then((res) => res.json())
      .then((data) => {
        setUserId(data);
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [userId]);

  return (
    <>
      <div class="card my-5" >
        <div class="row">
          <div class="col">
            <div class="card-body shadow">
              <h5 class="card-title">User Detail</h5>
              <p class="card-text">Todo Id: {id}</p>
              <p class="card-text">Todo Title: {title}</p>
              <hr />
              <p class="card-text">User Id: {userId}</p>
              <p class="card-text">Name: {userid.name}</p>
              <p class="card-text">Email: {userid.email}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserList;
