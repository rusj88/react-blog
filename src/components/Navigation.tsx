function Navigation() {
  return (
    <nav className="flex justify-between items-center  h-[50px] px-5 shadow-md bg-gray-500 text-white">
      <h3>RealWorld Blog</h3>
      <div>
        <button className="mr-4">sign in</button>
        <button>sign up</button>
      </div>
    </nav>
  );
}

export default Navigation;
