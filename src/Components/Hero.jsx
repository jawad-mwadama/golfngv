import { useState } from "react";
import JoinButton from "../Utils/JoinButton";
import DiscoverButton from "../Utils/DiscoverButton";

const tabs = [
  { id: "Golf gear", label: "Golf gear" },
  { id: "Social", label: "Social" },
  { id: "Advance", label: "Advance" },
  { id: "Green view Grill", label: "Green view Grill" },
  { id: "Explore", label: "Explore" },
];

function Hero() {
  return (
    <div className="relative flex h-screen flex-wrap justify-between rounded-3xl bg-[url('/images/scene-with-friends-golf-course.jpg')] mask-b-from-80% mask-b-to-100% bg-cover bg-center bg-no-repeat p-3 sm:p-9">
      <div className="">
        {/* changed the bottom and top, come bakc to it if there are issues */}
        <p className="absolute bottom-[45%] space-y-1 rounded-full bg-lime-200 p-1.5 text-sm font-light text-zinc-400 sm:bottom-[50%] sm:font-medium">
          Version 2.0 is here
          <span className="px-2 text-xs text-black">Read Here &rarr;</span>
        </p>
        <h2 className="absolute bottom-[32%] text-4xl font-semibold text-white sm:bottom-[30%] md:text-7xl">
          Unwind, Play, and <br /> Perfect Your Swing
        </h2>
        {/* adjusted tracking font weight and removed the br tag */}
        <p className="absolute bottom-[19%] font-light tracking-tight text-slate-50 sm:bottom-[22%] sm:tracking-wide">
          A championship experience awaits you on lush, world-class <br />
          fairways. Your next legendary round starts here.
        </p>

        <div className="absolute bottom-[9%] flex gap-5 sm:bottom-[13%]">
          <JoinButton />
          <DiscoverButton />
        </div>
      </div>

      {/* create tab component here */}
      <Tab />
    </div>
  );
}

function Tab() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
    <div className="absolute right-6 hidden gap-2 md:bottom-[10%] md:grid md:grid-cols-3">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`${
            activeTab === tab.id
              ? "rounded-3xl bg-white px-4 py-2 text-black"
              : "rounded-full bg-white/20 px-4 py-2 text-white shadow-md backdrop-blur-md hover:bg-white/30"
          }`}
        >
          {tab.label}*
        </button>
      ))}
    </div>
  );
}

export default Hero;
