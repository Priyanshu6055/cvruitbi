"use client";

import Image from "next/image";

export default function EventCard({
  image,
  title,
  speaker,
  date,
  time,
  fullDate,
}) {
  return (
    <div className="w-full h-[46vh] max-w-sm rounded-xl shadow-lg border border-[#00000024] overflow-hidden bg-white">
      <div className="relative w-full h-80">
        <Image src={image} alt={title} fill className="object-cover" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        {/* Speaker Name */}
        <div className="absolute bottom-3 right-3 bg-white/90 px-3 py-1 rounded-lg shadow text-sm font-semibold text-gray-800">
          {speaker}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-3">
        {/* Main Title */}
        <h2 className="text-lg font-bold text-gray-900 leading-tight">
          {title}
        </h2>
      </div>

      {/* Bottom Calendar Section */}
      <div className="flex">
        <div className="text-white rounded-[2px] bg-[#ececec8f] text-center font-bold text-lg m-[7px] ">
          <p className="text-[#ee9e26] text-2xl p-[10px]">{fullDate.day}</p>
          <div className=" py-2 px-4 w-full bg-[#ee9e26]">
            <p className="text-xs whitespace-nowrap">{fullDate.monthYear}</p>
          </div>
        </div>

        {/* Title */}
        <div className="flex items-center px-4 py-2 text-sm font-semibold text-gray-700">
          {title.toUpperCase()}
        </div>
      </div>
    </div>
  );
}
