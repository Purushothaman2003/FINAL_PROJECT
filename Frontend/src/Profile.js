import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { FaEye } from 'react-icons/fa';
import { BiSolidEditAlt } from 'react-icons/bi';
import { MdDeleteOutline } from 'react-icons/md';
import Navbar from "./Navbar";


export default function Profile() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/get");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/delete/${id}`);
    loadUsers();
  };

  return (
    <div>
        <Navbar/>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Employee Details
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <Link className="btn btn-outline-light" to="/adduser">
          Add Employee
        </Link>
      </div>
    </nav>
  
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">ID</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Total Tax</th>
               <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.tax}</td>
                <td>
                  <Link
                    className=" mx-2"
                    to={`/viewuser/${user.id}`}
                  >
                    <FaEye/>
                  </Link>
                  <Link
                    className=" mx-2"
                    to={`/edituser/${user.id}`}
                  >
                    <BiSolidEditAlt/>
                  </Link>
                  <button
                    className="mx-2"
                    onClick={() => deleteUser(user.id)}
                  >
                   <MdDeleteOutline/>
                  </button>
                </td>
              </tr>
            ))}
        
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}