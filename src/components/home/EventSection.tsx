"use client";

import { useRef, useEffect, useState } from "react";
import EventCard from "@/components/ui/EventCard";
import Button from "@/components/ui/Button";

// Event Data
const events = [
  {
    image: "/event/36-think-tank.png",
    title: "36 Think Tank: Business Plan Competition",
    speaker: "",
    date: "",
    time: "",
    fullDate: { day: "25", monthYear: "JAN 2025" }
  },
  {
    image: "/event/3d-printing.png",
    title: "3D Printers & Laser Cutter training",
    speaker: "",
    date: "",
    time: "",
    fullDate: { day: "05", monthYear: "FEB 2025" }
  },
  {
    image: "/event/AICTE-&-MIC-FDP.png",
    title: "AICTE & MIC FDP on Innovation and Entrepreneurship",
    speaker: "",
    date: "",
    time: "",
    fullDate: { day: "18", monthYear: "MAR 2025" }
  },
  {
    image: "/event/understanding-intellectual.jpeg",
    title: "Workshop: Understanding Intellectual Property Rights",
    speaker: "",
    date: "",
    time: "",
    fullDate: { day: "26", monthYear: "APR 2025" }
  },
  {
    image: "/event/ideacon.jpeg",
    title: "Ideacon 2025",
    speaker: "",
    date: "",
    time: "",
    fullDate: { day: "21", monthYear: "MAY 2025" }
  },
];

export default function EventSection() {
  const [showAll, setShowAll] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  let speed = 0;
  let current = 0;
  let autoSpeed = 0.4;
  let inside = false;
  let raf: number;

  // Infinite Auto-scroll
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

  // Mouse move to control speed
  const handleMouseMove = (e: MouseEvent) => {
    if (!inside || showAll) return;
    speed += e.movementX * 0.12;
  };

  // Disable scroll when hovering card slider
  const handleWheel = (e: WheelEvent) => {
    if (!inside || showAll) return;
    e.preventDefault();
    speed += e.deltaY * 0.12;
  };

  const enter = () => {
    if (showAll) return;
    inside = true;
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("wheel", handleWheel, { passive: false });
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

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900">Events</h2>
          <p className="text-gray-500 mt-2">
            Join our startup-focused events, workshops, and learning sessions.
          </p>
        </div>

        {/* ─── Auto Scroll Slider ─── */}
        {!showAll && (
          <div className="relative mt-10">

            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-20" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-20" />

            <div
              ref={scrollRef}
              onMouseEnter={enter}
              onMouseLeave={leave}
              className="flex overflow-x-hidden py-4 cursor-pointer select-none [scrollbar-width:none] [-ms-overflow-style:none]"
            >
              {[...events, ...events].map((event, i) => (
                <div key={i} className="min-w-[300px] sm:min-w-[300px] md:min-w-[350px]">
                  <EventCard
                    image={event.image}
                    title={event.title}
                    speaker={event.speaker}
                    date={event.date}
                    time={event.time}
                    fullDate={event.fullDate}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* View All Button */}
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
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {events.map((event, i) => (
                <EventCard
                  key={i}
                  image={event.image}
                  title={event.title}
                  speaker={event.speaker}
                  date={event.date}
                  time={event.time}
                  fullDate={event.fullDate}
                />
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
