import React, { useState } from "react";
import JoinButton from "../Utils/JoinButton";
import DiscoverButton from "../Utils/DiscoverButton";

const navLinks = [
  { id: "our story", label: "Our Story" },
  { id: "About Us", label: "About Us" },
  { id: "Game", label: "Game" },
];

function OurStory() {
  return (
    <>
      <div className="p-3 sm:p-9">
        <div className="pt-6 sm:pt-9">
          <Links />
          <div className="flex flex-col content-center justify-between pt-6 sm:flex-row">
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
      {/* start of bento section */}
      <Bento />
    </>
  );
}

function Bento() {
  return (
    <div className="p-3 sm:p-9">
      <div className="mx-auto grid h-[500px] grid-cols-1 gap-4 sm:grid-cols-2 sm:grid-rows-2">
        {/* left square */}
        <div className="col-span-1 row-span-2 overflow-hidden rounded-3xl bg-[url('/images/young-man-holding-golf-club.jpg')] mask-t-from-90% bg-cover bg-center"></div>
        {/* two rectangles */}
        <div className="overflow-hidden rounded-3xl bg-[url('/images/professional-golfer-bali-indonesia.jpg')] bg-cover bg-center"></div>
        {/* rectangle 2 */}
        <div className="relative flex items-end">
          <div className="">
            <p className="pb-7">
              Established in <span className="text-lime-300">1996</span>,pine
              ridge golf club spans over
              <span className="text-lime-300"> 150 </span>
              acres of rolling hills,mature trees and breathtaking water
              features.Designed for golfers of all levels, it offers a
              challenging yet enjoyable experience amidst a serene natural
              setting. More than just a course, it’s a welcoming community where
              members enjoy world-class amenities and year-round events.
            </p>
            <div className="pt-3 sm:pt-6">
              <JoinButton />
            </div>
          </div>
        </div>
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
          className={`${tabLink === link.id ? "rounded-full bg-lime-300 p-2 text-black" : "rounded-full bg-gray-200 p-1.5 text-zinc-400"} font-semibold`}
        >
          {link.label}
        </button>
      ))}
    </div>
  );
}
export default OurStory;
