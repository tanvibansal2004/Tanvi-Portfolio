import React from "react";
import Link from "next/link";
import Image from "next/image";

const Projectcard = ({ video, title, smallDesc, desc, link }) => {
  return (
    <div className="w-full group">
      <div className="relative overflow-hidden">
        <video
            src={video}
            className="transition-opacity duration-300 group-hover:opacity-30"
            autoPlay
            loop
            muted
            playsInline
            >
        </video>

        <div className="absolute h-full w-full bg-zinc-800/75 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <p className="p-3 font-semibold text-sm md:text-sm text-white">
            {desc}
          </p>
        </div>
      </div>
      <div className="group">
        <h2 className="text-xl mt-5 font-semibold">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            {title}
          </a>
        </h2>
        <h5 className="font-medium">{smallDesc}</h5>
        <div className="mx-auto w-1/4 h-0.5 bg-white/80 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></div>
      </div>
    </div>
  );
};
export default Projectcard;
