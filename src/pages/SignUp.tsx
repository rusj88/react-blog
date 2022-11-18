function SignUp() {
  return (
    <form>
      <div className="w-96 mt-6 mx-auto bg-white rounded drop-shadow-xl">
        <div className="flex flex-col py-12 px-8">
          <h1 className="text-2xl self-center mb-5">Create new account</h1>
          <label htmlFor="">Username</label>
          <input
            type="text"
            placeholder="Username"
            className="h-10 py-2 px-3 border border-gray-400 rounded mb-3"
          />
          <label htmlFor="">Email address</label>
          <input
            type="text"
            placeholder="Email address"
            className="h-10 py-2 px-3 border border-gray-400 rounded mb-3"
          />
          <label htmlFor="">Password</label>
          <input
            type="text"
            placeholder="Password"
            className="h-10 py-2 px-3 border border-gray-400 rounded mb-3"
          />
          <label htmlFor="">Repeat password</label>
          <input
            type="text"
            placeholder="Repeat password"
            className="h-10 py-2 px-3 border border-gray-400 rounded mb-3"
          />
          <hr></hr>
          <label className="flex gap-2 items-baseline mb-5">
            <input type="checkbox" />I agree to the processing of my personal
            information
          </label>
          <button className="h-10 py-2 px-4 bg-sky-500 text-white rounded mb-2">
            Create
          </button>
          <span className="self-center">Already have an account? Sign In.</span>
        </div>
      </div>
    </form>
  );
}

export default SignUp;
