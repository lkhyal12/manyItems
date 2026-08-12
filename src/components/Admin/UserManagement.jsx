import React, { useState } from "react";
const users = [
  { name: "Jhon doe", email: "jhon@example.com", role: "admin", _id: 1112 },
];
const UserManagement = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  //   handle form submit
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      password: "",
      role: "customer",
    });
  }

  function handleRoleChange(userId, role) {
    console.log({ userId, role });
  }

  function handleDeleteUser(userId) {
    if (window.confirm("Are you sure u wanna delete this user? " + userId))
      console.log(userId);
  }
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">User Management</h2>
      {/* add new user form */}
      <div className="p-6 rounded-lg mb-6">
        <h3 className="text-lg font-bold mb-4">Add New User</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 ">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="rounded w-full p-2 border border-gray-200"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 ">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="rounded w-full p-2 border border-gray-200"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 ">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="rounded w-full p-2 border border-gray-200"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 ">Role:</label>
            <select
              name="role"
              className="w-full p-2 rounded border border-gray-200"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button className="bg-green-500 text-white py-2 rounded px-6 hover:bg-green-600 cursor-pointer">
            Submit
          </button>
        </form>
      </div>

      {/* User List Management */}
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-left bg-gray-100">
          <thead className=" text-gray-700 text-xs uppercase">
            <tr>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Role</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user._id}
                className="border-b border-gray-300 hover:bg-gray-200"
              >
                <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                  {user.name}
                </td>
                <td className="p-4">{user.email}</td>
                <td className="p-4">
                  <select
                    value={user.role}
                    onChange={(e) => handleRoleChange(user._id, e.target.value)}
                    className="p-2 border outline-none border-gray-300 rounded"
                  >
                    <option value="customer">Customer</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>

                <td className="p-4">
                  <button
                    className="rounded cursor-pointer bg-red-600 text-white py-1 px-4 "
                    onClick={() => handleDeleteUser(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
