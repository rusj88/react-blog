import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ISignUpForm } from "../models/models";
import { useRegisterUserMutation } from "../store/blog/blog.api";
import { addServerErrors } from "../utils/validation";

function SignUp() {
  const [registerUser, { isSuccess, error }] = useRegisterUserMutation();
  const {
    register,
    handleSubmit,
    getValues,
    setError,
    formState: { errors },
  } = useForm<ISignUpForm>();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      navigate("/success");
    }
    if (error) {
      if ("status" in error) {
        const errobj = JSON.parse(JSON.stringify(error.data));
        addServerErrors(errobj.errors, setError);
      }
    }
  }, [isSuccess, navigate, error, setError]);

  const onSubmit = (data: ISignUpForm) => {
    const userData = {
      user: {
        username: data.username,
        email: data.email,
        password: data.password,
      },
    };
    registerUser(userData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-96 mt-6 mx-auto bg-white rounded drop-shadow-xl">
        <div className="flex flex-col py-12 px-8">
          <h1 className="text-2xl self-center mb-5">Create new account</h1>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            {...register("username", {
              required: "Username is required",
              minLength: { value: 3, message: "3 symbols at least" },
              maxLength: {
                value: 20,
                message: "No more than 20 symbols",
              },
            })}
            className="h-10 py-2 px-3 border border-gray-400 rounded mb-3"
          />
          {errors?.username && (
            <div className="text-red-600 mb-3">{errors.username.message}</div>
          )}
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
          <label htmlFor="passRepeat">Repeat password</label>
          <input
            type="text"
            id="passRepeat"
            placeholder="Repeat password"
            {...register("passRepeat", {
              required: "Repeat password",
              validate: (value) =>
                value === getValues("password") || "Passwords must match",
            })}
            className="h-10 py-2 px-3 border border-gray-400 rounded mb-3"
          />
          {errors?.passRepeat && (
            <div className="text-red-600 mb-3">{errors.passRepeat.message}</div>
          )}
          <hr></hr>
          <label className="flex gap-2 items-baseline mb-5">
            <input
              type="checkbox"
              {...register("terms", {
                required: "You must agree to terms",
              })}
            />
            I agree to the processing of my personal information
          </label>
          {errors?.terms && (
            <div className="text-red-600 mb-3">{errors.terms.message}</div>
          )}
          <button className="h-10 py-2 px-4 bg-sky-500 text-white rounded mb-2">
            Create
          </button>
          <Link className="self-center" to={`/sign-in`}>
            Already have an account? Sign In.
          </Link>
        </div>
      </div>
    </form>
  );
}

export default SignUp;
