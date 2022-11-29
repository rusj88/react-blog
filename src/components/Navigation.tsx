import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="flex justify-between items-center h-16 w-full px-5 fixed top-0 left-0 shadow-md bg-white z-10">
      <Link to={`/`}>
        <div className=" text-black text-lg">RealWorld Blog</div>
      </Link>
      <div className="flex gap-4">
        <Link to={`/sign-in`}>
          <div className="w-24 h-12">
            <div className="h-full flex justify-center items-center text-black text-lg">
              Sign In
            </div>
          </div>
        </Link>
        <Link to={`/sign-up`}>
          <div className="w-24 h-12 border-lime-500 border-2 rounded">
            <div className="h-full flex justify-center items-center text-lime-500 text-lg">
              Sign Up
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
