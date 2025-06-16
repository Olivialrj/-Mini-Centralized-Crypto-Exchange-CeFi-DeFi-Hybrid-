import { useState } from "react";
import { register } from "../api/auth";

export default function RegisterForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    retypePassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    register(form)
      .then((response) => {
        console.log("register successful:", response.data);
      })
      .catch((error) => {
        console.error("register failed:", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md bg-pink rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Register
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 mb-2 font-medium"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 mb-2 font-medium"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          <div>
            <label
              htmlFor="retypePassword"
              className="block text-gray-700 mb-2 font-medium"
            >
              Retype Password
            </label>
            <input
              id="retypePassword"
              name="retypePassword"
              type="password"
              value={form.retypePassword}
              onChange={handleChange}
              placeholder="Retype your password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-md shadow-md transition-colors duration-200"
            style={{
              backgroundColor: "#805ad5" /* Tailwind purple-600 hex */,
              backgroundImage: "none",
              cursor: "pointer",
            }}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
