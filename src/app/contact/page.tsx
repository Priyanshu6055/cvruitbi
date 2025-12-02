"use client";

import BannerWrapper from "@/components/about/AboutBannerWrapper";
import ContactForm from "@/components/forms/ContactForm";

export default function Contactpage() {
  return (
    <>
      <BannerWrapper
        heading="Contact Us"
        subtitle="We’d love to hear from you. Reach out for support, queries, or collaborations."
      />

      <section className="relative bg-gradient-to-b from-[#f8fdff] to-white py-10 text-[#0b1220]">
        <div className="container-global px-3 md:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* FORM (80% smaller) */}
          <div className="flex justify-center scale-[0.8] origin-top">
            <ContactForm />
          </div>

          {/* MAP + CONTACT INFO */}
          <div className="space-y-6">

            {/* MAP (smaller height + border) */}
            <div className="rounded-xl overflow-hidden shadow-sm border border-[#eaf5f7]">
              <iframe
                title="CVRU Map"
                width="100%"
                height="200"  /* reduced from 350 → 200 */
                style={{
                  border: 0,
                  borderRadius: "12px",
                  boxShadow: "0 2px 10px rgba(0, 210, 239, 0.12)",
                }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236230.55345647174!2d81.81724548339851!3d22.311966810977694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a281b3c55555557%3A0xc73a7f120658f13d!2sDr.%20C.V.%20Raman%20University!5e0!3m2!1sen!2sin!4v1764141102962!5m2!1sen!2sin"
              />
            </div>

            {/* CONTACT DETAILS (80% small) */}
            <div className="bg-white p-5 rounded-xl shadow-sm border border-[#eaf5f7]">
              <h3 className="text-xl font-extrabold mb-3">
                Contact <span className="text-[#00d2ef]">Information</span>
              </h3>

              <div className="space-y-2 text-gray-700 text-sm">
                <p>
                  <span className="font-semibold text-[#0b1220]">Call:</span>{" "}
                  07753253801
                </p>

                <p>
                  <span className="font-semibold text-[#0b1220]">Email:</span>{" "}
                  info@cvru.ac.in
                </p>

                <p>
                  <span className="font-semibold text-[#0b1220]">Address:</span>
                  <br />
                  University Campus, Dr. C.V. Raman University
                  <br />
                  Kargi Road, Kota, Bilaspur
                  <br />
                  Bilaspur – 495113
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Background Glow (kept but lighter & smaller) */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[70%] h-[200px] bg-[#00d2ef]/10 blur-2xl rounded-full pointer-events-none" />
      </section>
    </>
  );
}
