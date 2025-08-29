import React from "react";

function JoinButton() {
  return (
    <button className="flex items-center gap-2 rounded-full bg-neutral-900 p-2 text-white">
      Join our team
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-200">
        &rarr;
      </span>
    </button>
  );
}

export default JoinButton;
