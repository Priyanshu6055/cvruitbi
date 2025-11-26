"use client";

import BannerWrapper from "@/components/about/AboutBannerWrapper";
import animationData from "@/../public/JSON/rocket-launch.json";

export default function ProgramPage() {
  return (
    <>
      <BannerWrapper
        animation={animationData}
        heading="Our Program"
        subtitle="Meet the passionate innovators driving our mission forward."
      />

      <section className="relative w-full bg-white py-24 overflow-hidden">
        <div className="container-global items-start px-6 md:px-12 lg:px-20">

          {/* ===== Right Side: Text Content ===== */}
          <div className="space-y-10">
            {/* Header */}
            <div className="space-y-3">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b1220] leading-tight">
                Aarambh<span className="text-[#00d2ef]"></span>
              </h2>
              <div className="flex items-center gap-3">
                <div className="h-[3px] w-[80px] bg-[#00d2ef] rounded-full" />
                <div className="h-3 w-3 bg-[#00d2ef] rounded-full" />
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 text-lg leading-relaxed">
              <strong className="text-[#00b5d6]">Aarambh</strong> is a 10-week
              Incubation Program for idea-stage startups focusing on converting
              ideas into Minimum Viable Products (MVPs). It provides structured
              guidance for validation, MVP development, and pitching — preparing
              startups for market readiness and growth.
            </p>

            {/* Weekly Timeline */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-2xl font-semibold text-[#0093b1] mb-4">
                Program Structure
              </h3>
              <ul className="grid sm:grid-cols-2 gap-2 text-gray-700">
                {[
                  "Week 1: Orientation and Ideation",
                  "Week 2: Market Research and Validation",
                  "Week 3: MVP Design and Prototyping",
                  "Week 4: MVP Development",
                  "Week 5: Feedback and Iteration",
                  "Week 6: Refinement and Documentation",
                  "Week 7: Pitch Preparation",
                  "Week 8: Demo Day and Feedback",
                  "Week 9–10: Post-Demo Day Actions",
                ].map((week, i) => (
                  <li key={i} className="flex items-start gap-2 text-[1rem]">
                    <span className="mt-[6px] h-2 w-2 rounded-full bg-[#00d2ef] flex-shrink-0"></span>
                    {week}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits Section */}
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-2xl font-semibold text-[#0093b1] mb-4">
                Benefits for Startups
              </h3>

              <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 text-gray-700">
                <div>
                  <p className="font-semibold text-[#0b1220]">
                    Resources and Tools
                  </p>
                  <p className="text-sm text-gray-600">
                    Access to essential facilities and MVP tools.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-[#0b1220]">Mentorship</p>
                  <p className="text-sm text-gray-600">
                    Learn from experienced mentors and industry experts.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-[#0b1220]">
                    Expert Workshops
                  </p>
                  <p className="text-sm text-gray-600">
                    Regular knowledge sessions with experts.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-[#0b1220]">
                    Networking Opportunities
                  </p>
                  <p className="text-sm text-gray-600">
                    Connect with startups, investors, and leaders.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-[#0b1220]">
                    Workspace & Infrastructure
                  </p>
                  <p className="text-sm text-gray-600">
                    Access to modern co-working space.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-[#0b1220]">
                    Legal & Administrative Support
                  </p>
                  <p className="text-sm text-gray-600">
                    Get help with legal, IPR, and compliance.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-[#0b1220]">
                    Visibility & Recognition
                  </p>
                  <p className="text-sm text-gray-600">
                    Showcase at events, conferences, and media platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
