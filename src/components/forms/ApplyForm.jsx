"use client";

import { useState } from "react";
import { submitApplyForm } from "../../api/apply.api.js";

export default function ApplyForm() {
  const [form, setForm] = useState({
    founderName: "",
    startupName: "",
    email: "",
    contact: "",
    city: "",
    stage: "",
    category: "",
    sectors: [],
    website: "",
    description: "",
    referral: "",
    file: null,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sectorsList = [
    "Agriculture", "Blockchain", "FinTech", "Media", "Technology",
    "AR/VR/MR/XR", "Software", "Consumer", "FMCG", "Robotics",
    "Tools Education", "AI/ML", "Developer", "Other", "Hardware",
    "SAAS", "Transportation", "B2B", "Drones", "Healthcare",
  ];

  const toggleSector = (sector) => {
    setForm((prev) => ({
      ...prev,
      sectors: prev.sectors.includes(sector)
        ? prev.sectors.filter((s) => s !== sector)
        : [...prev.sectors, sector],
    }));
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: name === "file" ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const fd = new FormData();

    Object.entries(form).forEach(([key, value]) => {
      if (key !== "sectors") fd.append(key, value);
    });

    form.sectors.forEach((s) => fd.append("sectors", s));

    try {
      const res = await submitApplyForm(fd);
      setMessage("🎉 Your application has been submitted successfully!");
      console.log(res.data);

      // Reset form
      setForm({
        founderName: "",
        startupName: "",
        email: "",
        contact: "",
        city: "",
        stage: "",
        category: "",
        sectors: [],
        website: "",
        description: "",
        referral: "",
        file: null,
      });
    } catch (err) {
      console.error(err);
      setMessage("❌ Something went wrong. Please try again.");
    }

    setLoading(false);
  };
  return (
    <div className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-xl border border-[#e8f7fa] p-10">
      <h2 className="text-6xl font-extrabold text-[#0b1220] mb-10">
        Apply<span className="text-[#00d2ef]"> Form</span>
      </h2>
            {message && (
        <p
          className={`mb-6 p-4 rounded-xl font-semibold ${
            message.startsWith("🎉")
              ? "bg-[#e6fff8] text-[#00875a] border border-[#b9f3da]"
              : "bg-[#ffe6e6] text-[#c24141] border border-[#f5b5b5]"
          }`}
        >
          {message}
        </p>
      )}
      <p className="text-gray-600 mb-10 max-w-xl">
        Submit your startup details to be considered for incubation and support.
      </p>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {/* Founder Name */}
        <FormInput
          label="Name of Founder *"
          name="founderName"
          value={form.founderName}
          placeholder="Name of Founder"
          onChange={handleChange}
        />

        {/* Startup Name */}
        <FormInput
          label="Name of the Idea / Startup *"
          name="startupName"
          value={form.startupName}
          placeholder="Idea / Startup Name"
          onChange={handleChange}
        />

        {/* Email */}
        <FormInput
          label="Email Address *"
          name="email"
          type="email"
          value={form.email}
          placeholder="e.g.: user@domain.com"
          onChange={handleChange}
        />

        {/* Contact */}
        <FormInput
          label="Contact Number *"
          name="contact"
          value={form.contact}
          placeholder="e.g.: 9999999999"
          onChange={handleChange}
        />

        {/* City */}
        <FormInput
          label="City *"
          name="city"
          value={form.city}
          placeholder="e.g.: Bhopal"
          onChange={handleChange}
        />

        {/* Stage */}
        <SelectBox
          label="Stage of Startup *"
          name="stage"
          value={form.stage}
          onChange={handleChange}
          options={[
            "Ideation",
            "Prototype",
            "Early Stage",
            "Growth Stage",
            "Established",
          ]}
        />

        {/* Category */}
        <SelectBox
          label="Category *"
          name="category"
          value={form.category}
          onChange={handleChange}
          options={["SC", "ST", "OBC", "GENERAL"]}
        />

        {/* Sector Checkbox Grid */}
        <div className="md:col-span-2">
          <label className="font-semibold text-gray-800 block mb-4 text-lg">
            Select Sectors (Multiple Allowed) *
          </label>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {sectorsList.map((sector) => (
              <label
                key={sector}
                onClick={() => toggleSector(sector)}
                className={`flex items-center gap-3 cursor-pointer rounded-xl px-4 py-3 border transition-all 
                  ${
                    form.sectors.includes(sector)
                      ? "border-[#00d2ef] bg-[#e6fbff]"
                      : "border-gray-200 bg-white"
                  }
                  hover:border-[#00d2ef] hover:bg-[#f4fdff]
                `}
              >
                <input
                  type="checkbox"
                  checked={form.sectors.includes(sector)}
                  onChange={() => toggleSector(sector)}
                  className="accent-[#00d2ef] w-5 h-5"
                />
                <span className="text-gray-700">{sector}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Website */}
        <FormInput
          label="Demo / Website Link"
          name="website"
          value={form.website}
          placeholder="e.g.: http://www.yourstartup.com"
          onChange={handleChange}
          full
        />

        {/* Description */}
        <div className="md:col-span-2">
          <label className="font-semibold text-gray-800 mb-2 block">
            Description (250 Words) *
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Small description about your idea/startup"
            rows="5"
            required
            className="w-full mt-2 px-4 py-3 bg-[#f8fdff] rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#00d2ef]"
          />
        </div>

        {/* File Upload */}
        <div className="md:col-span-2">
          <label className="font-semibold text-gray-800 mb-2 block">
            Upload Presentation (PPT/PPTX/PDF) – Max 10MB *
          </label>
          <input
            type="file"
            name="file"
            accept=".ppt,.pptx,.pdf"
            required
            onChange={handleChange}
            className="file:bg-[#00d2ef] file:text-white file:px-5 file:py-2 file:rounded-lg file:border-none 
                       bg-white px-4 py-3 border border-gray-200 rounded-xl shadow-sm cursor-pointer
                       hover:bg-[#f6ffff] transition"
          />
          <p className="text-gray-500 text-sm mt-2">
            Include: Executive Summary, Solution, Market, Team, Strategy,
            Financials
          </p>
        </div>

        {/* Referral */}
        <FormInput
          label="How did you hear about us? *"
          name="referral"
          value={form.referral}
          placeholder="e.g.: Facebook, Twitter"
          onChange={handleChange}
          full
        />

        {/* Submit */}
        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 rounded-xl text-lg font-semibold text-white shadow-md transition-all ${
              loading ? "bg-gray-400" : "bg-[#00d2ef] hover:bg-[#00b5d6]"
            }`}
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </div>
      </form>
    </div>
  );
}

/* -------------------- Reusable Components -------------------- */

function FormInput({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  full = false,
}) {
  return (
    <div className={full ? "md:col-span-2 flex flex-col" : "flex flex-col"}>
      <label className="font-semibold text-gray-800">{label}</label>
      <input
        type={type}
        name={name}
        required
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-2 px-4 py-3 bg-[#f8fdff] border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#00d2ef]"
      />
    </div>
  );
}

function SelectBox({ label, name, value, onChange, options }) {
  return (
    <div className="flex flex-col">
      <label className="font-semibold text-gray-800">{label}</label>
      <select
        name={name}
        required
        value={value}
        onChange={onChange}
        className="mt-2 px-4 py-3 bg-[#f8fdff] border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#00d2ef]"
      >
        <option value="">--Select--</option>
        {options.map((op) => (
          <option key={op}>{op}</option>
        ))}
      </select>
    </div>
  );
}
