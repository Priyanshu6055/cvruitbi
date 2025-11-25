"use client";

import { useState } from "react";
import { sendContactForm } from "../../api/contact.api";

export default function ContactForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");

    try {
      const res = await sendContactForm(data);
      console.log("API Response:", res.data);

      setSuccessMsg("Your message has been submitted successfully 🎉");

      // Reset form
      setData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.log("Error:", err);
      setSuccessMsg("❌ Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md border border-[#eaf5f7] p-8 w-full">
      <h3 className="text-3xl font-extrabold text-[#0b1220] mb-6">
        Get in <span className="text-[#00d2ef]">Touch</span>
      </h3>

      {successMsg && (
        <p className="mb-4 p-3 rounded-xl text-center font-semibold
          bg-[#e6fafd] text-[#008ea0] border border-[#c8f0f7]">
          {successMsg}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">

        <div>
          <label className="text-sm text-gray-700 font-medium">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            value={data.name}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-3 bg-[#f8fdff] border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#00d2ef]"
            required
          />
        </div>

        <div>
          <label className="text-sm text-gray-700 font-medium">Email</label>
          <input
            type="email"
            name="email"
            placeholder="example@mail.com"
            value={data.email}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-3 bg-[#f8fdff] border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#00d2ef]"
            required
          />
        </div>

        <div>
          <label className="text-sm text-gray-700 font-medium">Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="Subject of your message"
            value={data.subject}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-3 bg-[#f8fdff] border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#00d2ef]"
            required
          />
        </div>

        <div>
          <label className="text-sm text-gray-700 font-medium">Message</label>
          <textarea
            name="message"
            rows={4}
            placeholder="Write your message..."
            value={data.message}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-3 bg-[#f8fdff] border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#00d2ef]"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3.5 font-semibold rounded-xl shadow-md transition-all text-white
            ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#00d2ef] hover:bg-[#00b5d6]"}`}
        >
          {loading ? "Submitting..." : "Submit Message"}
        </button>
      </form>
    </div>
  );
}
