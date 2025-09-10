import React from "react";
import JoinButton from "../Utils/JoinButton";
// import sceneIMG from "/images/scene-with-friends-golf-course.jpg";

function Control() {
  return (
    <div className="p-3 sm:p-9">
      <div className="mx-auto grid h-[500px] grid-cols-1 gap-4 sm:grid-cols-2 sm:grid-rows-2">
        <div className="relative order-1 col-span-1 row-span-2 overflow-hidden rounded-3xl bg-zinc-800 p-5 sm:order-2 sm:p-9">
          <OurStoryButton />
          <h3 className="pt-12 text-3xl font-semibold text-white sm:text-5xl">
            Stay in control of your finances
          </h3>

          <JoinButton className="absolute bottom-7 text-black sm:bottom-10" />
        </div>
        <div className="relative order-2 col-span-1 row-span-2 overflow-hidden rounded-3xl bg-[url('/images/scene-with-friends-golf-course.jpg')] mask-b-from-90% bg-cover bg-center sm:order-1"></div>
      </div>
    </div>
  );
}

function OurStoryButton() {
  return (
    <div>
      <button className="rounded-full bg-zinc-400 p-1 font-semibold text-white sm:p-2">
        Our Story
      </button>
    </div>
  );
}

export default Control;
