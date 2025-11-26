"use client";

import BannerWrapper from "@/components/about/AboutBannerWrapper";
import animationData from "@/../public/JSON/rocket-launch.json";
import ContactForm from "@/components/forms/ContactForm";

export default function Contactpage() {
    return (
        <>
            <BannerWrapper
                animation={animationData}
                heading="Contact Us"
                subtitle="We’d love to hear from you. Reach out for support, queries, or collaborations."
            />

            <section className="relative bg-gradient-to-b from-[#f8fdff] to-white py-24 text-[#0b1220]">
                <div className="container-global px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-14">

                    {/* FORM */}
                    <div className="flex justify-center">
                        <ContactForm />
                    </div>

                    {/* MAP + CONTACT INFO */}
                    <div className="space-y-8">
                        {/* MAP */}
                        <div className="rounded-2xl overflow-hidden shadow-md border border-[#eaf5f7]">
                            <iframe
                                title="CVRU Map"
                                width="100%"
                                height="350"
                                style={{
                                    border: 0,
                                    borderRadius: "16px",
                                    boxShadow: "0 4px 20px rgba(0, 210, 239, 0.15)",
                                }}
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236230.55345647174!2d81.81724548339851!3d22.311966810977694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a281b3c55555557%3A0xc73a7f120658f13d!2sDr.%20C.V.%20Raman%20University!5e0!3m2!1sen!2sin!4v1764141102962!5m2!1sen!2sin"
                            />
                        </div>

                        {/* CONTACT DETAILS */}
                        <div className="bg-white p-8 rounded-2xl shadow-md border border-[#eaf5f7]">
                            <h3 className="text-3xl font-extrabold mb-5">
                                Contact <span className="text-[#00d2ef]">Information</span>
                            </h3>

                            <div className="space-y-4 text-gray-700">
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

                {/* Background Glow */}
                <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-[#00d2ef]/10 blur-3xl rounded-full pointer-events-none" />
            </section>
        </>
    );
}
