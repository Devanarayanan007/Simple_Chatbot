import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "../axios";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post("/auth/login", { email, password });
            login(res.data.token);
            navigate("/chat");
        } catch (err) {
            alert("Invalid Credentials !");

        } finally {
            setLoading(false);
        }
    };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="p-6 bg-white shadow-md rounded" onSubmit={handleLogin}>
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input type="email" placeholder="Email" className="border p-2 w-full mb-3"
          value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="border p-2 w-full mb-3"
          value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="bg-blue-500 text-white p-2 w-full" disabled={loading}>
            {loading ? <ClipLoader size={20} color={"#fff"} /> : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;