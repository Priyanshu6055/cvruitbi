"use client";

import { useRef, useEffect, useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "./ServiceCard";
import Button from "@/components/ui/Button";

// react-icons
import { MdWorkspaces, MdGavel } from "react-icons/md";
import { FaChalkboardTeacher, FaNetworkWired, FaUserFriends } from "react-icons/fa";
import { RiUserStarFill } from "react-icons/ri";
import { GiLaurelCrown } from "react-icons/gi";

const services = [
  { icon: <MdWorkspaces size={55} />, title: "Dedicated Office Spaces", desc: "Professional, modern workspaces with all essential amenities designed for startup productivity and collaboration." },
  { icon: <FaChalkboardTeacher size={55} />, title: "Trainings & Workshops", desc: "Skill-building sessions led by industry experts on finance, marketing, technology, and more." },
  { icon: <RiUserStarFill size={55} />, title: "Mentoring", desc: "Guidance from experienced mentors supporting every stage of the startup journey." },
  { icon: <FaNetworkWired size={55} />, title: "Access to Network", desc: "Connect with investors, industry leaders, innovators, and founders for growth & collaborations." },
  { icon: <FaUserFriends size={55} />, title: "HR / Intern Support", desc: "Recruit talent through our university network and partnerships." },
  { icon: <GiLaurelCrown size={55} />, title: "Events & Competitions", desc: "Pitch events and innovation challenges giving startups visibility & investor access." },
  { icon: <MdGavel size={55} />, title: "Legal & Accounting Support", desc: "Legal & compliance help through experts for smooth business operations." },
];

export default function ServicesSection() {
  const [showAll, setShowAll] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  let speed = 0;
  let current = 0;
  let autoSpeed = 0.4;
  let inside = false;
  let raf: number;

  // ✅ Smooth auto scrolling + Infinite loop
  const animate = () => {
    if (!scrollRef.current || showAll) return;

    const el = scrollRef.current;
    const half = el.scrollWidth / 2;

    current += autoSpeed + speed;
    el.scrollLeft = current;
    speed *= 0.93;

    if (current >= half) current -= half;
    if (current <= 0) current += half;

    raf = requestAnimationFrame(animate);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!inside || showAll) return;
    speed += e.movementX * 0.12;
  };

  // ✅ Disable page scroll & scroll only slider
  const handleWheel = (e: WheelEvent) => {
    if (!inside || showAll) return;
    e.preventDefault(); // 🔥 block page scroll again
    speed += e.deltaY * 0.12;
  };

  const enter = () => {
    if (showAll) return;
    inside = true;
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("wheel", handleWheel, { passive: false }); // 🔥 no passive
  };

  const leave = () => {
    inside = false;
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("wheel", handleWheel);
  };

  useEffect(() => {
    if (scrollRef.current && !showAll) {
      const el = scrollRef.current;
      const half = el.scrollWidth / 2;
      el.scrollLeft = half;
      current = half;
    }

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [showAll]);

  return (
    <section className="py-20 bg-white">
      <div className="container-global px-6">
        <SectionTitle
          title="Our Services"
          subtitle="We provide complete incubation support to help startups build, launch, and scale"
        />

        {/* ─── Slider View ─── */}
        {!showAll && (
          <div className="relative mt-10">

            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-20" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-20" />

            <div
              ref={scrollRef}
              onMouseEnter={enter}
              onMouseLeave={leave}
              className="flex gap-6 overflow-x-hidden py-4 cursor-pointer select-none [scrollbar-width:none] [-ms-overflow-style:none]"
            >
              {[...services, ...services].map((s, i) => (
                <div key={i} className="min-w-[260px] sm:min-w-[240px] md:min-w-[320px]">
                  <ServiceCard icon={s.icon} title={s.title} desc={s.desc} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* View All */}
        {!showAll && (
          <div className="flex justify-center mt-10">
            <div onClick={() => setShowAll(true)}>
              <Button>View All</Button>
            </div>
          </div>
        )}

        {/* ─── Grid View ─── */}
        {showAll && (
          <>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((s, i) => (
                <ServiceCard key={i} icon={s.icon} title={s.title} desc={s.desc} />
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <div onClick={() => setShowAll(false)}>
                <Button>Show Less</Button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
