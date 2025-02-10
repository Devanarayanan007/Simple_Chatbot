import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold text-red-500">Unauthorized Access</h1>
      <p className="mt-2">You do not have permission to view this page.</p>
      <Link to="/login" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Go to Login</Link>
    </div>
  );
};

export default Unauthorized;