import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { IEditProfile } from "../models/models";
import { useUpdateUserMutation } from "../store/blog/blog.api";
import { addServerErrors } from "../utils/validation";

function EditProfile() {
  const [updateUser, { error }] = useUpdateUserMutation();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IEditProfile>();

  useEffect(() => {
    if (error) {
      if ("status" in error) {
        const errobj = JSON.parse(JSON.stringify(error.data));
        addServerErrors(errobj.errors, setError);
      }
    }
  }, [error, setError]);

  const onSubmit = (data: IEditProfile) => {
    const userData = {
      user: {
        username: data.username,
        email: data.email,
        password: data.password,
        image: data.image,
      },
    };
    updateUser(userData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-96 mt-6 mx-auto bg-white rounded drop-shadow-xl">
        <div className="flex flex-col py-12 px-8">
          <h1 className="text-2xl self-center mb-5">Edit Profile</h1>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            {...register("username", {
              required: "username is required",
              minLength: 3,
              maxLength: 20,
            })}
            className={`h-10 py-2 px-3 border border-gray-400 rounded mb-3 ${
              errors.username && "border-red-600"
            }`}
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
            className={`h-10 py-2 px-3 border border-gray-400 rounded mb-3 ${
              errors.email && "border-red-600"
            }`}
          />
          {errors?.email && (
            <div className="text-red-600 mb-3">{errors.email.message}</div>
          )}
          <label htmlFor="password">New Password</label>
          <input
            type="text"
            id="password"
            placeholder="New password"
            {...register("password", {
              required: "password is required",
              minLength: {
                value: 6,
                message: "password should be at least 6 characters long",
              },
              maxLength: 40,
            })}
            className={`h-10 py-2 px-3 border border-gray-400 rounded mb-3 ${
              errors.password && "border-red-600"
            }`}
          />
          {errors?.password && (
            <div className="text-red-600 mb-3">{errors.password.message}</div>
          )}
          <label htmlFor="avatar">Avatar image (url)</label>
          <input
            type="text"
            id="image"
            placeholder="Avatar image"
            {...register("image", {
              pattern: {
                value:
                  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi,
                message: "please enter a valid url",
              },
            })}
            className={`h-10 py-2 px-3 border border-gray-400 rounded mb-3 ${
              errors.image && "border-red-600"
            }`}
          />
          {errors?.image && (
            <div className="text-red-600 mb-3">{errors.image.message}</div>
          )}
          <button className="h-10 py-2 px-4 bg-sky-500 text-white rounded mb-2">
            Save
          </button>
        </div>
      </div>
    </form>
  );
}

export default EditProfile;
