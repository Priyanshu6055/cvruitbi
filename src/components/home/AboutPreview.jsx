"use client";

import Image from "next/image";

export default function AboutPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* ✅ Use direct public path for image */}
        <Image
          src="/images/02.jpg"
          alt="About Us"
          className="rounded-2xl shadow-md"
          width={500}
          height={400}
        />

        <div>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">About Us</h2>
          <p className="text-gray-600 leading-relaxed">
            CVRUITBI (Technology Business Incubator) supports startups with
            mentoring, workspace, networking, and funding opportunities to
            transform innovative ideas into sustainable businesses.
          </p>
        </div>
      </div>
    </section>
  );
}
