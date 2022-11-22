import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="flex justify-between items-center h-16 w-full px-5 fixed top-0 left-0 shadow-md bg-gray-500 text-white z-10">
      <h3>RealWorld Blog</h3>
      <div className="flex gap-4">
        <Link to={`/sign-in`}>sign in</Link>
        <Link to={`/sign-up`}>sign up</Link>
      </div>
    </nav>
  );
}

export default Navigation;
