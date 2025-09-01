import React, { useState } from "react";

const navLinks = [
  { id: "our story", label: "Our Story" },
  { id: "About Us", label: "About Us" },
  { id: "Game", label: "Game" },
];

function OurStory() {
  return (
    <>
      <div className="p-3 sm:p-9">
        <div className="pt-9">
          <Links />
          <div className="flex content-center justify-between pt-6">
            <h3 className="text-3xl font-medium tracking-wide">
              A Premier Golfing <br /> Destination
            </h3>
            <p className="pt-2 font-light">
              Designed by renowed architect Robert Trent jr.,the course <br />{" "}
              challenges pros while welcoming casual players.
            </p>
          </div>
        </div>
      </div>
      // start of bento grid section
      <div className="grid h-[500px] grid-cols-2 gap-4">
        {/* <!-- Large Div (left side) --> */}
        <div
          className="relative col-span-1 row-span-2 bg-cover bg-center"
          // style="background-image: url('https://via.placeholder.com/600x500');"
        >
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <h2 className="text-2xl font-bold text-white">
              Large Text Over Image
            </h2>
          </div>
        </div>

        {/* <!-- Top Right Div --> */}
        <div
          className="relative bg-cover bg-center"
          // style="background-image: url('https://via.placeholder.com/300x250');"
        >
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <p className="text-lg font-semibold text-white">Top Right Text</p>
          </div>
        </div>

        {/* <!-- Bottom Right Div --> */}
        <div
          className="relative bg-cover bg-center"
          // style="background-image: url('https://via.placeholder.com/300x250');"
        >
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <p className="text-lg font-semibold text-white">
              Bottom Right Text
            </p>
          </div>
        </div>
      </div>
    </>
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
          className={`${tabLink === link.id ? "rounded-full bg-lime-200 p-2 text-black" : "rounded-full bg-gray-200 p-1.5 text-zinc-400"} font-semibold`}
        >
          {link.label}
        </button>
      ))}
    </div>
  );
}
export default OurStory;
