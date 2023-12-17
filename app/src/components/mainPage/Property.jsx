/* eslint-disable jsx-a11y/alt-text */

"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function Property(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      className="flex flex-col w-full py-8 px-4 items-center gap-y-8 rounded-xl bg-none border-2 border-emerald-700/0 hover:border-2 hover:border-emerald-700 duration-300 select-none"
    >
      <Image
        src={!isHovered ? props.iconDefault : props.iconHover}
        width={48}
        height={48}
        className="duration-300"
      />
      <div className="flex flex-col items-center gap-y-4">
        <div className="font-bold text-xl text-emerald-700">{props.title}</div>
        <div className="font-light text-base text-gray-600 text-center leading-7">
          {props.description}
        </div>
      </div>
    </div>
  );
}
