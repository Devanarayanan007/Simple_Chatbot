import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-gray-700">404 - Page Not Found</h1>
      <p className="mt-2 text-gray-500">The page you are looking for does not exist.</p>
      <Link to="/" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Go Home</Link>
    </div>
  );
};

export default NotFound;