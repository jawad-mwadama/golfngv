import React from "react";

function JoinButton({ className = "" }) {
  return (
    <button
      className={`flex items-center gap-2 rounded-full bg-neutral-900 p-2 text-white duration-500 hover:bg-lime-300 hover:text-black hover:ease-in-out ${className}`}
    >
      Join our team
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-300 duration-400 hover:bg-neutral-900 hover:text-white hover:ease-in-out">
        &rarr;
      </span>
    </button>
  );
}

export default JoinButton;
