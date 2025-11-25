"use client";

import Image from "next/image";
import { useState } from "react";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

export interface Member {
  name: string;
  subname: string;
  photo: string;
  color: string;
  role?: string;
  socials?: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

interface TeamCardsProps {
  members: Member[];
}

export default function TeamCards({ members }: TeamCardsProps) {
  return (
    <>
      {members.map((m, index) => (
        <HoverCard key={index} member={m} />
      ))}
    </>
  );
}

function HoverCard({ member }: { member: Member }) {
  const [hover, setHover] = useState(false);
  const isCEO = member.role === "ceo";

  /** CARD SIZES (SMALLER VERSION) **/
  const cardWidth = isCEO ? "w-[260px]" : "w-[220px]";
  const cardHeight = hover
    ? isCEO
      ? "h-[300px]"
      : "h-[280px]"
    : isCEO
    ? "h-[260px]"
    : "h-[230px]";

  /** IMAGE SIZES (SMALLER) **/
  const imgSize = isCEO ? "w-[140px] h-[140px]" : "w-[120px] h-[120px]";
  const hoverTop = isCEO ? "-top-16" : "-top-14";

  return (
    <div
      className={`relative flex justify-center items-start ${cardWidth} bg-white rounded-2xl shadow-xl transition-all duration-500 ${cardHeight}`}
      style={{ ["--clr" as any]: member.color }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* IMAGE — small version */}
      <div
        className={`absolute ${imgSize} transition-all duration-500 
          ${hover ? `${hoverTop} scale-90` : "top-4"}`}
      >
        <Image
          src={member.photo}
          alt={member.name}
          width={300}
          height={300}
          className="w-full h-full rounded-xl object-cover drop-shadow-lg"
        />
      </div>

      {/* CONTENT AREA */}
      <div
        className={`absolute w-full px-4 text-center transition-all duration-500
          ${hover ? "top-[110px] h-[230px]" : "top-[170px] h-[20px]"}`}
      >
        <h2
          className="text-lg font-bold"
          style={{ color: member.color }}
        >
          {member.name}
        </h2>

        {/* subtitle */}
        {hover && (
          <p className="text-gray-700 mt-1 text-xs">{member.subname}</p>
        )}

        {/* social icons */}
        {hover && (
          <div className="flex justify-center gap-3 mt-4">
            {member.socials?.instagram && (
              <a
                href={member.socials.instagram}
                target="_blank"
                className="p-2 rounded-full text-white hover:scale-110 transition"
                style={{ background: member.color }}
              >
                <AiFillInstagram size={18} />
              </a>
            )}

            {member.socials?.twitter && (
              <a
                href={member.socials.twitter}
                target="_blank"
                className="p-2 rounded-full text-white hover:scale-110 transition"
                style={{ background: member.color }}
              >
                <AiOutlineTwitter size={18} />
              </a>
            )}

            {member.socials?.linkedin && (
              <a
                href={member.socials.linkedin}
                target="_blank"
                className="p-2 rounded-full text-white hover:scale-110 transition"
                style={{ background: member.color }}
              >
                <AiFillLinkedin size={18} />
              </a>
            )}

            {member.socials?.github && (
              <a
                href={member.socials.github}
                target="_blank"
                className="p-2 rounded-full text-white hover:scale-110 transition"
                style={{ background: member.color }}
              >
                <AiFillGithub size={18} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
