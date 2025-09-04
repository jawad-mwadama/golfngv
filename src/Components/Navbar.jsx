function Navbar() {
  return (
    <nav className="absolute top-4 left-1/2 z-10 w-[90%] max-w-7xl -translate-x-1/2 transform rounded-4xl bg-white/20 shadow-md backdrop-blur-md">
      <div className="flex items-center justify-between p-1">
        <img src="/images/golfngvlogo.png" className="size-12" alt="Logo" />
        <ul className="hidden gap-6 font-medium text-black md:flex">
          <li>Service</li>
          <li>Agency</li>
          <li>Case Study</li>
          <li>Resources</li>
          <li>Contact</li>
        </ul>
        <button className="hidden rounded-full bg-black px-4 py-1 text-white duration-500 hover:bg-lime-300 hover:text-black hover:ease-in-out md:block">
          Join Now
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
