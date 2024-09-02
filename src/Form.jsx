import React, { useState } from "react";
import './Form.css';

const Form = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ Name: "", Email: "", Mobile: "" });
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex === null) {
      setUsers([...users, newUser]);
    } else {
      const updatedUsers = users.map((user, index) =>
        index === editIndex ? newUser : user
      );
      setUsers(updatedUsers);
      setEditIndex(null);
    }
    setNewUser({ name: "", email: "", mobile: "" });
  };

  const handleEdit = (index) => {
    setNewUser(users[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedUsers = users.filter((user, i) => i !== index);
    setUsers(updatedUsers);
  };

  return (
    <div className="App">
      <h1>User App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newUser.name}
          onChange={handleInputChange}
          required
        /><br /><br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newUser.email}
          onChange={handleInputChange}
          required
        /><br /><br />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile"
          value={newUser.mobile}
          onChange={handleInputChange}
          required
        /><br /><br />
        <button type="submit">{editIndex === null ? "Add User" : "Update User"}</button>
      </form>
      <h2>Entered User Details</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - {user.email} - {user.mobile}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Form;