function Navigation() {
  return (
    <nav className="flex justify-between items-center h-16 w-full px-5 fixed top-0 left-0 shadow-md bg-gray-500 text-white z-10">
      <h3>RealWorld Blog</h3>
      <div>
        <button className="mr-4">sign in</button>
        <button>sign up</button>
      </div>
    </nav>
  );
}

export default Navigation;
