import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { LuInstagram, LuMailPlus } from "react-icons/lu";

function Footer() {
  return (
    <div className="rounded-tl-[18px] rounded-tr-[18px] bg-zinc-800">
      <div className="flex items-center justify-between p-3 sm:p-9">
        <h3 className="max-w-[400px] text-3xl font-medium text-white sm:text-5xl/14">
          Ready to Tee Off? Discuss with us
        </h3>
        <LuMailPlus size={60} className="rounded-full bg-lime-300 p-4" />
      </div>
      <FooterIcons />
    </div>
  );
}

function FooterIcons() {
  return (
    <nav className="border-t-2 border-t-zinc-400 p-3 pt-3 sm:p-9">
      <div className="flex items-center justify-between p-1">
        <img
          src="/images/golfngvlogo.png"
          className="size-8 sm:size-12"
          alt="Logo"
        />
        <ul className="hidden gap-6 font-medium text-white md:flex">
          <li>About Us</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Previews</li>
        </ul>
        <div className="flex gap-6 font-medium text-lime-300">
          <a href="/instagram">
            <LuInstagram className="duration-300 hover:scale-110" />
          </a>
          <a href="/facebook">
            <FaFacebook className="duration-300 hover:scale-110" />
          </a>
          <a href="/twitter">
            <FaTwitter className="duration-300 hover:scale-110" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Footer;
