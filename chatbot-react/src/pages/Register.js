import { useState } from "react";
import axios from "../axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ fullName: "", email: "", password: "", confirmPassword: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/register", form);
      navigate("/login");
    } catch (err) {
      alert("Error Registering !");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="p-6 bg-white shadow-md rounded" onSubmit={handleRegister}>
        <h2 className="text-xl font-bold mb-4">Register</h2>
        <input type="text" name="fullName" placeholder="Full Name" className="border p-2 w-full mb-3"
          onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" className="border p-2 w-full mb-3"
          onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" className="border p-2 w-full mb-3"
          onChange={handleChange} />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" className="border p-2 w-full mb-3"
          onChange={handleChange} />
        <button className="bg-blue-500 text-white p-2 w-full">Register</button>
      </form>
    </div>
  );
};

export default Register;