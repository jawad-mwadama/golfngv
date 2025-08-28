function Navbar() {
  return (
    <nav className="rounded-4xl absolute left-1/2 top-4 z-10 w-[90%] max-w-7xl -translate-x-1/2 transform bg-white/20 shadow-md backdrop-blur-md">
      <div className="flex items-center justify-between p-2">
        <img src="/images/golfngvlogo.png" className="size-12" alt="Logo" />
        <ul className="hidden gap-6 font-medium text-black md:flex">
          <li>Service</li>
          <li>Agency</li>
          <li>Case Study</li>
          <li>Resources</li>
          <li>Contact</li>
        </ul>
        <button className="hidden rounded-full bg-black px-4 py-1 text-white md:block">
          Join Now
        </button>
      </div>
    </nav>
  );
}

export default Navbar;