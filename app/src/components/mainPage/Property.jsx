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
      className="flex flex-col w-full py-8 items-center gap-y-8 rounded-xl bg-none hover:bg-emerald-200 duration-300"
    >
      <Image
        src={handleHover ? props.iconDefault : props.iconHover}
        width={32}
        height={32}
      />
      <div className="font-bold text-lg text-black">{props.title}</div>
      <div className="font-light text-base text-gray-600">
        {props.description}
      </div>
    </div>
  );
}
