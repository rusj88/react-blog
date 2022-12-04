import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../store";
import { useGetUserQuery } from "../store/blog/blog.api";
import { signOut } from "../store/blog/tokenSlice";
import UserPic from "../icons/userpic.svg";

function ControlPanel() {
  const { userToken } = useSelector((state: RootState) => state.blog);
  const dispatch = useDispatch();
  const { data } = useGetUserQuery();
  return userToken ? (
    <div className="flex items-center gap-4">
      <Link to={"/new-article"}>
        <div className="py-1 px-4 text-lime-500 text-lg border-lime-500 border-2 rounded">
          Create article
        </div>
      </Link>
      <Link to={"/profile"}>
        <div className="flex items-center gap-2">
          <span className="text-lg text-black font-bold">
            {userToken && data?.username}
          </span>
          <img
            src={data?.image || UserPic}
            alt="user avatar"
            className="h-12 w-12 rounded-full"
          />
        </div>
      </Link>
      <button
        className="py-2 px-4 text-black text-lg border-black border-2 rounded"
        onClick={() => dispatch(signOut())}
      >
        Log Out
      </button>
    </div>
  ) : (
    <div className="flex items-center gap-4">
      <Link to={`/sign-in`}>
        <div className="py-2 px-4  text-black text-lg">Sign In</div>
      </Link>
      <Link to={`/sign-up`}>
        <div className="py-2 px-4 text-lime-500 text-lg border-lime-500 border-2 rounded">
          Sign Up
        </div>
      </Link>
    </div>
  );
}

export default ControlPanel;
