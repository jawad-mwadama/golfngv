import React from "react";
import JoinButton from "../Utils/JoinButton";
// import sceneIMG from "/images/scene-with-friends-golf-course.jpg";

function Control() {
  return (
    <div className="p-3 sm:p-9">
      <div className="mx-auto grid h-[500px] grid-cols-1 gap-4 sm:grid-cols-2 sm:grid-rows-2">
        <div className="relative col-span-1 row-span-2 overflow-hidden rounded-3xl bg-[url('/images/scene-with-friends-golf-course.jpg')] mask-b-from-90% bg-cover bg-center"></div>
        <div className="col-span-1 row-span-2 overflow-hidden rounded-3xl bg-zinc-600 p-9">
          <OurStoryButton />
          <h3 className="pt-12 text-4xl font-semibold text-white">
            Stay in control of your finances
          </h3>
          <JoinButton className="bottom-0" />
        </div>
      </div>
    </div>
  );
}

function OurStoryButton() {
  return (
    <div>
      <button className="rounded-full bg-zinc-400 p-2 font-semibold text-white">
        Our Story
      </button>
    </div>
  );
}

export default Control;
