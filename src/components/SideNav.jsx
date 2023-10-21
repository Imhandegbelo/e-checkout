import React from "react";
import close from "../assets/images/icon-close.svg";

export default function SideNav({links, onclose}) {
  return (
    <>
      <div  className="h-screen flex flex-col gap-6 font-bold bg-white w-2/3 fixed left-0 p-6 sm:p-10 z-10">
        <button onClick={onclose} className="mb-10">
          <img src={close} alt="close" className="" />
        </button>
        {links.map((link) => (
          <a
            href="#"
            key={link}
            className="border-b-4 border-transparent hover:border-b-orange-500"
          >
            {link}
          </a>
        ))}
      </div>
      <div onClick={onclose} className="h-screen w-screen bg-black/70 absolute left-0"></div>
    </>
  );
}
