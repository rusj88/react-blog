import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { IInputs } from "../models/models";
import { useLoginUserMutation } from "../store/blog/blog.api";

function SignIn() {
  const [loginUser] = useLoginUserMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Pick<IInputs, "email" | "password">>();

  const onSubmit = (data: any) => {
    const userData = {
      user: {
        email: data.email,
        password: data.password,
      },
    };
    loginUser(userData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-96 mt-6 mx-auto bg-white rounded drop-shadow-xl">
        <div className="flex flex-col py-12 px-8">
          <h1 className="text-2xl self-center mb-5">Sign In</h1>
          <label htmlFor="email">Email address</label>
          <input
            type="text"
            id="email"
            placeholder="Email address"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Please enter a valid email address",
              },
            })}
            className="h-10 py-2 px-3 border border-gray-400 rounded mb-3"
          />
          {errors?.email && (
            <div className="text-red-600 mb-3">{errors.email.message}</div>
          )}
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password should be at least 6 characters long",
              },
              maxLength: { value: 40, message: "no more than 40 symbols" },
            })}
            className="h-10 py-2 px-3 border border-gray-400 rounded mb-3"
          />
          {errors?.password && (
            <div className="text-red-600 mb-3">{errors.password.message}</div>
          )}
          <button className="h-10 py-2 px-4 bg-sky-500 text-white rounded mb-2">
            Login
          </button>
          <Link className="self-center" to={`/sign-up`}>
            Don’t have an account? Sign Up.
          </Link>
        </div>
      </div>
    </form>
  );
}

export default SignIn;
