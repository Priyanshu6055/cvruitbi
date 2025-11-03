"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "./ServiceCard";

const services = [
  { icon: "/icons/mentorship.svg", title: "Mentorship", desc: "Guidance from industry leaders." },
  { icon: "/icons/funding.svg", title: "Funding", desc: "Access to investors & funding support." },
  { icon: "/icons/incubation.svg", title: "Incubation", desc: "Workspace & resources for startups." },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle title="Our Services" subtitle="Helping startups grow and succeed" />
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
