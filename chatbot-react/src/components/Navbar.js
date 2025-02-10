import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <Link to="/chat" className="mr-4"><h1 className="text-xl font-bold">Chat App</h1></Link>
      <div>
        {user ? (
          <>
            <Link to="/profile" className="mr-4">Profile</Link>
            <Link to="/login" className="mr-4"><button onClick={logout} className="bg-red-500 px-3 py-1 rounded">Logout</button></Link>
          </>
        ) : (
          <>
            <Link to="/login" className="bg-green-500 px-3 py-1 rounded">Login</Link>
            {" "}
            <Link to="/register" className="bg-green-500 px-3 py-1 rounded">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;