import React from "react";

function DiscoverButton({ className }) {
  return (
    <div>
      <button
        className={`rounded-full border-b-1 border-l-1 border-teal-50 bg-white/20 p-2 px-9 text-white shadow-md backdrop-blur-md ${className}`}
      >
        Discover
      </button>
    </div>
  );
}

export default DiscoverButton;
