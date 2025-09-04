import React from "react";

function DiscoverButton({ className }) {
  return (
    <div>
      <button
        className={`rounded-full border-b-1 border-l-1 border-teal-50 bg-white/20 p-2.5 px-9 text-white shadow-md backdrop-blur-md duration-200 hover:border-b-2 hover:border-l-2 hover:border-teal-50 hover:ease-in-out ${className}`}
      >
        Discover
      </button>
    </div>
  );
}

export default DiscoverButton;
