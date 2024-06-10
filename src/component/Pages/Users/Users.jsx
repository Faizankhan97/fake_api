import axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const setUserApi = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      if (res.status == 200) {
        setUsers(res?.data);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    setUserApi();
    setLoading(true);
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setUsers(data);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setLoading(false);
    //   });
  }, []);

  if (loading) {
    return (
      <div className="home">
        <div className="spinner-grow" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div className="main">
      <div className="container">
        <h1 className="mb-4">Users</h1>
        <div className="row">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Street</th>
                <th scope="col">Suite</th>
                <th scope="col">Phone</th>
                <th scope="col">Website</th>
                <th scope="col">City</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <>
                  <tr key={user.id}>
                    <th>{user.id}</th>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.website}</td>
                    <td>{user.address.street}</td>
                    <td>{user.address.suite}</td>
                    <td>{user.address.city}</td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
