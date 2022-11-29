import { Link } from "react-router-dom";
import ControlPanel from "./ControlPanel";

function Navigation() {
  return (
    <nav className="flex justify-between items-center h-16 w-full px-5 fixed top-0 left-0 shadow-md bg-white z-10">
      <Link to={`/`}>
        <div className=" text-black text-lg">RealWorld Blog</div>
      </Link>
      <ControlPanel />
    </nav>
  );
}

export default Navigation;
