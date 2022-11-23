import { Link } from "react-router-dom";

function Success() {
  return (
    <div className="w-96 mt-6 mx-auto bg-white rounded drop-shadow-xl">
      <div className="flex flex-col items-center py-12 px-8">
        <h2 className="text-lg">Account has been successfully created</h2>
        <Link to="/sign-in">Log in</Link>
      </div>
    </div>
  );
}

export default Success;
