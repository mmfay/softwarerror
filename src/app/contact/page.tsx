"use client";

import { useState } from "react";
import FloatingNav from "@/components/FloatingNav";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Thanks! We'll be in touch soon.");
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (err) {
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      <FloatingNav />
      <main className="pt-40 flex flex-col items-center justify-center px-4 py-16 text-center">
        <h1 className="text-4xl font-extrabold mb-4">
          Contact <span className="text-blue-500">Softwarerror</span>
        </h1>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg space-y-6 text-left"
        >
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
              required
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              onChange={handleChange}
              value={formData.phone}
              placeholder="+1 555 123 4567"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              required
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Request Description</label>
            <textarea
              name="message"
              onChange={handleChange}
              value={formData.message}
              required
              placeholder="Briefly describe your request..."
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              rows={4}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </main>
    </>
  );
}
