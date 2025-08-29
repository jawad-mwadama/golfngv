import React, { useState } from "react";

const navLinks = [
  { id: "our story", label: "Our Story" },
  { id: "About Us", label: "About Us" },
  { id: "Game", label: "Game" },
];

function OurStory() {
  return (
    <div className="p-3 sm:p-9">
      <div className="pt-9">
        <Links />
      </div>
    </div>
  );
}

function Links() {
  const [tabLink, setTabLink] = useState(navLinks[0].id);

  return (
    <div className="flex gap-3">
      {navLinks.map((link) => (
        <button
          key={link.id}
          onClick={() => setTabLink(link.id)}
          className={`${tabLink === link.id ? "rounded-full bg-lime-200 p-1.5 text-black" : "rounded-full bg-gray-200 p-1.5 text-zinc-400"} font-semibold`}
        >
          {link.label}
        </button>
      ))}
    </div>
  );
}
export default OurStory;
