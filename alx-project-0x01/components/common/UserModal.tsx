import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    address: { street: "", city: "" },
    company: { name: "", catchPhrase: "" },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (["street", "city"].includes(name)) {
      setUser((prev) => ({
        ...prev,
        address: { ...prev.address, [name]: value },
      }));
    } else if (["companyName", "catchPhrase"].includes(name)) {
      setUser((prev) => ({
        ...prev,
        company: {
          ...prev.company,
          [name === "companyName" ? "name" : "catchPhrase"]: value,
        },
      }));
    } else {
      setUser((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white w-full max-w-2xl rounded-xl p-8 shadow-2xl animate-fade-in">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="input"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
              <input
                name="username"
                value={user.username}
                onChange={handleChange}
                placeholder="johndoe"
                className="input"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                name="email"
                type="email"
                value={user.email}
                onChange={handleChange}
                placeholder="user@example.com"
                className="input"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                name="phone"
                value={user.phone}
                onChange={handleChange}
                placeholder="+254..."
                className="input"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
              <input
                name="website"
                value={user.website}
                onChange={handleChange}
                placeholder="example.com"
                className="input"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Street</label>
              <input
                name="street"
                value={user.address.street}
                onChange={handleChange}
                placeholder="123 Main St"
                className="input"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
              <input
                name="city"
                value={user.address.city}
                onChange={handleChange}
                placeholder="Nairobi"
                className="input"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
              <input
                name="companyName"
                value={user.company.name}
                onChange={handleChange}
                placeholder="Company Inc"
                className="input"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Catch Phrase</label>
              <input
                name="catchPhrase"
                value={user.company.catchPhrase}
                onChange={handleChange}
                placeholder="Empowering the future"
                className="input"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-4 pt-4 border-t mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:underline transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 shadow-md"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
